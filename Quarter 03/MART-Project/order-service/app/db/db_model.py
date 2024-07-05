# product_model.py
from typing import Optional
from sqlmodel import Field, SQLModel, Relationship

class ItemOrder(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    product_id : int
    user_id: int
    quantity: int
    amount: int
    status: str

    
class ItemOrderUpdate(SQLModel):
    product_id: int = None
    user_id: int = None
    quantity: int = None
    amount: int = None
    status: str = None

# class OrderStatus(SQLModel, table=True):
#     id: Optional[int] = Field(default=None, primary_key=True)
#     user_id: int
#     itemOrder_id: int
#     status: str