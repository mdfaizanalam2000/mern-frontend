import React, { useState, useEffect } from 'react'

export default function Home() {
    const [userName, setUserName] = useState("");
    const renderHome = async () => {
        try {
            const response = await fetch("/getData", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json();
            console.log(data);
            setUserName(data.name);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        renderHome();
    }, [])
    return (
        <div className="box">
            <div className="home">
                <h1 className='text-center'>Hi {userName}, Thanks for visiting this page</h1>
                <p className='text-center'>This is my first MERN app</p>
            </div>
        </div>
    )
}
