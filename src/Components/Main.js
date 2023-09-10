import React from 'react';
import '../App.css'
import About from './About';
import Sponsors from './Sponsors';
import TechEvents from './TechEvents';
import Workshops from './Workshops';
import Team from './Team';
import Footer from './Footer';
import CarouselComponent from './Carousel';
import EntryPass from './EntryPass';


const Main = () => {
    return (
        <div>
            <EntryPass/>
            <About />
            <Sponsors />
            <TechEvents/>
            <Workshops />
            <CarouselComponent/>
            <Team />
            <Footer />
        </div>
    )
}

export default Main;