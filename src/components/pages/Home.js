import React from 'react'
import Hero from '../Hero';
import Cards from '../Cards';
import Footer from '../Footer';
import Joinus from '../Joinus';
import Aboutus from '../Aboutus';
import Partner from '../Partner';
import Mission from '../Mission';
function Home() {
    return (
        <>
            <Hero />
            <Aboutus />
            <Mission />
            <Cards />
            <Joinus />
            <Partner />
            <Footer />
        </>
    )
}

export default Home;