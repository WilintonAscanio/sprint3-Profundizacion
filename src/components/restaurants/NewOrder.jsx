import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import back from '../../assets/back.svg'
import next from '../../assets/next.svg'
import location from '../../assets/locations.png'
import mc from '../../assets/mastercard.svg'
import pp from '../../assets/paypal.svg'
import peperoni from '../../assets/peperoni.png'


const NewOrder = () => {
  const navigate = useNavigate()
  return (
    <article className='newOrder'>
      <Link to='/dish' className='link'> <img src={back} alt="back"/><span>New order</span></Link>

      <div className='newOrder__info'>
        <section className='newOrder__info__top'>
            <h4>Deliver to</h4>
            <small onClick={() => navigate('/adress')}><img src={location}alt="location" /> <span>882 Well St, New-York <img src={next} alt="next" /></span></small>
            <h4>Payment</h4>
            <div className='newOrder__info__top__btns'>
                <button>Cash</button>
                <button><img src={mc} alt="mc" /> MasterCard</button>
                <button><img src={pp} alt="pp" /> Paypal</button>
            </div>
            <div className='newOrder__info__top__products'>
                <figure>
                    <img src={peperoni} alt="pizza" />
                    <section>
                        <button className='newOrder__info__btn1'>-</button>
                        <p>1</p>
                        <button className='newOrder__info__btn2'>+</button>
                        <small>Vegetarian pizza <span>$32.00</span></small>
                    </section>
                </figure>
                <figure>
                    <img src={peperoni} alt="pizza" />
                    <section>
                        <button className='newOrder__info__btn1'>-</button>
                        <p>1</p>
                        <button className='newOrder__info__btn2'>+</button>
                        <small>Vegetarian pizza <span>$32.00</span></small>
                    </section>
                </figure>
            </div>
            <h4>Note</h4>
            <textarea placeholder='Write something' cols="30" rows="1"></textarea>
        </section>
        <section className='newOrder__info__bottom'>
            <div>
                <small>Products <span>60.45$</span></small>
                <small>Delivery <span>4.5$</span></small>
            </div>
            <strong>Total <span>64.95$</span></strong>
            <button>Order</button>
        </section>
      </div>

    </article>
  )
}

export default NewOrder