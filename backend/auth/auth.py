import sys
sys.path.append('../')


User_Pydantic = pydantic_model_creator(User, name="User")

UserIn_Pydantic = pydantic_model_creator(User , name="UserIn" ,
                                         exclude_readonly=True ,
                                         exclude=('board',))

JWT_SECRET = 'myjwtsecret'
