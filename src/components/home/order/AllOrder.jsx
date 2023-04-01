import React from 'react'
import { useNavigate } from 'react-router-dom'
import hat from '../../../assets/hat.svg'
import next from '../../../assets/next.svg'
import { useSelector } from 'react-redux'

const AllOrder = () => {
    const navigate = useNavigate()
    const { user } = useSelector(state => state.users)
    console.log(user.orders);

    return (
        <article className='allOrders'>
            <small>All orders</small>
            <div>
                {user?.name &&
                    user.orders.map((order, index) =>
                <section key={index}>
                    <figure>
                        <img src={hat} alt="hat" />
                        <small>{order.restaurantName}<span>${order.total}.00</span></small>
                    </figure>
                    <strong onClick={() => navigate('order')}>{order.status} <img src={next} alt="next" /></strong>
                </section>
                )}

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