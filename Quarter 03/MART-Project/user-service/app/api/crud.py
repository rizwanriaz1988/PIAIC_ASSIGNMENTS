# product_crud.py
from http.client import HTTPException
from typing import Annotated
from sqlmodel import Session, SQLModel, create_engine, select
from fastapi import Depends , APIRouter
from aiokafka import AIOKafkaProducer 
import json


from app.db.db_engine import get_session
from app.db.db_model import User


async def add_new_user( user, session, producer ):

        # To properly serialize an instance of a class (like user of class User) to JSON, you need to convert it to a dictionary first. Directly passing an instance to json.dumps will not work because json.dumps does not know how to serialize custom class instances.
        # print("\n coming data\n", user)	
        # new_user = User( **user.dict() )
        # print("\n new data\n", new_user)
        # Serialization converts complex objects into a standard format for storage or transmission, enabling interoperability. Encoding converts serialized data into a specific format suitable for efficient storage, transmission, or interpretation, ensuring compatibility and efficiency.
        user_dict = {field: getattr(user, field) for field in user.dict()}
        user_json = json.dumps(user_dict).encode("utf-8")

        await producer.start()
        await producer.send_and_wait("users", user_json)
        return user