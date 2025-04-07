import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <div>
        
      </div>
      <Routes>
        <Route />
      </Routes>
    </>
  )
}

export default App
