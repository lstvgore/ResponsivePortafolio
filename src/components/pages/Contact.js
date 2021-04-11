import { React } from 'react';
import '../../App.css'
import Footer from '../Footer';
import { Link } from 'react-router-dom';


export default function Contacts() {
  return (
    <>
      <div className='Contacts'>
        <image src='Images/Background3.jpeg' />
        <h1 className="ContactsH1">Contacts</h1>
        <br />
      </div>
      <div className='Contacts-cards'>
        <Footer />
      </div>

    </>
  )
}