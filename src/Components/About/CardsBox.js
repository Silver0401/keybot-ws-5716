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
import OsbaldoFoto from "../../Resources/Osbaldo.jpg";
import MagalyFoto from "../../Resources/magaly.jpg";

// Bios

const IsmaBio = "Creador de la pagina. Ismael Muñoz Contreras, o mejor conocido como shelas, es actualmente un full stack web developer, con conocmientos avanzados de programación, electrónica y robótica. Asimismo, estudia actualmente la carrera de Medico Cirujano en el Tec de Monterrey campus Monterrey"
const EmiBio = "Emiliano León Chavez: Shaggy para los amigos, me gusta programar, el arte y la salsa cheesy jalapeño con la corteza de la pizza. Si me ves algún día en el equipo puedes contar que te voy a ayudar."
const MemoBio = "Guillermo Navarro - Tesorero 2017-2018 / Jefe de mecánica 2017-2018 / Mentor 2018-2019 / Inicie como un miembro de mecánica y poco a poco desarrolle una gran pasión por el equipo, aprendí más cosas de las que pense, desde diseño hasta un poco de administración al ser parte de la mesa directiva en 2017. Conocí a grandes personas y forme bellas amistades aquí, que aunque hemos tomado caminos diferentes, las sigo estimando demasiado. Tanto me lleno la experiencia en el grupo que pase de querer ser médico a ingeniero, y actualmente estudio robótica, Esta experiencia es una que simplemente no puedes dejar pasar."
const EguzBio = "He sido un mentor de programación para la \"First Robotics Competition\" (FRC) del equipo #5716 desde 2015. FRC Siempre es un desafío, ya que al competir contra más inteligentes y experimentados creadores de robots en el mundo, te ves en la obligación de seguir programando y enseñando de una manera impecable. Eguzki fue el primer mentor de programación del equipo y es muy querido entre toda la comunidad de Keybot, el es la razón de que muchos jovenes hoy en día se entusiasmen por la robótica y la programación. Como una nota del creador de la página: Eguzki es el mejor mentor de programación que he tenido, pero más que eso siempre será mi amigo."
const PaliBio = "Paola Elinora Parga Saucedo mejor conocida como Paly Parga es directora del área de Liderazgo y Vivencia en el Tecnológico de Monterrey. Tiene una licenciatura en administración de empresas por el Tecnológico de Monterrey, además de contar con una maestría y doctorado en Imagen Publica por el Colegio de consultores en Imagen Pública. Ella cree que todo es perfectible y que todo lo que se propongan se puede realizar con pasión. ";
const SiwaBio = "Silvana Torres Ferrera estudia el 8vo semestre de contabilidad y finanzas. Su historia en Keybot comenzó en el 2014 cuando junto con algunos amigos fundaron el equipo. Para la temporada 2015 fue líder del equipo y al graduarse de preparatoria continuo como mentor Jr. en el área de administración. \"Keybot me enseñó a soñar y a llegar al mundial de robótica, definitivamente me cambió la vida y es increíble ver cómo años después le sigue cambiando la vida a las nuevas generaciones\""
const DavoBio = "Para mí Keybot significa más que un equipo de robótica, es una familia que día a día crece más, una familia que al llegar a ella nunca deja de sorprendente, te enseña no sólo sobre tu área sino de la vida en general, te da competencias y habilidades que en ningún otro lado vas a encontrar, las personas con las que te encuentras pasan a convertirse de completos desconocidos a tus hermanos. Las experiencias que te deja a lo largo del camino siempre te enseñan algo y te vuelven mejor alumno y persona. Agradezco infinitamente a Keybot por lo que me enseñó a lo largo de mi prepa y me llevo todas las experiencias y sobre todo una gran familia a la que uno siempre va a pertenecer. Keybot es un cachito de mí.";
const MagalyBio = "Licenciada en Mercadotecnia Internacional con experiencia en organización de eventos, promoción y administración de nómina, así como en creación y desarrollo del departamento de promoción de un Colegio en la Ciudad de México. Actualmente apoyo en redes sociales y desarrollo de nuevos productos en una empresa dulcera de México y participando como mentora en el área de mercadotecnia de ¡Keybot!"
const LuisBio = "Luis Enrique Sánchez, profesor del departamento de Ciencias de PrepaTec. Mi historia en Keybot comenzó en el 2019 cuando me invitan a participar como Head Coach. En esa temporada tuvimos la oportunidad de quedar como finalistas en el regional de Campus Santa Fe, lo que nos dio el pase al Campeonato Mundial en Houston. \"Keybot me ha enseñado el gran potencial que tienen nuestros alumnos cuando persiguen sus sueños con pasión y disciplina\". "
const OsbaldoBio = "Osbaldo Becerra, profesor del Tecnológico de Monterrey con una Maestría en ciencias en electrónica, diseño de circuitos integrados. Posgrado en el instituto nacional de astrofísica, óptica y electrónica (INAOE), en Tonantzinta, Puebla. Experiencia en diferentes áreas y empresas como electro fotónica y diseño electrónico en Axón, líder de ingeniería para creación del canal 26 del gobierno del estado de Puebla, en la transmisión de señal de tv en Once TV y catedrático en la Universidad politécnica de Pachuca. Actualmente apoya como mentor de electrónica al equipo de Keybot!"

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
	CreateCard("Emiliano L.C", EmiFoto, EmiBio, "Mentors", "card2") 
	CreateCard("Guillermo", MemoFoto, MemoBio, "Mentors", "card3") 
	CreateCard("Davo E.", davoFoto, DavoBio, "Mentors", "card7")
	CreateCard("Salma", SalmaFoto, "missing bio", "Mentors", "card9")
	CreateCard("Silvana T.", siwaFoto, SiwaBio, "Mentors", "card10")

	CreateCard("Sofia", SofiFoto, "missing bio", "Leaders", "card4")
	CreateCard("Abigail H.", AbiFoto, "missing bio", "Leaders", "card5")
	CreateCard("Rodrigo", rodriFoto, "missing bio", "Leaders", "card6")
	CreateCard("Mariana", mariFoto, "missing bio", "Leaders", "card8")

	CreateCard("Magaly", MagalyFoto, MagalyBio, "Coaches", "card16")
	CreateCard("Paola P.E.", PaliFoto, PaliBio, "Coaches", "card12")
	CreateCard("Eguzki A.M.", eguzFoto, EguzBio, "Coaches", "card13")
	CreateCard("Luis S.G.", QuiquinFoto, LuisBio, "Coaches", "card11")
	CreateCard("Carlos M.D.", mayaFoto, "missing bio", "Coaches", "card14")
	CreateCard("Osbaldo B.", OsbaldoFoto, OsbaldoBio, "Coaches", "card15")

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