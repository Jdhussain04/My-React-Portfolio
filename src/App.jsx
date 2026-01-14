import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home'
import OurProjects from './components/Portfolio/OurProjects';

const App = () => {
  return (
    <BrowserRouter basename="/My-React-Portfolio/">
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Projects Page */}
        <Route path="/projects" element={<OurProjects />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App;
