import React, {useState} from "react";

// Pages

import FirstInfoBox from "./../Components/About/FirstInfoBox"
import FirstSeasonsBox from "./../Components/About/FirstSeasonsBox"
import AnimationBox from "./../Components/About/AnimationBox"
import HistoryBox from "./../Components/About/HistoryBox";
import CardsBox from "./../Components/About/CardsBox";


const AboutPage = () => {

    const [ButtonStatus, setButtonStatus] = useState("About First")

    const ButttonChecker = (value) => {
        setButtonStatus(value)
    }

    return (
        <div className="AboutPage">

            <FirstInfoBox ButtonValue={ButtonStatus} />

            <FirstSeasonsBox ButtonValue={(NameOfButtonPressed) => ButttonChecker(NameOfButtonPressed)} />

            <AnimationBox/>

            <HistoryBox/>

            <CardsBox/>

        </div>
    )
}

export default AboutPage;