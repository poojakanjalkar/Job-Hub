import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
  EditJob,
} from './pages';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [                              //nested route
      {
        index: true,                           //when we want to display the page when navigate on parent page we can use index as true
        element: <Landing />
      },
      {
        path: 'register',
        element: <Register />,

      },
      {
        path: 'login',
        element: <Login />,

      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
      },
    ]
  },


])

export default function App() {
  return <RouterProvider router={router} />

}
