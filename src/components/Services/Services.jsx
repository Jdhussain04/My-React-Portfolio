import React from 'react'
import './Services.css'
import { FaPenRuler } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



const Services = () => {
    
    const renderServicesData = servicesData.map(service => {
        return(
            <div className='card design' key={service.id}>
                <span className='service-icon'>{service.icon}</span>
                <h4 className='m-block-1'>{service.title}</h4>
                <p className='m-block-1 hide-text'>{service.description}</p>
                <a href='#' className='link'>
                    Learn More &nbsp;
                    <FaArrowRight className='arrow green-text'/>
                    </a>
            </div>
        )
    })

  return (
    <section id='services'>
        <div className='wrapper p-block-9 border-btm'>
            <div className='flex between gap-4'>
                <div>
                    <span className='sub-text overlay-text' datatype='Services'>My Specialization</span>
                    <h2><span className='green-text'>Services</span> I Provide</h2>
                </div>
                <a href='#' className='btn self-end'> View All Services</a>
            </div>
            <div className='flex gap-2 stretch mt-5'>
                {renderServicesData}
            </div>
        </div>
    </section>
  )
}

export default Services


const servicesData = [
    {
        id: 1,
        title: 'Web Development',
        description: 'I offer professional Web Development services that asthetics with functionality, creating intuitive, user-friendly interfaces. My engagement, ensure seamless experiences, and align perfectly with your brands goals across web and mobile platforms.',
        icon: <FaPenRuler />,
    },
    {
        id: 2,
        title: 'WordPress Development',
        description: 'I offer professional Web Development services that asthetics with functionality, creating intuitive, user-friendly interfaces. My engagement, ensure seamless experiences, and align perfectly with your brands goals across web and mobile platforms.',
        icon: <FaPenNib />,
    },
    {
        id: 3,
        title: 'Wix Design',
        description: 'I offer professional Web Development services that asthetics with functionality, creating intuitive, user-friendly interfaces. My engagement, ensure seamless experiences, and align perfectly with your brands goals across web and mobile platforms.',
        icon: <FaLaptopCode />,
    },
]
