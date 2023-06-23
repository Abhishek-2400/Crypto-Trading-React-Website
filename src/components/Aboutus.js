import React, { Component } from 'react'
import './Aboutus.css'
import picture from '../images/1.png'
export class Aboutus extends Component {
    render() {
        return (
            <div class='about-section'>

                <h1>About CryptoGuru</h1>

                <div className='about'>

                    <div className='about-pic'>
                        <img src={picture} alt='srry' />
                    </div>
                    <div className='about-text'>
                        <p>
                            CryptoGurur is a  education platform designed to help users easily learn about cryptocurrency, with simple, relevant and engaging content.
                            <br></br>
                            <br></br>
                            <br></br>
                            Start with cryptocurrency basics or choose from our common themes.
                        </p>
                        <button className='button'>Enter Academy</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default Aboutus
