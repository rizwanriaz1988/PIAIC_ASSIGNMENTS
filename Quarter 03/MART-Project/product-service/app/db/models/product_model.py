# product_model.py
from typing import Optional
from sqlmodel import Field, SQLModel, Relationship

class Product(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str
    description: str
    price: float
    expiry: str | None = None
    brand: str | None = None
    weight: float | None = None
    category: str # It shall be pre defined by Platform
    sku: str | None = None
    # rating: list["ProductRating"] = Relationship(back_populates="product")
    # image: str # Multiple | URL Not Media | One to Manu Relationship
    # quantity: int | None = None # Shall it be managed by Inventory Microservice
    # color: str | None = None # One to Manu Relationship
    # rating: float | None = None # One to Manu Relationship


class ProductRating(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    rating: float
    comment: str | None = None
    product_id: int 
    # product_id: int = Field(foreign_key="product.id")
    # product: Optional[Product] = Relationship(back_populates="rating")


class ProductUpdate(SQLModel):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
    expiry: Optional[str] = None
    brand: Optional[str] = None
    weight: Optional[float] = None
    category: Optional[str] = None
    sku: Optional[str] = None
   