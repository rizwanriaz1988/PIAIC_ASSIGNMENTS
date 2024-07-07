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
# from app.db.db_model import PaymentOrder,PaymentOrderStatus
# from app.api.crud import get_all_item_orders,add_item_order,get_order_by_id,delete_order_by_id,update_item_order_by_id
# from app.global_var import latest_message_from_order
import app.global_var as global_var

router = APIRouter()
# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

# for adding data to database through consumer
def add_new_product(product_data, session: Session):
    print("Adding Product to Database 1")
    print(product_data)
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
    return {"Notification Service": global_var.latest_message_from_order}	
    # return {"Hello": "Notification Service hello!!"}	


# @router.get("/orders/", response_model=list[PaymentOrder])
# # def read_todos(token: Annotated[str, Depends(oauth2_scheme)], session: Annotated[Session, Depends(get_session)]):
# def read_todos(session: Annotated[Session, Depends(get_session)]):
#         # user_token_data = decode_access_token(token=token)
#         # user_in_db = fake_user_check(user_data=user_token_data["sub"],session= session)
#         all_orders = get_all_item_orders(session)
#         return all_orders


# @router.get("/order/{order_id}", response_model=PaymentOrder)
# def read_order_by_id(order_id: int, session: Annotated[Session, Depends(get_session)]):
#         order = get_order_by_id(id=order_id, session=session)
#         return order


# @router.post("/order/", response_model=PaymentOrder)
# async def add_item_order_api(order: PaymentOrder, session: Annotated[Session, Depends(get_session)], producer: Annotated[AIOKafkaProducer, Depends(get_kafka_producer)])->PaymentOrder:
#         new_order = await add_item_order(order=order, session=session,  producer=producer)
#         return new_order




# @router.put("/orders/{order_id}", response_model=PaymentOrder)
# async def update_todo(order_id: int, order: PaymentOrderStatus, session: Annotated[Session, Depends(get_session)], producer: Annotated[AIOKafkaProducer, Depends(get_kafka_producer)])->PaymentOrder:
#        updated_order = await update_item_order_by_id(id=order_id, order=order, session=session, producer=producer)
#        return updated_order
         

# @router.delete("/order/{order_id}", response_model=PaymentOrder)
# async def delete_order(order_id: int, session: Annotated[Session, Depends(get_session)]):
#         order_to_delete = delete_order_by_id(id=order_id, session=session)
#         return order_to_delete   



# @router.get("/gpt")
# def get_ai_response(main_request: str, session: Annotated[Session, Depends(get_session)],producer: Annotated[AIOKafkaProducer, Depends(get_kafka_producer)]):
#     return run_conversation(main_request)



# @router.post("/login/")
# def user_login(form_data: Annotated[OAuth2PasswordRequestForm, Depends(OAuth2PasswordRequestForm)], session: Annotated[Session, Depends(get_session)]):
#     ret = login(user_data=form_data, session=session)
#     return ret

# # token validation with jwt
# @router.get("/decode_token")
# def decode_token(token: str):
# # def decode_token(token: Annotated[str, Depends(OAuth2PasswordBearer)]):
#     try:
#         decoded_token_data  = decode_access_token(token=token)
#         return {"decoded_token": decoded_token_data}     
#     except JWTError as e:   
#         return {"error": str(e)} 