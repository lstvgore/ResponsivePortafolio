import { React } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { NavLink } from "react-router-dom";
import Portafolio from './pages/Portafolio';

function CardsPort() {
    return (
        <div className='cards'>
            <h1>Portafolio</h1>
            <br />
            <h3>Full Stack Web and App Developer, skills in Javascript, React.js, Node.js, MondoDB, MySQL, responsive web and app Design.</h3>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/MurderMystery.gif'
                            text='Murder Mystery'
                            label='Gamers'
                            path='/'
                        />
                        <CardItem
                            src='images/WeatherDash.gif'
                            text='Weather Dashboard'
                            label='APIS'
                            path='/Portafolio'
                        />
                    </ul>
                    <ul class='cards__items'>
                        <CardItem
                            src='images/NoteTaker.gif'
                            text='NoteTaker'
                            label='Node.js'
                            path='/Portafolio'
                        />
                        <CardItem
                            src='images/QuizPop.gif'
                            text='PopQuiz'
                            label='Javascript'
                            path='/Portafolio'
                        />
                    </ul>
                    <ul class='cards__items'>
                        <CardItem
                            src='images/GroovInApp.gif'
                            text='GroovIn'
                            label='React.Js'
                            path='/Portafolio'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsPort;