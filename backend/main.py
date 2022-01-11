from fastapi import FastAPI
from routers import boards, users, auth
from config.database import init_db

app = FastAPI()

app.include_router(boards.router)
app.include_router(users.router)
app.include_router(auth.router)

init_db(app)


