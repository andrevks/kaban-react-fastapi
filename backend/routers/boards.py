from fastapi import APIRouter, Depends
from model.models import Board, User, User_Pydantic, UserIn_Pydantic
from auth.auth import get_current_user

router = APIRouter(
    prefix='/boards',
    tags= ['boards']
)


@router.get('')
async def get_board(): #user: User_Pydantic = Depends(get_current_user)
    user = await User.get(id=2)
    return {'board': user.board}

@router.post('')
async def save_board(board: Board):
    user = await User.get(id=2)
    user.board = board.json()
    await user.save()
    return user.board

