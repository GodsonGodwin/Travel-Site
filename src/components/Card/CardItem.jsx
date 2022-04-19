import React from 'react'
import {Link} from 'react-router-dom'

const CardItem = ({path, label, src, text}) => {
  return (
    <>
    <li className='card_component'>
        <Link to={path} className='card-item-link' >
            <figure className='card-pic-wrapper' data-category={label}>
                <img src={src} alt='Travel' className='image-card'/>
            </figure>

            <div className='card-info'>
                <h5 className="card-text">{text}</h5>
            </div>
        </Link>
    </li>
    </>
  )
}

export default CardItem