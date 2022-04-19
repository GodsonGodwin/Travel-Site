import React from 'react'
import CardItem from './CardItem'
import './Card.css'

const Cards = () => {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destination</h1>

        <div className="card-container">
            <div className="card-wrapper">
                <ul className="card-item">
                    <CardItem
                    src='images/waterfall.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon Garden...'
                    label='Adventure'
                    path='/services' />

                    <CardItem
                    src='images/island.jpg'
                    text='Travel to the most beautiful island in Paris with our private jet...'
                    label='Luxurious'
                    path='/services' />
                </ul>

                <ul className="card-item">
                    <CardItem
                    src='images/atlantic.jpg'
                    text='Sail through the Atlantic Ocean and experience the wonders of nature'
                    label='Mystery'
                    path='/services' />

                    <CardItem
                    src='images/desert.jpg'
                    text='Ride through the Sahara Desert on a guided camel tour'
                    label='Adenture'
                    path='/services' />

                    <CardItem
                    src='images/stadium.jpg'
                    text='Visit the most beautiful and largest stadium in the world'
                    label='Adrenalin'
                    path='/services' />
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Cards