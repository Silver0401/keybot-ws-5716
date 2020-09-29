import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {useTranslation } from "react-i18next"

// Pages
import Home from "./../Resources/home.svg"
import Contact from "./../Resources/Contact.svg"
import About from "./../Resources/About.svg"
import Login from "./../Resources/Login.svg"

// Lang Imgs
import usSvg from "./../Resources/us.svg"
import mexSvg from "./../Resources/mex.svg"

const NavBar = () => {

    const [ t, i18n ] = useTranslation();
    const [NavBarClicked, SetNavBarState] = useState(false)
    const [lang, setlang] = useState("sp")

    const ChangeLanguage = () => {

      if (lang === "en"){
        setlang("sp")
        i18n.changeLanguage("sp");
      } else {
        setlang("en")
        i18n.changeLanguage("en");
      }
    }

    return (
      <div className="GlobalNavBar">
        <h1 className="Logo">KEYBOT - 5716 </h1>

        <div className="LangNavBox">
          <div onClick={ChangeLanguage} className="LangBox">
            <img alt="LangLogo" src={lang === "en" ? usSvg : mexSvg}></img>
          </div>

          <div
            onClick={() => SetNavBarState(!NavBarClicked)}
            className={NavBarClicked ? "burguerClicked" : "burguerNotClicked"}
          >
            <div className="line1">
              <ul className="NavLinks">
                <li className="link1">
                  <NavLink to="/">
                    {" "}
                    <img alt="NavBarItem" src={Home}></img>{" "}
                    <p>{t("NavBar.Home")}</p>{" "}
                  </NavLink>
                </li>
                <li className="link2">
                  <NavLink to="/ContactMePage">
                    {" "}
                    <img alt="NavBarItem" src={Contact}></img>{" "}
                    <p>{t("NavBar.Contact")}</p>{" "}
                  </NavLink>
                </li>
                <li className="link3">
                  <NavLink to="/AboutPage">
                    {" "}
                    <img alt="NavBarItem" src={About}></img>
                    <p>{t("NavBar.About")}</p>{" "}
                  </NavLink>
                </li>
                <li className="link4">
                  <NavLink to="/LoginPage">
                    {" "}
                    <img alt="NavBarItem" src={Login}></img>{" "}
                    <p>{t("NavBar.Login")}</p>{" "}
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="line2"></div>
            <div className="line3"></div>
            <div className="line4"></div>
          </div>
        </div>
      </div>
    );
}

export default NavBar;

