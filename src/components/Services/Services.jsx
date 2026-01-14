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
        description: 'I offer professional Web Development services that blend aesthetics with functionality, creating seamless user experiences.',
        icon: <FaPenRuler />,
    },
    {
        id: 2,
        title: 'WordPress Development',
        description: 'I craft responsive WordPress websites, turning creative designs into fully functional, user-friendly sites.',
        icon: <FaPenNib />,
    },
    {
        id: 3,
        title: 'Wix Design',
        description: 'I design responsive Wix sites that bring creative ideas to life with user-friendly layouts.',
        icon: <FaLaptopCode />,
    },
]
