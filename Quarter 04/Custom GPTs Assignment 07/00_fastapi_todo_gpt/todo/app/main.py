from contextlib import asynccontextmanager
from typing import Optional, Annotated
from app import settings
from sqlmodel import Field, Session, SQLModel, create_engine, select
from fastapi import FastAPI, Depends
from typing import AsyncGenerator

class TodoBase(SQLModel):
    title: str = Field(index=True)
    description: str
    status: bool = False

class Todo(TodoBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

# only needed for psycopg 3 - replace postgresql
# with postgresql+psycopg in settings.DATABASE_URL
connection_string = str(settings.DATABASE_URL).replace(
    "postgresql", "postgresql+psycopg"
)

# recycle connections after 5 minutes
# to correspond with the compute scale down
engine = create_engine(
    connection_string, connect_args={}, pool_recycle=300
)

def create_db_and_tables()->None:
    SQLModel.metadata.create_all(engine)
    
# The first part of the function, before the yield, will
# be executed before the application starts.
# https://fastapi.tiangolo.com/advanced/events/#lifespan-function
@asynccontextmanager
async def lifespan(app: FastAPI)-> AsyncGenerator[None, None]:
    print("Creating tables..")
    create_db_and_tables()
    yield

app = FastAPI(lifespan=lifespan, title="Hello World API with DB",
              version="0.0.1",
              servers=[{
                  # ADD Cloudflare URL Here Before Creating GPT Action
                  "url": "https://societies-yields-dans-opposition.trycloudflare.com",
                  "description": "Development Server"
              }]
              )


def get_session():
    with Session(engine) as session:
        yield session

@app.get("/")
def read_root():
    return {"Hello": "Custom GPT Actions"}

@app.post("/todos/", response_model=Todo)
async def create_todo(todo: TodoBase, session: Annotated[Session, Depends(get_session)])->Todo:
        new_todo = Todo(title=todo.title, description=todo.description)
        session.add(new_todo)
        session.commit()
        session.refresh(new_todo)
        return new_todo

@app.get("/todos/", response_model=list[Todo])
def read_todos(session: Annotated[Session, Depends(get_session)]):
        todos = session.exec(select(Todo)).all()
        return todos


@app.get("/todos/{todo_id}", response_model=Todo)
def read_todo(todo_id: int, session: Annotated[Session, Depends(get_session)]):
        todo = session.get(Todo, todo_id)
        if not todo:
            return {"error": "Todo not found"}
        return todo

@app.delete("/todos/{todo_id}")
def delete_todo(todo_id: int, session: Annotated[Session, Depends(get_session)]):
        todo = session.get(Todo, todo_id)
        if not todo:
            return {"error": "Todo not found"}
        session.delete(todo)
        session.commit()
        return {"message": "Todo deleted"}

@app.put("/todos/{todo_id}")
def update_todo(todo_id: int, todo: TodoBase, session: Annotated[Session, Depends(get_session)]):
        todo_to_update = session.get(Todo, todo_id)
        if not todo_to_update:
            return {"error": "Todo not found"}
        todo_to_update.title = todo.title
        todo_to_update.description = todo.description
        todo_to_update.status = todo.status
        session.add(todo_to_update)
        session.commit()
        session.refresh(todo_to_update)
        return todo_to_update