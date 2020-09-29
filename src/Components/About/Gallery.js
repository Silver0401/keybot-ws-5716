import React from "react";
import {useTranslation} from "react-i18next";

// Images
import GrpImg1 from "../../Resources/15.jpg";
import GrpImg2 from "../../Resources/16.jpg";
import GrpImg3 from "../../Resources/17.jpg";
import GrpImg4 from "../../Resources/18.jpg";
import GrpImg5 from "../../Resources/19.jpg";
import GrpImg6 from "../../Resources/20.jpg";
import GrpImg7 from "../../Resources/21.jpg";
import GrpImg8 from "../../Resources/stw2.jpg";


const Gallery = () => {

    const {t} = useTranslation()

    return(
        <div className="Gallery">

            <div className="GalleryTitle">
                <h1>{t("About.GalleryTitle")}</h1>
            </div>
            
            <div className="TopRow">
                <div className="Container1">
                    <div className="ImgSpace"> <img alt="GalleryContent" src={GrpImg1}></img> </div>
                    <div className="ImgSpace"> <img alt="GalleryContent" src={GrpImg2}></img> </div>
                    <div className="ImgSpace"> <img alt="GalleryContent" src={GrpImg3}></img> </div>
                    <div className="ImgSpace"> <img alt="GalleryContent" src={GrpImg8}></img> </div>
                </div>
                <div className="Container2">
                    <div className="ImgSpace"> <img alt="GalleryContent" src={GrpImg1}></img> </div>
                    <div className="ImgSpace"> <img alt="GalleryContent" src={GrpImg2}></img> </div>
                    <div className="ImgSpace"> <img alt="GalleryContent" src={GrpImg3}></img> </div>
                    <div className="ImgSpace"> <img alt="GalleryContent" src={GrpImg8}></img> </div>
                </div>
            </div>
            <div className="MiddleRow">
                <div className="Container1">
                    <div className="ImgSpace"> <img alt="GalleryContent" src={GrpImg4}></img> </div>
                    <div className="ImgSpace"> <img alt="GalleryContent" src={GrpImg5}></img> </div>
                    <div className="ImgSpace"> <img alt="GalleryContent" src={GrpImg6}></img> </div>
                    <div className="ImgSpace"> <img alt="GalleryContent" src={GrpImg7}></img> </div>
                </div>
                <div className="Container2">
                    <div className="ImgSpace"> <img alt="GalleryContent" src={GrpImg4}></img> </div>
                    <div className="ImgSpace"> <img alt="GalleryContent" src={GrpImg5}></img> </div>
                    <div className="ImgSpace"> <img alt="GalleryContent" src={GrpImg6}></img> </div>
                    <div className="ImgSpace"> <img alt="GalleryContent" src={GrpImg7}></img> </div>
                </div>
            </div>

            {/* <div className="BottomRow"></div> */}
        </div>
    )
}

export default Gallery