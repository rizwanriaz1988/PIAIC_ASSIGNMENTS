# product_model.py
from typing import Optional
from sqlmodel import Field, SQLModel, Relationship
from datetime import datetime

class PaymentOrder(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int
    itemOrder_id: int
    product_id: int
    status: str
    amount: int
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
class PaymentOrderStatus(SQLModel):
    status: str
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
# class ItemOrderUpdate(SQLModel):
#     product_id: int = None
#     user_id: int = None
#     quantity: int = None
#     amount: float = None
#     status: str = None

# class OrderStatus(SQLModel, table=True):
#     id: Optional[int] = Field(default=None, primary_key=True)
#     user_id: int
#     itemOrder_id: int
#     status: str