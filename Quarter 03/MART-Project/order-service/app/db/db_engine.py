from sqlmodel import SQLModel, create_engine, Session, select
# from app.db.models.product_model import Product


# from app.db.settings import 
from app.db.settings import DATABASE_URL
# only needed for psycopg 3 - replace postgresql
# with postgresql+psycopg in settings.DATABASE_URL
print(DATABASE_URL)

connection_string = str(DATABASE_URL).replace(
    "postgresql", "postgresql+psycopg"
)



# recycle connections after 5 minutes
# to correspond with the compute scale down
engine = create_engine(
    connection_string, connect_args={}, pool_recycle=300
)


def create_db_and_tables()->None:
    SQLModel.metadata.create_all(engine)



def get_session():
    with Session(engine) as session:
        yield session


