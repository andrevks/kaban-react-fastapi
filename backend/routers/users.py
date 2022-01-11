from fastapi import APIRouter
from model.models import User
from passlib.hash import bcrypt
from tortoise.contrib.pydantic import pydantic_model_creator
import jwt



User_Pydantic = pydantic_model_creator(User, name="User")

UserIn_Pydantic = pydantic_model_creator(User , name="UserIn" ,
                                         exclude_readonly=True ,
                                         exclude=('board',))

JWT_SECRET = 'myjwtsecret'

router = APIRouter(
    prefix='/users',
    tags= ['users']
)

@router.post('')
async def create_user(user_in: UserIn_Pydantic):
    try:
        user = User(
                      username=user_in.username,
                      password=bcrypt.hash(user_in.password)
                    )
        await user.save()
    except Exception as e:
        print(f"Error in creting user: {e}")

    # take a tortoise obj and convert it to a pydantic obj
    user_obj = await User_Pydantic.from_tortoise_orm(user)
    token = jwt.encode(user_obj.dict(), JWT_SECRET)
    return {'access_token': token}


