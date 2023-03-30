import React from 'react'
import { Link } from 'react-router-dom'
import './order.scss'
import back from '../../../assets/back.svg'


const Order = () => {
  return (
    <article className='order'>
      <Link className='adress__main__back' to={'/allOrder'}>
        <img src={back} alt="back" />
        <small>26.11.2022</small>
      </Link>
      <div className='order__quantity'>
          <section>
            <small>1x <span>Meat Pizza(medium)</span></small>
            <small>$35.50</small>
          </section>
          <section>
            <small>1x <span>Combined Pizza(small)</span></small>
            <small>$30.99</small>
          </section>
        </div>
        <div className='order__price'>
          <strong>Production cost <span>$66.49</span></strong>
          <strong>Cost of delivery <span>$8.00</span></strong>
        </div>
        <strong>Total <span>$74.49</span></strong>
    </article>
  )
}

export default Order