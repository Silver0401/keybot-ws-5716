import React, {useEffect, useState} from "react";
import Azteca from "../../Resources/azteca2.png"
import { useTranslation } from "react-i18next";
// import Tec from "../../Resources/tecx.png"

const HomeLeftBox = () => {

    const { t } = useTranslation();

    let counter = 0
    let [logoState, setLogoState] = useState(false)
    
    const SwapLogo = () => {
        
        let timer = 1990

        if (logoState){
            setLogoState(logoState = false)
            timer = 3990
        } else if (logoState === false) {
            setLogoState(logoState = true)
            if (counter === 0) timer = 1990
            else timer = 3990
        }

        counter += 1

        setTimeout(SwapLogo, timer)
    }

    useEffect(() => {
        SwapLogo()
    },[]) 

    return(

        <div className="LeftBox">
            <div className="CircleContainer">
                <div className="CircleStats">

                    <div className="PercentageContainer">

                        <div className="HoverBoxes">
                            <div className="yellow"></div>
                            <div className="red"></div>
                            <div className="blue"></div>
                            <div className="green"></div>

                            <div className="PercentageCircle">
                                <h1>{t("Home.Areas")}</h1>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="BoxPat">
                <h1>{t("Home.Sponsors")}</h1>
                <div className="Logos">
                    <img id="img1" alt="Logo" src={Azteca} style={logoState ? { opacity: 0 } : { opacity: 1 }} ></img>
                    <img id="img2" alt="Logo2" src={Azteca} style={logoState ? { opacity: 1 } : { opacity: 0 }} ></img>
                </div>
            </div>
        </div>

    )
}

export default HomeLeftBox