// Library Imports
import React, { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import anime from "animejs";

// NavBar Global
import NavBar from "./Components/NavBar";

// Pages
import HomePage from "./Pages/HomePage";
import ContactMePage from "./Pages/ContactMePage";
import AboutPage from "./Pages/AboutPage";
import LoginPage from "./Pages/LoginPage";
import UserCreated from "./Pages/UserCreated";
import LoggedIn from "./Pages/LoggedIn";

//Css Files
import "./PageStyling/css/Style.css";

const App = () => {

  useEffect(() => {

    window.onload = () => {

        // if (props.data === 0){

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

        // } else {
        //     anime({
        //         targets:".Loader",
        //         duration: 0,
        //         height: "0px",
        //     })
        // }

    }


  },[])


  return (
    <div className="App">

      <div className="Loader">
        <section className="LoadingItems">

          <span className="AnimBox">
            <div className="Box1"></div>
            <div className="Box2"></div>
            <div className="Box3"></div>
            <div className="Box4"></div>
          </span>
          <h1>Loading...</h1>

        </section>

        <div className="MovingBox"></div>
      </div>


      <NavBar />      

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ContactMePage" component={ContactMePage} />
        <Route exact path="/AboutPage" component={AboutPage} />
        <Route exact path="/LoginPage" component={LoginPage} />
        <Route exact path="/UserCreated" component={UserCreated} />
        <Route exact path="/LogedInPage/:id" component={LoggedIn} />
      </Switch>

    </div>
  ) 

}

export default App;
