# product_model.py
from typing import Optional
from sqlmodel import Field, SQLModel, Relationship
from datetime import datetime

class NotifyUser(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int
    itemOrder_id: int
    product_id: int
    status: str
    amount: int
    msg_sent: str
    msg_sent_at: datetime = Field(default_factory=datetime.utcnow)
    

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str
    email: str
    password: str
    is_active: bool = Field(default=True)
