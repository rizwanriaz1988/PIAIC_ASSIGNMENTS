# main.py
from contextlib import asynccontextmanager
from fastapi import FastAPI
from typing import AsyncGenerator
import asyncio

# other imports
from app.db.db_engine import create_db_and_tables
from app.api.routes import router as product_router
from app.kafka.consumer import consume_messages

# The first part of the function, before the yield, will
# be executed before the application starts.
# https://fastapi.tiangolo.com/advanced/events/#lifespan-function
# loop = asyncio.get_event_loop()


@asynccontextmanager
async def lifespan(app: FastAPI)-> AsyncGenerator[None, None]:
    print("Creating tables !!!2233!! ")
    create_db_and_tables()
    task1 = asyncio.create_task(consume_messages('users', 'broker:19092'))
    yield


app = FastAPI(lifespan=lifespan, title="MART User Microservice", 
    version="0.0.1",
    servers=[
        {
            "url": "http://127.0.0.1:8012", # ADD NGROK URL Here Before Creating GPT Action
            "description": "Development Server"
        }
        ])

# Include the router in your app
app.include_router(product_router)	







