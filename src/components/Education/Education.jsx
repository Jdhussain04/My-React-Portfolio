import React from 'react'
import './Education.css'
import { RiGraduationCapFill } from "react-icons/ri";
import { BsSuitcaseLgFill } from "react-icons/bs";

const educationData = [
    {
        id: 1,
        institute: 'Ilma University',
        subtitle: 'Bachelor in Computer Science',
        date: '2016 - 2021'
    },
    {
        id: 2,
        institute: 'Aptech Institute',
        subtitle: 'DISM Diploma (1 Year)',
        date: '2021 - 2022'
    },
    {
        id: 3,
        institute: 'Bufferzone Degree College',
        subtitle: 'Intermediate (Pre-Engineering)',
        date: '2011 - 2012'
    },
]

const workExperienceData = [
    {
        id: 1,
        institute: 'Kore Digital Pakistan',
        subtitle: 'Senior WordPress Developer',
        date: 'Jan 2023 - May 2025'
    },
    {
        id: 2,
        institute: 'FlexApps LLC',
        subtitle: 'Senior WordPress Developer',
        date: 'Sep 2022 - Dec 2022'
    },
    {
        id: 3,
        institute: 'Lunakware Solutions',
        subtitle: 'WordPress Developer',
        date: 'May 2021 - Aug 2022'
    },
]

const Card = ({ title, icon, items }) => {
    return (
        <div className='card design'>
            <div className='flex gap-1 border-btm p-bottom-1'>
                <div className='icon-container orange-inverse'>
                    {icon}
                </div>
                <h3>{title}</h3>
            </div>

            <div className='mt-2'>
                {items.map(item => (
                    <div className='flex between mt-2' key={item.id}>
                        <div>
                            <span className="sub-text">{item.institute}</span>
                            <p>{item.subtitle}</p>
                        </div>
                        <div className='list'>{item.date}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Education = () => {
    return (
        <section>
            <div className="wrapper p-block-9 border-btm">
                <div className='text-center'>
                    <span className='sub-text overlay-text middle' datatype='Education & Work'>
                        Education & Work
                    </span>
                    <h2>
                        My <span className="green-text">Academic &<br /> Professional</span> Journey
                    </h2>
                </div>

                <div className='flex gap-5 mt-5'>
                    <Card title="Education" icon={<RiGraduationCapFill />} items={educationData} />
                    <Card title="Work Experience" icon={<BsSuitcaseLgFill />} items={workExperienceData} />
                </div>
            </div>
        </section>
    )
}

export default Education
