
import { React } from 'react';
import '../../App.css'
import AboutText from '../AboutText';
// import { Hyperlink } from 'react-native-hyperlink';
import Footer from '../Footer';

export default function About() {
    return (
        <>
            <div className='About'>

                <h1 className='title'>About
          <br />
          Me
          <br />
          Watch
          <br />
          Trailer</h1>
            </div>
            <div className='Aboutme-cards'>
                <AboutText />
                <Footer />
            </div>
        </>
    )
}


