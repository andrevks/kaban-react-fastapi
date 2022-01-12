import jwt
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from model.models import User, User_Pydantic, UserIn_Pydantic
from auth.auth import JWT_SECRET, authenticate_user
from passlib.hash import bcrypt

router = APIRouter(
    prefix='/token',
    tags= ['token']
)

@router.post('')
async def generate_token(form_data: OAuth2PasswordRequestForm = Depends()):
    try:
        user = await authenticate_user(
                                        form_data.username,
                                        form_data.password
                                       )
        print(f'generateToken: {user.board}')
        if not user:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail='Invalid username or password'
            )

        user_obj = await User_Pydantic.from_tortoise_orm(user)
        token = jwt.encode(user_obj.dict(), JWT_SECRET)
        return { 'access_token': token }
    except Exception as e:
        print(f"Error in creting user: {e}")

