import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Nishant</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.instagram.com/n.c.k._/' target="_blank"><AiOutlineInstagram size='2em'/></a>
        <a href="https://www.linkedin.com/in/nishant-muthiya-89b3361a6/"><AiOutlineLinkedin size='2em'/></a>
        <a href='https://github.com/NckCode' target="_blank"><AiFillGithub size='2em'/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nishant Muthiya. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer