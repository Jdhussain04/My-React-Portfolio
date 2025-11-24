import React from 'react'
import Slider from "react-slick";
import './Testimonial.css'
import profile1 from '../../assets/profile1.jpg'
import profile2 from '../../assets/profile2.jpg'
import profile3 from '../../assets/profile3.jpg'
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const renderTestimonialData = testimonialData.map(review =>{
        return(
            <div className='card' key={review.id}>
                <div className='flex gap-2'>
                <div className='profile'>
                    <img src={review.image}/>
                </div>
                <div>
                    <h4>{review.name}</h4>
                    <p>{review.title}</p>
                    <span>{Array.from({length: review.rating}, (_ , i) =>(
                        <FaStar key={i} className='rating-star'/>
                    ))}</span>
                </div>
                </div>
                <div>
                    <p className='para'>{review.text}</p>
                </div>
            </div>
        )
    })
  return (
    <section id='testimonial'>
        <div className='wrapper p-block-9 border-btm'>
            <div className='text-center'>
                <span className='sub-text overlay-text middle' datatype='Testimonials'>Client Testimonials</span>
                <h2>
                    Testimonials that <br/> <span className="green-text">Speaks to my result</span>
                </h2>
            </div>

            <Slider {...settings} className='mt-5'>
                {renderTestimonialData}
            </Slider>
        </div>
    </section>
  )
}

export default Testimonial


const testimonialData = [
    {
        id: 1,
        name: 'Leslie Alexender',
        title: 'CEO, Software Company',
        image: profile1,
        rating: 5,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, molestias.',
    },
    {
        id: 2,
        name: 'Dianne Russell',
        title: 'CEO, Plant Shop App',
        image: profile2,
        rating: 5,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, molestias.',
    },
    {
        id: 3,
        name: 'Alexander John',
        title: 'CEO, Tech Innovation',
        image: profile3,
        rating: 5,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, molestias.',
    },
]


 var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,       // desktop default
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 1,   // mobile
      }
    }
  ]
};
