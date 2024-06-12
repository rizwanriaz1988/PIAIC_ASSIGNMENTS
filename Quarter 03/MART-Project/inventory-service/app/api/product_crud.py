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
from app.db.models.product_model import ProductInventory, UpdateProduct
# from app.db.kafka_engine import get_kafka_producer


router = APIRouter()

# for adding data to database through consumer
def add_new_inventory_product(inventory_data, session: Session):
    print("Adding Product to Database 1")
    # print(inventory_data)
    session.add(inventory_data)
    print("Adding Product to Database 2")
    try:
        session.commit()
    except Exception as e:
        print(f"Error committing changes: {e}")

    print("Adding Product to Database 3")
    session.refresh(inventory_data)
    print("Adding Product to Database 4")

    return inventory_data


@router.get("/")
def read_root():
    return {"Hello": "ProductInventory Service hello!!"}


@router.get("/inventory/", response_model=list[ProductInventory])
def read_inventory(session: Annotated[Session, Depends(get_session)]):
        inventory = session.exec(select(ProductInventory)).all()
        return inventory


@router.get("/inventory/{inventory_id}", response_model=ProductInventory)
def read_todo(inventory_id: int, session: Annotated[Session, Depends(get_session)]):
        query = select (ProductInventory).where(ProductInventory.id == inventory_id)
        inventory_item = session.exec(query).one_or_none()
        # inventory_item = session.get(ProductInventory, inventory_id)
        return inventory_item



# @router.post("/inventory/", response_model=ProductInventory)
# async def create_todo(inventory: ProductInventory, session: Annotated[Session, Depends(get_session)], producer: Annotated[AIOKafkaProducer, Depends(get_kafka_producer)])->ProductInventory:
#         inventory_dict = {field: getattr(inventory, field) for field in inventory.dict()}
#         inventory_json = json.dumps(inventory_dict).encode("utf-8")
#         print("inventoryJSON:", inventory_json)
#         # await producer.start()
#         # await producer.send_and_wait("inventory", inventory_json)
#         session.add(inventory_json)
#         session.commit()
#         session.refresh(inventory_json)
#         return inventory_json




@router.put("/inventory/{inventory_id}", response_model=UpdateProduct)
async def update_inventory(inventory_id: int, inventory: UpdateProduct, session: Annotated[Session, Depends(get_session)],producer: Annotated[AIOKafkaProducer, Depends(get_kafka_producer)]):
        query = select (ProductInventory).where(ProductInventory.product_id == inventory_id)
        product_to_update = session.exec(query).one_or_none()
        print("\n\n product_to_update \n\n", product_to_update )
        if not product_to_update:
            raise HTTPException(status_code=404, detail="Product not found")

        hero_data = inventory.model_dump(exclude_unset=True)
        print("\n\n hero_data\n\n", hero_data)
        updated_product = product_to_update.sqlmodel_update(hero_data)
        print("\n\n updated_product\n\n",updated_product)
        print("\n\n product type\n\n",type(updated_product))

        session.add(updated_product)
        session.commit()

        return updated_product

@router.delete("/inventory/{inventory_id}", response_model=ProductInventory)
async def delete_inventory(inventory_id: int, session: Annotated[Session, Depends(get_session)]):
        inventory_to_delete = session.get(ProductInventory, inventory_id)
        if not inventory_to_delete:
            raise HTTPException(status_code=404, detail="Product not found")
        session.delete(inventory_to_delete)
        session.commit()
        return inventory_to_delete   


       