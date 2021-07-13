import React from 'react'
import { useSelector } from 'react-redux'
import Blog from './Components/Blog'
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar'
import { selectSignedIn } from './features/userSlide'

const App = () => {
  const isSignedIn = useSelector(selectSignedIn)
  return (
    <div className='app'>
      <Navbar />
      <Homepage />
      {isSignedIn && <Blog />}
    </div>
  )
}

export default App
