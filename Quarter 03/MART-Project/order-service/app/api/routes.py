# product_crud.py
from http.client import HTTPException
from typing import Annotated
from sqlmodel import Session, SQLModel, create_engine, select
from fastapi import Depends , APIRouter,Form
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from aiokafka import AIOKafkaProducer 
from app.auth.acc_token import create_access_token, decode_access_token                                                                                 
import json
from jose import JWTError


from app.db.db_engine import get_session
from app.kafka.producer import get_kafka_producer
from app.db.db_model import User, UserUpdate
from app.api.crud import add_new_user, get_user_by_id, get_all_users, delete_user_by_id, update_user_by_id, login, fake_user_check


router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

# for adding data to database through consumer
def add_new_product(product_data, session: Session):
    print("Adding Product to Database 1")
    # print(product_data)
    session.add(product_data)
    print("Adding Product to Database 2")
    try:
        session.commit()
    except Exception as e:
        print(f"Error committing changes: {e}")

    print("Adding Product to Database 3")
    session.refresh(product_data)
    print("Adding Product to Database 4")

    return product_data


@router.get("/")
def read_root():
    return {"Hello": "Order Service hello!!"}


@router.get("/users/", response_model=list[User])
def read_todos(token: Annotated[str, Depends(oauth2_scheme)], session: Annotated[Session, Depends(get_session)]):
        user_token_data = decode_access_token(token=token)
        user_in_db = fake_user_check(user_data=user_token_data["sub"],session= session)
        all_users = get_all_users(session)
        return all_users


@router.get("/user/{user_id}", response_model=User)
def read_user(user_id: int, session: Annotated[Session, Depends(get_session)]):
        user = get_user_by_id(id=user_id, session=session)
        return user


@router.post("/signUp/", response_model=User)
async def create_todo(user: User, session: Annotated[Session, Depends(get_session)], producer: Annotated[AIOKafkaProducer, Depends(get_kafka_producer)])->User:
        new_user = await add_new_user(user=user, session=session,  producer=producer)
        return user




@router.put("/users/{user_id}", response_model=UserUpdate)
async def update_todo(user_id: int, user: UserUpdate, session: Annotated[Session, Depends(get_session)]):
       updated_user = update_user_by_id(id=user_id, user=user, session=session)
       return updated_user
         

@router.delete("/user/{user_id}", response_model=User)
async def delete_user(user_id: int, session: Annotated[Session, Depends(get_session)]):
        todo_to_delete = delete_user_by_id(id=user_id, session=session)
        return todo_to_delete   



# @router.get("/gpt")
# def get_ai_response(main_request: str, session: Annotated[Session, Depends(get_session)],producer: Annotated[AIOKafkaProducer, Depends(get_kafka_producer)]):
#     return run_conversation(main_request)



@router.post("/login/")
def user_login(form_data: Annotated[OAuth2PasswordRequestForm, Depends(OAuth2PasswordRequestForm)], session: Annotated[Session, Depends(get_session)]):
    ret = login(user_data=form_data, session=session)
    return ret

# token validation with jwt
@router.get("/decode_token")
def decode_token(token: str):
# def decode_token(token: Annotated[str, Depends(OAuth2PasswordBearer)]):
    try:
        decoded_token_data  = decode_access_token(token=token)
        return {"decoded_token": decoded_token_data}     
    except JWTError as e:   
        return {"error": str(e)} 