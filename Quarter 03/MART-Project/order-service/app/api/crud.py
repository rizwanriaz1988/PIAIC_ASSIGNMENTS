# product_crud.py
from datetime import timedelta
from http.client import HTTPException
from typing import Annotated
from sqlmodel import Session, SQLModel, create_engine, select
from fastapi import Depends , APIRouter
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from aiokafka import AIOKafkaProducer 
import json


from app.db.db_engine import get_session
from app.db.db_model import User, UserUpdate
from app.auth.acc_token import create_access_token




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

def update_user_by_id(id , user , session):
        query = select(User).where(User.id == id)
        user_data = session.exec(query).one()
        hero_data = user.model_dump(exclude_unset=True)
        updated_user = user_data.sqlmodel_update(hero_data)
        session.add(updated_user)
        session.commit()
        return updated_user
        
def get_all_users(session):
        query = select(User)
        users = session.exec(query).all()
        return users

def get_user_by_id(id , session):
        query = select(User).where(User.id == id)
        user = session.exec(query).one()
        return user

def delete_user_by_id(id , session):
        query = select(User).where(User.id == id)
        user = session.exec(query).one()
        session.delete(user)
        session.commit()
        return user

def fake_user_check(user_data, session):
        query = select(User).where(User.username == user_data)
        user = session.exec(query).one()
        if not user:
            raise HTTPException(status_code=404, detail="\n Username not found \n")
        # if user.password != user_data.password:
        #     raise HTTPException(status_code=401, detail="\n Incorrect password \n")
        return user

def login(user_data:OAuth2PasswordRequestForm , session:Session):
        
        query = select(User).where(User.username == user_data.username)
        user = session.exec(query).one()
        if not user:
            raise HTTPException(status_code=404, detail="\n Username not found \n")
        if user.password != user_data.password:
            raise HTTPException(status_code=401, detail="\n Incorrect password \n")
        # ser access token expiry time
        access_token_expires = timedelta(minutes=1)
        
        access_token = create_access_token(subject=user.username, expires_delta=access_token_expires)
        return {"access_token": access_token, "token_type": "bearer","expires_in": access_token_expires.total_seconds()}
