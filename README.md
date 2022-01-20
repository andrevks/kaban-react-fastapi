# Kanban - Full Application in React and FastAPI  


>This full stack application consists in a Kanban Board using **React**, **FastAPI** and **PosgreSQL**.

The app is able to make a user authentication and each user has their own
board which is saved on the database. More importantly it has the feature of drag an drop, 
allowing to create columns and tasks. As a result, it's extremely customizable.

## DEMO

### Board
<center> <img src="https://i.giphy.com/YgMnK6Yi5d2gZnrOIg.gif" alt="demo-video" width="700"> </center>

### Login and Register
<center> <img src="https://i.giphy.com/yCxsBIM3ZaYK5L5SD6.gif" alt="demo-video" width="700"> </center>

### Screenshots
![register](https://user-images.githubusercontent.com/39144691/150373158-e0f66c23-d36a-47d1-bb7a-27882e3ea7b7.png)

![login](https://user-images.githubusercontent.com/39144691/150373165-b308a9fc-b79c-4eec-b96b-0dfa81a1cbc5.png)

![Kaban-Board](https://user-images.githubusercontent.com/39144691/150373170-956e3d23-aea8-459a-9bc6-b2fbac859fbf.png)



### REST API Swagger Docs With FastAPI


![rest_api_fastapi](https://user-images.githubusercontent.com/39144691/149065446-35a44954-5a80-441d-a094-0b66aa338bb4.png)


### Extensions used on the Backend:

**FastAPI**

**Tortoise-ORM**

**Uvicorn**

PyJWT

Pydantic

- DB: **Postgres** + Adminer with Docker

The requirements file show everything you need to run it

### Libraries/frameworks used on the FrontEnd

**React**

React-dom

React-router-dom

Style-components

Other can be seen on the package.json file


## Usage 

Initiate backend

 uvicorn main:app --reload 


### Credits

The core of the application
was done following the tutorial by the
[Pretty Printed](https://www.youtube.com/channel/UC-QDfvrRIDB6F0bIO4I4HkQ) channel.
