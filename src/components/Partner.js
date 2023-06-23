import React from 'react'
import './Partner.css'
import community from '../images/comm.jpg'
export default function partner() {
    return (
        <div className='partner'>
            <h1>Join The Community Today and Grow together with your mates</h1>
            <div className='community'>
                <div className='comm-image'>
                    <img src={community} alt='srry' />
                </div>
                <div className='comm-links'>
                    <button className='comm-butt-discord'>Join Discord   <i class="fa-brands fa-discord"></i></button>
                    <button className='comm-butt-telegram'>Join Telegram   <i class="fa-brands fa-telegram"></i></button>
                    <button className='comm-butt-instagram'>Join Instagram   <i class="fa-brands fa-instagram"></i></button>
                    <button className='comm-butt-twitter'>Join Twitter    <i class="fa-brands fa-twitter"></i></button>
                </div>
            </div>
        </div>
    )
}
