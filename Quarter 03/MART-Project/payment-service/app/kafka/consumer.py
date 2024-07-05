# consumer.py
from aiokafka import AIOKafkaConsumer
import json

from app.db.db_engine import get_session
from app.db.db_model import PaymentOrder
from app.api.routes import add_new_product

async def consume_messages(topic, bootstrap_servers):
    # Create a consumer instance.
    consumer = AIOKafkaConsumer(
        topic,
        bootstrap_servers=bootstrap_servers,
        group_id="payment-group",
        auto_offset_reset='earliest'
    )

    field_mapping = {"id": "itemOrder_id", "user_id": "user_id", "product_id": "product_id", "amount": "amount", "status": "status"}

    # Start the consumer.
    await consumer.start()
    try:
        # Continuously listen for messages.
        async for message in consumer:
            print("RAW")
            print(f"Received message on topic {message.topic}")

            user_data = json.loads(message.value.decode())
            print("TYPE", (type(user_data)))
            print(f"user Data {user_data}")

            with next(get_session()) as session:
                print("SAVING DATA TO DATABASE")
                # to convert dict to json
                mapped_data = {}
                for key, value in user_data.items():
                    if key in field_mapping:
                        mapped_data[field_mapping[key]] = value

                print("\n===Mapped Data===\n", mapped_data)
                retrieve_data = PaymentOrder(**mapped_data)

                print("\n===Retrieve Data===\n", retrieve_data)

                db_insert_user = add_new_product(product_data=retrieve_data, session=session)
                print("DB_INSERT_user", db_insert_user)

            # Here you can add code to process each message.
            # Example: parse the message, store it in a database, etc.
    finally:
        # Ensure to close the consumer when done.
        await consumer.stop()
