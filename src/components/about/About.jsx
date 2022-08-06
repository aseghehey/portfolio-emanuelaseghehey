import React from 'react'
import './about.css'
import pic2 from '../../assets/emanuel10_complete.jpg'
import {BsCodeSquare} from 'react-icons/bs'
import {TbSchool} from 'react-icons/tb'
import {GoPerson} from 'react-icons/go'

const About = () => {
  return (
    <section id="about">   
        <h1>Get to know me!</h1>   
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={pic2} alt='about__me-image'/>
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
            <article className='about__card'>
              <BsCodeSquare className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years Coding</small>
            </article>

            <article className='about__card'>
              <TbSchool className='about__icon'/>
              <h5>Education</h5>
              <small>University of South Florida</small>
            </article>

            <article className='about__card'>
              <GoPerson className='about__icon'/>
              <h5>Age</h5>
              <small>21 years old</small>
            </article>
            
          </div>
          <p>I am a third-year international computer science student aspiring to become a software engineer.</p>
          <p>I started coding in 2018, when I took an IT course at my high school (Elkanah House), and my passion for programming has only grown since then!</p>
          <p>I consider myself a determined and motivated developer who is always eager to learn and collaborate with others when a problem needs to be solved.</p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>

        </div>
      </div>

    </section>
  )
}

export default About