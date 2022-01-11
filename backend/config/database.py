from tortoise.contrib.fastapi import register_tortoise

def init_db(app):
    register_tortoise(
        app,
        db_url='postgres://postgres:admin@127.0.0.1:5432/kaban',
        modules={'models': ['model.models']},
        generate_schemas= True,
        add_exception_handlers= True
    )
