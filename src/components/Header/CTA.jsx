import React from 'react'
import CV from '../../assets/EA_resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        {/* <a href={CV} download className='btn'>Resume</a> */}
        <a href="https://docs.google.com/document/d/1lMnt7Oo5tOr4AC2CuU2aH6N4CvqjWzanhc6hTJ1Zcqs/edit" target="__blank" rel="noreferrer" className='btn'>Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me!</a>
    </div>
  )
}

export default CTA