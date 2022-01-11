from pydantic import BaseModel
from tortoise import fields
from tortoise.contrib.pydantic import pydantic_model_creator
from tortoise.models import Model


class Task(BaseModel):
    id: str
    content: str


class Tasks(BaseModel):
    __root__: dict[str, Task]


class Column(BaseModel):
    id: str
    title: str
    taskIds: list


class Columns(BaseModel):
    __root__: dict[str, Column]


class Board(BaseModel):
    tasks: Tasks
    columns: Columns
    columnOrder: list

class User(Model):
    id = fields.IntField(pk=True)
    username = fields.CharField(50, unique=True)
    password = fields.CharField(200)
    board = fields.JSONField(default={"tasks": {}, "columns": {}, "columnOrder": []} )

User_pydantic = pydantic_model_creator(User, name="User")
UserIn_pydantic = pydantic_model_creator(User, name="UserIn", exclude_readonly=True, exclude=('board',))
