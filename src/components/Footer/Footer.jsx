import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        <a href="https://www.instagram.com/emanuelpackas/" target="__blank" rel="noreferrer"><BsInstagram/></a>
        <a href="https://twitter.com/emanuelpackas1" target="__blank" rel="noreferrer"><FiTwitter/></a>
        <a href="https://github.com/easeghehey" target="__blank" rel="noreferrer" ><BsGithub/></a>
        <a href="https://www.linkedin.com/in/emanuel-aseghehey/" target="__blank" rel="noreferrer" ><BsLinkedin/></a>
      </div>

      {/* <div className="footer__copyright">
        <small>All rights reserved.</small>
      </div> */}

    </footer>
  )
}

export default Footer