import React from 'react'

import './card.css'
const card = ({emoji, heading,detail,color}) => {
  return (
    <div className='card' style={{borderColor: {color}}}>
    <img src={emoji} alt=''/> 
    <span>{heading}</span>
    <span>{detail}</span>
    <button className='c-button'>Learn more</button>
      
    </div>
  )
}

export default card 