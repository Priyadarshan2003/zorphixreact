import React from 'react';
import '../App.css'
import About from './About';
import Sponsors from './Sponsors';
import TechEvents from './TechEvents';
import Team from './Team';
import Footer from './Footer';

const Main = () => {
    return (
        <div>
            <About />
            <Sponsors />
            <TechEvents />
            <Team />
            <Footer />
            <div id="pop">
                <h2 class="event_heading"></h2>

                <div class="event_section">
                    <button class="about-button">About</button>
                    <button class="organiser-button">Organiser</button>
                </div>
                <p class="event_content"></p>
                <div class="org hide">
                    <div class="org1">
                        <h2 class="org1-name"></h2>
                        <p>ORGANISER</p>
                        <p class="org1-phone"></p>
                    </div>
                    <div class="org2">
                        <h2 class="org2-name"></h2>
                        <p>ORGANISER</p>
                        <p class="org2-phone"></p>
                    </div>
                </div>
                <div class="modal-button">
                    <a class="btn btn--green" onclick="toggle()">Close</a>
                    <a class="btn btn--green regi" target="_blank">Register</a>
                </div>
            </div>

        </div>
    )
}

export default Main;