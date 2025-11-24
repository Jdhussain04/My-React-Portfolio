import React from 'react'
import './Projects.css'
import Project1 from '../../assets/britechx-hero.PNG'
import Project2 from '../../assets/tba-hero.PNG'
import Project3 from '../../assets/jw-hero.PNG'
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {

    const renderProjectsData = ProjectData.map(project =>{
        return (
            <div className="card flex gap-5 project" key={project.id}>
                <div className="project-image">
                    <img src={project.image}/>
                </div>

                <div className="project-content">
                    <ul className='flex gap-1'>
                        {project.tech.map(technology => {
                            return(
                                <li key={technology.id} className='list'>{technology.list}</li>
                            )
                        })}
                    </ul>
                    <h3 className='mt-2'>{project.title}</h3>
                    <p className='para'>{project.description}</p>
                    <a href={project.link} target="_blank" className='icon-container border-inverse rotate'>
                        <FaArrowRight/>
                    </a>
                </div>
            </div>
        )
    })
  return (
    <section id='portfolio'>
        <div className='wrapper p-block-9'>
            <div className='flex between gap-4'>
                <div>
                    <span className='sub-text overlay-text' datatype='Portfolio'>My Portfolio</span>
                    <h2>Let's have a look<br/> at <span className='green-text'>My Portfolio</span></h2>
                </div>
                <a href='#' className='btn self-end'> View All Projects</a>
            </div>

            <div className='flex column gap-2 mt-5'>
                {renderProjectsData}
            </div>
        </div>
    </section>
  )
}

export default Projects

const ProjectData = [
    {    id: 1,
            title: 'BritechX – Modern WordPress Business Website',
            description: 'Designed and developed a fully responsive WordPress website for BritechX, featuring clean layouts, intuitive navigation, and a professional corporate look.',
            image: Project1,
            link: 'https://britechx.co.uk/',
            tech: [
        {
            id: 1,
            list: 'WordPress'
        },
        {
            id: 2,
            list: 'Html5'
        },
        {
            id: 3,
            list: 'CSS3'
        },
    ]
    },
    {    id: 2,
            title: 'TBA Global – Accounting & Tax Consultancy Website',
            description: 'Built a modern, responsive WordPress website for TBA Global, streamlining their accounting, VAT registration, and compliance services in a professional, user-friendly design.',
            image: Project2,
            link: 'https://tbaglobal.com/',
            tech: [
        {
            id: 1,
            list: 'WordPress'
        },
        {
            id: 2,
            list: 'Html5'
        },
        {
            id: 3,
            list: 'CSS3'
        },
        {
            id: 4,
            list: 'Figma'
        },
    ]
    },
    {    id: 3,
            title: 'JW Radford – Motivational Speaker & Consultant',
            description: 'Built a personal branding website for James “JW” Radford, featuring motivational content, his personal story, and a platform to connect with his audience.',
            image: Project3,
            link: 'https://jwradford.com/',
            tech: [
        {
            id: 1,
            list: 'WordPress'
        },
        {
            id: 2,
            list: 'Html5'
        },
        {
            id: 3,
            list: 'CSS3'
        },
        {
            id: 4,
            list: 'Figma'
        },
    ]
    },
]