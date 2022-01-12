import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p>
                Username <input type="text" onChange={e => setUsername(e.target.value)}/>
            </p>
            <p>
                Password <input type="password" onChange={e => setPassword(e.target.value)}/>
            </p>
            <p>
                <button>Login</button>
            </p>
            <p>
                Need a account? <Link to='/register'>Register Here</Link>
            </p>
        </form>
    )
}

export default Login;
