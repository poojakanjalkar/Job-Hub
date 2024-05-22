import React, { useState, useContext, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard';
import SmallSidebar from '../components/SmallSidebar';
import BigSidebar from '../components/BigSidebar';
import Navbar from '../components/Navbar';
import { checkDefaultTheme } from '../App';
const DashboardContext = createContext()


export default function DashboardLayout() {

  const user = { name: "Devi" };



  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleSidebar = () => {
    console.log("+++++++++", showSidebar)
    setShowSidebar(!showSidebar);
  }

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme) //to set theme for whole screen

    //to persist the value so that after refreshing, user can view theme that they set either dark or light

    localStorage.setItem('darkTheme', newDarkTheme)
  }

  const logoutUser = () => {
    console.log("logout user")
  }
  return (
    <DashboardContext.Provider value={{
      user,
      showSidebar,
      isDarkTheme,
      toggleDarkTheme,
      toggleSidebar,
      logoutUser,
    }}>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
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
