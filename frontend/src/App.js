import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';


function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  const handleLogout = () => {
    // Perform logout actions, e.g., clear token
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/profile" element={<Profile isLoggedIn ={isLoggedIn}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
