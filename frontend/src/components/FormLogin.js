import React from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"

export default function Form(props){
    // Stores the username and password as it as entered for submission
    const [formData, setFormData] = React.useState(
        {
            username:"",
            password:""
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

    // used for conditional rendering of failed login message
    const[failedLogin, setFailedLogin] = React.useState(null)

    // verifies login information with database, returns and stores a JWT on success
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response = await axios.post('http://localhost:3001/api/login', formData);
        
            // store JWT
            const token = response.data.accessToken
            localStorage.setItem('token', token)

            // store user information in state
            console.log(response.data)
            props.setAccount(response.data)

            // let navigation bar know we are logged in
            props.setIsLoggedIn(true)
            console.log('Form submitted successfully');
            setFailedLogin(null)

            //redirect user to home page
            navigate('/')

        }catch (error) {
            if (error.response.status === 401){
                setFailedLogin("show")
            }
            else{
                console.error('An error occurred', error);
            }
        }
    };

    //used to redirect user after a login
    const navigate = useNavigate()
    return(

        <form className="login--form" onSubmit={handleSubmit}>
            <h1 className="login--header"> Login</h1>
            <input
                className="input--login"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                name="username"
                value={formData.username}
            />
            <input
                className="input--login"
                type="text"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={formData.password}
            />
            {failedLogin === "show" && (
                <h3 className="login--failure">
                    Invalid credentials or email not registered. Please try again or create an account
                </h3>
            )}
            <div className="login--button-container">
                <button className="login--submit">Submit</button>
            </div>
            
        </form>
    )
}