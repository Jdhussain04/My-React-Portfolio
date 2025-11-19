import React from 'react'
import HeroImage from '../../assets/hero-image1.png'
// import CV from '../../assets/junaid-res-2025.pdf'
import './Hero.css'

const Hero = () => {
  return (
    <section>
        <div className='hero-section flex wrapper gap-4'>
            <div className="hero-content">
                <span className='sub-text'>Hello There!</span>
                <h1>
                    <span className='green-text'>I am Junaid,</span>
                    <br/>Web Developer based in Khi.
                </h1>
                <p className='para'>
                    I am an experienced web developer with 5+ years in the field, Collaborating with various companies and startups
                </p>
                <div className='flex gap-2'>
                    <a href='#' className='btn'>View My Works</a>
                    <a href='#' download='My CV' className='btn border-btn'>Download CV</a>
                </div>
            </div>
            <div className='hero-image'>
                <img src={HeroImage}/>
            </div>
        </div>
    </section>
  )
}

export default Hero
