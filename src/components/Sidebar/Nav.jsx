import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {FaUserGraduate} from 'react-icons/fa'
import {GiNorthStarShuriken} from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import {FiMessageSquare} from 'react-icons/fi'
import { useState, useRef, useEffect } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  const ref = useRef()
  return (
    <nav>
      <a href='#'onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><GoHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserGraduate/></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><GiNorthStarShuriken/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiMessageSquare/></a>
    </nav>
  )
}

export default Nav