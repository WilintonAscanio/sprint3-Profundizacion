import React from 'react'
import { useNavigate } from 'react-router-dom'
import hat from '../../../assets/hat.svg'
import next from '../../../assets/next.svg'
import { useSelector } from 'react-redux'

const AllOrder = () => {
    const navigate = useNavigate()
    const { user } = useSelector(state => state.users)
    

    return (
        <article className='allOrders'>
            <small>All orders</small>
            <div>
                {user.orders.length ?
                    user.orders.map((order, index) =>
                <section key={index}>
                    <figure>
                        <img src={hat} alt="hat" />
                        <small>{order.restaurantNAme}<span>${order.total +5.49 +8}</span></small>
                    </figure>
                    <strong onClick={() => navigate(`${order.restaurantNAme}`)} className={order.status === 'Delivered' ? 'delivered' : 'cooking' }>{order.status} <img src={next} alt="next" /></strong>
                </section>
                ): <><h1>You still don't have orders 😢</h1></>}
                <h4 onClick={() => navigate('/currentOrder')}>Current Order <img src={next} /></h4>

                {/* <section>
                    <figure>
                        <img src={hat} alt="hat" />
                        <small>Pardes restaurant <span>$132.00</span></small>
                    </figure>
                    <strong>Delivered <img src={next} alt="next" /></strong>
                </section>
                <section>
                    <figure>
                        <img src={hat} alt="hat" />
                        <small>Pardes restaurant <span>$132.00</span></small>
                    </figure>
                    <strong>Delivered <img src={next} alt="next" /></strong>
                </section> */}
            </div>
        </article>
    )
}

export default AllOrder