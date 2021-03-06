import React, {useState} from "react";
import { useSpring, animated} from 'react-spring';
import {useTranslation} from "react-i18next";

const FirstSeasonBox = (props) => {

    const {t} = useTranslation()

    const [RRButtonPressed, setRRButton] = useState(false)
    const [SHButtonPressed, setSHButton] = useState(false)
    const [SWButtonPressed, setSWButton] = useState(false)
    const [PUButtonPressed, setPUButton] = useState(false)
    const [DSButtonPressed, setDSButton] = useState(false)
    const [IRButtonPressed, setIRButton] = useState(false)
    const [GCButtonPressed, setGCButton] = useState(false)
    const [AFButtonPressed, setAFButton] = useState(false)

    const ResetButtons = () => {
        setRRButton(false)
        setSHButton(false)
        setSWButton(false)
        setPUButton(false)
        setDSButton(false)
        setIRButton(false)
        setGCButton(false)
        setAFButton(false)
    }

    const ButtonAnimation = (desiredColor, name, styleClass) => {

        let GlobalButtonState = "none"
        let renderedButton = (<div>default</div>)

        switch (name){
            case "Recycle Rush":
                GlobalButtonState = RRButtonPressed
                
                break
            case "Strong Hold":
                GlobalButtonState = SHButtonPressed

                break
            case "Steam Works":
                GlobalButtonState = SWButtonPressed
                break
            case "Power Up":
                GlobalButtonState = PUButtonPressed
                break
            case "Deep Space":
                GlobalButtonState = DSButtonPressed
                break
            case "Infinite Recharge":
                GlobalButtonState = IRButtonPressed
                break
            case "Game Changers":
                GlobalButtonState = GCButtonPressed
                break
            case "About First":
                GlobalButtonState = AFButtonPressed
                break
            default: 
                GlobalButtonState = "none chosen"
        }

        const ImgColor = {
            fill: GlobalButtonState ? desiredColor: "grey",
        }

        const colorVar = useSpring({
            color: GlobalButtonState ? desiredColor : "grey",
        // boxShadow: GlobalButtonState ? `7px 7px 25px white, -5px - 5px 10px rgba(1, 11, 14, 0.733),inset 7px 7px 25px black, inset - 5px - 5px 10px grey` : "box - shadow: 7px 7px 25px black, - 5px - 5px 10px rgba(1, 11, 14, 0.733),inset 7px 7px 25px black, inset - 5px - 5px 10px grey"
        })
        
        switch (name){
            case "Recycle Rush":

                renderedButton = (

                    <div onClick={() => {
                        ResetButtons()
                        setRRButton(!RRButtonPressed)
                        props.ButtonValue("RecycleRush")
                    }} className={`${styleClass} ${RRButtonPressed ? "ButtonClicked" : "ButtonNotClicked"}`} style={ImgColor}>

                        <animated.div className="TBox" style={colorVar}>
                            <h1>{name}</h1>
                        </animated.div>

                        <svg width="100" height="100" viewBox="0 0 66 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path style={ImgColor}  d="M35.7553 11.0038C36.0304 10.9537 36.2138 10.6956 36.1648 10.4274L35.3676 6.05704C35.3187 5.78885 35.056 5.61213 34.7809 5.66231C34.5058 5.71249 34.3225 5.97058 34.3714 6.23876L35.0801 10.1235L31.0953 10.8504C30.8203 10.9006 30.6369 11.1587 30.6858 11.4269C30.7348 11.6951 30.9974 11.8718 31.2725 11.8216L35.7553 11.0038ZM24.4833 3.59613L35.3772 10.9259L35.9563 10.1106L25.0624 2.7809L24.4833 3.59613Z" fill="black" />
                                <rect style={ImgColor}  width="8.79905" height="23.8793" transform="matrix(0.737871 0.674942 -0.693179 0.720765 30.8688 12.6289)" fill="#C4C4C4" />
                                <rect style={ImgColor}  width="8.84417" height="21.1177" transform="matrix(0.693179 -0.720765 0.737871 0.674942 24.7382 19.0035)" fill="#C4C4C4" />
                                <path style={ImgColor}  d="M45.9826 32.445L36.2909 33.9568L46.9094 22.9157L45.9826 32.445Z" fill="#C4C4C4" />
                                <rect style={ImgColor}  y="61.4324" width="10" height="27" transform="rotate(-64.557 0 61.4324)" fill="#C4C4C4" />
                                <rect style={ImgColor}  x="9.03015" y="65.7286" width="10" height="24" transform="rotate(-154.557 9.03015 65.7286)" fill="#C4C4C4" />
                                <path style={ImgColor}  d="M16.5443 38.2961L21.4647 48.112L5.82404 40.6709L16.5443 38.2961Z" fill="#C4C4C4" />
                                <rect style={ImgColor}  x="63.9809" y="61.9076" width="10" height="27" transform="rotate(157.986 63.9809 61.9076)" fill="#C4C4C4" />
                                <rect style={ImgColor}  x="60.2325" y="52.6367" width="10" height="24" transform="rotate(67.9856 60.2325 52.6367)" fill="#C4C4C4" />
                                <path style={ImgColor}  d="M36.1482 67.7676L39.1598 57.2086L45.6522 73.2663L36.1482 67.7676Z" fill="#C4C4C4" />
                        </svg>

                    </div>
                )
                break

            case "Strong Hold":

                renderedButton = (
                    <div onClick={() => {
                        ResetButtons()
                        setSHButton(!SHButtonPressed)
                        props.ButtonValue("StrongHold")
                    }} className={`${styleClass} ${SHButtonPressed ? "ButtonClicked" : "ButtonNotClicked"}`}>
                        <animated.div className="TBox" style={colorVar}>
                            <h1>{name}</h1>
                        </animated.div>

                        <svg width="75" height="59" viewBox="0 0 75 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path style={ImgColor} d="M71.1227 10.7057L40.3595 15.7357L67.7609 10L71.1227 10.7057Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M43.7213 16.4452L74.4867 11.4119L74.4759 53.603L43.7213 16.4452Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M74.4867 11.4119L43.7213 16.4452L71.1227 10.7057L74.4867 11.4119ZM40.3595 15.7357L37 15.0267L67.7609 10L40.3595 15.7357Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M74.4759 53.603L43.7321 58.7309L43.7213 16.4452L74.4759 53.603Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M40.3727 58.0081L37.0156 57.2857L37 15.0267L40.3727 58.0081ZM43.7213 16.4452L40.3595 15.7357L71.1227 10.7057L43.7213 16.4452ZM43.7321 58.7309L40.3727 58.0081L40.3595 15.7357L43.7321 58.7309ZM40.3595 15.7357L40.3727 58.0081L37 15.0267L40.3595 15.7357ZM43.7213 16.4452L43.7321 58.7309L40.3595 15.7357L43.7213 16.4452Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M3.36395 10.7057L34.1271 15.7357L6.72572 10L3.36395 10.7057Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M30.7654 16.4452L0 11.4119L0.010788 53.603L30.7654 16.4452Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M0 11.4119L30.7654 16.4452L3.36397 10.7057L0 11.4119ZM34.1271 15.7357L37.4867 15.0267L6.72574 10L34.1271 15.7357Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M0.0107727 53.603L30.7546 58.7309L30.7654 16.4452L0.0107727 53.603Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M34.1139 58.0081L37.4711 57.2857L37.4866 15.0267L34.1139 58.0081ZM30.7654 16.4452L34.1271 15.7357L3.36395 10.7057L30.7654 16.4452ZM30.7546 58.7309L34.1139 58.0081L34.1271 15.7357L30.7546 58.7309ZM34.1271 15.7357L34.1139 58.0081L37.4866 15.0267L34.1271 15.7357ZM30.7654 16.4452L30.7546 58.7309L34.1271 15.7357L30.7654 16.4452Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M0 0.965624L5.0393 2.26298L2.97733 0L0 0.965624ZM5.01542 13L7.94903 11.8558L8 1.26099L5.01542 13ZM5.0393 2.26298L8 1.26099L2.97733 0L5.0393 2.26298Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M5.0393 2.26296L0 0.965607L0.0230182 11.5184L5.0393 2.26296ZM0.0230182 11.5184L5.01542 13L5.0393 2.26296L0.0230182 11.5184Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M5.03929 2.26297L5.0154 13L7.99999 1.26099L5.03929 2.26297Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M13 2.96562L18.0393 4.26298L15.9773 2L13 2.96562ZM18.0154 15L20.949 13.8558L21 3.26099L18.0154 15ZM18.0393 4.26298L21 3.26099L15.9773 2L18.0393 4.26298Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M18.0393 4.26296L13 2.96561L13.023 13.5184L18.0393 4.26296ZM13.023 13.5184L18.0154 15L18.0393 4.26296L13.023 13.5184Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M18.0393 4.26297L18.0154 15L21 3.26099L18.0393 4.26297Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M26 4.96562L31.0393 6.26298L28.9773 4L26 4.96562ZM31.0154 17L33.949 15.8558L34 5.26099L31.0154 17ZM31.0393 6.26298L34 5.26099L28.9773 4L31.0393 6.26298Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M31.0393 6.26296L26 4.96561L26.023 15.5184L31.0393 6.26296ZM26.023 15.5184L31.0154 17L31.0393 6.26296L26.023 15.5184Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M31.0393 6.26297L31.0154 17L34 5.26099L31.0393 6.26297Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M74.088 1.02425L69.0393 2.28462L71.1178 0.0368244L74.088 1.02425ZM68.9845 13.0215L66.0593 11.8559L66.0861 1.26096L68.9845 13.0215ZM69.0393 2.28462L66.0861 1.26096L71.1178 0.0368244L69.0393 2.28462Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M69.0393 2.28461L74.088 1.02425L73.9876 11.5766L69.0393 2.28461ZM73.9876 11.5766L68.9845 13.0215L69.0393 2.28461L73.9876 11.5766Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M69.0393 2.28462L68.9845 13.0215L66.0861 1.26095L69.0393 2.28462Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M62.006 2.96561L56.975 4.29484L59.0226 2.01885L62.006 2.96561ZM57.0669 15.0315L54.126 13.9059L54.008 3.31163L57.0669 15.0315ZM56.975 4.29484L54.008 3.31163L59.0226 2.01885L56.975 4.29484Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M56.975 4.29483L62.006 2.96559L62.0498 13.5183L56.975 4.29483ZM62.0498 13.5183L57.0669 15.0315L56.975 4.29483L62.0498 13.5183Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M56.975 4.29484L57.0669 15.0315L54.008 3.31162L56.975 4.29484Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M49 4.96562L43.9607 6.26298L46.0227 4L49 4.96562ZM43.9846 17L41.051 15.8558L41 5.26099L43.9846 17ZM43.9607 6.26298L41 5.26099L46.0227 4L43.9607 6.26298Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M43.9607 6.26296L49 4.96561L48.977 15.5184L43.9607 6.26296ZM48.977 15.5184L43.9846 17L43.9607 6.26296L48.977 15.5184Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M43.9607 6.26297L43.9846 17L41 5.26099L43.9607 6.26297Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M10.9995 27.2846L22.1634 27.8771L12.9424 27L10.9995 27.2846ZM22.0515 45.2463L23.8632 44.6997L24 27.5757L22.0515 45.2463ZM22.1634 27.8771L24 27.5757L12.9424 27L22.1634 27.8771ZM22.1634 27.8771L22.0515 45.2463L24 27.5757L22.1634 27.8771Z" fill="#C4C4C4" />
                            <path d="M20.2716 28.1876L9 27.5774L9.08043 44.7029L20.2716 28.1876Z" fill="#160000" />
                            <path style={ImgColor} d="M9 27.5774L20.2716 28.1876L10.9995 27.2846L9 27.5774ZM20.1863 45.8091L22.0515 45.2463L22.1634 27.8771L20.1863 45.8091Z" fill="#C4C4C4" />
                            <path d="M9.08044 44.7029L20.1863 45.8091L20.2716 28.1876L9.08044 44.7029Z" fill="#160000" />
                            <path style={ImgColor} d="M20.2716 28.1876L22.1634 27.8771L10.9995 27.2846L20.2716 28.1876ZM20.2716 28.1876L20.1863 45.8091L22.1634 27.8771L20.2716 28.1876Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M64.0005 27.2846L52.8366 27.8771L62.0576 27L64.0005 27.2846ZM52.9485 45.2463L51.1368 44.6997L51 27.5757L52.9485 45.2463ZM52.8366 27.8771L51 27.5757L62.0576 27L52.8366 27.8771ZM52.8366 27.8771L52.9485 45.2463L51 27.5757L52.8366 27.8771Z" fill="#C4C4C4" />
                            <path d="M54.7284 28.1876L66 27.5774L65.9196 44.7029L54.7284 28.1876Z" fill="#160000" />
                            <path style={ImgColor} d="M66 27.5774L54.7284 28.1876L64.0005 27.2846L66 27.5774ZM54.8137 45.8091L52.9485 45.2463L52.8366 27.8771L54.8137 45.8091Z" fill="#C4C4C4" />
                            <path d="M65.9196 44.7029L54.8137 45.8091L54.7284 28.1876L65.9196 44.7029Z" fill="#160000" />
                            <path style={ImgColor} d="M54.7284 28.1876L52.8366 27.8771L64.0005 27.2846L54.7284 28.1876ZM54.7284 28.1876L54.8137 45.8091L52.8366 27.8771L54.7284 28.1876Z" fill="#C4C4C4" />
                            <path d="M20 28.5C20 31.5376 17.5376 34 14.5 34C11.4624 34 9 31.5376 9 28.5C9 25.4624 11.4624 23 14.5 23C17.5376 23 20 25.4624 20 28.5Z" fill="#170000" />
                            <path d="M66 28C66 31.0376 63.5376 33.5 60.5 33.5C57.4624 33.5 55 31.0376 55 28C55 24.9624 57.4624 22.5 60.5 22.5C63.5376 22.5 66 24.9624 66 28Z" fill="#170000" />
                        </svg>
                    </div>
                )
                break

            case "Steam Works":

                renderedButton = (

                    <div onClick={() => {
                        ResetButtons()
                        setSWButton(!SWButtonPressed)
                        props.ButtonValue("SteamWorks")
                    }} className={`${styleClass} ${SWButtonPressed ? "ButtonClicked" : "ButtonNotClicked"}`}>
                        <animated.div className="TBox" style={colorVar}>
                            <h1>{name}</h1>
                        </animated.div>

                        <svg width="75" height="61" viewBox="0 0 75 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse style={ImgColor} cx="37.3769" cy="32.2845" rx="37" ry="6.5" transform="rotate(15.725 37.3769 32.2845)" fill="#C4C4C4" />
                            <ellipse style={ImgColor} cx="22" cy="43" rx="14" ry="13" fill="#C4C4C4" />
                            <ellipse cx="22.5" cy="44" rx="10.5" ry="10" fill="black" />
                            <rect style={ImgColor} width="2.04552" height="3.55963" transform="matrix(0.364144 0.931342 -0.944162 0.329481 36.3069 34.7796)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="2.08785" height="3.49068" transform="matrix(0.707659 0.706555 -0.745545 0.666456 32.6822 30.7178)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="2.12367" height="3.43014" transform="matrix(0.891763 0.452502 -0.494236 0.869328 28.1922 28.01)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="2.28326" height="3.72718" transform="matrix(-0.989307 -0.145849 0.16297 -0.986631 24.4564 31.0104)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="2.14178" height="3.39872" transform="matrix(-0.968776 0.247936 -0.275637 -0.961262 20.1933 30.6001)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="2.0983" height="3.47323" transform="matrix(-0.766976 0.641675 -0.683893 -0.729582 16.1503 31.2209)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="2.08028" height="3.50322" transform="matrix(-0.660719 0.750633 -0.786357 -0.617772 12.6398 33.6364)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="2.04277" height="3.56401" transform="matrix(-0.328496 0.944505 -0.955045 -0.296462 9.79139 36.5132)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="2.03099" height="3.58265" transform="matrix(-0.0311342 0.999515 -0.999614 -0.0277907 8.6445 40.2949)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="2.04822" height="3.55531" transform="matrix(0.39599 0.918255 -0.933258 0.359205 8.31803 44.2571)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="2.07929" height="3.50485" transform="matrix(0.654313 0.756224 -0.79147 0.611208 9.92368 48.3188)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="2.10431" height="3.46311" transform="matrix(0.798746 0.601669 -0.644971 0.764207 12.2495 52.3806)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="2.0394" height="3.40523" transform="matrix(-0.95359 -0.301108 0.333529 -0.94274 16.2601 58.2358)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="2.0502" height="3.38538" transform="matrix(-0.998761 0.0497682 -0.0557436 -0.998445 21.5677 59.1456)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="2.04624" height="3.39269" transform="matrix(-0.982516 0.18618 -0.207683 -0.978196 26.3457 59.0842)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="2.01962" height="3.44103" transform="matrix(-0.862612 0.505867 -0.549126 -0.83574 31.5618 56.6104)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.98449" height="3.50288" transform="matrix(-0.662073 0.749439 -0.785263 -0.619162 35.5774 53.1956)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.97872" height="3.51283" transform="matrix(-0.621738 0.783225 -0.81596 -0.578109 37.7591 49.6727)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.9413" height="3.57601" transform="matrix(-0.198492 0.980103 -0.984053 -0.177873 39 44.2162)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.93753" height="3.58224" transform="matrix(0.057989 0.998317 -0.998659 0.0517742 38.6731 39.5183)" fill="#C4C4C4" />
                            <ellipse style={ImgColor} cx="46.5" cy="50.5" rx="9.5" ry="8.5" fill="#C4C4C4" />
                            <ellipse cx="47" cy="50.5" rx="7" ry="6.5" fill="black" />
                            <rect style={ImgColor} width="1.329" height="2.39627" transform="matrix(0.379141 0.925339 -0.948777 0.315946 56.1781 45.0219)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.38049" height="2.31399" transform="matrix(0.723999 0.689801 -0.760802 0.648984 53.7262 42.3999)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.42339" height="2.24063" transform="matrix(0.900039 0.435809 -0.511828 0.859088 50.6888 40.652)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.54309" height="2.40912" transform="matrix(-0.990249 -0.13931 0.170561 -0.985347 48.1617 42.5888)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.44486" height="2.20212" transform="matrix(-0.971449 0.237247 -0.28778 -0.957697 45.2778 42.3239)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.39307" height="2.29296" transform="matrix(-0.781494 0.623912 -0.70077 -0.713388 42.5428 42.7247)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.37134" height="2.32905" transform="matrix(-0.678016 0.735047 -0.800125 -0.599833 40.1681 44.2839)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.32562" height="2.40146" transform="matrix(-0.342435 0.939542 -0.958819 -0.284018 38.2412 46.141)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.31112" height="2.42347" transform="matrix(-0.0326252 0.999468 -0.999648 -0.0265203 37.4654 48.5822)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.33232" height="2.39115" transform="matrix(0.411816 0.911267 -0.938688 0.344768 37.2445 51.1399)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.37015" height="2.331" transform="matrix(0.671708 0.740816 -0.805027 0.593238 38.3307 53.7618)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.40028" height="2.28072" transform="matrix(0.811993 0.583667 -0.662497 0.749064 39.9041 56.3838)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.37399" height="2.21013" transform="matrix(-0.957478 -0.288506 0.347625 -0.937634 42.6171 60.1635)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.38675" height="2.18568" transform="matrix(-0.998871 0.0474967 -0.0584069 -0.998293 46.2075 60.7507)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.38207" height="2.19469" transform="matrix(-0.984041 0.177939 -0.217179 -0.976132 49.4397 60.7111)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.3505" height="2.25391" transform="matrix(-0.872651 0.488344 -0.567117 -0.823637 52.9682 59.1142)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.30831" height="2.32863" transform="matrix(-0.679349 0.733816 -0.799075 -0.601231 55.6847 56.9099)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="1.30133" height="2.34056" transform="matrix(-0.639522 0.768773 -0.82843 -0.560093 57.1606 54.6358)" fill="#C4C4C4" />
                            <rect style={ImgColor} x="19.3739" width="46" height="25" transform="rotate(10.076 19.3739 0)" fill="#C4C4C4" />
                        </svg>
                    </div>
                )
                break
            
            case "Power Up":
                
                renderedButton = (
                    <div onClick={() => {
                        ResetButtons()
                        setPUButton(!PUButtonPressed)
                        props.ButtonValue("PowerUp")
                    }} className={`${styleClass} ${PUButtonPressed ? "ButtonClicked" : "ButtonNotClicked"}`}>
                        <animated.div className="TBox" style={colorVar}>
                            <h1>{name}</h1>
                        </animated.div>

                        <svg width="72" height="51" viewBox="0 0 72 51" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path style={ImgColor} d="M17.5152 0.40377L50.7488 0.96015L19.5877 0L17.5152 0.40377ZM50.7488 0.96015L52.1472 0.53241L19.5877 0L50.7488 0.96015ZM50.3183 40.1759L51.7074 38.8991L52.1472 0.53241L50.3183 40.1759ZM50.7488 0.96015L50.3183 40.1759L52.1472 0.53241L50.7488 0.96015ZM15.3498 0.825657L49.2858 1.40766L17.5152 0.40377L15.3498 0.825657ZM49.2858 1.40766L50.7488 0.96015L17.5152 0.40377L49.2858 1.40766ZM48.8659 41.5107L50.3183 40.1759L50.7488 0.96015L48.8659 41.5107ZM49.2858 1.40766L48.8659 41.5107L50.7488 0.96015L49.2858 1.40766ZM13.085 1.2669L47.7536 1.87634L15.3498 0.825657L13.085 1.2669ZM47.7536 1.87634L49.2858 1.40766L15.3498 0.825657L47.7536 1.87634ZM47.3457 42.9079L48.8659 41.5107L49.2858 1.40766L47.3457 42.9079ZM47.7536 1.87634L47.3457 42.9079L49.2858 1.40766L47.7536 1.87634ZM10.7138 1.72887L46.1472 2.36773L13.085 1.2669L10.7138 1.72887ZM46.1472 2.36773L47.7536 1.87634L13.085 1.2669L46.1472 2.36773ZM45.7529 44.3718L47.3457 42.9079L47.7536 1.87634L45.7529 44.3718ZM46.1472 2.36773L45.7529 44.3718L47.7536 1.87634L46.1472 2.36773ZM8.22858 2.21306L44.4609 2.88353L10.7138 1.72887L8.22858 2.21306ZM44.4609 2.88353L46.1472 2.36773L10.7138 1.72887L44.4609 2.88353ZM44.0822 45.9072L45.7529 44.3718L46.1472 2.36773L44.0822 45.9072ZM44.4609 2.88353L44.0822 45.9072L46.1472 2.36773L44.4609 2.88353ZM5.62089 2.72111L42.6888 3.42559L8.22858 2.21306L5.62089 2.72111ZM42.6888 3.42559L44.4609 2.88353L8.22858 2.21306L42.6888 3.42559ZM42.3277 47.5197L44.0822 45.9072L44.4609 2.88353L42.3277 47.5197ZM42.6888 3.42559L42.3277 47.5197L44.4609 2.88353L42.6888 3.42559ZM2.88145 3.25482L40.8241 3.99597L5.62089 2.72111L2.88145 3.25482ZM40.8241 3.99597L42.6888 3.42559L5.62089 2.72111L40.8241 3.99597ZM40.483 49.2151L42.3277 47.5197L42.6888 3.42559L40.483 49.2151ZM40.8241 3.99597L40.483 49.2151L42.6888 3.42559L40.8241 3.99597ZM0 3.8162L38.8594 4.59697L2.88145 3.25482L0 3.8162ZM38.8594 4.59697L40.8241 3.99597L2.88145 3.25482L38.8594 4.59697ZM38.5409 51L40.483 49.2151L40.8241 3.99597L38.5409 51Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M38.8594 4.59695L0 3.81618L0.297395 48.6809L38.8594 4.59695ZM0.297395 48.6809L38.5409 51L38.8594 4.59695L0.297395 48.6809Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M38.8594 4.59695L38.5409 51L40.8241 3.99596L38.8594 4.59695Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M9.14221 24.7775H6.61096V27.3922H5.2926V20.9938H9.45862V22.0617H6.61096V23.714H9.14221V24.7775ZM11.6251 27.3922H10.3068V20.9938H11.6251V27.3922ZM15.2198 25.0499H14.1696V27.3922H12.8512V20.9938H15.2286C15.9845 20.9938 16.5675 21.1622 16.9777 21.4992C17.3878 21.8361 17.5929 22.3121 17.5929 22.9274C17.5929 23.3639 17.4977 23.7287 17.3073 24.0216C17.1198 24.3117 16.8341 24.5431 16.4503 24.716L17.8346 27.3307V27.3922H16.4196L15.2198 25.0499ZM14.1696 23.9821H15.233C15.5641 23.9821 15.8204 23.8986 16.0021 23.7316C16.1837 23.5617 16.2745 23.3288 16.2745 23.0329C16.2745 22.7311 16.1881 22.4938 16.0153 22.3209C15.8453 22.1481 15.5831 22.0617 15.2286 22.0617H14.1696V23.9821ZM21.9171 25.7135C21.9171 25.4645 21.8292 25.2741 21.6534 25.1422C21.4777 25.0075 21.1613 24.8668 20.7042 24.7204C20.2472 24.5709 19.8854 24.4245 19.6188 24.2809C18.8922 23.8883 18.5289 23.3595 18.5289 22.6945C18.5289 22.3488 18.6256 22.0412 18.819 21.7716C19.0153 21.4992 19.295 21.2868 19.6583 21.1344C20.0245 20.9821 20.4347 20.9059 20.8888 20.9059C21.3458 20.9059 21.7531 20.9894 22.1105 21.1564C22.4679 21.3204 22.7448 21.5534 22.941 21.8551C23.1403 22.1569 23.2399 22.4996 23.2399 22.8834H21.9215C21.9215 22.5905 21.8292 22.3634 21.6447 22.2023C21.4601 22.0382 21.2008 21.9562 20.8668 21.9562C20.5446 21.9562 20.2941 22.025 20.1154 22.1627C19.9366 22.2975 19.8473 22.4762 19.8473 22.6989C19.8473 22.9069 19.9513 23.0812 20.1593 23.2218C20.3702 23.3624 20.6793 23.4943 21.0865 23.6173C21.8365 23.8429 22.3829 24.1227 22.7257 24.4567C23.0685 24.7907 23.2399 25.2067 23.2399 25.7047C23.2399 26.2584 23.0304 26.6935 22.6115 27.0099C22.1925 27.3234 21.6285 27.4801 20.9196 27.4801C20.4274 27.4801 19.9791 27.3908 19.5748 27.2121C19.1705 27.0304 18.8615 26.7829 18.6476 26.4694C18.4366 26.1559 18.3312 25.7926 18.3312 25.3795H19.6539C19.6539 26.0856 20.0758 26.4386 20.9196 26.4386C21.233 26.4386 21.4777 26.3756 21.6534 26.2496C21.8292 26.1207 21.9171 25.942 21.9171 25.7135ZM28.9528 22.0617H26.9928V27.3922H25.6744V22.0617H23.7408V20.9938H28.9528V22.0617Z" fill="black" />
                            <rect style={ImgColor} x="56.6557" y="28.9021" width="4.72131" height="5.25492" fill="#C4C4C4" />
                            <rect style={ImgColor} x="59.0164" y="26.2746" width="4.72131" height="5.25492" fill="#C4C4C4" />
                            <rect style={ImgColor} x="61.377" y="23.6471" width="4.72131" height="5.25492" fill="#C4C4C4" />
                            <rect style={ImgColor} x="63.7377" y="19.706" width="4.72132" height="5.25492" fill="#C4C4C4" />
                            <rect style={ImgColor} x="67.2787" y="22.3334" width="4.72131" height="5.25492" fill="#C4C4C4" />
                            <rect style={ImgColor} x="67.2787" y="17.0785" width="4.72131" height="5.25492" fill="#C4C4C4" />
                            <rect style={ImgColor} x="62.5574" y="17.0785" width="4.72131" height="5.25492" fill="#C4C4C4" />
                            <rect style={ImgColor} x="64.918" y="17.0785" width="4.7213" height="5.25492" fill="#C4C4C4" />
                            <rect style={ImgColor} x="67.2787" y="24.9609" width="4.72131" height="5.25492" fill="#C4C4C4" />
                            <rect style={ImgColor} x="57.8361" y="17.0785" width="4.72131" height="5.25492" fill="#C4C4C4" />
                        </svg>

                    </div>
                )

                break
            
            case "Deep Space":
                renderedButton = (
                    <div onClick={() => {
                        ResetButtons()
                        setDSButton(!DSButtonPressed)
                        props.ButtonValue("DeepSpace")
                    }} className={`${styleClass} ${DSButtonPressed ? "ButtonClicked" : "ButtonNotClicked"}`}>
                        <animated.div className="TBox" style={colorVar}>
                            <h1>{name}</h1>
                        </animated.div>

                        <svg width="41" height="71" viewBox="0 0 41 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse style={ImgColor} cx="20" cy="23" rx="9" ry="17" fill="#C4C4C4" />
                            <path style={ImgColor} d="M12.0809 29.0463L18.9482 39.5862L5.09204 39.506L12.0809 29.0463Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M28.0809 29.0463L34.9482 39.5862L21.092 39.506L28.0809 29.0463Z" fill="#C4C4C4" />
                            <rect style={ImgColor} x="6.58214" y="42" width="13" height="25" transform="rotate(5.9284 6.58214 42)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="13" height="25" transform="matrix(-0.994652 0.103286 0.103286 0.994652 34.9305 42)" fill="#C4C4C4" />
                            <ellipse style={ImgColor} cx="4.5" cy="65.5" rx="4.5" ry="3.5" fill="#C4C4C4" />
                            <ellipse style={ImgColor} cx="11.5" cy="66.5" rx="4.5" ry="3.5" fill="#C4C4C4" />
                            <ellipse style={ImgColor} cx="15.5" cy="67.5" rx="4.5" ry="3.5" fill="#C4C4C4" />
                            <ellipse style={ImgColor} cx="25.5" cy="67.5" rx="4.5" ry="3.5" fill="#C4C4C4" />
                            <ellipse style={ImgColor} cx="30.5" cy="67.5" rx="4.5" ry="3.5" fill="#C4C4C4" />
                            <ellipse style={ImgColor} cx="36.5" cy="66.5" rx="4.5" ry="3.5" fill="#C4C4C4" />
                            <path style={ImgColor} d="M20 0L24.3301 7.5H15.6699L20 0Z" fill="#C4C4C4" />
                        </svg>

                    </div>
                )
                break

            case "Infinite Recharge":
                renderedButton = (
                    <div onClick={() => {
                        ResetButtons()
                        setIRButton(!IRButtonPressed)
                        props.ButtonValue("InfiniteRecharge")
                    }} className={`${styleClass} ${IRButtonPressed ? "ButtonClicked" : "ButtonNotClicked"}`}>
                        <animated.div className="TBox" style={colorVar}>
                            <h1>{name}</h1>
                        </animated.div>

                        <svg width="103" height="61" viewBox="0 0 103 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path style={ImgColor} d="M13.3643 54.5026L52.024 34.1694L52.6509 33.0291L13.3643 54.5026ZM52.6509 33.0291L14.007 53.2799L13.3643 54.5026L52.6509 33.0291Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M86.6899 58.0921L53.8404 35.3525L53.5445 34.0344L86.6899 58.0921ZM53.5445 34.0344L86.4023 56.6781L86.6899 58.0921L53.5445 34.0344Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M92.6357 54.5026L53.976 34.1694L53.3491 33.0291L92.6357 54.5026ZM53.3491 33.0291L91.993 53.2799L92.6357 54.5026L53.3491 33.0291Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M18.4826 10.0913L13.3487 10L0 10.6377L18.4826 10.0913Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M11.5709 53.9918L23.599 48.3882L23.81 10.186L11.5709 53.9918Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M23.81 10.186L18.4826 10.0912L5.53191 10.7544L23.81 10.186ZM5.53191 10.7544L18.4826 10.0912L0 10.6377L5.53191 10.7544Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M23.81 10.186L11.3005 10.876L11.5709 53.9918L23.81 10.186Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M6.02671 53.0077L5.53191 10.7544L0.701111 52.0624L6.02671 53.0077ZM5.53191 10.7544L0 10.6377L0.701111 52.0624L5.53191 10.7544ZM11.3005 10.876L23.81 10.186L5.53191 10.7544L11.3005 10.876ZM11.5709 53.9918L11.3005 10.876L6.02671 53.0077L11.5709 53.9918ZM11.3005 10.876L5.53191 10.7544L6.02671 53.0077L11.3005 10.876Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M34.4826 0.0912704L29.3487 0L16 0.637699L34.4826 0.0912704Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M27.5709 43.9918L39.599 38.3882L39.81 0.185974L27.5709 43.9918Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M39.81 0.185957L34.4826 0.0912476L21.5319 0.754353L39.81 0.185957ZM21.5319 0.754353L34.4826 0.0912476L16 0.637676L21.5319 0.754353Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M39.81 0.185974L27.3005 0.87604L27.5709 43.9918L39.81 0.185974Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M22.0267 43.0077L21.5319 0.75437L16.7011 42.0624L22.0267 43.0077ZM21.5319 0.75437L16 0.637693L16.7011 42.0624L21.5319 0.75437ZM27.3005 0.87604L39.81 0.185974L21.5319 0.75437L27.3005 0.87604ZM27.5709 43.9918L27.3005 0.87604L22.0267 43.0077L27.5709 43.9918ZM27.3005 0.87604L21.5319 0.75437L22.0267 43.0077L27.3005 0.87604Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M30.3013 22.0622L25.7734 22L14 22.4348L30.3013 22.0622Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M24.2054 51.9918L34.8139 48.1715L35 22.1268L24.2054 51.9918Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M35 22.1268L30.3013 22.0622L18.879 22.5143L35 22.1268ZM18.879 22.5143L30.3013 22.0622L14 22.4347L18.879 22.5143Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M35 22.1268L23.9669 22.5972L24.2054 51.9918L35 22.1268Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M19.3154 51.3209L18.879 22.5143L14.6184 50.6764L19.3154 51.3209ZM18.879 22.5143L14 22.4348L14.6184 50.6764L18.879 22.5143ZM23.9669 22.5972L35 22.1268L18.879 22.5143L23.9669 22.5972ZM24.2054 51.9918L23.9669 22.5972L19.3154 51.3209L24.2054 51.9918ZM23.9669 22.5972L18.879 22.5143L19.3154 51.3209L23.9669 22.5972Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M84.3274 12.0913L89.4613 12L102.81 12.6377L84.3274 12.0913Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M91.2391 55.9918L79.211 50.3882L79 12.186L91.2391 55.9918Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M79 12.186L84.3274 12.0912L97.2781 12.7544L79 12.186ZM97.2781 12.7544L84.3274 12.0912L102.81 12.6377L97.2781 12.7544Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M79 12.186L91.5095 12.876L91.2391 55.9918L79 12.186Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M96.7833 55.0077L97.2781 12.7544L102.109 54.0624L96.7833 55.0077ZM97.2781 12.7544L102.81 12.6377L102.109 54.0624L97.2781 12.7544ZM91.5094 12.876L79 12.186L97.2781 12.7544L91.5094 12.876ZM91.2391 55.9918L91.5094 12.876L96.7833 55.0077L91.2391 55.9918ZM91.5094 12.876L97.2781 12.7544L96.7833 55.0077L91.5094 12.876Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M68.3274 0.0912704L73.4613 0L86.81 0.637699L68.3274 0.0912704Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M75.2391 43.9918L63.211 38.3882L63 0.185974L75.2391 43.9918Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M63 0.185957L68.3274 0.0912476L81.2781 0.754353L63 0.185957ZM81.2781 0.754353L68.3274 0.0912476L86.81 0.637676L81.2781 0.754353Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M63 0.185974L75.5095 0.87604L75.2391 43.9918L63 0.185974Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M80.7833 43.0077L81.2781 0.75437L86.1089 42.0624L80.7833 43.0077ZM81.2781 0.75437L86.81 0.637693L86.1089 42.0624L81.2781 0.75437ZM75.5094 0.87604L63 0.185974L81.2781 0.75437L75.5094 0.87604ZM75.2391 43.9918L75.5094 0.87604L80.7833 43.0077L75.2391 43.9918ZM75.5094 0.87604L81.2781 0.75437L80.7833 43.0077L75.5094 0.87604Z" fill="#B0B0B0" />
                            <path style={ImgColor} d="M53 61L53.0418 33.6788L53.9581 33L53 61ZM53.9581 33L54 60.2886L53 61L53.9581 33Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M59.724 60.4208L53.2036 33.889L53.9301 33.0101L59.724 60.4208ZM53.9301 33.0101L60.5239 59.4901L59.724 60.4208L53.9301 33.0101Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M66.853 59.3347L54.3487 35.0429L54.8512 34.0192L66.853 59.3347ZM54.8512 34.0192L67.4149 58.2437L66.853 59.3347L54.8512 34.0192Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M78.3223 60.3413L53.6441 34.3061L53.6946 33.0288L78.3223 60.3413ZM53.6946 33.0288L78.404 58.9754L78.3223 60.3413L53.6946 33.0288Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M19.3101 58.0921L52.1596 35.3525L52.4555 34.0344L19.3101 58.0921ZM52.4555 34.0344L19.5977 56.6781L19.3101 58.0921L52.4555 34.0344Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M53 61L52.9582 33.6788L52.0419 33L53 61ZM52.0419 33L52 60.2886L53 61L52.0419 33Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M46.276 60.4208L52.7964 33.889L52.0699 33.0101L46.276 60.4208ZM52.0699 33.0101L45.4761 59.4901L46.276 60.4208L52.0699 33.0101Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M39.147 59.3347L51.6513 35.0429L51.1488 34.0192L39.147 59.3347ZM51.1488 34.0192L38.5851 58.2437L39.147 59.3347L51.1488 34.0192Z" fill="#C4C4C4" />
                            <path style={ImgColor} d="M27.6777 60.3413L52.3559 34.3061L52.3054 33.0288L27.6777 60.3413ZM52.3054 33.0288L27.596 58.9754L27.6777 60.3413L52.3054 33.0288Z" fill="#C4C4C4" />
                        </svg>

                    </div>
                )
                break

            case "Game Changers":
                renderedButton = (
                    <div onClick={() => {
                        ResetButtons()
                        setGCButton(!GCButtonPressed)
                        props.ButtonValue("GameChangers")
                    }} className={`${styleClass} ${GCButtonPressed ? "ButtonClicked" : "ButtonNotClicked"}`}>
                        <animated.div className="TBox" style={colorVar}>
                            <h1>{name}</h1>
                        </animated.div>

                        <svg width="110" height="55" viewBox="0 0 110 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect style={ImgColor} x="26" y="5" width="7" height="11" fill="#C4C4C4" />
                            <rect style={ImgColor} x="78" y="5" width="7" height="11" fill="#C4C4C4" />
                            <rect style={ImgColor} x="26" width="59" height="5" fill="#C4C4C4" />
                            <path style={ImgColor} d="M26.0904 42.0249L26.0857 37.4711L38.4152 46.5176L54.8559 52.9023L72.9407 46.5176L85.2712 36.4843L85.2769 41.9489C55.6779 59.2871 55.678 59.2871 26.0904 42.0249Z" fill="#C4C4C4" />
                            <rect style={ImgColor} width="28.2923" height="0.983465" transform="matrix(0.653969 0.756521 -0.684761 0.728768 36.6226 31.0117)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="30.9388" height="1.00329" transform="matrix(0.792244 0.610204 -0.530369 0.847767 30.2385 33.6507)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="23.545" height="0.933144" transform="matrix(-0.00245046 0.999997 -0.999995 -0.0030169 55.0265 31.0145)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="23.3321" height="0.943429" transform="matrix(0.281644 0.959519 -0.940474 0.339866 48.3449 31.0117)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="28.2923" height="0.983465" transform="matrix(-0.653969 0.756521 0.684761 0.728768 72.5362 31.0117)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="30.9388" height="1.00329" transform="matrix(-0.792244 0.610204 0.530369 0.847767 78.9203 33.6507)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="23.545" height="0.933144" transform="matrix(0.00245046 0.999997 0.999995 -0.0030169 54.1323 31.0145)" fill="#C4C4C4" />
                            <rect style={ImgColor} width="23.3321" height="0.943429" transform="matrix(-0.281644 0.959519 0.940474 0.339866 60.8139 31.0117)" fill="#C4C4C4" />
                            <path style={ImgColor} d="M8.1377 26.832C7.79492 27.2425 7.31038 27.562 6.68408 27.7905C6.05778 28.0148 5.36377 28.127 4.60205 28.127C3.80225 28.127 3.09977 27.9535 2.49463 27.6064C1.89372 27.2552 1.42822 26.7474 1.09814 26.083C0.772298 25.4186 0.605143 24.6379 0.59668 23.7407V23.1123C0.59668 22.1898 0.751139 21.3921 1.06006 20.7192C1.37321 20.0422 1.82178 19.5259 2.40576 19.1704C2.99398 18.8107 3.68164 18.6309 4.46875 18.6309C5.56478 18.6309 6.42171 18.8932 7.03955 19.418C7.65739 19.9385 8.02344 20.6981 8.1377 21.6968H6.28418C6.19954 21.1678 6.01123 20.7806 5.71924 20.5352C5.43148 20.2897 5.03369 20.167 4.52588 20.167C3.87842 20.167 3.38542 20.4103 3.04688 20.897C2.70833 21.3836 2.53695 22.1073 2.53271 23.0679V23.6582C2.53271 24.6273 2.7168 25.3594 3.08496 25.8545C3.45312 26.3496 3.99268 26.5972 4.70361 26.5972C5.41878 26.5972 5.92871 26.4448 6.2334 26.1401V24.5469H4.50049V23.144H8.1377V26.832ZM14.9043 26.0957H11.5654L10.9307 28H8.90576L12.3462 18.7578H14.1108L17.5703 28H15.5454L14.9043 26.0957ZM12.0796 24.5532H14.3901L13.2285 21.0938L12.0796 24.5532ZM20.9219 18.7578L23.2959 25.4609L25.6572 18.7578H28.1582V28H26.2476V25.4736L26.438 21.1128L23.9434 28H22.6357L20.1475 21.1191L20.3379 25.4736V28H18.4336V18.7578H20.9219ZM35.3818 23.9946H31.7256V26.4702H36.0166V28H29.8213V18.7578H36.0039V20.3003H31.7256V22.5029H35.3818V23.9946ZM47.6265 24.9214C47.5545 25.9159 47.1864 26.6987 46.522 27.27C45.8618 27.8413 44.9901 28.127 43.9067 28.127C42.7218 28.127 41.7887 27.7292 41.1074 26.9336C40.4303 26.1338 40.0918 25.0378 40.0918 23.6455V23.0806C40.0918 22.1919 40.2484 21.409 40.5615 20.7319C40.8747 20.0549 41.3211 19.5365 41.9009 19.1768C42.4849 18.8128 43.1619 18.6309 43.9321 18.6309C44.9985 18.6309 45.8576 18.9165 46.5093 19.4878C47.161 20.0591 47.5376 20.861 47.6392 21.8936H45.7349C45.6883 21.2969 45.5212 20.8652 45.2334 20.5986C44.9499 20.3278 44.5161 20.1924 43.9321 20.1924C43.2974 20.1924 42.8213 20.4209 42.5039 20.8779C42.1908 21.3307 42.0299 22.0353 42.0215 22.9917V23.6899C42.0215 24.6886 42.1717 25.4186 42.4722 25.8799C42.7769 26.3411 43.255 26.5718 43.9067 26.5718C44.495 26.5718 44.9329 26.4385 45.2207 26.1719C45.5127 25.901 45.6799 25.4842 45.7222 24.9214H47.6265ZM56.3989 28H54.4946V24.0391H50.7812V28H48.877V18.7578H50.7812V22.5029H54.4946V18.7578H56.3989V28ZM63.4004 26.0957H60.0615L59.4268 28H57.4019L60.8423 18.7578H62.6069L66.0664 28H64.0415L63.4004 26.0957ZM60.5757 24.5532H62.8862L61.7246 21.0938L60.5757 24.5532ZM74.4453 28H72.541L68.834 21.9189V28H66.9297V18.7578H68.834L72.5474 24.8516V18.7578H74.4453V28ZM83.4209 26.832C83.0781 27.2425 82.5936 27.562 81.9673 27.7905C81.341 28.0148 80.647 28.127 79.8853 28.127C79.0854 28.127 78.383 27.9535 77.7778 27.6064C77.1769 27.2552 76.7114 26.7474 76.3813 26.083C76.0555 25.4186 75.8883 24.6379 75.8799 23.7407V23.1123C75.8799 22.1898 76.0343 21.3921 76.3433 20.7192C76.6564 20.0422 77.105 19.5259 77.689 19.1704C78.2772 18.8107 78.9648 18.6309 79.752 18.6309C80.848 18.6309 81.7049 18.8932 82.3228 19.418C82.9406 19.9385 83.3066 20.6981 83.4209 21.6968H81.5674C81.4827 21.1678 81.2944 20.7806 81.0024 20.5352C80.7147 20.2897 80.3169 20.167 79.8091 20.167C79.1616 20.167 78.6686 20.4103 78.3301 20.897C77.9915 21.3836 77.8201 22.1073 77.8159 23.0679V23.6582C77.8159 24.6273 78 25.3594 78.3682 25.8545C78.7363 26.3496 79.2759 26.5972 79.9868 26.5972C80.702 26.5972 81.2119 26.4448 81.5166 26.1401V24.5469H79.7837V23.144H83.4209V26.832ZM90.5303 23.9946H86.874V26.4702H91.165V28H84.9697V18.7578H91.1523V20.3003H86.874V22.5029H90.5303V23.9946ZM95.7036 24.6167H94.1865V28H92.2822V18.7578H95.7163C96.8081 18.7578 97.6502 19.0011 98.2427 19.4878C98.8351 19.9744 99.1313 20.6621 99.1313 21.5508C99.1313 22.1813 98.9938 22.7082 98.7188 23.1313C98.4479 23.5503 98.0353 23.8846 97.481 24.1343L99.4805 27.9111V28H97.4365L95.7036 24.6167ZM94.1865 23.0742H95.7227C96.2008 23.0742 96.5711 22.9536 96.8335 22.7124C97.0959 22.467 97.2271 22.1305 97.2271 21.7031C97.2271 21.2673 97.1022 20.9245 96.8525 20.6748C96.6071 20.4251 96.2284 20.3003 95.7163 20.3003H94.1865V23.0742ZM105.377 25.5752C105.377 25.2155 105.25 24.9404 104.997 24.75C104.743 24.5553 104.286 24.3522 103.625 24.1406C102.965 23.9248 102.443 23.7132 102.058 23.5059C101.008 22.9388 100.483 22.175 100.483 21.2144C100.483 20.715 100.623 20.2707 100.902 19.8813C101.186 19.4878 101.59 19.181 102.115 18.9609C102.644 18.7409 103.236 18.6309 103.892 18.6309C104.552 18.6309 105.14 18.7515 105.657 18.9927C106.173 19.2297 106.573 19.5661 106.856 20.002C107.144 20.4378 107.288 20.9329 107.288 21.4873H105.384C105.384 21.0641 105.25 20.7362 104.984 20.5034C104.717 20.2664 104.343 20.1479 103.86 20.1479C103.395 20.1479 103.033 20.2474 102.775 20.4463C102.517 20.641 102.388 20.8991 102.388 21.2207C102.388 21.5212 102.538 21.7729 102.838 21.9761C103.143 22.1792 103.59 22.3696 104.178 22.5474C105.261 22.8732 106.05 23.2773 106.545 23.7598C107.041 24.2422 107.288 24.8431 107.288 25.5625C107.288 26.3623 106.986 26.9907 106.38 27.4478C105.775 27.9006 104.961 28.127 103.937 28.127C103.226 28.127 102.578 27.9979 101.994 27.7397C101.41 27.4774 100.964 27.1198 100.655 26.667C100.35 26.2142 100.198 25.6895 100.198 25.0928H102.108C102.108 26.1126 102.718 26.6226 103.937 26.6226C104.389 26.6226 104.743 26.5316 104.997 26.3496C105.25 26.1634 105.377 25.9053 105.377 25.5752Z" fill="white" />
                            <line style={ImgColor} x1="35" y1="6.5" x2="76" y2="6.5" stroke="white" />
                            <line style={ImgColor} x1="35.5" y1="6" x2="35.5" y2="15" stroke="#FDF9F9" />
                            <line style={ImgColor} x1="75.5" y1="6" x2="75.5" y2="15" stroke="#FDF9F9" />
                        </svg>
                    </div>
                )
                break

            case "About First":
                renderedButton = (
                    <div onClick={() => {
                        ResetButtons()
                        setAFButton(!AFButtonPressed)
                        props.ButtonValue("AboutFirst")
                    }} className={`${styleClass} ${AFButtonPressed ? "ButtonClicked" : "ButtonNotClicked"}`}>
                        <animated.div className="TBox" style={colorVar}>
                            <h1>{name}</h1>
                        </animated.div>

                    </div>
                )
                break

            default:
                console.log("an error occurred")
                break

        }

        return(
            renderedButton
        )
    }

    return (

        <div className="FirstSeasonsBox">

            <h1 className="title">{t("About.seasonsTitle")}</h1> <p></p>

            <div className="ButtonBox">

                <div className="TopBox">
                    
                    {ButtonAnimation("lime", "Recycle Rush", "RecycleRush")}

                    {ButtonAnimation("royalblue", "Strong Hold", "Stronghold")}

                    {ButtonAnimation("crimson", "Steam Works", "SteamWorks")}


                </div>

                <div className="MiddleBox">

                    {ButtonAnimation("yellow", "Power Up", "PowerUP")}

                    {ButtonAnimation("orange", "Deep Space", "DeepSpace")}

                    {ButtonAnimation("violet", "Infinite Recharge", "InfiniteRecharge")}

                </div>

                <div className="BottomBox">

                    {ButtonAnimation("turquoise", "Game Changers", "GameChangers")}

                    {ButtonAnimation("Red", "About First", "AboutFirst")}



                </div>
            </div>

        </div>
    )
}

export default FirstSeasonBox;


