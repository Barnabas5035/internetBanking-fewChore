import React from 'react'
import { BsBellFill, BsChatQuoteFill } from 'react-icons/bs'

const NavBar = () => {
  return (
    <header className='header'>
      <div className='header-left'>
        <h2>Transaction History</h2>
      </div>
      <div className='header-right'>
        <div className='text'>
          <div className='firstTxt'>
            <span className='span-1'>PE</span>
          </div>
          <div className='secondTxt'>
            <span>Peace Edward</span>
          </div>
        </div>
        <BsBellFill className='icon-1' />
        <BsChatQuoteFill className='icon-2' />
      </div>
    </header>
  )
}

export default NavBar
