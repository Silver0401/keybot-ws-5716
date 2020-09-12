import React from "react";

const Forms = (props) => {

    
    const LoginFormBox = (
        <div className="LoginFormBox" >
            <form>
                <div className="Row">
                    <label for="username"><b>Username</b></label><br />
                    <input className="userI" type="text" name="username" ></input>
                    <div className="ColorBox1"></div>
                </div>
                <div className="Row">
                    <label for="password"><b>Password</b></label><br />
                    <input className="passI" type="password" name="password"></input>
                    <div className="ColorBox2"></div>
                </div>

            </form>
        </div>
    )

    const SignUpFormBox = (
        <div className="SignUpFormBox" >
            <form>
                <div className="Row">
                    <label for="username"><b>Username</b></label>
                    <input className="userI" type="text" name="UserName" ></input>
                    <div className="ColorBox1"></div>
                </div>
                <div className="Row">
                    <label for="username"><b>Email</b></label>
                    <input className="userI" type="text" name="email" ></input>
                    <div className="ColorBox1"></div>
                </div>
                <div className="Row">
                    <label for="password"><b>Password</b></label>
                    <input className="passI" type="password" name="password"></input>
                    <div className="ColorBox2"></div>
                </div>

            </form>
        </div>
    )

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