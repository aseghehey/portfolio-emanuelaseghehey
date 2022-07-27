import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   e.target.reset()
  // }


  return (
    <section id="contact">
      <h1>Get In Touch</h1>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>emanuelaseghey9@gmail.com</h5>
              <a href="mailto:emanuelaseghey9@gmail.com" target="__blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form> */}
      </div>
    </section>
  )
}

export default Contact