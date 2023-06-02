import React, { useEffect, useState } from 'react'

export default function Contact() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const renderContact = async () => {
        try {
            const response = await fetch("/getData", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json();
            console.log(data);
            setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });
            if (response.status !== 200) {
                throw new Error(response.error);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        renderContact();
    }, [])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserData({ ...userData, [name]: value })
    }

    const postData = async (event) => {
        event.preventDefault();
        const { name, email, phone, message } = userData;
        const response = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        });
        const data = await response.json();
        if (data) {
            alert("Your message was sent successfully");
            setUserData({ ...userData, message: "" })
        }
    }

    return (
        <>
            <div className="container-fluid my-5">
                <div className="row d-flex justify-content-around">
                    <div className="contact-item col-sm-3 d-flex justify-content-start align-items-center">
                        <div className="icon">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="contact-info">
                            <h4>Phone</h4>
                            <p>+91-8877188983</p>
                        </div>
                    </div>
                    <div className="contact-item col-sm-3 d-flex justify-content-start align-items-center">
                        <div className="icon">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="contact-info">
                            <h4>Email</h4>
                            <p>alamf015@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-item col-sm-3 d-flex justify-content-start align-items-center">
                        <div className="icon">
                            <i className="fa-solid fa-house"></i>
                        </div>
                        <div className="contact-info">
                            <h4>Address</h4>
                            <p>Madhupur, JH, India</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container p-5 mb-5">
                <h2>Get in touch</h2>
                <form method='post'>
                    <input name='name' type="text" placeholder='Your name' value={userData.name} onChange={handleChange} />
                    <input name='email' type="email" placeholder='Your email' value={userData.email} onChange={handleChange} />
                    <input name='phone' type="number" placeholder='Your phone number' value={userData.phone} onChange={handleChange} />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Your message' value={userData.message} onChange={handleChange}></textarea>
                    <button className='btn btn-success' onClick={postData}>Send</button>
                </form>
            </div>
        </>
    )
}
