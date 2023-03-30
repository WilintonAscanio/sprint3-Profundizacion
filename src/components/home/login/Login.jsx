import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import './login.scss'

const Login = () => {
  const navigate =  useNavigate()

  const next = () => {
    navigate('/signIn')
  }
 
  return (
    <article className='login'>
      <div className='login__info'>
        <Outlet />
        <section>
          <nav>
            <ul>
              <NavLink to='phone' className='buttons'></NavLink>
              <NavLink to='man' className='buttons'></NavLink>
              <NavLink to='car' className='buttons'></NavLink>
            </ul>

          </nav>
          <button onClick={next}>Next</button>
        </section>

      </div>




    </article>
  )
}

export default Login