import React, { useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import './login.scss'

const Login = () => {
  const navigate =  useNavigate()
  const [button, setButton] = useState('actual')
  const [button2, setButton2] = useState('')
  const [button3, setButton3] = useState('')

  const select = (btn) => {
    if (btn === 'btn1') {
      setButton('actual')
      setButton2('')
      setButton3('')
      
    }
    else if (btn === 'btn2'){
      setButton('')
      setButton2('actual')
      setButton3('')
    }
    else if (btn === 'btn3'){
      setButton('')
      setButton2('')
      setButton3('actual')
    }
    
  }

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
              <Link to='phone' className={`buttons ${button}`} onClick={() =>select('btn1')}></Link>
              <Link to='man' className={`buttons ${button2}`} onClick={() =>select('btn2')}></Link>
              <Link to='car' className={`buttons ${button3}`} onClick={() =>select('btn3')}></Link>
            </ul>

          </nav>
          <button onClick={next}>Next</button>
        </section>

      </div>




    </article>
  )
}

export default Login