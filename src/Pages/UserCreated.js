import React from "react";
import Added from "./../Resources/Added.svg"

const UserCreated = () => {
    return(
        <div className="UserCreatedPage">

            <h1>Your Account has Been Created!</h1>

            <img alt="rocket box" src={Added}></img>

            <a href="/">Click here to go back to home</a>

        </div>
    )
}

export default UserCreated