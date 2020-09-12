import React from "react";

const CardsBox = () => {

    const CreateCard = (Name,Img,Bio) => {
        
        let DesiredCard = (
            <div className="DisplayCard">
                <div className="ImgBox">{Img}</div>
                <h1>{Name}</h1>
                <p>{Bio}</p>
            </div>
        )

        return(
            DesiredCard
        )
    }

    const SwapCard = () => {
        
    }

    return (
        <div className="CardsBox">
            
            <div className="Card Progras">
                
                {CreateCard("Ismael M.C.","ImagenIsma aqui", "esta es mi bio")}

                <div className="SwapCard">
                    <div className="leftArrowBox">
                        <div className="triangle"></div>
                    </div>
                    <h1>The Programmers</h1>
                    <div className="rightArrowBox">
                        <div className="triangle"></div>
                    </div>
                </div>
            </div>

            <div className="Card Mentors">
                {CreateCard("Ismael M.C.","ImagenIsma aqui", "esta es mi bio")}
                <div className="SwapCard">
                    <div className="leftArrowBox">
                        <div className="triangle"></div>
                    </div>
                    <h1>Mentors</h1>
                    <div className="rightArrowBox">
                        <div className="triangle"></div>
                    </div>
                </div>
            </div>

            <div className="Card Admins">
                {CreateCard("Ismael M.C.","ImagenIsma aqui", "esta es mi bio")}
                <div className="SwapCard">
                    <div className="leftArrowBox">
                        <div className="triangle"></div>
                    </div>
                    <h1>Administrators</h1>
                    <div className="rightArrowBox">
                        <div className="triangle"></div>
                    </div>
                </div>
            </div>

            <div className="Card Mechas">
                {CreateCard("Ismael M.C.","ImagenIsma aqui", "esta es mi bio")}
                <div className="SwapCard">
                    <div className="leftArrowBox">
                        <div className="triangle"></div>
                    </div>
                    <h1>The Mechanics</h1>
                    <div className="rightArrowBox">
                        <div className="triangle"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardsBox