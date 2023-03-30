import React from 'react'
import { Link } from 'react-router-dom'
import back from '../../../assets/back.svg'


const CardUser = () => {
  return (
    <article className='cardUser'>
      <div>
        <Link className='adress__main__back' to={'/profile/payment'}>
          <img src={back} alt="back" />
          <small>Add new card</small>
        </Link>
        <section>
          <input type="text" placeholder='Card name' />
          <input type="text" placeholder='Card Number' />

          <div>
            <input type="text" placeholder='Expires' />
            <input type="text" placeholder='CVV' />
          </div>
        </section>

      </div>
      <button>Save</button>

    </article>
  )
}

export default CardUser