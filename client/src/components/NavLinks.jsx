import React from 'react'
import links from '../utils/links'
import { useDashboardContext } from '../pages/DashboardLayout'
import { NavLink } from 'react-router-dom'

export default function NavLinks() {

  const { user, toggleSidebar } = useDashboardContext()
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { path, icon, text } = link;
        return (
          <NavLink to={path} key={text} onClick={toggleSidebar} className="nav-link" end>
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}
