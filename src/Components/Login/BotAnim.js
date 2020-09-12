import React from "react";
import BotFace from "./../../Resources/LoginKeybot.png";
import anime from "animejs";

const BotAnim = () => {
    return(
        <div className="BotAnim">
            <div className="eyesBox">
                <div className="LeftEye">
                    <div className="Iris">
                        <div className="Reflection"></div>
                    </div>
                </div>

                <div className="Mouth"></div>

                <div className="RightEye">
                    <div className="Iris">
                        <div className="Reflection"></div>
                    </div>
                </div>
                
            </div>
            <img src={BotFace} alt="KeybotImg"></img>
        </div>
    )
}

export default BotAnim;
