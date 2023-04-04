import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './order.scss'
import back from '../../../assets/back.svg'
import { useSelector } from 'react-redux'


const Order = () => {
  const [data, setData] = useState([])
  const [total, setTotal] = useState(0)
  const { user } = useSelector(state => state.users)
  const { order } = useParams()



  useEffect(() => {

    const orderFiltered = user?.orders.filter(ord => ord.id === order)
    setData(orderFiltered[0])
    setTotal(orderFiltered[0]?.total + 5.49 + 8)



  }, [user])


  return (

    <article className='order'>
      <div className='order__info'>

      {data?.id ? <>
        <Link className='adress__main__back' to={'/allOrder'}>
          <img src={back} alt="back" />
          <small>{data.Date}</small>
        </Link>
        <div className='order__quantity'>
          {data.dishes.map((dish, index) =>
            <section key={index}>
              <small>{dish.Quantity}x <span>{dish.name}</span></small>
              <small>${dish.Price}</small>
            </section>



          )}


        </div>
        <div className='order__price'>
          <strong>Production cost <span>$5.49</span></strong>
          <strong>Cost of delivery <span>$8.00</span></strong>
        </div>
        <strong>Total <span>${total}</span></strong></> : <></>}
      </div>


    </article>
  )
}

export default Order