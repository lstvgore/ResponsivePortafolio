import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
       <>
       <nav className="navbar">
           <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                LSGORE <i className= 'fab.fa-typo3'/>  
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Portafolio' className='nav-links' onClick={closeMobileMenu}>
                        Portafolio
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Work' className='nav-links' onClick={closeMobileMenu}>
                        Work
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/About' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
           </div>
       </nav>
       </>
    )
}

export default Navbar

