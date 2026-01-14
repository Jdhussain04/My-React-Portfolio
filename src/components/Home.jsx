import React from 'react'
import Hero from './Hero/Hero'
import Headline from './Headline/Headline'
import Services from './Services/Services'
import AboutMe from './AboutMe/AboutMe'
import Projects from './Projects/Projects'
import Education from './Education/Education'
import Testimonial from './Testimonial/Testimonial'
import ContactMe from './ContactMe/ContactMe'

const Home = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home
