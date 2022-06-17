import React from "react";
import logo from "../assets/images/logo.jpg";
import "./navbar.css";
const Nav =()=>{
    return (
        <div className="nav">
            <img src={logo} alt="Rwanda tour logo" className="logo-img"/>
            <div className="navigations-links">
                <ul className="nav-links">
                    <li> 
                        <a href="/Home"className="nav-link">
                            Home
                            </a>
                            </li>
                            <li> 
                        <a href="/about"className="nav-link">
                            About-Us
                            </a>
                            </li>
                            <li> 
                        <a href="/contact"className="nav-link">
                        Contact-Us
                            </a>
                            </li>
                            <li> 
                        <a href="/gallery"className="nav-link ">
                            Gallery
                            </a>
                            </li>
                            <li> 
                            <a href="signIn"className="nav-link link-green">
                        Sign-In
                            </a>
                            </li>
                            <li> 
                            <a href="/tours"className="nav-link btn-green">
                        Tours
                            </a>
                            </li>
                           
                    </ul> 
            </div>
            </div>
    )
};
export default Nav;