import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Headline from './components/Headline/Headline'
import Services from './components/Services/Services'

const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Headline/>
      <Services/>
    </div>
  )
}

export default App