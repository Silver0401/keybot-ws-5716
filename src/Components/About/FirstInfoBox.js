import React, { useState } from "react";
import anime from "animejs";

//Img paths
import AboutFirst from "./../../Resources/FIRSTlogo.png"
import DP1 from "./../../Resources/DP1.jpg"
import DP2 from "./../../Resources/DP2.jpg"

import rr1 from "./../../Resources/rr1.jpg"

import stw1 from "./../../Resources/stw1.jpg"

import sh1 from "./../../Resources/sh1.jpg"

import pup1 from "./../../Resources/pup1.jpg"
import pup2 from "./../../Resources/pup2.jpg"

//Global Vars from Paths for IMGS
window.AboutFirst  = [AboutFirst]
window.DeepSpace = [DP1,DP2]
window.RecycleRush = [rr1]
window.SteamWorks = [stw1]
window.StrongHold = [sh1]
window.PowerUp = [pup2,pup1]
window.InfiniteRecharge = [pup1]
window.GameChangers = [DP2]

// Global Paths for Seasons Info

window.AboutFirstInfo =  "FIRST, which stands for: \"For Inspiration and Recognition of Science and Technology\". Is a nonprofit organization founded in 1989 by Dean Kamen. With the objective of inspiring young people's interest and participation in science and technology. FIRST has different leagues, in which we classify on the bigger one, FIRST Robotics Competition (FRC). It's more than a competition it's an event which combines the technology and the gracious professionalism to create an equity, diverse and inclusive environment that appreciates the technology and the science. Additionally, FIRST teams are encourage to spread the word, looking forward to enjoy, love and recognize the Science, Technology, Mathematics and Engineering."
window.DeepSpaceInfo =  "Debido al Fiasco de la season pasada, en esta se optó por cambiar a las personas administrativas del equipo, es así como se cambiaron al coach y dueño del equipo. A partir de aquí se empezaron a notar cambios significativos, el equipo se habia vuelto más fuerte que nunca. Afortunadamente durante esta temporada también logramos pasar al mundial, pero esta vez con lo que se describe fue: El mejor robot que haya construido el equipo desde la creación del equipo. Fue sin lugar a duda uno, sino es que el mejor año para keybot y su desarrollo en todas las áreas, desde mecánica y programación hasta administración y labores sociales."
window.RecycleRushInfo = "Fue la primera temporada del equipo, en donde todos admiten que nadie sabia nada. En aquellos tiempos chava empezo siendo el director de Keybot, mientras que Moises era el coach. Debido a la falta de conocmiento del equipo sobre basicamente todo, se opto por hacer un robot simple que solo buscara hacer uno de los retos. Se puede ver que desde el inicio Moises era fan de el uso de cadenas, puesto que ese año se empezaron usarlas y así siguio durante más de 3 temporadas. A pesar de ser la primera vez, el autónomo del robot era bastante bueno. Sin embargo al final, en la competencia el robot termino destruyendose, junto con sus sitema de recolección de cajas, por lo cual la alianza nos pidiío que convierteramos a nuestro robot en uno de pelea."
window.SteamWorksInfo = "Steam works fue otra temporada en la que también se busco enforcarse en un solo mecanismo, el de los engranes, puesto que nuestro equipo aun no tenía ni los recuros ni los conocmientos para poder crear un robot integro. Además de esto se intento por primera vez implementar un segundo mecanismo, que fue el de elvación del robot, este consistía en una cuerda gruesa de velcro que se enrolllaba nuevamente con cadena para poder levantar al robot. Este también fue un buen año para el equipo de programación ya que, el autónomo tenía que ser muy preciso para poder funcionar, mucho equipos fallaron, sin embargo keybot salio adelante con algunas partidas en las cuales el autonomo fungió como la principal forma de anotar puntos para el equipo."
window.StrongHoldInfo = "StrongHold en la opinion de la gran mayoría de los integrantes del equipo fue de las mejores temporadas, debido a que la temática era \"épica\". Durante esta temporada el equipo busco construir el robot más ligero posible debido a las pruebas terrestres que habia para este reto. Tambíen fue esta la primer temporada en la que intenamos utilizar visión de cámara en el robot. A pesar de que el mecanismo de lanzar pelotas era el único que tenía nuestro robot, este al igual que la temporada pasada dejo de funcionar y solo sirvió como un brazo para ayudar a los equipos de nuestras alianzas a superar ciertos obstáculos. Esta fue igual la primera vez que implementamos el scouting, en donde Montu hizo un trabajo extraordinario, ayudando a otros equipos a ganar únicamente mediante la observación de mecanismos de otros equipos y un análisis de la mejor posible estrategia."
window.PowerUpInfo =  "Esta fue sin lugar a duda una de las temporadas con mayores fracasos en la construcción del robot, Ya que unas semanas antes del inicio de la competencia, todo nuestro robot se rompió, debido que la implementacion de cadena que se hizo, no fue suficiente para resistar el peso del brazo metálico que se supone agarraría cajas. Debido a esto se tuvo que hacer un pequeño robot en alrededor de 5 días, el cual llevamos a la competencia. No obstante, esta fue la primera vez que el equipo logró pasar al mundial, lo cual fue de las cosas más inesparadas que jamas le ocurrió al equipo. Sin embargo, después del mundial el equipo tuvo ciertos problemas puesto que no queríamos que en alguna otra temporada volviera a pasar lo mismo con el robot. Por lo cual hubo cierta tensión durante esta temporada."
window.InfiniteRechargeInfo = "Debido a los reciente acontecimientos vistos por el COVID-19 esta temporada llego a su fin antes de lo esperado. Lo cual realmente es muy desafortunado para el equipo, puesto que se venía con un desempeño increible proveniente de las gestiones anteriores."
window.GameChangersInfo = "El nuevo juego de FIRST a competir este año. Aun no estamos seguro de las diferencias que hay entre este e infinite recharge, sin embargo Keybot, siempre esta listo para dar lo mejor de cada uno de sus integrante, bajo cualquier circunstancia."

const FirstInfoBox = (props) => {

    let link = "none"
    let imgSRC = window[props.ButtonValue][0]
    let SeasonsInfo = window[`${props.ButtonValue}Info`]
    let footer = "To Learn more about First click the logo in the inferior part"

    if (props.ButtonValue === "AboutFirst"){
        console.log("no button clicked yet")
        link = "https://www.firstinspires.org/robotics/frc"
        footer = "To Learn more about First click the logo in the inferior part"

        anime({
            targets: ".Info",
            height: "51%",
            duration: 1500,
        })

        anime({
            targets: ".Images",
            height: "30%",
            duration: 1500,

        })

    } else {

        link = null
        footer = ""

        anime({
            targets: ".Info",
            height: "30%",
            duration: 1500,
        })

        anime({
            targets: ".Images",
            height: "51%",
            duration: 1500,

        })

    }
        
    return(
        <div className="FirstInfoBox">
            <div className="wrapper">
                <div className="Info">
                    <div className="TitleThing">
                        <h1 >{props.ButtonValue}</h1>
                    </div>
                    <div className="Paragraph">
                        <hr></hr>
                        <br></br>
                        <p>{SeasonsInfo}</p>
                        <br></br>
                        <p>{footer}</p>
                    </div>
                </div>
                <div className="Images">
                    <a href={link} target="_newtab">
                        <img alt={props.ButtonValue} src={imgSRC}></img>
                    </a>
                </div>
            </div>

            <div className="Mouse" >
                <div className="Line"></div>
            </div>

        </div>
    )
}

export default FirstInfoBox;