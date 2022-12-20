import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 absolute z-[100] w-full'>
      <h1 className='text-4xl text-red-600 font-bold cursor-pointer uppercase'>Netflix</h1>
      <div>
        <button className='pr-4 text-white'>Sign In</button>
        <button className='bg-red-600 px-6 py-1 rounded text-white cursor-pointer'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar