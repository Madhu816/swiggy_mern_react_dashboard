import React from 'react'
import { useState } from 'react';
import { API_URL } from '../data/ApiPath';


const Register = ({handleLogin}) => {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit=async (event) => {
        event.preventDefault();
        try {
            // const response=await fetch(`http://localhost:3000/vender/register`,{
            // fetch can do get the data from the server
            const response = await fetch(`${API_URL}/vender/register`, {
                //for sending
                method:"POST",
                //standard
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({username,email,password})
            });
            const data=await response.json();
            console.log(data);

        if (!response.ok) {
        alert("Email is exits Try with another Mail...");
        setUsername("");
        setEmail("");
        setPassword("");
        return;
        }
            if(response.ok){
                setUsername("");
                setEmail("");
                setPassword("");
                console.log(data);
                alert("vender Regiser Sucessfully ");
                // using props receving hadleLogin and call it;
                handleLogin();
            }
        } catch (error) {
            console.error(error);
            confirm("Registration failed Or Try with another mail");
            
        }
        
    }
    return (
        <div>
        <div className="registerSection">
            <form className="authForm" onSubmit={handleSubmit}>
                <h1>Vender Register</h1><br />
                <label> Username :</label>
                {/* // name = "username" match to  const [username,setUsername]=useState("") */}
                <input type="text"  name="username" value={username} onChange={(event)=>setUsername(event.target.value)} placeholder="enter the username" /><br />
                <label>Email :</label>
                <input type="text" name="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="enter the email" /><br />
                <label>Passoword :</label>
                <input type="password" name="password" value={password}  onChange={(event)=>setPassword(event.target.value)} placeholder="enter the password" /><br />
                <div className="btnSubmit">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
        </div>
    )
}
export default Register

