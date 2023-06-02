import React, { useEffect, useState } from 'react'
import profilePic from "../images/profile_pic.png";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
    const [userAbout, setUserAbout] = useState({});
    const renderAbout = async () => {
        try {
            const response = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await response.json();
            console.log(data);
            setUserAbout(data);
            if (response.status !== 200) {
                throw new Error(response.error);
            }
        } catch (error) {
            navigate("/login");
        }
    }

    useEffect(() => {
        renderAbout();
    }, [])

    return (
        <div className="container my-3">
            <div className="aboutme">
                <div className="row my-2">
                    <div className="col-md-4 profile-pic">
                        <img src={profilePic} alt="profile" />
                    </div>
                    <div className="col-md-8 profile-data">
                        <h2>{userAbout.name}</h2>
                        <p>{userAbout.profession}</p>
                    </div>
                </div >
                {/* tabs area */}
                <div className="row">
                    <div className="col-md-4">
                        <h4>My social accounts</h4>
                        <a href="#">WhatsApp</a><br />
                        <a href="#">WhatsApp</a><br />
                        <a href="#">WhatsApp</a><br />
                        <a href="#">WhatsApp</a><br />
                        <a href="#">WhatsApp</a>
                    </div>
                    <div className="col-md-8">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" >
                                <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                            </li>
                        </ul>

                        <div className="tab-content profile-tab" id='myTabContent'>
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby='home-tab'>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label >User ID</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userAbout._id}</p>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label >Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userAbout.name}</p>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label >Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userAbout.email}</p>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label >Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userAbout.phone}</p>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label >Profession</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userAbout.profession}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label > Experience</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>1 year</p>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label > Hourly Rate</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>10$/hr</p>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label > Total Projects</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>25</p>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label > English Profiency</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Expert</p>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label > Availability</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Work from Home</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
