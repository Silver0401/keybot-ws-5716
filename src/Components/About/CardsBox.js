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
import EuegeFoto from "../../Resources/euge.jpg";
import AleFoto from "../../Resources/ale.jpg";
import ItzelFoto from "../../Resources/Itzel.jpg";
import NadiaFoto from "../../Resources/nadia.jpg";
import KarlaFoto from "../../Resources/karla.jpg";
import MemeFoto from "../../Resources/guille.jpg";
import PaolaFoto from "../../Resources/paola.jpg";


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
const SofiaBio = "Mi nombre es Sofía González, aunque me gusta más que me llamen Sofi. Tengo 16 años y soy coordinadora general en el equipo de robótica de Keybot. He probado todo tipo de deporte y baile, pero el que más me ha gustado es la danza irlandesa, en la cual asistí a varias competencias.";
const AbiBio = "Mi nombre es Karla Abigail Henkel Bustamante. Soy la líder de finanzas. La mayoría me llama Aby o Karla. Me gusta bailar, cantar y jugar tenis.";
// Rodrigo bio missing (temporal bio)
const RodriBio = "Rodrigo Vázquez Hernández. Alumno de tercer semestre que ha formado parte del equipo durante todo su primer año de preparatoria. Ha estado en el área de administración y ha desempeñado tareas de mercadotecnia y scouting. Asistió al regional de Monterrey 2020. Ha participado en grupos estudiantiles como teateTie HidalMUN. Tiene un promedio de 97. ";
const MariBio = "Mi nombre es Mariana, y me gusta que me digan así. Tengo 17 años y soy líder de patrocinios. Un fun fact mío es que me encantan las series de repostería.";
const AleBio = "Me llamo Alessa, me gusta que me digan Ale y tengo 17 años. Soy la presidenta de la gestión 2020 - 2021 de Keybot. Considero que nuestro equipo, más que un equipo, es una familia. Un fun fact acerca de mi es que: adoro a los animales, a tal punto que he tenido desde perros y gatos, hasta conejos y patos. "
const ItzelBio = "Soy Itzel Castellanos, tengo 17 años y soy líder de Chairman's, me gusta todo lo relacionado con las artes en especial la música y el dibujo, un fun fact sobre mi es que soy muy distraída con mis cosas, un día llegue a perder un solo zapato en el Schoolastico"
const EugeBio = "Hola! Soy Eugenia De Jesus Rangel tengo 17 años. Soy la Líder del área de programación/electrónica y vicepresidenta del equipo para esta gestión de 2020 a 2021. Fun fact: Me gusta andar en motocicleta.";
const NadiaBio = "Hola me llamo Nadia Belem, me gusta que me digan nadia y detesto el nombre de belem. Tengo 17 años y soy la lider del área de mercadotecnia de la gestión 2020 - 2021. Un random fact mio: Me gusta viajar mucho y adoro los chihuahas."
// Bennet bio missing (temporal bio)
const BennetBio = ""
const KarlaBio = "Me llamo Karla Yenitzia Alducin Guzmán, líder de administración, tengo 17 años, mi segundo nombre es maya y significa segundo amanecer. He vivido en 9 estados de la república. Me gusta que me digan más por mi segundo nombre, pero no tengo ningún problema con ninguno de los dos. Mi fun fact es que cuando estoy nerviosa, me trueno los dedos de la mano";
const MemeBio = "Estudiante del tecnológico de Monterrey campus Hidalgo,ex-Columbia,líder de neumática ,18 años de edad,le gusta el synthwave y odia la banda/reggaetón/cumbia Fun fact: me llaman meme (no pregunten)"
const PaolaBio = "Me llamo Paola Salomón, pero me gusta que me digan Pao. Tengo 17 años. Soy líder de acción social de la gestión de keybot 2020-2021. Me gusta mucho jugar Tenis.";

const CardsBox = () => {
  const [MentorsCounter, changeMentorsCounter] = useState(0);
  const [CoachesCounter, changeCoachesCounter] = useState(0);
  const [LeadersCounter, changeLeadersCounter] = useState(0);
  let counter = 0;
  let prev_target = "none";

  let CoachesCardList = [];
  let MentorsCardList = [];
  let LeadersCardList = [];

  const CreateCard = (Name, Img, Bio, Box, AnimID) => {
    let DesiredCard = (
      <div id={AnimID} onClick={() => FlipCard(AnimID)} className="DisplayCard">
        <div className="ImgBox">
          <img id={`${AnimID}Img`} alt="coso" src={Img}></img>
        </div>
        <h1>{Name}</h1>
        <h4>Click to see Bio</h4>
        <div id={`${AnimID}Bio`} className="bio">
          <p>{Bio}</p>
        </div>
      </div>
    );

    switch (Box) {
      case "Coaches":
        CoachesCardList.push(DesiredCard);
        break;
      case "Mentors":
        MentorsCardList.push(DesiredCard);
        break;
      case "Leaders":
        LeadersCardList.push(DesiredCard);
        break;
      default:
    }
  };

  const SwapDisplayedCard = (boxName, arrowDirection) => {
    switch (boxName) {
      case "Mentors":
        if (
          arrowDirection === "right" &&
          MentorsCounter < MentorsCardList.length - 1
        ) {
          changeMentorsCounter(MentorsCounter + 1);
        } else if (arrowDirection === "right") {
          changeMentorsCounter(0);
        }

        if (arrowDirection === "left" && MentorsCounter !== 0) {
          changeMentorsCounter(MentorsCounter - 1);
        } else if (arrowDirection === "left") {
          changeMentorsCounter(MentorsCardList.length - 1);
        }
        break;
      case "Coaches":
        if (
          arrowDirection === "right" &&
          CoachesCounter < CoachesCardList.length - 1
        ) {
          changeCoachesCounter(CoachesCounter + 1);
        } else if (arrowDirection === "right") {
          changeCoachesCounter(0);
        }

        if (arrowDirection === "left" && CoachesCounter !== 0) {
          changeCoachesCounter(CoachesCounter - 1);
        } else if (arrowDirection === "left") {
          changeCoachesCounter(CoachesCardList.length - 1);
        }
        break;
      case "Leaders":
        if (
          arrowDirection === "right" &&
          LeadersCounter < LeadersCardList.length - 1
        ) {
          changeLeadersCounter(LeadersCounter + 1);
        } else if (arrowDirection === "right") {
          changeLeadersCounter(0);
        }

        if (arrowDirection === "left" && LeadersCounter !== 0) {
          changeLeadersCounter(LeadersCounter - 1);
        } else if (arrowDirection === "left") {
          changeLeadersCounter(LeadersCardList.length - 1);
        }
        break;
      default:
    }
  };

  const DisplayCardsList = (ListToDisplay) => {
    switch (ListToDisplay) {
      case "Coaches":
        return CoachesCardList[CoachesCounter];
      case "Mentors":
        return MentorsCardList[MentorsCounter];
      case "Leaders":
        return LeadersCardList[LeadersCounter];
      default:
    }
  };

  const FlipCard = (target) => {
    if (prev_target !== target) {
      counter = 0;
    }

    console.log(target);
    if (counter % 2 === 0) {
      anime({
        targets: `#${target}`,
        duration: 4000,
        rotateX: "180",
      });

      anime({
        targets: `#${target}Img`,
        duration: 4000,
        opacity: 0,
      });

      anime({
        targets: `#${target}Bio`,
        duration: 4000,
        opacity: 1,
      });
    } else {
      anime({
        targets: `#${target}`,
        duration: 4000,
        rotateX: "0",
      });

      anime({
        targets: `#${target}Img`,
        duration: 4000,
        opacity: 1,
      });

      anime({
        targets: `#${target}Bio`,
        duration: 4000,
        opacity: 0,
      });
    }
    prev_target = target;
    counter += 1;
  };

  const CreateBio = (Info) => {
    return <p>{Info}</p>;
  };

  CreateCard("Ismael M.C.", IsmaFoto, IsmaBio, "Mentors", "card1");
  CreateCard("Emiliano L.C", EmiFoto, EmiBio, "Mentors", "card2");
  CreateCard("Guillermo", MemoFoto, MemoBio, "Mentors", "card3");
  CreateCard("Davo E.", davoFoto, DavoBio, "Mentors", "card7");
  CreateCard("Salma", SalmaFoto, "missing bio", "Mentors", "card9");
  CreateCard("Silvana T.", siwaFoto, SiwaBio, "Mentors", "card10");

  CreateCard("Nadia B.", NadiaFoto, NadiaBio, "Leaders", "card20") 
  CreateCard("Alessa M.C", AleFoto, AleBio, "Leaders", "card18") 
  CreateCard("Sofia G.", SofiFoto, SofiaBio, "Leaders", "card4"); // ---
  CreateCard("Abigail H.", AbiFoto, AbiBio, "Leaders", "card5"); // Ya esta bio
  CreateCard("Rodrigo V.", rodriFoto, RodriBio, "Leaders", "card6"); // ---
  CreateCard("Mariana M.", mariFoto, MariBio, "Leaders", "card8"); // Ya esta bio
  CreateCard("Eugenia", EuegeFoto, EugeBio, "Leaders", "card17") 
  CreateCard("Itzel C.", ItzelFoto, ItzelBio, "Leaders", "card19") 
  CreateCard("Karla Y.", KarlaFoto, KarlaBio, "Leaders", "card22")
  CreateCard("Guillermo M.H.", MemeFoto, MemeBio, "Leaders", "card23")
  CreateCard("Paola S.", PaolaFoto, PaolaBio, "Leaders", "card24")

  // CreateCard("Bennet A.", mariFoto, MariBio, "Leaders", "card21")

  CreateCard("Eguzki A.M.", eguzFoto, EguzBio, "Coaches", "card13");
  CreateCard("Magaly", MagalyFoto, MagalyBio, "Coaches", "card16");
  CreateCard("Paola P.E.", PaliFoto, PaliBio, "Coaches", "card12");
  CreateCard("Luis S.G.", QuiquinFoto, LuisBio, "Coaches", "card11");
  CreateCard("Carlos M.D.", mayaFoto, "missing bio", "Coaches", "card14");
  CreateCard("Osbaldo B.", OsbaldoFoto, OsbaldoBio, "Coaches", "card15");

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