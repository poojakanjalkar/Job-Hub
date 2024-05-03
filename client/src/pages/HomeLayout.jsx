import { Outlet } from 'react-router-dom'

export default function HomeLayout() {
  return (


    <div>
      <nav>navbar</nav>
      <Outlet />      //for nested routing
    </div>

  )
}
