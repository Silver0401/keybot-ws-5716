import React, { useState } from "react";
import anime from "animejs";

// Photos
import IsmaFoto from "../../Resources/isma.jpeg";
import EmiFoto from "../../Resources/emi.jpeg";
import MemoFoto from "../../Resources/memo2.jpeg";
import SofiFoto from "../../Resources/sofi.jpg";
import AbiFoto from "../../Resources/abi.jpg";
import davoFoto from "../../Resources/davo.jpg";
import mariFoto from "../../Resources/mari.jpg";
import rodriFoto from "../../Resources/rodri.jpg";
import PaliFoto from "../../Resources/pali.jpg";
import QuiquinFoto from "../../Resources/luis.jpg";
import eguzFoto from "../../Resources/eguz.jpg";
import mayaFoto from "../../Resources/maya.jpg";
import SalmaFoto from "../../Resources/Salma.jpg";
import siwaFoto from "../../Resources/siwa.jpg";

// Bios

const IsmaBio = "Creator of this website, currently studying medicine and a full stack web-developer, That's me. If you wanna know more about me here's the link to my Personal WebSite: https://silver0401 .github.io/"

const CardsBox = () => {

	const [MentorsCounter, changeMentorsCounter] = useState(0)
	const [CoachesCounter, changeCoachesCounter] = useState(0)
	const [LeadersCounter, changeLeadersCounter] = useState(0)
	let counter = 0
	let prev_target = "none"

	let CoachesCardList = []
	let MentorsCardList = []
	let LeadersCardList = []

	const CreateCard = (Name,Img,Bio,Box, AnimID) => {
		
		let DesiredCard = (
      <div id={AnimID} onClick={() => FlipCard(AnimID)} className="DisplayCard">
        <div className="ImgBox">
          <img id={`${AnimID}Img`} alt="coso" src={Img}></img>
        </div>
        <h1>{Name}</h1>
        <h4>Click to se Bio</h4>
        <div id={`${AnimID}Bio`} className="bio">
          <p>{Bio}</p>
        </div>
      </div>
    );

		switch (Box){
			case "Coaches":
				CoachesCardList.push(DesiredCard);
				break
			case "Mentors":
				MentorsCardList.push(DesiredCard);
				break
			case "Leaders":
				LeadersCardList.push(DesiredCard);
				break
			default:
		}

	}

	const SwapDisplayedCard = (boxName, arrowDirection) => {

		switch (boxName){
			case "Mentors":
				if (arrowDirection === "right" && MentorsCounter < MentorsCardList.length -1 ) {
					changeMentorsCounter(MentorsCounter + 1) 
		} else if (arrowDirection === "right") {
		  changeMentorsCounter(0) 
		}
			  
				if (arrowDirection === "left" && MentorsCounter !== 0){
					changeMentorsCounter(MentorsCounter - 1);
				} else if (arrowDirection === "left") {
					changeMentorsCounter(MentorsCardList.length - 1);
				}
				break
			case "Coaches":
				if (arrowDirection === "right" && CoachesCounter < CoachesCardList.length - 1) {
					changeCoachesCounter(CoachesCounter + 1)
				} else if (arrowDirection === "right") {
					changeCoachesCounter(0)
				}

				if (arrowDirection === "left" && CoachesCounter !== 0) {
					changeCoachesCounter(CoachesCounter - 1);
				} else if (arrowDirection === "left") {
					changeCoachesCounter(CoachesCardList.length - 1);
				}
				break
			case "Leaders":
				if (arrowDirection === "right" && LeadersCounter < LeadersCardList.length - 1) {
					changeLeadersCounter(LeadersCounter + 1)
				} else if (arrowDirection === "right") {
					changeLeadersCounter(0)
				}

				if (arrowDirection === "left" && LeadersCounter !== 0) {
					changeLeadersCounter(LeadersCounter - 1);
				} else if (arrowDirection === "left") {
					changeLeadersCounter(LeadersCardList.length - 1);
				}
				break
			default:
		}
	}

	const DisplayCardsList = (ListToDisplay) => {

		switch (ListToDisplay){
			case "Coaches":
				return CoachesCardList[CoachesCounter]; 
			case "Mentors":
				return MentorsCardList[MentorsCounter]; 
			case "Leaders":
				return LeadersCardList[LeadersCounter]; 
			default:
		}
	}

	const FlipCard = (target) => {
		if (prev_target !== target){
			counter = 0
		}

		console.log(target)
		if (counter % 2 === 0){
			anime({
				targets: `#${target}`,
				duration: 4000,
				rotateX: "180"
			})

			anime({
				targets: `#${target}Img`,
				duration: 4000,
				opacity: 0
			})

			anime({
				targets: `#${target}Bio`,
				duration: 4000,
				opacity: 1
			})

		} else {
			anime({
				targets: `#${target}`,
				duration: 4000,
				rotateX: "0"
			})				
		
			anime({
				targets: `#${target}Img`,
				duration: 4000,
				opacity: 1
			})

			anime({
				targets: `#${target}Bio`,
				duration: 4000,
				opacity: 0
			})
		}
		prev_target = target
		counter += 1
	}

	const CreateBio = (Info) => {
		return(
			<p>
				{Info}
			</p>
		)
	}
	  
	CreateCard("Ismael M.C.", IsmaFoto, IsmaBio, "Mentors", "card1") 
	CreateCard("Emiliano L.C", EmiFoto, "esta es mi bio", "Mentors", "card2") 
	CreateCard("Guillermo", MemoFoto, "esta es mi bio", "Mentors", "card3") 
	CreateCard("Davo E.", davoFoto, "esta es mi bio", "Mentors", "card7")
	CreateCard("Salma", SalmaFoto, "esta es mi bio", "Mentors", "card9")
	CreateCard("Silvana T.", siwaFoto, "esta es mi bio", "Mentors", "card10")

	CreateCard("Sofia", SofiFoto, "esta es mi bio", "Leaders", "card4")
	CreateCard("Abigail H.", AbiFoto, "esta es mi bio", "Leaders", "card5")
	CreateCard("Rodrigo", rodriFoto, "esta es mi bio", "Leaders", "card6")
	CreateCard("Mariana", mariFoto, "esta es mi bio", "Leaders", "card8")

	CreateCard("Luis S.G.", QuiquinFoto, "esta es mi bio", "Coaches", "card11")
	CreateCard("Paola P.E.", PaliFoto, "esta es mi bio", "Coaches", "card12")
	CreateCard("Eguzki A.M.", eguzFoto, "esta es mi bio", "Coaches", "card13")
	CreateCard("Carlos M.D.", mayaFoto, "esta es mi bio", "Coaches", "card14")

	return (
	  <div className="CardsBox">

		<div className="LargeCardsBox">

			<div className="Card">
				<h2>Mentors</h2>

				{DisplayCardsList("Mentors")}

				<div className="SwapCard">
					<div
						onClick={() => SwapDisplayedCard("Mentors", "left")}
						className="leftArrowBox"
					>
						<div className="triangle"></div>
					</div>
					<div
						onClick={() => SwapDisplayedCard("Mentors", "right")}
						className="rightArrowBox"
					>
						<div className="triangle"></div>
					</div>
				</div>
			</div>

			<div className="Card">
				<h2>Leaders</h2>

				{DisplayCardsList("Leaders")}

				<div className="SwapCard">
					<div
						onClick={() => SwapDisplayedCard("Leaders", "left")}
						className="leftArrowBox"
					>
						<div className="triangle"></div>
					</div>

					<div
						onClick={() => SwapDisplayedCard("Leaders", "right")}
						className="rightArrowBox"
					>
						<div className="triangle"></div>
					</div>
				</div>
			</div>

		</div>

		<div className="SmallCardsBox">

			<div className="Card">
				<h2>Coaches</h2>

				{DisplayCardsList("Coaches")}

				<div className="SwapCard">
					<div
						onClick={() => SwapDisplayedCard("Coaches", "left")}
						className="leftArrowBox"
					>
						<div className="triangle"></div>
					</div>
					<div
						onClick={() => SwapDisplayedCard("Coaches", "right")}
						className="rightArrowBox"
					>
						<div className="triangle"></div>
					</div>
				</div>
			</div>
		
		</div>

	  </div>
	);
}

export default CardsBox