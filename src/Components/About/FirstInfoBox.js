import React, { useState } from "react";
import anime from "animejs";
import {useTranslation} from "react-i18next";

//Img paths
import AboutFirst from "./../../Resources/FIRSTlogo.png"
import DP1 from "./../../Resources/DP1.jpg"
import DP2 from "./../../Resources/DP2.jpg"

import rr1 from "./../../Resources/rr1.jpg"

import stw1 from "./../../Resources/stw1.jpg"

import sh1 from "./../../Resources/sh1.jpg"

import pup1 from "./../../Resources/pup1.jpg"
import pup2 from "./../../Resources/pup2.jpg"

//Global Vars from Paths for IMGS
window.AboutFirst  = [AboutFirst]
window.DeepSpace = [DP1,DP2]
window.RecycleRush = [rr1]
window.SteamWorks = [stw1]
window.StrongHold = [sh1]
window.PowerUp = [pup2,pup1]
window.InfiniteRecharge = [pup1]
window.GameChangers = [DP2]

// Global Paths for Seasons Info

const FirstInfoBox = (props) => {

    const {t} = useTranslation()
    
    window.AboutFirstInfo = t("About.FirstInfo")
    window.DeepSpaceInfo = t("About.DeepSpaceInfo")
    window.RecycleRushInfo = t("About.RecycleRushInfo")
    window.SteamWorksInfo = t("About.SteamWorksInfo")
    window.StrongHoldInfo = t("About.StrongHoldInfo")
    window.PowerUpInfo = t("About.PowerUpInfo")
    window.InfiniteRechargeInfo = t("About.InfiniteRechargeInfo")
    window.GameChangersInfo = t("About.GameChangersInfo")

    let link = "none"
    let imgSRC = window[props.ButtonValue][0]
    let SeasonsInfo = window[`${props.ButtonValue}Info`]
    let footer = "To Learn more about First click the logo in the inferior part"

    if (props.ButtonValue === "AboutFirst"){
        console.log("no button clicked yet")
        link = "https://www.firstinspires.org/robotics/frc"
        footer = "To Learn more about First click the logo in the inferior part"

        anime({
            targets: ".Info",
            height: "51%",
            duration: 1500,
        })

        anime({
            targets: ".Images",
            height: "30%",
            duration: 1500,

        })

    } else {

        link = null
        footer = ""

        anime({
            targets: ".Info",
            height: "30%",
            duration: 1500,
        })

        anime({
            targets: ".Images",
            height: "51%",
            duration: 1500,

        })

    }
        
    return(
        <div className="FirstInfoBox">
            <div className="wrapper">
                <div className="Info">
                    <div className="TitleThing">
                        <h1 >{props.ButtonValue}</h1>
                    </div>
                    <div className="Paragraph">
                        <hr></hr>
                        <br></br>
                        <p>{SeasonsInfo}</p>
                        <br></br>
                        <p>{footer}</p>
                    </div>
                </div>
                <div className="Images">
                    <a href={link} target="_newtab">
                        <img alt={props.ButtonValue} src={imgSRC}></img>
                    </a>
                </div>
            </div>

            <div className="Mouse" >
                <div className="Line"></div>
            </div>

        </div>
    )
}

export default FirstInfoBox;