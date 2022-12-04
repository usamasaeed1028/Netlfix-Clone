import React from 'react'
import LoginForm from '../components/Login/LoginForm'
import Header from '../components/Signup/Header'
import backgroundImage from '../assets/login.jpg'

const Login = () => {
  return (
    <div className="relative">
    <div className="w-[100vw] h-[100vh]">
      <img src={backgroundImage} alt="image" className="w-[100%] h-[100%]" />
    </div>
    <div className="absolute top-0 w-full text-white bg-[rgba(0,0,0,0.5)] h-[100vh]">
      <Header />
      <LoginForm />
    </div>
  </div>
  )
}

export default Login
