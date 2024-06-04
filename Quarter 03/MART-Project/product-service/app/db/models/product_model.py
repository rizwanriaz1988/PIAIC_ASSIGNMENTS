from typing import Optional
from sqlmodel import Field, SQLModel, Relationship

class Product(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    content: str = Field(index=True)
    # description: str
    # price: float
    # expiry: str | None = None
    # brand: str | None = None
    # weight: float | None = None
    # category: str # It shall be pre defined by Platform
    # sku: str | None = None
    # rating: list["ProductRating"] = Relationship(back_populates="product")
    # image: str # Multiple | URL Not Media | One to Manu Relationship
    # quantity: int | None = None # Shall it be managed by Inventory Microservice
    # color: str | None = None # One to Manu Relationship
    # rating: float | None = None # One to Manu Relationship


# class ProductRating(SQLModel, table=True):
#     id: int | None = Field(default=None, primary_key=True)
#     product_id: int = Field(foreign_key="product.id")
#     rating: float
#     comment: str | None = None
#     product: Optional[Product] = Relationship(back_populates="rating")