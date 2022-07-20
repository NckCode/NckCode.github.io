import React from 'react'
import './about.css'
import {FiAward} from 'react-icons/fi'
import {GiGraduateCap} from 'react-icons/gi'
import {AiOutlineProject} from 'react-icons/ai'
import ME from '../../materials/razerlogo.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <GiGraduateCap className='about__icon'/>
              <h5>Study</h5>
              <small>-B Tech in Computer Science & Engineering</small><br />
              <small>  -Diploma in Computer Technology</small>
            </article>
            <article className='about__card'>
              <AiOutlineProject className='about__icon'/>
              <h5>Projects</h5>
              <small>-CoVid Tracker </small><br></br>
              <small> -Plastic Detection Using YOLOV5 </small>
            </article>
          </div>

          <p>
            I'm a Web Developer. Something about development of websites is very intriguing to me and Front-End very interesting to me as it is the part of the website which shows the creativity of the developer. I am also keen on understanding all the Back-end part of the Web Development.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About