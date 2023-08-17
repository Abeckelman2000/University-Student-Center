import React from "react"
export default function Profile(props){

   return(
   <>
    <h1>My Profile</h1>
    <body className="profile--Body">
      <ul>
         <li>First Name: {props.account.FirstName} </li>
         <li>Last Name: {props.account.LastName}</li>
         <li>Student ID#: {props.account.studentID}</li>
      </ul>
    </body>
   </>
   )
}