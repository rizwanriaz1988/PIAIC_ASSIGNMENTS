from typing import Annotated
from sqlmodel import Session, SQLModel, create_engine, select
from fastapi import Depends , APIRouter
from aiokafka import AIOKafkaProducer 
import json


from app.db.db_engine import get_session
# from app.db.models.product_model import Todo
from app.kafka.producer import get_kafka_producer
from app.db.models.product_model import Product
# from app.db.kafka_engine import get_kafka_producer


router = APIRouter()

# for adding data to database through consumer
def add_new_product(product_data: Product, session: Session):
    print("Adding Product to Database")
    session.add(product_data)
    session.commit()
    session.refresh(product_data)
    return product_data


@router.get("/")
def read_root():
    return {"Hello": "Product Service wow!!"}


@router.get("/todos/", response_model=list[Product])
def read_todos(session: Annotated[Session, Depends(get_session)]):
        todos = session.exec(select(Product)).all()
        return todos

@router.post("/todos/", response_model=Product)
async def create_todo(todo: Product, session: Annotated[Session, Depends(get_session)], producer: Annotated[AIOKafkaProducer, Depends(get_kafka_producer)])->Product:
        todo_dict = {field: getattr(todo, field) for field in todo.dict()}
        todo_json = json.dumps(todo_dict).encode("utf-8")
        print("todoJSON:", todo_json)
        # Produce message
        await producer.send_and_wait("todos", todo_json)
        # session.add(todo)
        # session.commit()
        # session.refresh(todo)
        return todo

