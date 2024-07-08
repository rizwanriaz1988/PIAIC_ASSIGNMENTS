# consumer.py
import requests
from aiokafka import AIOKafkaConsumer
import json
from sqlmodel import Session, SQLModel, create_engine, select

from app.db.db_engine import get_session
from app.db.db_model import NotifyUser,User
from app.api.routes import add_new_product
# from app.global_var import latest_message_from_order
import app.global_var as global_var



async def consume_messages_from_order(topic, bootstrap_servers):

    global latest_message_from_order
    # Create a consumer instance.
    consumer = AIOKafkaConsumer(
        topic,
        bootstrap_servers=bootstrap_servers,
        group_id="notification-group",
        auto_offset_reset='earliest'
    )

    field_mapping = {"id": "itemOrder_id"}

    # Start the consumer.
    await consumer.start()
    try:
        # Continuously listen for messages.
        async for message in consumer:
            print("RAW")
            print(f"Received message on topic {message.topic}")

            user_data = json.loads(message.value.decode())

            # code to get data from user service ==============================================
            user_id = user_data.get("user_id")
            print("USER_ID", user_id)
            with next(get_session()) as session:
                query = select(User).where(User.id == user_id)
                user = session.exec(query).one()
            print("USER", user)
            #  =============================end of user microservice call=====================

            # complete_msg = f"Dear {user_data.get("user_id")}, your order with order id # {user_data.get("id")} has been successfully placed. You will receive another notification once your order is processed. Current status: {user_data.get('status')}"
            complete_msg = f"Dear {user.username}, your order with order id # {user_data.get("id")} has been successfully placed. You will receive another notification once your order is processed. Current status: {user_data.get('status')}"
            global_var.latest_message_from_order = complete_msg
            print("LATEST from Order Service", global_var.latest_message_from_order)
            print(f"user Data {user_data}")

            with next(get_session()) as session:
                print("SAVING DATA TO DATABASE")
                # to convert dict to json
                db_data = user_data
                db_data["itemOrder_id"] = db_data.pop("id") # Rename 'id' to 'itemOrder_id'
                print("DB_DATA 1", db_data)
                db_data["msg_sent"] = global_var.latest_message_from_order
                print("DB_DATA 2", db_data)
                del db_data["quantity"]

                print("\n===Mapped Data===\n", db_data)
                # Create a NotifyUser instance
                notify_user = NotifyUser(**db_data)

                db_insert_user = add_new_product(product_data=notify_user, session=session)
                print("DB_INSERT_user", db_insert_user)

    finally:
        # Ensure to close the consumer when done.
        await consumer.stop()





async def consume_messages_from_payment(topic, bootstrap_servers):
  
    global latest_message_from_order
    # Create a consumer instance.
    consumer = AIOKafkaConsumer(
        topic,
        bootstrap_servers=bootstrap_servers,
        group_id="notification-group",
        auto_offset_reset='earliest'
    )


    # field_mapping = {"id": "itemOrder_id", "user_id": "user_id", "product_id": "product_id", "amount": "amount", "status": "status"}
    # field_mapping = {"id": "itemOrder_id"}

    # Start the consumer.
    await consumer.start()
    try:
        # Continuously listen for messages.
        async for message in consumer:
            print("RAW")
            print(f"Received message on topic {message.topic}")

            user_data = json.loads(message.value.decode())

            # code to get data from user service ==============================================

            # ================================= via http request ==============================
            user_id = user_data.get("user_id")
            print("USER_ID", user_id)
            with next(get_session()) as session:
                query = select(User).where(User.id == user_id)
                user = session.exec(query).one()
            print("USER", user)

            #  =============================end of user microservice call=====================


            # complete_msg = f"Dear {user_data.get("user_id")}, your order with order id # {user_data.get("itemOrder_id")} has been successfully placed. You will receive another notification once your order is processed. Current status: {user_data.get('status')} Thank you for shopping with us."
            complete_msg = f"Dear {user.username}, your order with order id # {user_data.get("itemOrder_id")} has been successfully placed. You will receive another notification once your order is processed. Current status: {user_data.get('status')} Thank you for shopping with us."
            global_var.latest_message_from_order = complete_msg
            print("LATEST from Order Service", global_var.latest_message_from_order)
            # print("TYPE", (type(user_data)))
            print(f"user Data {user_data}")

            with next(get_session()) as session:
                print("SAVING DATA TO DATABASE")
                # to convert dict to json
                db_data = user_data
                # db_data["itemOrder_id"] = db_data.pop("id") # Rename 'id' to 'itemOrder_id'
                print("DB_DATA 1", db_data)
                db_data["msg_sent"] = global_var.latest_message_from_order
                print("DB_DATA 2", db_data)
                del db_data["id"]

                # for key, value in db_data.items():
                #     if key in field_mapping:
                #         db_data[field_mapping[key]] = value

                print("\n===Mapped Data===\n", db_data)
                # retrieve_data = PaymentOrder(**mapped_data)
                # Create a NotifyUser instance
                notify_user = NotifyUser(**db_data)
                # print("\n===Retrieve Data===\n", retrieve_data)

                db_insert_user = add_new_product(product_data=notify_user, session=session)
                print("DB_INSERT_user", db_insert_user)

    finally:
        # Ensure to close the consumer when done.
        await consumer.stop()


async def consume_messages_from_user(topic, bootstrap_servers):
  
    global latest_message_from_order
    # Create a consumer instance.
    consumer = AIOKafkaConsumer(
        topic,
        bootstrap_servers=bootstrap_servers,
        group_id="notification-group",
        auto_offset_reset='earliest'
    )
    # Start the consumer.
    await consumer.start()
    try:
        # Continuously listen for messages.
        async for message in consumer:
            user_data = json.loads(message.value.decode())
            with next(get_session()) as session:
                print("SAVING DATA TO DATABASE")
                notify_user = User(**user_data)
                db_insert_user = add_new_product(product_data=notify_user, session=session)
                print("DB_INSERT_user", db_insert_user)
    finally:
        # Ensure to close the consumer when done.
        await consumer.stop()


