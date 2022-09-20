import React from 'react'
import './portfolio.css'
import IMG1 from '../../materials/Pd1.jpg'
import IMG2 from '../../materials/Covid-snap1.png'
import IMG3 from '../../materials/skywalls.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="PlasticDetection"  />
          </div>
            <h3>Plastic Detection Using YOLOV5</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com/NckCode/plastic-detection-yolo" target ='_blank'className='btn'>Github</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="CovidTracker"  />
          </div>
            <h3>CoVid Tracker</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com/NckCode/Covid-Tracker" target ='_blank'className='btn'>Github</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="skywalls"  />
          </div>
            <h3>SkyWalls</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com/NckCode/SkyWalls" target ='_blank'className='btn'>Github</a>
              <a href="https://skywallsproject.netlify.app/" target ='_blank'className='btn'>Live</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio