import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRouter = ({logged}) => {
  return (
    <div>{logged ? <Navigate to='/login' /> : <Outlet />}</div>
  )
}

export default PublicRouter