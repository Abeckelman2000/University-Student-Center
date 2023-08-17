import React from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"

export default function FormSignup(){
    // Stores the username and password as it as entered for submission
    const [formData, setFormData] = React.useState(
        {
            username:"",
            password:"",
            FirstName:"",
            LastName:""
        }
    )
    
    // set state wrapper that keeps track of each change in username and password input fields
    function handleChange(event){
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        try{
            let response = await axios.post('http://localhost:3001/api/createaccount', formData)
            navigate('/login')
        }
        catch(error){
            if(error.response.status === 500){
                console.log("Failed to create Account")
            }
        }
    }

    const navigate = useNavigate()

    return(
        <form className="signup--form" onSubmit={handleSubmit}>
            <h1 className='signup--header'>Create an Account</h1>
            <input
                className="input--signup"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="FirstName"
                value={formData.FirstName}
            />
            <input
                className="input--signup"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="LastName"
                value={formData.LastName}
            />
            <input
                className="input--signup"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                name="username"
                value={formData.username}
            />
            <input
                className="input--signup"
                type="text"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={formData.password}
            />
            
            <div className="login--button-container">
                <button className="login--submit">Submit</button>
            </div>
        </form>
    )

}