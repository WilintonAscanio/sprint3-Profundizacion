import React from 'react'
import { useNavigate } from 'react-router-dom'
import hat from '../../../assets/hat.svg'
import next from '../../../assets/next.svg'

const AllOrder = () => {
    const navigate = useNavigate()
    return (
        <article className='allOrders'>
            <small>All orders</small>
            <div>
                <section>
                    <figure>
                        <img src={hat} alt="hat" />
                        <small>Pardes restaurant <span>$132.00</span></small>
                    </figure>
                    <strong onClick={() => navigate('order')}>Delivered <img src={next} alt="next" /></strong>
                </section>
                <section>
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
                </section>
            </div>
        </article>
    )
}

export default AllOrder