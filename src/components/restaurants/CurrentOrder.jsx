import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import peperoni from '../../assets/peperoni.png'
import time from '../../assets/timeClock.svg'
import back from '../../assets/back.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { addOrderAsync, resetOrder, resetOrderAsync } from '../../redux/actions/userActions'
import { ToastContainer, toast } from 'react-toastify'



const CurrentOrder = () => {
    const [userD, setUserD] = useState([])
    const [total, setTotal] = useState(0)
    const [price, setPrice] = useState(0)
    const { user } = useSelector(state => state.users)
    const { handleSubmit, reset } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    let priceTotal = 0;
    let priceProducts = 0;

    useEffect(() => {
        if (user.currentOrder.dishes) {
            user.currentOrder.dishes.map(e => {
                priceProducts = priceProducts += e.total
                priceTotal= priceProducts + 4.5 

                setTotal(priceTotal)
                setPrice(priceProducts)
            })
            setUserD(user)


        }




    }, [user])

    const onSubmit = () => {
        const data = user.currentOrder
        dispatch(addOrderAsync(data))
        dispatch(resetOrderAsync())
        toast('✔ Order Added!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setTimeout(() => {
                navigate('/')
                
              
            }, 2000)
      
    }








    return (
        <article className='currentOrder'>
            <Link to='/allOrder' className='link'> <img src={back} alt="back" /><span>Current order</span></Link>
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
                         {user.currentOrder.dishes ? user.currentOrder.dishes.map((dish,index) =>
                         <figure key={index}>
                         <img src={dish.img} alt="pizza" />
                         <section>
                             <small>x{dish.Quantity}</small>
                             <strong>{dish.name}<span>${dish.Price}.00</span></strong>


                         </section>
                     </figure> ):<></>}

                     {user.currentOrder.length ? <h1>You still don't have order 😢</h1> :<></>}

                        


                    </section>



                </section>
                <form className='newOrder__info__bottom' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <small>Products <span>{price}.00$</span></small>
                        <small>Delivery <span>4.5$</span></small>
                    </div>
                    <strong>Total <span>${total}</span></strong>
                    <button type='submit'>Confirm Order</button>
                </form>

            </div>
            <ToastContainer />

        </article>
    )
}

export default CurrentOrder