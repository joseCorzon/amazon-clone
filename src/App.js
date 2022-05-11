import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './App.css';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Header from './Header';
import React, { useEffect } from 'react';
import './Header.css';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { app, auth } from './firebase';
import firebase from '@firebase/app';
require('firebase/auth');



function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {

    const unsubscribe = getAuth().onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
    return () => {
      unsubscribe();
    }
  }, []);

  console.log('this is the user', user);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
