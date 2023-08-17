//known bugs:
//1. when restarting the program with a valid jwt token still in local storage, it renders the myprofile/studentcenter pages and tabs

import React from "react"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import "../index.css"
import { verifyToken } from "../utils/auth"
//import uni_logo from "../images/CSUS.jpg"
import login_icon from "../images/google_login_icon.png"
import login_signup from "../images/google_signup_icon.png"
import home_icon from "../images/google_home_icon.png"
import profile_icon from "../images/profile_icon.png"
import logout_icon from "../images/google_logout_icon.png"
import google_studentcenter_icon from "../images/google_studentcenter_icon.png"
import coquenbal from "../images/coquenbal-01.png"

export default function Navbar(props){
    useEffect(() => {
        async function checkAuthentication() {
            const tokenIsValid = await verifyToken();
            props.setIsLoggedIn(tokenIsValid);
        }

        checkAuthentication();
        console.log(props.isLoggedIn)
    }, []);
    
    const navigate = useNavigate()
    return(
        <nav className="navbar">
            <Link to="/" className="nav--iconlink">
                <img src={coquenbal} className="nav--icon" alt="University Logo" />
            </Link>        
            <ul className="nav--list">
                <li>
                    <img className="icon--home" src={home_icon} alt="Home Icon"/>
                    <Link to="/" className="link--home">Home</Link>
                </li>
                { props.isLoggedIn ?  (
                    <>
                        <li>
                            <img className="icon--profile" src={profile_icon} alt="Profile"/>
                            <Link to="/profile" className="link--profile">My Profile</Link>
                        </li>
                        <li>
                            <img className="icon--studentcenter" src={google_studentcenter_icon} alt="Student Center"/>
                            <Link to ="/studentcenter" className="link--studentcenter">Student Center</Link>
                        </li>
                        <li className="nav--logout" onClick={() => { props.handleLogout(); navigate("/"); }}>
                            <img className="icon--logout" src={logout_icon} alt="Log out"/> <div>Logout</div>
                        </li>
                    </>
                ) 
                :(
                    <>
                        <li>
                            <img className="icon--login" src={login_icon} alt="Login Icon"/>
                            <Link to="/Login" className="link--login">Log in</Link>
                        </li>

                        <li>
                            <img className="icon--signup" src={login_signup} alt="Sign up"/>
                            <Link to="/signup" className="link--signup">Sign Up</Link>
                        </li>
                    </>
                )}
             </ul>


    </nav>
    )
}