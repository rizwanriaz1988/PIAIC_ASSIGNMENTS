# product_crud.py
from datetime import datetime, timedelta
from http.client import HTTPException
from typing import Annotated
from sqlmodel import Session, SQLModel, create_engine, select
from fastapi import Depends , APIRouter
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from aiokafka import AIOKafkaProducer 
import json


from app.db.db_engine import get_session
from app.db.db_model import PaymentOrder
from app.auth.acc_token import create_access_token




async def add_item_order( order, session, producer ):

        # To properly serialize an instance of a class (like user of class User) to JSON, you need to convert it to a dictionary first. Directly passing an instance to json.dumps will not work because json.dumps does not know how to serialize custom class instances.
        # print("\n coming data\n", user)	
        # new_user = User( **user.dict() )
        # print("\n new data\n", new_user)
        # Serialization converts complex objects into a standard format for storage or transmission, enabling interoperability. Encoding converts serialized data into a specific format suitable for efficient storage, transmission, or interpretation, ensuring compatibility and efficiency.
        order_dict = {field: getattr(order, field) for field in order.dict()}
        order_json = json.dumps(order_dict).encode("utf-8")
        await producer.start()
        await producer.send_and_wait("orders", order_json)
        return order

async def update_item_order_by_id(id , order , session , producer):
        query = select(PaymentOrder).where(PaymentOrder.id == id)
        order_data = session.exec(query).one()
        hero_data = order.model_dump(exclude_unset=True)
        updated_order = order_data.sqlmodel_update(hero_data)
        # Manually update the updated_at field
        updated_order.updated_at = datetime.utcnow()
        # Add the updated order to the session and commit the changes
        print("updated order",updated_order)
        session.add(updated_order)
        session.commit()
        session.refresh(updated_order)

        # Serialize updated_order with custom encoders for datetime
        
        print("0",updated_order)
        order_dict = updated_order.dict()
        print("1",order_dict)
        order_dict['timestamp'] = updated_order.timestamp.isoformat()
        order_dict['updated_at'] = updated_order.updated_at.isoformat()
        print("2",order_dict)
        order_json = json.dumps(order_dict).encode("utf-8")
        print("3",order_json)
        await producer.send_and_wait("payment", order_json)
        
        return updated_order
        
def get_all_item_orders(session):
        query = select(PaymentOrder)
        orders = session.exec(query).all()
        return orders

def get_order_by_id(id , session):
        query = select(PaymentOrder).where(PaymentOrder.id == id)
        order = session.exec(query).one()
        return order

def delete_order_by_id(id , session):
        query = select(PaymentOrder).where(PaymentOrder.id == id)
        order = session.exec(query).one()
        session.delete(order)
        session.commit()
        return order

# def fake_user_check(user_data, session):
#         query = select(User).where(User.username == user_data)
#         user = session.exec(query).one()
#         if not user:
#             raise HTTPException(status_code=404, detail="\n Username not found \n")
#         # if user.password != user_data.password:
#         #     raise HTTPException(status_code=401, detail="\n Incorrect password \n")
#         return user

# def login(user_data:OAuth2PasswordRequestForm , session:Session):
        
#         query = select(User).where(User.username == user_data.username)
#         user = session.exec(query).one()
#         if not user:
#             raise HTTPException(status_code=404, detail="\n Username not found \n")
#         if user.password != user_data.password:
#             raise HTTPException(status_code=401, detail="\n Incorrect password \n")
#         # ser access token expiry time
#         access_token_expires = timedelta(minutes=1)
        
#         access_token = create_access_token(subject=user.username, expires_delta=access_token_expires)
#         return {"access_token": access_token, "token_type": "bearer","expires_in": access_token_expires.total_seconds()}
