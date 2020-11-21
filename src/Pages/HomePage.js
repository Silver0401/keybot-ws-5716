import React from "react";
// import anime from "animejs";

// Home Page Components
import LeftBox from "./../Components/Home/LeftBox"
import ImgBox from "./../Components/Home/ImgBox";
import RightBox from "./../Components/Home/RightBox"

const HomePage = () => {


    return(
        <div className="HomePage">

            <LeftBox/>

            <ImgBox/>

            <RightBox/>
        </div>
    )
}

export default HomePage;