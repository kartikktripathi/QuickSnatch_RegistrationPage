import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import LastYear from '../components/LastYear/LastYear';
import Winners from '../components/Winners/Winners';
import EventGuidelines from '../components/EventGuidelines/EventGuidelines';

import RegisterCTA from '../components/RegisterCTA/RegisterCTA';
import Footer from '../components/Footer/Footer';
import CyberBackground from '../components/CyberBackground/CyberBackground';
import SystemStatus from '../components/SystemStatus/SystemStatus';

const Home = () => {
    return (
        <div className="home-container">
            <CyberBackground />
            <Navbar />
            <SystemStatus />
            <main>
                <Hero />
                <Winners />
                <EventGuidelines />
                <LastYear />

                <RegisterCTA />
            </main>
            <Footer />
        </div>
    );
};

export default Home;



