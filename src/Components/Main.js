import React from 'react';
import '../App.css'
import About from './About';
import Sponsors from './Sponsors';
import TechEvents from './TechEvents';
import Team from './Team';
import Footer from './Footer';
import CarouselComponent from './Carousel';

const Main = () => {
    return (
        <div>
            <About />
            <Sponsors />
            <TechEvents />
            <CarouselComponent/>
            <Team />
            <Footer />
        </div>
    )
}

export default Main;