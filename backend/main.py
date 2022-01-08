from fastapi import FastAPI


app = FastAPI()

@app.get('/board')
def get_board():
    board_data = {
        'tasks': {
            'task-1': {'id': 'task-1', 'content': 'Watch a video about fastapi' },
            'task-2': {'id': 'task-2', 'content': 'Create the project using fastapi'},
            'task-3': {'id': 'task-3', 'content': 'Deploy your restful api'},
            'task-4': {'id': 'task-4' , 'content': 'Write the README' }
        },
        'columns': {
            'column-1': {
                'id': 'column-1',
                'title': 'To do',
                'tasksId': ['task-3','task-4']
            },
            'column-2': {
                'id': 'column-2',
                'title': 'Doing',
                'tasksId': ['task-2']
            },
            'column-3': {
                'id': 'column-3',
                'title': 'Done',
                'tasksId': ['task-1']
            }
        },
        'columnOrder': ['column-1','column-2','column-3']
    }

    return {'board': board_data}