import React from 'react'
import Header from './components/header/Header'
import Nav from './components/Sidebar/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './index.css'
import {Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App