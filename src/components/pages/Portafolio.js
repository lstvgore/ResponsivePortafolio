import { React } from 'react';
import '../../App.css'
import Footer from '../Footer';
import Cards from '../Cards';
import { NavLink } from "react-router-dom";

export default function Portafolio() {
    return (
        <>
            <div className='hero-container'>
                <img src='/images/Background1.jpeg' />
                <h1 className='PortafolioH1'>Portafolio</h1>
                <br />
            </div>
            <div className='Portafolio-cards'>
                <Cards />
                <Footer />

            </div>
        </>
    )
}