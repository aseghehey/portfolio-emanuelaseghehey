import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/emanuel-aseghehey/" target="_blank" rel="noreferrer" className='socials'><BsLinkedin/></a>
        <a href="https://github.com/easeghehey" target="_blank" rel="noreferrer" className='socials'><BsGithub/></a>

    </div>
  )
}

export default HeaderSocials