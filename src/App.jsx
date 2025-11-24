import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Headline from './components/Headline/Headline'
import Services from './components/Services/Services'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Testimonial from './components/Testimonial/Testimonial'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'

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
      <Education/>
      <Testimonial/>
      <ContactMe/>
      <Headline/>
      <Footer/>
    </div>
  )
}

export default App