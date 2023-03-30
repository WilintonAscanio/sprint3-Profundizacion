import React from 'react'
import { Link } from 'react-router-dom'
import './adress.scss'
import back from '../../assets/back.svg'
import location from '../../assets/locationGray.svg'


const Adress = () => {
  return (
    <article className='adress'>
      
      <div className='adress__main'>
      <Link className='adress__main__back' to={'/'}>
        <img src={back} alt="back" />
        <small>Manage adresses</small>
      </Link>
      <section>
      <img src={location} alt="location" />
      <label>Adress 1
          <input type='text' placeholder='Add adress' />
        </label>
        <button>🗑</button>
      </section>
        

      </div>
      
      <button>Specify on the map</button>


    </article>
  )
}

export default Adress