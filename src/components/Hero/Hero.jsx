import React from 'react';
import './hero.css'
import Button from '../button/Button';

const Hero = () => {
  return (
    <div className='hero'>
        <video src='/videos/travel.mp4' autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>

        <div className='hero-btn'>
            <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
                Get Started
            </Button>

            <Button 
            className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
                Watch Trailer <i className='fa fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default Hero