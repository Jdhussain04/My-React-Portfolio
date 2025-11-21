import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Headline from './components/Headline/Headline'
import Services from './components/Services/Services'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'

const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Headline/>
      <Services/>
      <AboutMe/>
      <Projects/>
      <Headline/>
    </div>
  )
}

export default App