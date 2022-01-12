from fastapi import APIRouter, Depends
from model.models import Board, User, User_Pydantic, UserIn_Pydantic
from auth.auth import get_current_user

router = APIRouter(
    prefix='/boards',
    tags= ['boards']
)


@router.get('')
async def get_board(user: User_Pydantic = Depends(get_current_user)):
    try:
        user_data = await User.get(id=user.id)
        return {'board': user_data.board}
    except Exception as e:
        print(f"Error in getting board: {e}")
        return {'msg': f'error: {e}'}

@router.post('')
async def save_board(board: Board, user: User_Pydantic = Depends(get_current_user)):
    try:
        user_data = await User.get(id=user.id)
        user_data.board = board.json()
        await user_data.save()
        return {"status": "success"}
    except Exception as e:
        print(f"Error in creating board: {e}")
        return {'msg': f'error: {e}'}
