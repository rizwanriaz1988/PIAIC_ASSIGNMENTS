# consumer.py
from aiokafka import AIOKafkaConsumer
# from fastapi import HTTPException
# from sqlmodel import Session, select
import json

from app.db.db_engine import get_session
from app.db.models.product_model import ProductInventory
# from app.api.product_crud import add_new_inventory_product
from app.db.settings import KAFKA_CONSUMER_GROUP_ID_FOR_INVENTORY
async def consume_messages(topic, bootstrap_servers):
    # Create a consumer instance.
    consumer = AIOKafkaConsumer(
        topic,
        bootstrap_servers=bootstrap_servers,
        group_id= KAFKA_CONSUMER_GROUP_ID_FOR_INVENTORY,
        auto_offset_reset='earliest'
    )

    field_mapping = {"id": "product_id"}

    # Start the consumer.
    await consumer.start()
    try:
        # Continuously listen for messages.
        async for message in consumer:
            print("RAW")
            print(f"Received message on topic {message.topic}")

            product_data = json.loads(message.value.decode())
            print("TYPE", (type(product_data)))
            print(f"Product Data {product_data}")

            with next(get_session()) as session:
                print("SAVING DATA TO DATABASE")
                mapped_data = {field_mapping[key]: value for key, value in product_data.items() if key in field_mapping}
                product_to_update = ProductInventory(**mapped_data)
                # product_to_update = ProductInventory(**{key: value for key, value in product_data.items() if key in ("id")})
                print("\n product_to_update \n", product_to_update)
                # query = select (ProductInventory).where(ProductInventory.id == product_data['id'])
                # product_to_update = session.exec(query).one_or_none()
                # print("\n\n product_to_update \n\n", product_to_update )
                # if not product_to_update:
                #     raise HTTPException(status_code=404, detail="Product not found")

                # hero_data = product_data
                # updated_product = product_to_update.sqlmodel_update(hero_data)
                # print("\n\n updated_product\n\n",updated_product)
                # print("\n\n product type\n\n",type(updated_product))

                session.add(product_to_update)
                print("SAVING DATA TO DATABASE 2")
                session.commit()
                print("SAVING DATA TO DATABASE 3")
                


            # Product Data {'id': 70, 'name': '70', 'description': 'string', 'price': 0, 'expiry': 'string', 'brand': 'string', 'weight': 0, 'category': 'string', 'sku': 'string'}

            # with next(get_session()) as session:
            #     print("SAVING DATA TO DATABASE")
            #     # to convert dict to json
            #     db_insert_product =add_new_inventory_product(product_data=ProductInventory(**product_data), session=session)
            #     print("DB_INSERT_PRODUCT", db_insert_product)

            # Here you can add code to process each message.
            # Example: parse the message, store it in a database, etc.
    finally:
        # Ensure to close the consumer when done.
        await consumer.stop()
