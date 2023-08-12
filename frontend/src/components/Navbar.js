import React from "react"
import { Link } from "react-router-dom"
import "../index.css"
import uni_logo from "../images/CSUS.jpg"
import login_icon from "../images/google_login_icon.png"
import home_icon from "../images/google_home_icon.png"
import profile_icon from "../images/profile_icon.png"
import coquenbal from "../images/coquenbal-01.png"
import handleLogout from "../App"


export default function Navbar(props){
    return(
        <nav className="navbar">
        <img src={coquenbal} className="nav--icon" alt="University Logo"></img>
        <ul className="nav--list">
            <li>
                <img className="icon--home" src={home_icon} alt="Home Icon"/>
                <Link to="/" className="link--home">Home</Link>
            </li>
            { props.isLoggedIn ?  (
                <>
                    <li>
                        <img className="icon--profile" src={profile_icon}/>
                    <Link to="/profile" className="link--profile">My Profile</Link>
                    </li>
                    <li>
                    <button onClick={handleLogout}>Logout</button>
                    </li>
                </>
             ) 
             :(
                <li>
                    <img className="icon--login" src={login_icon} alt="Login Icon"/>
                    <Link to="/Login" className="link--login">Log in</Link>
                </li>
             )}
        </ul>


    </nav>
    )
}