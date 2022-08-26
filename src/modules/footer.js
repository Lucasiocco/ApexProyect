import React from "react";


const Footer = () => {
    return (
        <div className="containerFooter">
            <img src="./img/logoFooter.png" alt="" />
            <p>All Copy Rights Reserved.</p>
            <div className="linkFooter">
                <ul>
                    <li><a>Inicio</a></li>
                    <li><a>Nosotros</a></li>
                    <li><a>Spotify</a></li>
                </ul>
            </div>
            <div className="redesFooter">
                <ul>
                <li><a href=""><img src="./img/youtube.png" alt="" /></a></li>
                <li><a href=""><img src="./img/twitch.png" alt="" /></a></li>
                <li><a href=""><img src="./img/instagram.png" alt="" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer