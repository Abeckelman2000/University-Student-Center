import React from "react"
import FormLogin from "./FormLogin"
export default function Login(props){
    return(
        <>
        <body className="login--body">
            <FormLogin setIsLoggedIn={props.setIsLoggedIn} setAccount={props.setAccount}/>
        </body>
        

        </>
    )
}