import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './components/register'

function App() {
  const [token, setToken] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginLogout = (value) => {
    setIsLoggedIn(value);
  }

  return (
    <>
    <Navbar isLoggedIn={isLoggedIn}/>
      <div>
        
      </div>
    </>
  )
}

export default App
