# product_crud.py
from http.client import HTTPException
from typing import Annotated
from sqlmodel import Session, SQLModel, create_engine, select
from fastapi import Depends , APIRouter
from aiokafka import AIOKafkaProducer 
import json


from app.db.db_engine import get_session
from app.kafka.producer import get_kafka_producer
from app.db.db_model import User
from app.api.crud import add_new_user


router = APIRouter()

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
    return {"Hello": "User Service hello!!"}


# @router.get("/todos/", response_model=list[Product])
# def read_todos(session: Annotated[Session, Depends(get_session)]):
#         todos = session.exec(select(Product)).all()
#         return todos


# @router.get("/todos/{todo_id}", response_model=Product)
# def read_todo(todo_id: int, session: Annotated[Session, Depends(get_session)]):
#         todo = session.get(Product, todo_id)
#         return todo



@router.post("/signUp/", response_model=User)
async def create_todo(user: User, session: Annotated[Session, Depends(get_session)], producer: Annotated[AIOKafkaProducer, Depends(get_kafka_producer)])->User:
        new_user = await add_new_user(user=user, session=session,  producer=producer)
        return user




# @router.put("/todos/{todo_id}", response_model=Product)
# async def update_todo(todo_id: int, todo: ProductUpdate, session: Annotated[Session, Depends(get_session)],producer: Annotated[AIOKafkaProducer, Depends(get_kafka_producer)]):
#         # product_to_update = session.get(Product, todo_id)
#         query = select (Product).where(Product.id == todo_id)
#         product_to_update = session.exec(query).one_or_none()
#         print("\n\n product_to_update \n\n", product_to_update )
#         if not product_to_update:
#             raise HTTPException(status_code=404, detail="Product not found")

#         hero_data = todo.model_dump(exclude_unset=True)
#         updated_product = product_to_update.sqlmodel_update(hero_data)
#         print("\n\n updated_product\n\n",updated_product)
#         print("\n\n product type\n\n",type(updated_product))

#         session.add(updated_product)
#         session.commit()

#         return updated_product

# @router.delete("/todos/{todo_id}", response_model=Product)
# async def delete_todo(todo_id: int, session: Annotated[Session, Depends(get_session)]):
#         todo_to_delete = session.get(Product, todo_id)
#         if not todo_to_delete:
#             raise HTTPException(status_code=404, detail="Product not found")
#         session.delete(todo_to_delete)
#         session.commit()
#         return todo_to_delete   


# @router.post("/todos/{todo_id}/ratings", response_model=ProductRating)
# async def add_product_rating(todo_id: int, product_rating: ProductRating, session: Annotated[Session, Depends(get_session)],producer: Annotated[AIOKafkaProducer, Depends(get_kafka_producer)]):
#         func_return =await add_product_rating_func(todo_id, product_rating, session,producer)
#         return func_return

# @router.get("/gpt")
# def get_ai_response(main_request: str, session: Annotated[Session, Depends(get_session)],producer: Annotated[AIOKafkaProducer, Depends(get_kafka_producer)]):
#     return run_conversation(main_request)