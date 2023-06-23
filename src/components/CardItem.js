import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'

function CardItem(props) {
    const { src, text, label, path } = props;
    return (
        // <li className='cards__item'>
        //     <Link className='cards__item__link' to={path}>

        //         <figure className='cards__item__pic-wrap' data-category={label}>
        //             <img src={src} className='cards__item__img' alt='dubai' />

        //         </figure>

        //         <div className='cards__item__info'>
        //             <h5 className='cards__item__text'>{props.text}</h5>
        //         </div>
        //     </Link>

        // </li>
        <div className='card-container'>
            <Link className='cards__item__link' to={path}>
                <div className='image-container'>
                    <img src={src} alt='srry' />
                </div>

                <div className='card-content'>
                    <div className='card-title'>
                        <p>{text}</p>
                    </div>
                </div>
                {/* <div className='button-container'>
                <button class='button-card-section'>Enter Gurukulam</button>
            </div> */}

            </Link>
        </div>
    )
}

export default CardItem