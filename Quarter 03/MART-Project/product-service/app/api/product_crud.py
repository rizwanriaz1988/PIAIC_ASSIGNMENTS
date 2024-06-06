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
    # if session.is_closed:
    #     print("Session is closed")
    # else:
    #     print("Session is not closed")



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
    return {"Hello": "Product Service wow!!"}


@router.get("/todos/", response_model=list[Product])
def read_todos(session: Annotated[Session, Depends(get_session)]):
        todos = session.exec(select(Product)).all()
        return todos


@router.get("/todos/{todo_id}", response_model=Product)
def read_todo(todo_id: int, session: Annotated[Session, Depends(get_session)]):
        todo = session.get(Product, todo_id)
        return todo



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




@router.patch("/todos/{todo_id}", response_model=Product)
async def update_todo(todo_id: int, todo: Product, session: Annotated[Session, Depends(get_session)],producer: Annotated[AIOKafkaProducer, Depends(get_kafka_producer)]):
        product_to_update = session.get(Product, todo_id)
        print(product_to_update)
        if not product_to_update:
            raise HTTPException(status_code=404, detail="Product not found")

        hero_data = todo.model_dump(exclude_unset=True)
        product_to_update.sqlmodel_update(hero_data)
        session.add(product_to_update)
        session.commit()

        return product_to_update

@router.delete("/todos/{todo_id}", response_model=Product)
async def delete_todo(todo_id: int, session: Annotated[Session, Depends(get_session)]):
        todo_to_delete = session.get(Product, todo_id)
        if not todo_to_delete:
            raise HTTPException(status_code=404, detail="Product not found")
        session.delete(todo_to_delete)
        session.commit()
        return todo_to_delete   

