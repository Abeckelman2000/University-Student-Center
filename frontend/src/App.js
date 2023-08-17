import React from "react"
import { useState } from "react"
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from "./components/SignUp";
import Profile from './components/Profile';
import Studentcenter from "./components/Studentcenter";
import ClassSearch from "./components/ClassSearch";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [account, setAccount] = useState(
    {
    
      username:"",
      password:"",
      FirstName:"",
      LastName:"",
      studentID: ""

  
    })

    // checks if we have a valid JWT token / still logged in
  useEffect(()=>{
    //Check for a token in local storage
    const token = localStorage.getItem('token')
    console.log(token)
    if(token) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
  };

  
  return (
    <Router>
      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} handleLogout = {handleLogout}/>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setAccount={setAccount}/>}/>
        <Route path="/profile" element={<Profile isLoggedIn ={isLoggedIn} account={account} setAccount={setAccount}/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/studentcenter" element={<Studentcenter/>}/>
        <Route path="/studentcenter/classsearch" element={<ClassSearch/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
