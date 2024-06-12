# product_model.py
from typing import Optional
from sqlmodel import Field, SQLModel

class ProductInventory(SQLModel, table=True):
    # id: int | None = Field(default=None, primary_key=True)
    id: Optional[int] = Field(default=None, primary_key=True)
    product_id: int
    quantity: int = Field(default=0)
