import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Home from "./../Resources/home.svg"
import Contact from "./../Resources/Contact.svg"
import About from "./../Resources/About.svg"
import Login from "./../Resources/Login.svg"


const NavBar = () => {

    let [NavBarClicked, SetNavBarState] = useState(false)

    return(

        <div className="GlobalNavBar">  

            <h1 className="Logo">KEYBOT - 5716</h1>

            {/* <h1 className="TeamNumber">5716</h1> */}

            <div onClick={ () => SetNavBarState(!NavBarClicked)} className={NavBarClicked ? "burguerClicked": "burguerNotClicked"} >

                <div className="line1">
                    <ul className="NavLinks">
                        <li className="link1">
                            <p>Home</p>
                            <NavLink to="/"> <img alt="NavBarItem" src={Home}></img> </NavLink>
                        </li>
                        <li className="link2">
                            <NavLink to="/ContactMePage"> <img alt="NavBarItem" src={Contact}></img> <p>Contact Us</p> </NavLink>
                        </li>
                        <li className="link3">
                            <NavLink to="/AboutPage"> <img alt="NavBarItem" src={About}></img> <p>About Us</p> </NavLink>
                        </li>
                        <li className="link4">
                            <NavLink to="/LoginPage"> <img alt="NavBarItem" src={Login}></img> <p>Login</p> </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="line2"></div>
                <div className="line3"></div>
                <div className="line4"></div>
            </div>

        </div>
    )
}

export default NavBar;

