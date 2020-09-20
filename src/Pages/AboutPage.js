import React, {useRef, useState} from "react";

// Pages

import FirstInfoBox from "./../Components/About/FirstInfoBox"
import FirstSeasonsBox from "./../Components/About/FirstSeasonsBox"
import HistoryBox from "./../Components/About/HistoryBox";
import CardsBox from "./../Components/About/CardsBox";
import VisMis from "../Components/About/VisMis";
import Gallery from "../Components/About/Gallery";
import Footer from "../Components/About/Footer";


const AboutPage = () => {

    const YScroll = useRef("null")
    const [ButtonStatus, setButtonStatus] = useState("AboutFirst")

    const ButttonChecker = (value) => {
        setButtonStatus(value)
        console.log(value)
    }

    // window.onscroll = () => {

    //     let pageHeight = YScroll.current.scrollHeight

    //     // console.log(window.pageYOffset)
    //     console.log(((pageHeight) / window.pageYOffset) * 1)
    //     // console.log(pageHeight/window.pageYOffset)
    // }
    


    return (
        <div ref={YScroll} className="AboutPage">

            {/* <div id="ProgressBar"></div> */}

            <FirstInfoBox ButtonValue={ButtonStatus} />

            <FirstSeasonsBox ButtonValue={(NameOfButtonPressed) => ButttonChecker(NameOfButtonPressed)} />

            <HistoryBox/>

            <CardsBox/>

            <VisMis/>

            <Gallery/>

            <Footer/>

        </div>
    )
}

export default AboutPage;