import React from 'react'
import './experience.css'
import { BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id="experience">
      <h1>Proficiency</h1>

    <div className="container experience__container">
      <div className="experience">
      <h2>Frontend and Backend Development</h2>

        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Python</h4>
              <small className='text-light'>Proficient</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>C/C++</h4>
              <small className='text-light'>Proficient</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>ReactJS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Node.js</h4>
              <small className='text-light'>Beginner</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>PostgreSQL</h4>
              <small className='text-light'>Proficient</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Proficient</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Git</h4>
              <small className='text-light'>Proficient</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>API</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>HTML5</h4>
              <small className='text-light'>Proficient</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>CSS3</h4>
              <small className='text-light'>Proficient</small>
            </div>
          </article>
        </div>
      </div>

    </div>
    </section>
  )
}

export default Experience