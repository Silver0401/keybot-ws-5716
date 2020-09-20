// Library Imports
import React from 'react';
import { Route, Switch } from "react-router-dom";
// import { Route, Switch, useLocation } from "react-router-dom";
// import { useTransition, animated } from "react-spring";

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

  // let location = useLocation()

  // const transitions = useTransition(location, location => location.pathname, {

  //   from: { opacity: 0, transform: 'translate3d(100%,0,0)'},
  //   enter: { opacity: 1, transform: 'translate3d(0%,0,0)'},
  //   leave: { opacity: 0, transform: 'translate3d(-50%,0,0)'}

  // })

  // return (
  //   <div className="App">

  //     <NavBar />

  //     {transitions.map(({item, props, key}) => (
  //       <animated.div key={key} style={props}>

  //         <Switch location={item}>
  //           <Route exact path="/" component={HomePage} />
  //           <Route exact path="/ContactMePage" component={ContactMePage} />
  //           <Route exact path="/AboutPage" component={AboutPage} />
  //           <Route exact path="/LoginPage" component={LoginPage} />
  //         </Switch>

  //       </animated.div>
  //     ))}

  //   </div>
  // ) 

  return (
    <div className="App">

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
