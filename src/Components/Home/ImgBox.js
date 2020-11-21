import React, {useState, useEffect} from "react";

import KeybotImg from "./../../Resources/KeybotL2.png"

const HomeImgBox = () => {

    let [EyesOpened, SetEyes] = useState(true)
    let [EyeLocation, SetEyeCoordinates] = useState({})

    const Blink = () => {

        setTimeout(() => SetEyes(false), 0)

        setTimeout(() => SetEyes(true), 1000)

        let random = Math.floor(Math.random(1, 5) * 10000)

        setTimeout(Blink, random)
    }

    useEffect(() => {

        document.onmousemove = (event) => {
            var x = event.clientX * 100 / window.innerWidth + "%";
            var y = event.clientY * 100 / window.innerHeight + "%";
    
            let EyeFollower = {
                left: x,
                top: y,
                transform: `translate(${-x}, ${-y})`,
            }
    
            SetEyeCoordinates(EyeFollower)
        }
    })


    return(
        <div className="ImgBox" >
            
            <img alt="KyebotBot" onLoad={Blink} src={KeybotImg}></img>

            <div className="RobotLight"></div>

            <div className="EyesBox">
                <div className={EyesOpened ? "LeftEyeOpened" : "LeftEyeClosed"}>
                    <div style={EyeLocation} className="Iris">
                        <div className="Ball"></div>
                    </div>
                </div>

                <div className="Mouth"></div>

                <div className={EyesOpened ? "RightEyeOpened" : "RightEyeClosed"}>
                    <div style={EyeLocation} className="Iris">
                        <div className="Ball"></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HomeImgBox