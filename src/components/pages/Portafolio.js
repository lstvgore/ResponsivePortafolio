import { React } from 'react';
import '../../App.css'
import Footer from '../Footer';
import { NavLink } from "react-router-dom";
import CardsPort from '../CardsPort';

export default function Portafolio() {
    return (
        <>
            <div className='hero-container'>
                <img src='/images/Background1.jpeg' />
                <h1 className='PortafolioH1'>Portafolio</h1>
                <br />
            </div>
            <div className='Portafolio-cards'>
                <CardsPort />
                <Footer />
            </div>
        </>
    )
}