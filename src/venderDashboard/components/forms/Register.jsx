import React from 'react'
import { useState } from 'react';
import { API_URL } from '../data/ApiPath';


const Register = () => {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit=async (event) => {
        event.preventDefault();
        try {
            const response=await fetch(`${API_URL}/vender/register`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({username,email,password})
            });
            const data=await response.json();
            console.log(data);
            if(response.ok){
                console.log(data);
                alert("vender Regiser Sucessfully")
            }
        } catch (error) {
            console.error(error)
            alert("Registration failed");
            
        }
        
    }
    return (
        <div>
        <div className="registerSection">
            <form className="authForm" onSubmit={handleSubmit}>
                <h1>Vender Register</h1><br />
                <label> Username :</label>
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

