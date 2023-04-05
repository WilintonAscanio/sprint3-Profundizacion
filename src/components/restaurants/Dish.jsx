import React, { useEffect, useState } from 'react'
import time from '../../assets/time.svg'
import back from '../../assets/back.svg'

import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantsAsync } from '../../redux/actions/restaurantActions'
import { useForm } from 'react-hook-form'
import { createOrderAsync } from '../../redux/actions/userActions'
import { ToastContainer, toast } from 'react-toastify'

const Dish = () => {
    const [counter, setCounter] = useState(1)
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()
    const { dish } = useParams()
    const { restaurant } = useParams()
    const { restaurants } = useSelector(state => state.restaurants)
    const { register, handleSubmit, reset, formState: { errors } } = useForm()




    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRestaurantsAsync())

    }, [])

    const res = restaurants[0]?.find(rest => rest.name === restaurant)
    const currentDish = res?.dishes.filter(e => e.name === dish)
    console.log(currentDish);

    const handlePlus = () => {
        setCounter(counter + 1)
    }
    const handleMinus = () => {
        const value = counter > 0 ? counter - 1 : 0
        setCounter(value)
    }
    let data = []

    const getTotal = (ingredient) => {
        if (!data.length) {
            data?.map(e => {
                if (e !== ingredient) {
                    data.push(ingredient)
                }
                if (e === ingredient) {
                    console.log('hola');

                }


            })



        }

        console.log(data);






    }
    console.log(data);

    const onSubmit = () => {
        const currentOrder = {

            price: currentDish[0].price,
            quantity: counter,
            name: currentDish[0].name,
            resName: res.name,
            total: currentDish[0].price * counter,
            img: currentDish[0].img


        }
        dispatch(createOrderAsync(currentOrder))
        toast('✔ Product Added!', {
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
        <article className='dish'>
            <img src={back} alt="back" style={{ width: '10px', margin: '10px', position: 'absolute' }} onClick={() => navigate(-1)} />


            {currentDish ?
                currentDish.map((e, index) => <>
                    <div className='dish__info' key={index}>
                        <figure >
                            <img src={e.img} alt="salad" />
                        </figure>
                        <section>
                            <h3>{e.name} <span><img src={time} alt="time" /> 15-20 min</span>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque non porro quis ad nostrum, ipsam incidunt vero ducimus, iste nam fugiat dignissimos voluptatibus voluptatum. Neque nobis exercitationem dolore culpa et.</p>
                            <h5>Additional Ingredients</h5>
                            {e.ingredients.map((ingredient, index) => <label key={index}>
                                <input type="checkbox" value='1' />
                                <small onClick={() => getTotal(ingredient)}>{ingredient}<span>+2$</span></small>
                            </label>)}

                        </section>



                    </div>


                    <form className='dish__btns' onSubmit={handleSubmit(onSubmit)}>
                        <section>
                            <small onClick={() => handleMinus(e.price)}>-</small>
                            <span>{counter}</span>
                            <small onClick={() => handlePlus(e.price)}>+</small>
                        </section>
                        <button className='dish__btns__pay' type='submit'>Add <span>${(e.price * counter) + total}</span></button>

                    </form>
                </>
                ) : <></>}

            <ToastContainer />

        </article >
    )
}

export default Dish