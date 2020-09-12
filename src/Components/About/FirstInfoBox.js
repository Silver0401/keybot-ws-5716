import React from "react";
import FirstLogo from "./../../Resources/FIRSTlogo.png"
import anime from "animejs";

const FirstInfoBox = (props) => {

    let Info = `FIRST, which stands for  "For Inspiration and Recognition of Science and Technology". It's a nonprofit organization founded in 1989 by Dean Kamen. With the objective of inspiring young people's interest and participation in science and technology. FIRST has different leagues, in which we classify on the bigger one, FIRST Robotics Competition (FRC). It's more than a competition it's an event which combines the technology and the gracious professionalism to create an equity, diverse and inclusive environment that appreciates the technology and the science. Additionally, FIRST teams are encourage to spread the word, looking forward to enjoy, love and recognize the Science, Technology, Mathematics and Engineering.`
    let TextFooter = "  To Learn more about First click the logo in the inferior part"

    if (props.ButtonValue === "About First"){
        console.log("no button clicked yet")
    } else {

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
                    <h1>{props.ButtonValue}</h1>
                    <hr></hr>
                    <br></br>
                    <p>{Info}</p>
                    <br></br>
                    <p>{TextFooter}</p>
                </div>
                <div className="Images">
                    <a href="https://www.firstinspires.org/robotics/frc" target="_newtab">
                        <img alt="First Logo" src={FirstLogo}></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FirstInfoBox;