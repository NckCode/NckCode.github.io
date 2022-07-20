import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
// import {AiOutlineInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/nishant-muthiya-89b3361a6/' target="_blank"><AiOutlineLinkedin size="2em"/></a>
        <a href='https://github.com/NckCode' target="_blank"><AiFillGithub size="2em"/></a>
        {/* <a href='https://www.instagram.com/n.c.k._/' target="_blank"><AiOutlineInstagram size="2em"/></a> */}
    </div>
  )
}


export default HeaderSocials