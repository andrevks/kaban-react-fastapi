import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Form from "./Form";

function Register(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        createUser().then(data => {
            if(data.access_token){
                props.setToken(data.access_token);
                localStorage.setItem('token', JSON.stringify(data.access_token));
                navigate('/');
            }
        });

    }

    async function createUser(){
        const formData = {
            username: username,
            password: password
        };

        const response = await fetch('/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        return data;

    }

    const cta= ['One step','for more' ];
    // const cta= ['Project','managment', 'never been so'];

    const ctaMain = ['Productivity'];
    const msg = ['Already have', 'an account?'];
    const linkBtn = '/login';
    const btnMsg = 'Sign In';

    return (

        <Form cta={cta} ctaMain={ctaMain} msg={msg} linkBtn={linkBtn} btnMsg={btnMsg}
              signIn={true} handleSubmit={handleSubmit} setUsername={setUsername}
              setPassword={setPassword}
        />
    )
}

export default Register;