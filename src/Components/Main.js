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

        </div>
    )
}

export default Main;