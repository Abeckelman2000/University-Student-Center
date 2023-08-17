import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import google_finances_icon from "../images/google_finances_icon.png"
import google_dashboard_icon from "../images/google_dashboard_icon.png"
import google_cart_icon from "../images/google_cart_icon.png"
import google_badge_icon from "../images/google_badge_icon.png"
import google_backpack_icon from "../images/google_backpack_icon.png"


export default function Studentcenternav(){

    const [isSubMenuOpen, setIsSubMenuOpen] = useState({
        Enrollment: false,
        Academics: false,
        PersonalInformation: false,
        Finances: false
    })

    function toggleSubMenu(event) {
        const itemName = event.target.getAttribute("name");
        setIsSubMenuOpen(prevState => ({
            ...prevState,
            [itemName]: !prevState[itemName]
        }));
    }




   return( <div className="studcenternav--container">
        <ul className="studentcenternav--list">
            <li className="studentcenternav--item">
                    <img src={google_dashboard_icon} className="studentcenternav--image" alt="Dashboard"/>
                    <Link to="/studentcenter" className="dropdownmenu--link">Dashboard</Link>        
            </li>
            <li className="studentcenternav--item" onClick={toggleSubMenu} name="Enrollment">
                <img src={google_cart_icon} className="studentcenternav--image" alt="Cart"/>
                Enrollment
                {isSubMenuOpen.Enrollment && (
                    <ul className="dropdown--menu">
                        <li className="dropdownmenu--item">
                            <Link to="/studentcenter/classsearch" className="dropdownmenu--link">Class Search</Link>
                        </li>
                    </ul>
                )}
                
            </li>
            <li className="studentcenternav--item" onClick={toggleSubMenu} name="Academics">
                <img src={google_backpack_icon} className="studentcenternav--image" alt="Academics"/>
                Academics
                {isSubMenuOpen.Academics && (
                    <ul className="dropdown--menu">
                        <li className="dropdownmenu--item">dog</li>
                        <li className="dropdownmenu--item">cat</li>
                    </ul>
                )}
            </li>
            <li className="studentcenternav--item" onClick={toggleSubMenu} name="PersonalInformation">
                <img src={google_badge_icon} className="studentcenternav--image" alt="Personal Information"/>
                Personal Information
                {isSubMenuOpen.PersonalInformation && (
                    <ul className="dropdown--menu">
                        <li className="dropdownmenu--item">dog</li>
                        <li className="dropdownmenu--item">cat</li>
                    </ul>
                )}
            </li>
            <li className="studentcenternav--item" onClick={toggleSubMenu} name="Finances">
                <img src={google_finances_icon} className="studentcenternav--image" alt="Finances"></img>
                Finances
                {isSubMenuOpen.Finances && (
                    <ul className="dropdown--menu">
                        <li className="dropdownmenu--item">dog</li>
                        <li className="dropdownmenu--item">cat</li>
                    </ul>
                )}
                </li>
        </ul>
    </div>
   )
}

