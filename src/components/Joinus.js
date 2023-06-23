import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

import pic1 from '../images/mission.png'
import pic2 from '../images/financial.png'
import pic3 from '../images/forward.jpg'

function Joinus() {
    return (
        // <div className='cards'>

        //     <h1>Check out these Epic Destinations</h1>

        //     <div className='cards__container'>
        //         <div className='cards__wrapper'>
        //             <ul className='cards__items'>
        //                 <CardItem
        //                     src={pic1}
        //                     text="Dubai"
        //                     label='Adventure'
        //                     path='/services'
        //                 />
        //                 <CardItem
        //                     src={pic2}
        //                     text="INDIA"
        //                     label='Adventure&Fun'
        //                     path='/services'
        //                 />


        //             </ul>
        //             <ul className='cards__items'>
        //                 <CardItem
        //                     src={pic3}
        //                     text="Rome"
        //                     label='Fun'
        //                     path='/services'
        //                 />
        //                 <CardItem
        //                     src={pic4}
        //                     text="Switzerland"
        //                     label='Fun'
        //                     path='/services'
        //                 />
        //             </ul>
        //             <ul className='cards__items'>
        //                 <CardItem
        //                     src={pic5}
        //                     text="France"
        //                     label='Fun'
        //                     path='/services'
        //                 />
        //                 <CardItem
        //                     src={pic6}
        //                     text="Amazon"
        //                     label='Fun'
        //                     path='/services'
        //                 />
        //             </ul>

        //         </div>

        //     </div>

        // </div>

        <div className='card-section'>
            <h1>Why CryptoGuru</h1>

            <div className='all-cards'>


                <CardItem
                    text='Makes you ahead of your time'
                    src={pic3}
                    path='/service'
                />
                <CardItem
                    text='Financial Independence Incorporation'
                    src={pic2}
                    path='/service'
                />
                <CardItem
                    text='Redefining Trading in India'
                    src={pic1}
                    path='/service'
                />
            </div>

        </div>
    )
}

export default Joinus