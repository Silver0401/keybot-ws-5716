import React,{useEffect} from "react";
import anime from "animejs";

// Home Page Components
import LeftBox from "./../Components/Home/LeftBox"
import ImgBox from "./../Components/Home/ImgBox";
import RightBox from "./../Components/Home/RightBox"

const HomePage = () => {


    useEffect(() => {
        window.onload = () => {
            const Loader =  anime.timeline({
                easing: "easeInOutSine",
            })

            Loader.add({
                delay: 500,
                targets: ".MovingBox",
                duration: 2200,
                translateY: ["120%", "-120%"]
            })
            
            Loader.add({
                targets: ".Loader",
                duration: 750,
                height: "0px"
            }, "-=1700")
        }
        
    },[])

    return(
        <div className="HomePage">

            <div className="Loader">
    
                <span className="AnimBox">
                    <div className="Box1"></div>
                    <div className="Box2"></div>
                    <div className="Box3"></div>
                    <div className="Box4"></div>
                </span>
                <h1>Loading...</h1>

                <div className="MovingBox"></div>

            </div>

            <LeftBox/>

            <ImgBox/>

            <RightBox/>
        </div>
    )
}

export default HomePage;