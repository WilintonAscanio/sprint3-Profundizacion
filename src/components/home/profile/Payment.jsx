import React from 'react'
import { Link } from 'react-router-dom'
import back from '../../../assets/back.svg'
import mc from '../../../assets/mastercard.svg'
import paypal from '../../../assets/paypal.svg'
import eye from '../../../assets/eye.svg'




const Payment = () => {
  return (
    <article className='payment'>
      <div>
        <Link className='adress__main__back' to={'/profile'}>
        <img src={back} alt="back" />
        <small>Paymen method</small>
      </Link>
      <section>
        <img src={mc} alt="mastercard" />
        <small>**** **** **** 4574 <img src={eye} alt="eye" /></small>
      </section>
      <section>
        <img src={paypal} alt="mastercard" />
        <small>**** **** **** 4574 <img src={eye} alt="eye" /></small>
      </section>


      </div>
      <Link to='card' className='payment__link'>Add new card</Link>

    </article>
  )
}

export default Payment