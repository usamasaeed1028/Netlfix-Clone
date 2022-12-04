import React from 'react'
import backgorundImage from '../../assets/home.jpg'

const Hero = () => {
  return (
    <div className='absolute top-0 z-[-1]'>
      <div>
        <img src={backgorundImage} alt="image" />
      </div>
    </div>
  )
}

export default Hero
