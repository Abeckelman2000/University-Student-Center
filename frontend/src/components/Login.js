import React from "react"
import Navbar from "./Navbar"
import Form from "./Form"
export default function Login(props){
    return(
        <>
        <Navbar/>
        <h1 className="login--header"> Login</h1>
        <body className="login--body">
            <Form setIsLoggedIn={props.setIsLoggedIn}/>
        </body>
        

        </>
    )
}