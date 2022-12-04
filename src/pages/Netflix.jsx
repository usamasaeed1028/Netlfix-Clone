import React, { useState } from 'react'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'

const Netflix = () => {

  return (
    <div className=' h-[100vh] relative'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Netflix
