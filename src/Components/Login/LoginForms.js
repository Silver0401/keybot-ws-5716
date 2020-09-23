import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import anime from "animejs";
// import bcrypt from "bcrypt";



const Forms = (props) => {

    const UserData = useRef("null")
    const PassBox = useRef("null")
    const EmailBox = useRef("null")
    // const [UsersList, SetUsersList] = useState("none")
    const [counter, SetCounter] = useState(0)

    // Puchi Functions for Animation

    function PuchiLook(){
        anime({
            targets: [".LeftEye, .RightEye"],
            duration: 1000,
            height: "65%"
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

    function PuchiBlind(){
        anime({
            targets: [".LeftEye, .RightEye"],
            duration: 1000,
            height: "2px"
        })

        anime({
            targets: "#rightArm",
            duration: 2000,
            translateX: -30,
            translateY: 0,
            rotateZ: 0
        })
        anime({
            targets: "#leftArm",
            duration: 2000,
            translateX: 30,
            translateY: 0,
            rotateZ: 0
        })

        anime({
            targets: ['#leftArm, #rightArm'],
            duration: 1500,
            opacity: 1,
        })
    }

    function PuchiPeek(){
        anime({
            targets: ".LeftEye",
            duration: 1000,
            height: "40px"
        })
        anime({
            targets: "#leftArm",
            duration: 2000,
            translateX: "-40%",
            translateY: "40%",
        })
    }

    const animate = (xCoor, yCoor) => {
        anime({
            targets:".Iris",
            duration: "1000",
            translateX: xCoor,
            translateY: yCoor
        })
    }

    const DisplayPassForm = (DOMElement) => {

        if (counter % 2 === 0){
            DOMElement.current.type = "text"
            PuchiPeek()
        } else {
            DOMElement.current.type = "password"
            PuchiBlind()
        }
        SetCounter(counter + 1)
    }

    //  Use Effect to calibrate Inital Puchi Animation
    useEffect(() => {
        anime({
            targets: "#rightArm",
            duration: 3000,
            rotateZ: -250
        })
        anime({
            targets: "#leftArm",
            duration: 3000,
            rotateZ: 250
        })
    },[])
    
    // Use Effect to constantly check and Animate Puchi
    useEffect(() => {

        // console.log(UserData.current.focus())

        UserData.current.onfocus = () => PuchiLook()
        PassBox.current.onfocus = () => PuchiBlind()

        UserData.current.oninput = () => {

            PuchiLook()

            if (UserData.current.value.includes(".com")){
                animate(-13, -15)
                anime({
                    targets: ".Mouth",
                    duration: 1000,
                    height: "5"
                })  
            }

            let letterCount = UserData.current.value.length
            if (letterCount === 0) animate(-13,-15)
            if (letterCount === 1) animate(-22,-8)
            if (letterCount === 2) animate(-21,-5)
            if (letterCount === 3) animate(-20,-4)
            if (letterCount === 4) animate(-19,-2)
            if (letterCount === 5) animate(-18,-2)
            if (letterCount === 6) animate(-17,-2)
            if (letterCount === 7) animate(-16,-2)
            if (letterCount === 8) animate(-15,-2)
            if (letterCount === 9) {
                animate(-14,-2)
                anime({
                    targets: ".Mouth",
                    duration: 1000,
                    height: "5"
                })  
            }

            if (letterCount === 10){
                animate(-13, -2)
                anime({
                    targets:".Mouth",
                    duration: 1000,
                    height: "20"
                })  
            } 
            if (letterCount === 11) animate(-12,-3)
            if (letterCount === 12) animate(-11,-4)
            if (letterCount === 13) animate(-10,-5)
            if (letterCount === 14) animate(-9,-6)
            if (letterCount === 15) animate(-8,-7)
            if (letterCount === 16) animate(-7,-8)
            if (letterCount === 17) {
                animate(-6,-8)
                anime({
                    targets: ".Mouth",
                    duration: 1000,
                    height: "20"
                })  
            }
        }

        PassBox.current.oninput = () => {

            if (PassBox.current.value.length >= 1 && PassBox.current.type === "password"){
                PuchiBlind()
            } 
        }

    })

    // Fetch DataBase Users now obsolete but gonna leave it here just in case

    // useEffect(() => {
    //     axios.get("/UsersInfo/ju324n7423a8zm7nr")
    //         .then(request => {
    //             SetUsersList(request)
    //         })
    //         .catch(err => console.log(`Error: ${err}`))
    // })


    // Handle Info Submit of Login 
    const handleLogInSubmit = e => {

        PuchiLook()
        e.preventDefault()

        let CurrentData = {
            username: UserData.current.value,
            password: PassBox.current.value,
        }

        axios.post("/UsersInfo/login", CurrentData)
            .then(res => {
                if (res.data === "success") {
                    console.log("Succesfuly Authenticated")
                    
                } else {
                    console.log(res.data)
                }
            })
            .catch(err => console.log(`This is FE ERROR: ${err}`))


        // let UserFound = false
        // let idFound = "waiting"

        // for (let c = 0; c < UsersList.data.length; c++){

        //     if ((UserData.current.value === UsersList.data[c].username || UserData.current.value === UsersList.data[c].email) && PassBox.current.value === UsersList.data[c].password){
        //         console.log(`Welcome ${UsersList.data[c].username}`)
        //         UserFound = true
        //         idFound = UsersList.data[c]._id
        //         break
        //     } 
        // }

        // UserFound ? window.location = `/LogedInPage/${idFound}` : console.log("You are not registered in the system")
        
    }

    // Handle Info Submit of Register
    const handleSignUpSubmit = e => {

        PuchiLook()
        e.preventDefault()

        // const HashedPass = bcrypt.hash(PassBox.current.value, 10) 

        let CurrentData = {
            username: UserData.current.value,
            email: EmailBox.current.value,
            password: PassBox.current.value,
        }

        axios.post("/UsersInfo/add", CurrentData)
            .then(res => {
                if (res.data === "User Added"){
                    window.location = "/UserCreated"
                }
            })
            .catch(err => console.log(`This is FE ERROR: ${err}`))
            
    }


    // HTML react renderers of Login and SignUp
    const LoginFormBox = (
        <div className="LoginFormBox" >
            <form>
                <div className="CheckBox">
                    <label>Show Pass</label>
                    <input onClick={() => DisplayPassForm(PassBox)} type="checkbox"></input>
                </div>
                <div className="Row">
                    {/* <label for="LoginUsername"><b></b></label> */}
                    <input className="userI" placeholder="Username or E-mail" ref={UserData} type="text" id="LoginUsername" ></input>
                    <div className="ColorBox1"></div>
                </div>
                <div className="Row">
                    {/* <label for="LoginPassword"><b></b></label> */}
                    <input className="passI" placeholder="Password" ref={PassBox} type="password" id="LoginPassword"></input>
                    <div className="ColorBox2"></div>
                </div>
                <div className="Row">
                    <button onClick={handleLogInSubmit} id="subButton" type="submit">Sign In</button>
                </div>
            </form> 
        </div>
    )

    const SignUpFormBox = (
        <div className="SignUpFormBox" >
            <form>
                <div className="CheckBox2">
                    <label>Show Pass</label>
                    <input onClick={() => DisplayPassForm(PassBox)} type="checkbox"></input>
                </div>
                <div className="Row">
                    <label ><b></b></label>
                    <input placeholder="Username" ref={UserData} className="userI" type="text" id="SingUpUsername" ></input>
                    <div className="ColorBox1"></div>
                </div>
                <div className="Row">
                    <label htmlFor="SingUpEmail"><b></b></label>
                    <input placeholder="Email" ref={EmailBox} className="userI" type="email" id="SingUpEmail" ></input>
                    <div className="ColorBox1"></div>
                </div>
                <div className="Row">
                    <label htmlFor="SingUpPassword"><b></b></label>
                    <input placeholder="Password" ref={PassBox} className="passI" type="password" id="SingUpPassword"></input>
                    <div className="ColorBox2"></div>
                </div>
                <div className="Row">
                    <button formNoValidate onClick={handleSignUpSubmit} id="subButton" type="submit">Register</button>
                </div>
            </form>
        </div>
    )



    // Depending on Button Clicked show a different Forms
    let DisplayedForm = LoginFormBox

    if (props.FormToDisplay === "LoginForms") {
        DisplayedForm = LoginFormBox
    } else {
        DisplayedForm = SignUpFormBox
    }

    return (
        DisplayedForm
    )
}

export default Forms;