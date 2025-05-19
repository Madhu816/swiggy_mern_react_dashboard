import React from 'react'
import { useState } from 'react';
import { API_URL } from '../data/ApiPath';

const Login = () => {
    return (
        <div>
            <div className="loginSection">
                <form className="authForm">
                <h1>Vender Login</h1><br />
                    <label>Email :</label>
                    <input type="text" placeholder="enter the email" /><br />
                    <label>Passoword :</label>
                    <input type="password" placeholder="enter the password" /><br />
                    <div className="btnSubmit">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;
