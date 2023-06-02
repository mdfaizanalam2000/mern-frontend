import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import signupImage from "../images/signup.png";

export default function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        profession: "",
        age: "",
        password: "",
        confirmPassword: ""
    });

    let name, value;
    const handleInput = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    }

    const postData = async (e) => {
        e.preventDefault();
        const { name, email, phone, profession, age, password, confirmPassword } = user;
        const response = await fetch("/registration", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, profession, age, password, confirmPassword
            })
        });

        if (response.status === 201) {
            alert("Registered successfully, Please login to continue!");
            navigate("/login");
        }
        else if (response.status === 401) {
            alert("Passwords are not matching");
        }
        else {
            alert("User email or phone is already resgistered, Please login!");
            navigate("/login");
        }
    }

    return (
        <>
            <div className="container d-flex my-3">
                <div className="left">
                    <h1 className='text-center my-2'>Register to continue</h1>
                    <form method='post'>
                        <input type="text" placeholder='Your name' name='name' autoComplete='off' value={user.name} onChange={handleInput} />
                        <input type="email" placeholder='Your email' name='email' autoComplete='off' value={user.email} onChange={handleInput} />
                        <input type="number" placeholder='Your phone' name='phone' autoComplete='off' value={user.phone} onChange={handleInput} />
                        <input type="text" placeholder='Your profession' name='profession' autoComplete='off' value={user.profession} onChange={handleInput} />
                        <input type="number" placeholder='Your age' name='age' autoComplete='off' value={user.age} onChange={handleInput} />
                        <input type="password" placeholder='Choose password' name='password' autoComplete='off' value={user.password} onChange={handleInput} />
                        <input type="password" placeholder='Confirm password' name='confirmPassword' autoComplete='off' value={user.confirmPassword} onChange={handleInput} />
                        <button type='submit' className='btn btn-success' onClick={postData}>Sign Up</button>
                    </form>
                    <p className='text-center'>Already registered?<Link to="/login">Login</Link></p>
                </div>
                <div className="right">
                    <img src={signupImage} alt="signupImage" />
                </div>
            </div>
        </>
    )
}
