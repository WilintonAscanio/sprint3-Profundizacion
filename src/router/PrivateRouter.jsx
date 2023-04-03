import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = ({logged}) => {
  return (
    <div>{logged ? <>
    <Outlet />
    </> : <Navigate to='/signIn' />}</div>
  )
}

export default PrivateRouter