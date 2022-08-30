import React from "react";
import Hero from "./hero"
import Header from "./header"

const Main = () => {
    return (
        <>
        <Hero />
        <Header />
        <div className="containerMain">
            <h1 className="tituloMain">La Trainee Club</h1>
            <div class="container">
                <div class="lifeline">
                    <img class="lifelineImg" src="./img/lifeline.png" alt="" />
                </div>
                <div class="bangalore">
                    <img class="bangaloreImg" src="./img/bangalore.png" alt="" />
                </div>
                <div class="texto1">
                    <p>Somos el primer equipo competitivo que nunca va a salir de Oro.</p>
                </div>
                <div class="texto2">
                    <p>Apoyanos en nuestro canal de Twich, donde hacemos contenido todas las semanas!</p>
                    <a href=""><img src="./img/twitch2.png" alt="" /></a>
                    <p>Tambien podes ver contenido destacado en nuestro canal de Youtube!</p>
                    <a href=""><img src="./img/youtube2.png" alt="" /></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Main