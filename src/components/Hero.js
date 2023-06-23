import React from 'react'
import { Button } from './Button'
import './Hero.css';
import video from '../videos/test.mp4';
import cheems from '../images/cheems.png'
import bull from '../images/bull.jpg'
import bitcoin from '../images/bitcoin.jpg'
function Hero() {
    return (


        <div className='hero-container'>
            <video src={video} autoPlay loop muted></video>

            <div class="pic">
                <img class='cheems' src={cheems}></img>
            </div>

            <div class="pic2">
                <img class='bull' src={bull}></img>
            </div>

            <div class="pic3">
                <img class='bitcoin' src={bitcoin}></img>
            </div>

            <h1>Crypto Made Simple With CryptoGuru </h1>
            <p>Take a course → Test what you've learned → Start Virtual Trading in Crypto</p>

            <button class='but'>Take Tour</button>
            {/* <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p> */}
            {/* <div className='hero-btns'>
                <form className='form'>
                    <input type="email" id="email" class="email" placeholder=' Start Your Crpto Journey ' />
                    <button class='but'>Signup</button>
                </form>
            </div> */}
        </div>
    );
};

export default Hero;