import React from 'react'
import { Link } from 'react-router-dom'
import peperoni from '../../assets/peperoni.png'
import time from '../../assets/timeClock.svg'
import back from '../../assets/back.svg'



const CurrentOrder = () => {
    return (
        <article className='currentOrder'>
            <Link to='/dish' className='link'> <img src={back} alt="back"/><span>Current order</span></Link>
            <div className='currentOrder__top'>
                <section>
                    <figure className='currentOrder__top__status'>
                        <img src={time} alt="clock" />
                        <strong>15-20 min left</strong>
                        <section>
                            <label>
                                <input type="radio" />
                                Confirmed
                            </label>
                            <label>
                                <input type="radio" />
                                Cooking
                            </label>
                            <label>
                                <input type="radio" />
                                On the way
                            </label>
                            <label>
                                <input type="radio" />
                                Delivered
                            </label>

                        </section>
                    </figure>
                    <section className='currentOrder__top__products'>
                        <figure >
                            <img src={peperoni} alt="pizza" />
                            <section>
                                <small>x1</small>
                                <strong>Vegetarian pizza <span>$32.00</span></strong>
                                
                              
                            </section>
                        </figure>
                        

                    </section>



                </section>
                <section className='newOrder__info__bottom'>
                    <div>
                        <small>Products <span>60.45$</span></small>
                        <small>Delivery <span>4.5$</span></small>
                    </div>
                    <strong>Total <span>64.95$</span></strong>
                    <button>Support</button>
                </section>

            </div>

        </article>
    )
}

export default CurrentOrder