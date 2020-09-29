import React from "react";
import mision from "../../Resources/mision.png"
import vision from "../../Resources/vision.png"
import {useTranslation} from "react-i18next";

const VisMis = () => {

    const {t} = useTranslation()

    return (
      <div className="VisionMision">
        <div className="mision">
          <img src={mision} alt="mision thingy"></img>
          <div className="infoM">
            <h2>{t("About.MisionTitle")}</h2>
            <p>{t("About.MisionInfo")}</p>
          </div>
        </div>
        <div className="vision">
          <img src={vision} alt="vision thingy"></img>
          <div className="infoV">
            <h2>{t("About.VisionTitle")}</h2>
            <p>{t("About.VisionInfo")}</p>
          </div>
        </div>
      </div>
    );
}

export default VisMis