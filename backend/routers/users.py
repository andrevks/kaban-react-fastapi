from fastapi import APIRouter
from model.models import User, User_Pydantic, UserIn_Pydantic
from passlib.hash import bcrypt
from auth.auth import JWT_SECRET
import jwt


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
        # take a tortoise obj and convert it to a pydantic obj
        user_obj = await User_Pydantic.from_tortoise_orm(user)
        token = jwt.encode(user_obj.dict() , JWT_SECRET)
        return { 'access_token': token }
    except Exception as e:
        print(f"Error in creating user: {e}")
        return {'msg': 'Username already exists.'}