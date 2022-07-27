import React from 'react'
import CV from '../../assets/EA_resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me!</a>
    </div>
  )
}

export default CTA