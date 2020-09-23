import React, {useState} from "react";
import BotAnim from "./../Components/Login/BotAnim";
import Forms from "./../Components/Login/LoginForms";
import TSParticles from "react-tsparticles";
import anime from "animejs";

const LoginPage = () => {

    let [FormsState, setFormState] = useState("LoginForms")
    
    if (FormsState === "LoginForms"){

      anime({
        targets: ".LoginPage",
        rotateY: "0deg",
        duration: 3000
      })

      anime({
        targets:".SignUpButton",
        opacity: .5,
        duration: 500,
      })
      
      anime({
        targets: ".LogInButton",
        opacity: 1,
        duration: 500,
      })

      
    } else if (FormsState === "SignUpForms"){
      
      anime({
        targets: ".LoginPage",
        rotateY: "360deg",
        duration: 3000
      })

      anime({
        targets: ".LogInButton",
        opacity: .5,
        duration: 500,
      })
      
      anime({
        targets: ".SignUpButton",
        opacity: 1,
        duration: 500,
      })

    }
    
    function PuchiLook() {
      anime({
        targets: [".LeftEye, .RightEye"],
        duration: 1000,
        height: "60%"
      })

      anime({
        targets: "#rightArm",
        duration: 4000,
        rotateZ: -250
      })
      anime({
        targets: "#leftArm",
        duration: 4000,
        rotateZ: 250
      })
      anime({
        targets: ['#leftArm, #rightArm'],
        duration: 1500,
        opacity: 0,
      })
    }

    return (
      <div className="LoginWrapper">

        <TSParticles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#060316",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 25,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />

        <div className="LoginPage">
          <div className="ButtonsBox">
            <h4 className="LogInButton" onClick={() => {
              setFormState("LoginForms")
              PuchiLook()

              }}>
              Log In
            </h4>
            <h4 className="SignUpButton" onClick={() => {
              setFormState("SignUpForms")
              PuchiLook()

              }}>
              Sign Up
            </h4>
          </div>

          <BotAnim />

          <Forms FormToDisplay={FormsState} />

        </div>
      </div>
    );
}

export default LoginPage;