# product_crud.py
from http.client import HTTPException
from typing import Annotated
from sqlmodel import Session, SQLModel, create_engine, select
from fastapi import Depends , APIRouter
from aiokafka import AIOKafkaProducer 
import json


from app.db.db_engine import get_session
# from app.db.models.product_model import Todo
from app.kafka.producer import get_kafka_producer
from app.db.models.product_model import Product, ProductRating, ProductUpdate
# from app.db.kafka_engine import get_kafka_producer


async def add_product_rating_func(todo_id, product_rating, session,producer):
        product_rating.product_id = todo_id

        product_rating_dict = {field: getattr(product_rating, field) for field in product_rating.dict()}
        product_rating_dict_json = json.dumps(product_rating_dict).encode("utf-8")
        print("\n product_ratingJSON: \n", product_rating_dict_json)
        # Produce message
        await producer.start()
        await producer.send_and_wait("rating",product_rating_dict_json)
        # session.add(product_rating)
        # session.commit()
        # session.refresh(product_rating)
        return product_rating