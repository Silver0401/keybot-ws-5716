import React from "react";
import {useTranslation} from "react-i18next";

const HistoryBox = () => {

    const {t} = useTranslation()

    return (
      <div className="HistoryBox">
        <h1>{t("About.historyTitle")}</h1>
        <div className="HistoryInfo">
          <p className="">{t("About.history")}</p>
        </div>
      </div>
    );
}

export default HistoryBox