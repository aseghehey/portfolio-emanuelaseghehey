import React from 'react'
import './header.css'
import CTA from './CTA'
import pic from '../../assets/IMG_4531-removebg-preview.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {

  return (
    <header>
      
      <div className='container header__container'>
        <h1>Hi, I'm Emanuel Aseghehey</h1>
        <h2>Welcome To My Portfolio!</h2>
        <HeaderSocials/>
        <CTA/>
      </div>
    </header>
  )
}

export default Header