import React, { useState, useContext, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard';
import SmallSidebar from '../components/SmallSidebar';
import BigSidebar from '../components/BigSidebar';
import Navbar from '../components/Navbar';

const DashboardContext = createContext()
export default function DashboardLayout() {

  const user = { name: "Devi" };



  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleSidebar = () => {
    console.log("+++++++++", showSidebar)
    setShowSidebar(!showSidebar);
  }

  const toggleDarkTheme = () => {
    console.log("toggle dark theme")
  }

  const logoutUser = () => {
    console.log("logout user")
  }
  return (
    <DashboardContext.Provider value={{ showSidebar, isDarkTheme, user, toggleDarkTheme, toggleSidebar, logoutUser }}>
      <Wrapper>
        <main cl="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>

              <Outlet />
            </div>
          </div>
        </main>


      </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => {
  return useContext(DashboardContext)
}
