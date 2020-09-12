import React from "react";
// import { useSpring, animated } from "react-spring";


const HomeLeftBox = () => {

    return(

        <div className="LeftBox" >
            <div className="CircleContainer">


                <div className="CircleStats">

                    <div className="PercentageContainer">

                        <div className="HoverBoxes">
                            <div className="yellow"></div>
                            <div className="red"></div>
                            <div className="blue"></div>
                            <div className="green"></div>

                            <div className="PercentageCircle">
                                <h1>Areas</h1>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="BoxPat">
                <h1>Sponsors</h1>
            </div>
        </div>

    )
}

export default HomeLeftBox