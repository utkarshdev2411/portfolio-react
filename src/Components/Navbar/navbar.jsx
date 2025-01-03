import React from 'react'
import './navbar.css'
import Toggle from '../Toggle/toggle'
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className='n-wrapper' id='Navbar'>
      <div className='n-left'>
        <div className='n-name'>Utkarsh</div>
        <Toggle />
      </div>
      <div className='n-right'>
        <div className='n-list'>

          <ul style={{ listStyleType: 'none' }}>

            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Projects
              </Link>
            </li>

          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
