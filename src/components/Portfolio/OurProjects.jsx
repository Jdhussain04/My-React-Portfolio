import React from 'react';
import './OurProjects.css';
import portImage from '../../assets/abcd-.png';
import Headline from '../Headline/Headline';
import Project1 from '../../assets/britechx-hero.PNG';
import Project2 from '../../assets/tba-hero.PNG';
import Project3 from '../../assets/jw-hero.PNG';
import Project4 from '../../assets/tcs-services.PNG'
import Project5 from '../../assets/premi-clean.PNG'
import Project6 from '../../assets/Ues.PNG'
import Project7 from '../../assets/smartcharity.PNG'
import Project8 from '../../assets/eurotaxi.PNG'
import Project9 from '../../assets/koredigital.PNG'
import { FaArrowRight } from "react-icons/fa";

const OurProjects = () => {
  return (
    <section id='portfolio-section'>
      <div className='flex wrapper gap-4 mt-2'>
        <div className='port-sec'>
          <h1>Our <span className='green-text'>Portfolio</span></h1>
          <p>
            My portfolio gives you a clear idea of my skills and projects. Here, you’ll find the websites I’ve designed and developed — simple, clean, and fully responsive. In every project, I focus on modern design, fast performance, and a user-friendly experience. Scroll through to see what I can create for you.
          </p>
        </div>
        <div className='hero-image'>
          <img src={portImage} alt="Portfolio Hero" />
        </div>
      </div>

      <Headline />
       <div className='projects-cards flex wrapper column gap-2 mt-5'>
        {ProjectData.map(project => (
          <div className="card flex gap-5 project" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title}/>
            </div>
            <div className="project-content">
              <ul className='flex gap-1'>
                {project.tech.map(tech => (
                  <li key={tech.id} className='list'>{tech.list}</li>
                ))}
              </ul>
              <h3 className='mt-2'>{project.title}</h3>
              <p className='para'>{project.description}</p>
              <a href={project.link} target="_blank" className='icon-container border-inverse rotate'>
                <FaArrowRight/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;


export const ProjectData = [
  {    
    id: 1,
    title: 'BritechX – Modern WordPress Business Website',
    description: 'Designed and developed a fully responsive WordPress website for BritechX, featuring clean layouts, intuitive navigation, and a professional corporate look.',
    image: Project1,
    link: 'https://britechx.co.uk/',
    tech: [
      { id: 1, list: 'WordPress' },
      { id: 2, list: 'Html5' },
      { id: 3, list: 'CSS3' },
    ]
  },
  {    
    id: 2,
    title: 'TBA Global – Accounting & Tax Consultancy Website',
    description: 'Built a modern, responsive WordPress website for TBA Global, streamlining their accounting, VAT registration, and compliance services in a professional, user-friendly design.',
    image: Project2,
    link: 'https://tbaglobal.com/',
    tech: [
      { id: 1, list: 'WordPress' },
      { id: 2, list: 'Html5' },
      { id: 3, list: 'CSS3' },
      { id: 4, list: 'Figma' },
    ]
  },
  {    
    id: 3,
    title: 'JW Radford – Motivational Speaker & Consultant',
    description: 'Built a personal branding website for James “JW” Radford, featuring motivational content, his personal story, and a platform to connect with his audience.',
    image: Project3,
    link: 'https://jwradford.com/',
    tech: [
      { id: 1, list: 'WordPress' },
      { id: 2, list: 'Html5' },
      { id: 3, list: 'CSS3' },
      { id: 4, list: 'Figma' },
    ]
  },
    {    
    id: 4,
    title: 'Trust Consulting Services – IT & Digital Transformation Solutions',
    description: 'Built a professional digital consulting website for Trust Consulting Services, featuring IT consulting solutions, digital transformation strategies, and showcasing services designed with WordPress and visually crafted in Figma.',
    image: Project4,
    link: 'https://trustconsultingservices.com/',
    tech: [
      { id: 1, list: 'WordPress' },
      { id: 2, list: 'Html5' },
      { id: 3, list: 'CSS3' },
      { id: 4, list: 'Figma' },
    ]
  },
    {    
    id: 5,
    title: 'PREMiClean – Professional Commercial & Office Cleaning Services',
    description: 'Built a full‑service commercial cleaning website for PREMiClean, showcasing their eco‑friendly, reliable and highly‑supervised cleaning solutions for offices, shops, gyms, community centres, theatres and more — designed for efficiency, safety, and customizable client‑focused service.',
    image: Project5,
    link: 'https://premiclean.co.uk/',
    tech: [
      { id: 1, list: 'WordPress' },
      { id: 2, list: 'Html5' },
      { id: 3, list: 'CSS3' },
      { id: 4, list: 'Figma' },
    ]
  },
    {    
    id: 6,
    title: 'UES – Smart Home & Commercial Automation Solutions',
    description: 'Built a state‑of‑the‑art technology integration website for Ultimate Electronic Solutions, showcasing their full range of smart home and commercial services — from lighting, home automation, and home theatre to security camera systems — all crafted with modern design and built for seamless user experience.',
    image: Project6,
    link: 'https://www.uesav.com/',
    tech: [
      { id: 1, list: 'WordPress' },
      { id: 2, list: 'Html5' },
      { id: 3, list: 'CSS3' },
      { id: 4, list: 'Figma' },
    ]
  },
    {    
    id: 7,
    title: 'Smart Charity – Nationwide Nonprofit Registration & Compliance Services',
    description: 'Developed a professional service‑oriented website for Smart Charity, offering streamlined nonprofit registration and compliance solutions across the US. The site highlights their end-to-end support — from initial filings to renewals — enabling charities to focus on their mission while Smart Charity handles all paperwork, state deadlines, and compliance requirements.',
    image: Project7,
    link: 'https://smartcharity.org/',
    tech: [
      { id: 1, list: 'WordPress' },
      { id: 2, list: 'Html5' },
      { id: 3, list: 'CSS3' },
      { id: 4, list: 'Figma' },
    ]
  },
    {    
    id: 8,
    title: 'Euro Airport Taxis – 24/7 Airport Transfers',
    description: 'Built a user‑friendly booking website for Euro Airport Taxis, showcasing their 24/7 airport shuttle and minibus transfer services across the UK — from saloon cars to 16‑seater minibuses. The platform highlights their commitment to punctuality, safety, and convenience, making airport travel stress‑free for individuals and groups alike.',
    image: Project8,
    link: 'https://euroairporttaxis.co.uk/',
    tech: [
      { id: 1, list: 'WordPress' },
      { id: 2, list: 'Html5' },
      { id: 3, list: 'CSS3' },
      { id: 4, list: 'Figma' },
    ]
  },
    {    
    id: 9,
    title: 'Kore Digital – Full‑Stack Digital Agency',
    description: 'Built a dynamic and creative digital agency website for Kore Digital, showcasing their full‑stack services: web and software development, branding, digital marketing, and data-driven solutions. Worked here as Team Lead and Senior CMS Developer, overseeing project development and implementing high-quality, responsive solutions using modern web technologies.',
    image: Project9,
    link: 'https://koredigital.com.pk/',
    tech: [
      { id: 1, list: 'WordPress' },
      { id: 2, list: 'Html5' },
      { id: 3, list: 'CSS3' },
    ]
  },
];
