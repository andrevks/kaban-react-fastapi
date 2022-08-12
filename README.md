<h1 align="center">
  <img src="github/logo.svg" alt="logo" width="200px"></img>
</h1>

<p align="center">
  <a href="#ℹ-description">Description</a> •
  <a href="#-demo">Demo</a> •
  <a href="#-technologies">Technologies</a> •
  <a href="#-how-to-use">How to use</a> •
  <a href="#-credits">Credits</a>
</p>

<p align="center">
  <img src="github/macbook.png" alt="Project on desktop" width="100%"></img>
</p>

## ℹ Description

> This full stack application consists in a Kanban Board using **React**, **FastAPI** and **PosgreSQL**.

The app is able to make a user authentication and each user has their own
board which is saved on the database. More importantly it has the feature of drag an drop,
allowing to create columns and tasks. As a result, it's extremely customizable.

## 💻 Demo

### Board

<p align="center"><img src="https://i.giphy.com/YgMnK6Yi5d2gZnrOIg.gif" alt="demo-video" width="600"></p>

### Login and Register

<p align="center"><img src="https://i.giphy.com/yCxsBIM3ZaYK5L5SD6.gif" alt="demo-video" width="600"></p>

### Screenshots

![register](https://user-images.githubusercontent.com/39144691/150373158-e0f66c23-d36a-47d1-bb7a-27882e3ea7b7.png)

![login](https://user-images.githubusercontent.com/39144691/150373165-b308a9fc-b79c-4eec-b96b-0dfa81a1cbc5.png)

![Kaban-Board](https://user-images.githubusercontent.com/39144691/150373170-956e3d23-aea8-459a-9bc6-b2fbac859fbf.png)

## 🛠 Technologies

### REST API Swagger Docs With FastAPI

![rest_api_fastapi](https://user-images.githubusercontent.com/39144691/149065446-35a44954-5a80-441d-a094-0b66aa338bb4.png)

### Backend:

- [**FastAPI**](https://fastapi.tiangolo.com/)
- [**Tortoise-ORM**](https://tortoise-orm.readthedocs.io/en/latest/)
- [**Uvicorn**](https://www.uvicorn.org/)
- [**PyJWT**](https://pyjwt.readthedocs.io/en/stable/)
- [**Pydantic**](https://pydantic-docs.helpmanual.io/)
- [**PostgreSQL**](https://www.postgresql.org/)
- [**Adminer with Docker**](https://hub.docker.com/_/adminer)

_The requirements file shows everything you need to run it_

### Frontend:

- [**React**](https://reactjs.org/)
- [**React-router-dom**](https://reactrouter.com/)
- [**styled-components**](https://styled-components.com/)

_Others can be seen on the package.json file_

## 🖥 How to use

```bash
# clone this repo and access its folder
$ git clone https://github.com/andrevks/kaban-react-fastapi.git && cd kaban-react-fastapi

# Initiate backend
$ cd backend
$ uvicorn main:app --reload

# Initiate frontend
$ cd frontend
$ npm start run 
```

## 📚 Credits

The core of the application was done following the tutorial by the
[**Pretty Printed**](https://www.youtube.com/channel/UC-QDfvrRIDB6F0bIO4I4HkQ) YouTube channel.

---

<p align="center">Made with 💜 by <a href="https://github.com/andrevks">André Geraldo</a></p>
