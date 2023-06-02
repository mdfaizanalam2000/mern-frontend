import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import signupImage from "../images/signup.png";

export default function Signin(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleInput = (event) => {
        if (event.target.name === "email")
            setEmail(event.target.value);
        if (event.target.name === "password")
            setPassword(event.target.value);
    }

    const postData = async (e) => {
        e.preventDefault();
        const response = await fetch("/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })

        if (response.status === 401) {
            alert("User not registered, Register to continue!");
            navigate("/signup");
        }
        else if (response.status === 402) {
            alert("Kindly fill both the fields");
        }
        else if (response.status === 200) {
            alert("Login successfull");
            navigate("/");
            props.setStatus(true);
        }
        else if (response.status === 400) {
            alert("Invalid credentials");
        }
        else {
            alert("Some error occurred");
        }
    }

    return (
        <>
            <div className="container d-flex mt-3">
                <div className="left">
                    <h1 className='text-center my-2'>Login to continue</h1>
                    <form method='post'>
                        <input type="email" placeholder='Enter your email' name='email' autoComplete='off' value={email} onChange={handleInput} />
                        <input type="password" placeholder='Enter password' name='password' autoComplete='off' value={password} onChange={handleInput} />
                        <button type='submit' className='btn btn-success' onClick={postData}>Log In</button>
                    </form>
                    <p className='text-center'>Not yet registered?<Link to="/signup">Signup</Link></p>
                </div>
                <div className="right">
                    <img src={signupImage} alt="loginImage" />
                </div>
            </div>
        </>
    )
}
