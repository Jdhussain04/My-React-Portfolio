import React from "react";
import "./Footer.css";
import { FaLinkedinIn, FaGithub, FaPhoneAlt, FaWhatsapp, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="flex between border-btm p-block-2 gap-4">
          <h2>Let's <span className="green-text">Connect</span> There</h2>
          <a href='https://wa.me/923152365237' target="_blank" className="btn self-end">Hire Me Now</a>
        </div>

        <div className="p-block-7 flex flex-start gap-4">
            <div className="footer-wrapper">
            <a href='#' className='logo'>
              <span>J</span> Junaid.
            </a>

            <p className="mt-1">I'm an experienced web developer with 5+ years in the field, Collaborating with various companies and startups.</p>
            <div className='flex gap-1 mt-1'>
                <a href='https://www.linkedin.com/in/junaid-hussain-285aa4137/' target="_blank" className='icon-container black-inverse'>
                    <FaLinkedinIn />
                </a>
                <a href='https://github.com/Jdhussain04' target="_blank" className='icon-container black-inverse'>
                    <FaGithub />
                </a>
                <a href='tel:+923152365237'  className='icon-container black-inverse'>
                    <FaPhoneAlt />
                </a>
                <a href='https://wa.me/923152365237' target="_blank" className='icon-container black-inverse'>
                    <FaWhatsapp />
                </a>
            </div>
            </div>

            <ul className="footer-wrapper">
              <li className='mt-1'>
                <h6>Navigation</h6>
              </li>
              <li className='mt-1'>
                <a href="#home" className="link">Home</a>
              </li>
              <li className='mt-1'>
                <a href='#services' className='link'>Services</a>
              </li>
              <li className='mt-1'>
                <a href='#about' className='link'>About Me</a>
              </li>
              <li className='mt-1'>
                <a href='#portfolio' className='link'>Projects</a>
              </li>
              <li className='mt-1'>
                <a href='#testimonial' className='link'>Testimonials</a>
              </li>
              <li className='mt-1'>
                <a href='#contact-me' className='link'>Contact Me</a>
              </li>
            </ul>

            <ul className="footer-wrapper">
                <li className="mt-1">
                  <h6>Contact</h6>
                </li>
                <li className="mt-1">
                  <a href="#" className="link">+92315-2365237</a>
                </li>
                <li className="mt-1">
                  <a href='#' className='link'>jd.hussain004@gmail.com</a>
                </li>
                <li className="mt-1">
                  <a href='#' className='link'>Karachi Pakistan</a>
                </li>
            </ul>

            <div className="footer-wrapper">
              <h6>Get the latest Information</h6>
              <div className="footer-input mt-1 flex stretch">
                  <input type="email" autoComplete="off" placeholder="Email Here" className="email-field"/>
                  <button className="input-btn">
                      <FaPaperPlane />
                  </button>
              </div>
            </div>
        </div>

      </div>

      <div className="copyright">
        <div className="wrapper flex between">
          <p>Copyright &copy; Junaid. All Rights Reserved</p>
          <p>User Terms & Condition | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
