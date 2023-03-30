import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRotuer = ({logged}) => {
  return (
    <div>{logged ? <>
    <Outlet />
    </> : <Navigate to='/login' />}</div>
  )
}

export default PrivateRotuer