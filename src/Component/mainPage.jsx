import React from 'react'
import Navbar from '../Pages/home/Views/NavBar'
import SideBar from '../Pages/home/Views/SideBar'
const mainPage = ({ children }) => {
  return (
    <div className='grid-container'>
      <Navbar />
      <SideBar />
      <div>{children}</div>
    </div>
  )
}

export default mainPage
