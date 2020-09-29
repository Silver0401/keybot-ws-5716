import React, { useState } from "react";
import anime from "animejs";
import {useTranslation} from "react-i18next";

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

const CardsBox = () => {

  const {t} = useTranslation()

  let IsmaBio = t("About.IsmaBio")
  let EmiBio = t("About.EmiBio")
  let MemoBio = t("About.MemoBio")
  let EguzBio = t("About.EguzBio")
  let PaliBio = t("About.PaliBio")
  let SiwaBio = t("About.SiwaBio")
  let DavoBio = t("About.DavoBio")
  let MagalyBio = t("About.MagalyBio")
  let LuisBio = t("About.LuisBio")
  let OsbaldoBio = t("About.OsbaldoBio")
  let SofiaBio = t("About.SofiaBio")
  let AbiBio = t("About.AbiBio")
// Rodrigo bio missing (temporal bio)
  let RodriBio = t("About.RodriBio")
  let MariBio = t("About.MariBio")
  let AleBio = t("About.AleBio")
  let ItzelBio = t("About.ItzelBio")
  let EugeBio = t("About.EugeBio")
  let NadiaBio = t("About.NadiaBio")
// Bennet bio missing (temporal bio)
  let BennetBio = t("About.BennetBio")
  let MayaBio = t("About.MayaBio")
  let SalmaBio = t("About.SalmaBio")
  let KarlaBio = t("About.KarlaBio")
  let MemeBio = t("About.MemeBio")
  let PaolaBio = t("About.PaolaBio")

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
        <h4>{t("About.CardsClick")}</h4>
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
  CreateCard("Salma", SalmaFoto, SalmaBio, "Mentors", "card9");
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
  CreateCard("Carlos M.D.", mayaFoto, MayaBio, "Coaches", "card14");
  CreateCard("Osbaldo B.", OsbaldoFoto, OsbaldoBio, "Coaches", "card15");

  return (
    <div className="CardsBox">
      <div className="LargeCardsBox">
        <div className="Card">
          <h2>{t("About.CardsMentors")}</h2>

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
          <h2>{t("About.CardsLeaders")}</h2>

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
          <h2>{t("About.CardsCoaches")}</h2>

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