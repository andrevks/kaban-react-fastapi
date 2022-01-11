from pydantic import BaseModel
from tortoise.models import Model
from tortoise import fields
from tortoise.contrib.pydantic import pydantic_model_creator
from passlib.hash import bcrypt


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


    def verify_password(self, password):
        return bcrypt.verify(password, self.password)


User_Pydantic = pydantic_model_creator(User, name="User")

UserIn_Pydantic = pydantic_model_creator(User , name="UserIn" ,
                                         exclude_readonly=True ,
                                         exclude=('board',))

