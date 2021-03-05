import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the newsletter to receive our Projects updates
        </p>
        <p className='footer-subscription-text'>
          You can subscribe here
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Marketing</Link>
            <Link to='/'>Production</Link>
            <Link to='/'>Web Devolpment</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/github.com/lstvgore'>GitHub</Link>
            <Link to='/'>Email</Link>
            <Link to='/'>Phone</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Galery</h2>
            <Link to='/'>Photography</Link>
            <Link to='/'>Art</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='github.com/lstvgore'>GitHub</Link>
            <Link to='/'>linkedin</Link>
            <Link to='/'>Instagram</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            LSGORE
            </Link>
          </div>
          <small class='website-rights'>LSGORE © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link Github'
              to='/github.com/lstvgore'
              target='_blank'
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

