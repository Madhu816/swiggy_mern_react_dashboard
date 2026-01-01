import React, { useState } from 'react';
import { API_URL } from '../data/ApiPath';

const Login = ({handleWelcome,setShowLogout}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = async (event) => {
        event.preventDefault();
        try {
            // const response = await fetch(`http://localhost:3000/vender/login`, {
            const response = await fetch(`${API_URL}/vender/login`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                alert("Login is Success...");
                setEmail("")
                setPassword("")
                // in localstoarge genetate the token
                localStorage.setItem("loginToken", data.token);
                localStorage.setItem("venderId", data.venderId);
                setShowLogout(true);
                handleWelcome();
            }
            const venderId=data.venderId;
            console.log("checkeing for venderId :", venderId)

    
            // const venderResponse=await fetch(`http://localhost:3000/vender/single-vender/${venderId}`)
            const venderResponse = await fetch(`${API_URL}/vender/single-vender/${venderId}`);
            const venderData=await venderResponse.json();
            if(venderResponse.ok){
                const venderFirmId=venderData.venderFirmId;
                const vendername=venderData.vender.firm[0].firmname;// firmName
                console.log("vender name",vendername);
                console.log("checking for firmid :",venderFirmId);
                localStorage.setItem('firmId',venderFirmId);
                localStorage.setItem('firmname',vendername);//store vendor name
                window.location.reload();// for refresh login and logout
            }
        } catch (error) {
            console.log(error);
            alert("Login Failed");
        }
    };

    return (
        <div>
            <div className="loginSection">
                <form className="authForm" onSubmit={loginHandler}>
                    <h1>Vender Login</h1><br />
                    <label>Email :</label>
                    <input type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter the email"
                    /><br />
                    <label>Password :</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Enter the password"
                    /><br />
                    <div className="btnSubmit">
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
