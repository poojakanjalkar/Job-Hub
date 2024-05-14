import React from 'react'
// import Wrapper from '../assets/wrappers/Navbar'
import Wrapper from '../assets/wrappers/Navbar'
import { useDashboardContext } from '../pages/DashboardLayout'
import { FaAlignLeft } from 'react-icons/fa';
import Logo from './Logo'
export default function Navbar() {

  const { toggleSidebar } = useDashboardContext()
  return (
    <Wrapper>

      <div className='nav-center'>
        <button type="button" className='toggle-btn' onClick={toggleSidebar}><FaAlignLeft /></button>

        <div>
          <Logo />
          <h4 className='logo-text'>dashboard</h4>
        </div>
        <div className='btn-container'>toggle/logout</div>
      </div>
    </Wrapper>


  )
}
