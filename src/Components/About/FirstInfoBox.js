import React, { useState } from "react";
import anime from "animejs";

//Img paths
import AboutFirst from "./../../Resources/FIRSTlogo.png"
import DP1 from "./../../Resources/DP1.jpg"
import DP2 from "./../../Resources/DP2.jpg"

import rr1 from "./../../Resources/rr1.jpg"

import stw1 from "./../../Resources/stw1.jpg"

import sh1 from "./../../Resources/sh1.jpg"

import pup1 from "./../../Resources/pup1.jpg"
import pup2 from "./../../Resources/pup2.jpg"

//Global Vars from Paths
window.AboutFirst  = [AboutFirst]
window.DeepSpace = [DP1,DP2]
window.RecycleRush = [rr1]
window.SteamWorks = [stw1]
window.StrongHold = [sh1]
window.PowerUp = [pup2,pup1]
window.InfiniteRecharge = [pup1]
window.GameChangers = [DP2]

const FirstInfoBox = (props) => {

    const [Info, setInfo] = useState(`FIRST, which stands for  "For Inspiration and Recognition of Science and Technology". It's a nonprofit organization founded in 1989 by Dean Kamen. With the objective of inspiring young people's interest and participation in science and technology. FIRST has different leagues, in which we classify on the bigger one, FIRST Robotics Competition (FRC). It's more than a competition it's an event which combines the technology and the gracious professionalism to create an equity, diverse and inclusive environment that appreciates the technology and the science. Additionally, FIRST teams are encourage to spread the word, looking forward to enjoy, love and recognize the Science, Technology, Mathematics and Engineering.`)
    const [TextFooter, setFooter] =  useState("To Learn more about First click the logo in the inferior part")
    
    let link = "none"
    let imgSRC = window[props.ButtonValue][0]

    if (props.ButtonValue === "AboutFirst"){
        console.log("no button clicked yet")
        link = "https://www.firstinspires.org/robotics/frc"

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
                        <p>{Info}</p>
                        <br></br>
                        <p>{TextFooter}</p>
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