import React from "react";
import BotFace from "./../../Resources/LoginKeybot.png";

const BotAnim = () => {

    return(
        <div className="BotAnim">

            <div id="leftArm">
                <div className="ArmStructure"></div>
                <div className="Hand"></div>
            </div>
            
            <div id="rightArm">
                <div className="ArmStructure"></div>
                <div className="Hand"></div>
            </div>

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
