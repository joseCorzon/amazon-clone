import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { app, auth } from './firebase';


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const auth = getAuth();
    const login = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password).then(auth => {
            navigate.push("/")
        })
        .catch(e => alert(e.message))
    }

    const register = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password).then(auth => {
            navigate.push("/")
        })
        .catch(e => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/"><img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/></Link>
        <div className="login_container">
            <h1>Sign in</h1>
            <form>
                <h5>Email</h5>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                <h5>Password</h5>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                <button onClick={login} type="submit" className="login_signInButton">Sign in</button>
            </form>
            <p>
                By signing-in you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
            <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
        </div>
        </div>
    )
}

export default Login