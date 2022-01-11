from fastapi import FastAPI
from routers import boards
from config.database import init_db

app = FastAPI()

app.include_router(boards.router)

init_db(app)


