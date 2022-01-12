import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Logout(props){
    const navigate = useNavigate();

    function logoutUser(){
        localStorage.removeItem('token');
        navigate('/login');

    }

    return (
        <button onClick={logoutUser}>Log Out</button>
    )

}

export default Logout;

