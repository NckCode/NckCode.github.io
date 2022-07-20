import React from 'react'
import './services.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>React.js</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheckCircle className='service___list-icon'/>
              <p>Creating a React project</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service___list-icon'/>
              <p>Using States</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service___list-icon'/>
              <p>Hooks</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service___list-icon'/>
              <p>Component creation</p>
            </li>
          </ul>
        </article>
        {/*  END OF REACT.JS  */ }

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheckCircle className='service___list-icon'/>
              <p>Info Gathering</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service___list-icon'/>
              <p>Planning</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service___list-icon'/>
              <p>Design</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service___list-icon'/>
              <p>Development</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service___list-icon'/>
              <p>Deployment</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */ }

        <article className='service'>
          <div className="service__head">
            <h3>Other skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheckCircle className='service___list-icon'/>
              <p>C++</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service___list-icon'/>
              <p>C</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service___list-icon'/>
              <p>Java</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service___list-icon'/>
              <p>Adaptive</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service___list-icon'/>
              <p>OOP Concepts</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services