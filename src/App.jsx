import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Netflix from './pages/Netflix'
import Player from './pages/Player'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/signup" element={<SignUp />}></Route>
      <Route exact path="/player" element={<Player />}></Route>
      <Route exact path="/" element={<Netflix />}></Route>
    </Routes>
  )
}

export default App