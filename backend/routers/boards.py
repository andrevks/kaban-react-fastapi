from fastapi import APIRouter
from model.models import Board, User

router = APIRouter(
    prefix='/boards',
    tags= ['boards']
)


@router.get('')
async def get_board():
    user = await User.get(id=1)
    return {'board': user.board}

@router.post('')
async def save_board(board: Board):
    user = await User.get(id=1)
    user.board = board.json()
    await user.save()
    return user.board

