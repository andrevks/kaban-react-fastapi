from fastapi import FastAPI
from routers import boards, users
from config.database import init_db

app = FastAPI()

app.include_router(boards.router)
app.include_router(users.router)

init_db(app)


