import React from "react"
import Navbar from "../components/Navbar"

export default function Home(props){
    return(
    <>
        <Navbar isLoggedIn={props.isLoggedIn}/>
        
    </>)
}