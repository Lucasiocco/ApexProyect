import React from "react";


const Footer = () => {
    return (
        <div className="containerFooter">
            <img src="./img/logoFooter2.png" alt="" />
            <p>All Copy Rights Reserved.</p>
            <div className="linkFooter">
                <ul>
                    <li><a class="nav-link" href="#">Inicio</a></li>
                    <li><a class="nav-link" href="#">Nosotros</a></li>
                    <li><a class="nav-link" href="#">Spotify</a></li>
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