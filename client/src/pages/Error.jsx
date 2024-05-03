import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
export default function Error() {

  const error = useRouteError();              // if user goes to other page which is not available it will navigate to them on home page
  console.log("*********", error)

  return (
    <div>
      <h1>Error</h1>
      <Link to='/'>Go To Home</Link>
    </div>

  )
}
