import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard';
import SmallSidebar from '../components/SmallSidebar';
import BigSidebar from '../components/BigSidebar';
import Navbar from '../components/Navbar';

export default function DashboardLayout() {
  return (
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





  )
}
