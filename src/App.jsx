import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
 import Education from './Components/Education/Education'
import Project from './Components/Project/Project'
import Skill from './Components/Skill/Skill'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Project/>
      <Skill/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
