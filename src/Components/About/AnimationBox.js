import React from "react";
import BotGif from "./../../Resources/bot3.gif"

const AnimationBox = () => {

    return(
        <div className="animationBox">
            <div className="arrowBox">
                <h1>About the Team</h1>
                <div className="ArrowCircle">
                    <div className="Arrow">
                        <div className="rectangle"></div>
                        <div className="triangle">
                            <div className="rect1"></div>
                            <div className="rect2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <img alt="movingYellowAnimation" src={BotGif}></img>
        </div>
    )
}

export default AnimationBox