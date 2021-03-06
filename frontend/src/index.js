import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Board from "./components/Board";
import Register from "./components/Register";
import Login from "./components/Login";
import styles from './index.css'

function getToken(){
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken
}

function App(){
    const [token, setToken] = useState(()=> getToken());

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element=
                    {
                        !token?
                        <Navigate to='/login'/> : <Board token={token}/>
                    }
                />
                <Route exact path={'/register'} element={<Register setToken={setToken}/>}/>
                <Route exact path={'/login'} element={<Login setToken={setToken}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

