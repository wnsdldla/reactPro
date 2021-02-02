import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import './assets/css/main.css';

function LoginForm ({authenticated, login, location}){

    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");

    const handleClick = () => {
        try{
            login({email, password})
        }catch(e){
            alert("Fail to Login")
            setEmail("")
            setPassword("")
        }
    }

    const {from} = location.state || {from : {pathname:"/" } }
    if(authenticated) return <Redirect to = {from}/>

    return (
        <>

            <div className="wrapper" >
                <div className="box">
                    <h1>Login</h1>
                    Email
                    <input 
                        value={email}
                        onChange={({target:{value}}) => setEmail(value)}
                        type="text"
                        placeholder="email"
                    />
                    Password
                    <input 
                        value={password}
                        onChange={({target:{value}}) => setPassword(value)}
                        type="text"
                        placeholder="password"
                    />
                    <br/>
                    <button onClick={handleClick}>Login</button>
                </div>
            </div>
        </>
    )
}

export default LoginForm