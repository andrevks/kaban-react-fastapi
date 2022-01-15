import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {IconContext} from "react-icons";
import {FaPowerOff} from "react-icons/fa";
import {AiOutlineDelete} from "react-icons/ai";
function Logout(props){
    const navigate = useNavigate();

    function logoutUser(){
        localStorage.removeItem('token');
        navigate('/login');

    }

    return (
            <IconContext.Provider
                value={{color:'#fddf47', size: '20'}}>
                <button onClick={logoutUser} id="login">
                    <FaPowerOff/>
                </button>
            </IconContext.Provider>
    )

}

export default Logout;

