import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRouter = ({logged}) => {

  const { user } = useSelector(store => store.users)
  console.log(user);
  return (
    <div>{logged ? <Navigate to='/login' /> : <Outlet />}</div>
  )
}

export default PublicRouter