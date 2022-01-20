import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "../asset/back.jpg";
import Form from "./Form";

function Login(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        loginUser().then(data => {
            if(data.access_token){
                props.setToken(data.access_token);
                localStorage.setItem('token', JSON.stringify(data.access_token));
                navigate('/');
            }
        });

    }

    async function loginUser(){
        const searchParams= new URLSearchParams()
        searchParams.append('username', username);
        searchParams.append('password', password);

        const response = await fetch('/token', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: searchParams.toString()
        });

        const data = await response.json();
        return data;

    }

    const cta= ['Project','managment', 'never been so'];
    const ctaMain = ['EASY'];
    const msg = ['Need a ',' account?'];
    const linkBtn = '/register';
    const btnMsg = 'Sign Up';


    return (

        <Form cta={cta} ctaMain={ctaMain} msg={msg} linkBtn={linkBtn} btnMsg={btnMsg}
              signIn={false} handleSubmit={handleSubmit} setUsername={setUsername}
              setPassword={setPassword}
        />

    )
}

export default Login;
