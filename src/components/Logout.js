import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
export default function Logout(props) {
    const navigate = useNavigate();
    const renderLogout = async () => {
        try {
            const response = await fetch("/logout", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json();
            console.log(data);
            navigate("/login");
            props.setStatus(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        renderLogout();
    }, [])
    return (
        <div>
            <p>User logged out</p>
        </div>
    )
}
