import React from 'react'
import optic from '../../assets/optic.png'
import firm from '../../assets/firm.png'
import ratio from '../../assets/ratiobot.png'
import './portfolio.css'

const data = [
  {
    id: 1,
    image: optic,
    title: "Optic-mization",
    description: "Find out what glasses suit your face!" ,
    github: "https://github.com/easeghehey/Optic-mization",
    secondlink: "https://youtu.be/MjHsw9pCn9g"
  },
  {
    id:2,
    image: ratio,
    title: "@_ratiobot",
    description: "Detect ratios on Twitter!",
    github: "https://github.com/easeghehey/Ratio-bot",
    secondlink: "https://twitter.com/_ratiobot"
  },
  {
    id:3,
    image: firm,
    title: "Investment Banking Model",
    description:"Buy and Sell Stocks!",
    github: "https://github.com/easeghehey/Firm-DBMS",
    secondlink: "https://youtu.be/Iv-OiookzWI"
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
        <h1>Personal Projects</h1>
        <div className="container portfolio__container">
          {
            data.map(({id,image,title,description,github,secondlink}) => {
              return (
              <article className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={id}/>
              </div>
              <h3>{title}</h3>
              <small>{description}</small>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='__blank' rel="noreferrer">Github</a>
                <a href={secondlink} className='btn btn-primary' target='__blank' rel="noreferrer">Demo</a>
              </div>
            </article> 
              )
            })
          }
        </div>

    </section>
  )
}

export default Portfolio