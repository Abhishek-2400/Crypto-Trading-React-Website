import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import edu from '../images/certi.jpg'
import trade from '../images/bitcoin.jpg'
import bc from '../images/bc.jpg'
import boot from '../images/boot.jpg'

function Cards() {
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
            <h1>What we Offer</h1>

            <div className='all-cards'>
                <CardItem
                    text='Curated courses for Crypto Trading , Blockchain and many more '
                    src={edu}
                    path='/service'
                />

                <CardItem
                    text='Virtual trading platform for learning while trading in real time environment with no loss'
                    src={trade}
                    path='/service'
                />
                <CardItem
                    text='BootCamps and Collaboration with schools for Crypto trading classes'
                    src={boot}
                    path='/service'
                />
                <CardItem
                    text='Events , Meetups , Sponsorships , Hackathons regarding Blockchain and trading'
                    src={bc}
                    path='/service'
                />
            </div>

        </div>
    )
}

export default Cards