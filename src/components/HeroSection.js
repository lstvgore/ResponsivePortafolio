import React from 'react'
import '../App.css'
import { Button } from './Button';
import './HeroSection.css'


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/Videos/Video-1.mp4" autoPlay loop muted />
            <h1>Welcome.</h1>
            <p>Marketing and Programming</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>About Me</Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>Photos<i className='far fa-play-circle'/> </Button>
            </div>
        
        </div>
    );
}

export default HeroSection;
