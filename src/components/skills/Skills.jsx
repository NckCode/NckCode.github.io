import React from 'react'
import './skills.css'
import {BsCheck2Circle} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Front-end Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsCheck2Circle className='skills__details-icon'/>
             <div>
              <h4>HTML</h4>
              <small>Experienced</small>
             </div>
            </article>
            <article className='skills__details'>
              <BsCheck2Circle className='skills__details-icon'/>
              <div>
               <h4>CSS</h4>
               <small>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsCheck2Circle className='skills__details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small>Intermediate</small>
            </div>
            </article>
            <article className='skills__details'>
              <BsCheck2Circle className='skills__details-icon'/>
            <div>
              <h4>React.js</h4>
              <small>Intermediate</small>
            </div>
            </article>
          </div>
        </div>
        <div className="skills__backend">
        <h3>Back-end Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
             <BsCheck2Circle className='skills__details-icon'/>
             <div>
                <h4>Node.js</h4>
                <small>Beginner</small>
             </div>
            </article>
            <article className='skills__details'>
              <BsCheck2Circle className='skills__details-icon'/>
              <div>
                <h4>Python</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsCheck2Circle className='skills__details-icon'/>
              <div>
                <h4>Java</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience