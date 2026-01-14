import React from 'react'
import './ContactMe.css'
import { FaLinkedinIn, FaGithub, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";



const ContactMe = () => {
  return (
    <section id='contact-me'>
        <div className="wrapper p-block-9">
             <div className='text-center'>
                <span className='sub-text overlay-text middle' datatype='Contact'>Contact Me</span>
                <h2>
                    Let's Talk for <span className="green-text">Your<br/> Next Project</span>
                </h2>
            </div>
            <div className='flex gap-5 mt-5 stretch'>
            <form>
                <div className='flex gap-2'>
                    <div className='input-container'>
                        <label htmlFor="name">Your Name*</label>
                        <input type="text" name="name" id="name" required autoComplete='off' placeholder='Ex. John Doe' className='input-field'/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" id="email" required autoComplete='off' placeholder='example@gmail.com' className='input-field'/>
                    </div>
                </div>
                <div className='flex gap-2 mt-1'>
                    <div className='input-container'>
                        <label htmlFor="phone">Phone*</label>
                        <input type="tel" name="phone" id="phone" required autoComplete='off' placeholder='Enter Phone Number' className='input-field'/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor="interest">I'm interested in*</label><br/>
                        <select name='interest' id='interest' defaultValue="select" className='input-field select'>
                            <option disabled value="Select">Select</option>
                            <option value="Pakistan">Web Development</option>
                            <option value="Saudia">WordPress Development</option>
                            <option value="America">Wix & Squarespace Design</option>
                            <option value="Uk">Shopify Store</option>
                        </select>
                    </div>
                </div>
                <div className='flex gap-2 mt-1'>
                    <div className='input-container'>
                        <label htmlFor="range">Budget(USD)*</label><br/>
                        <select name='range' id='range' defaultValue="select" className='input-field select'>
                            <option disabled value="Select">Select</option>
                            <option value="Pakistan">$400 - $500</option>
                            <option value="Saudia">$500 - $600</option>
                            <option value="America">$600 - $700</option>
                        </select>
                    </div>
                    <div className='input-container'>
                        <label htmlFor="country">Country*</label><br/>
                        <select name='country' id='country' defaultValue="select" className='input-field select'>
                            <option disabled value="Select">Select</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Saudia">Saudi Arabia</option>
                            <option value="America">America</option>
                            <option value="Uk">United Kingdom</option>
                        </select>
                    </div>
                </div>
                <div className='mt-1'>
                    <label htmlFor='message'>Your Message*</label><br/>
                    <textarea name="message" id="message" placeholder='Enter here...' required className='input-field' rows='6'></textarea>
                </div>
                <div className='mt-1'>
                    <a href='#' className='btn'>Send Message</a>
                </div>
            </form>
            <div className='info'>
                <div className='detail gap-4'>
                    <div>
                        <h6>Address</h6>
                        <p>75850. Karachi Pakistan</p>
                    </div>
                    <div>
                        <h6>Contact</h6>
                        <p>Phone: +92315-2365237<br/>
                           Email: jd.hussain004@gmail.com</p>
                    </div>
                    <div>
                        <h6>Time</h6>
                        <p>
                            Monday-Friday: 10:00 - 08:00<br/>
                            Saturday-Sunday: 10:00 - 06:00
                        </p>
                    </div>
                </div>

                <div className='bg-header rounded-b'>
                        <h5>Stay Connected</h5>
                

                        <div className='flex gap-1 mt-1'>
                            <a href='https://www.linkedin.com/in/junaid-hussain-285aa4137/' target="_blank" className='icon-container'>
                                <FaLinkedinIn />
                            </a>
                            <a href='https://github.com/Jdhussain04' target="_blank" className='icon-container'>
                                <FaGithub />
                            </a>
                            <a href='tel:+923152365237' className='icon-container'>
                                <FaPhoneAlt />
                            </a>
                            <a href='https://wa.me/923152365237' target="_blank" className='icon-container'>
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactMe
