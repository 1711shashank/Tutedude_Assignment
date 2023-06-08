import React from 'react'
import './Header.css'
import Logo from '../images/logo.svg'
import DownArrow from '../images/downArrow.svg'
import ProfileIcon from '../images/profileIcon.svg'

const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='header-left'>
          <img src={Logo} alt=''/>

         </div>
         <div className='header-right'>
            <p>My Assignment</p>
            <p>Chat with Mentor</p>
            <div className='header-profile'>
              <img src={ProfileIcon} alt=''/>
              <p>ProfileName</p>
              <img src={DownArrow} alt=''/>
              
            </div>
          </div>

        
    </div>
    </>
  )
}

export default Header