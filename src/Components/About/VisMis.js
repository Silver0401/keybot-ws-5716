import React from "react";
import mision from "../../Resources/mision.png"
import vision from "../../Resources/vision.png"


const VisMis = () => {
    return(
        <div className="VisionMision">
            <div className="mision">
                <img src={mision} alt="mision thingy"></img>
                <div className="infoM">
                    <h2>Our Mision</h2>
                    <p>
                        To inspire young minds to innovate within the field of techonology, science and business, awakening their creativity and potential, using robotics as the main tool.
                    </p>
                </div>
            </div>
            <div className="vision">
                <img src={vision} alt="vision thingy"></img>
                <div className="infoV">
                    <h2>Our Vision</h2>
                    <p>
                        To become one of the best internationally recognized FRC Teams, by our leadership inside the distinct areas that make up our community, as well as by our capabilites of innovation and creativeness in the industrial and technological sector.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VisMis