import React from "react";
import {useTranslation} from "react-i18next";

const Footer = () => {

    const {t} = useTranslation()

    return (
        <div className="Footer">
            <h3>©Keybot - 2020 {t("About.Footer")} </h3>
        </div>
    )
}

export default Footer