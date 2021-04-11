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
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Marketing</Link>
            <Link to='/'>Production</Link>
            <Link to='/'>Web Devolpment</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <a
              href="https://github.com/lstvgore"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
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
            <a
              href="https://www.instagram.com/stvgore"
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>
            <a
              href="https://www.linkedin.com/in/lestergore"
              target="_blank"
              rel="noreferrer"
            >
              LinkdIn
            </a>
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
            <a
              href="https://github.com/lstvgore"
              target="_blank"
              rel="noreferrer"
            >
              <i class='fab fa-github' />
            </a>
            <a
              href="https://www.instagram.com/stvgore"
              target="_blank"
              rel="noreferrer"
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              href="https://www.linkedin.com/in/lestergore"
              target="_blank"
              rel="noreferrer"
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

