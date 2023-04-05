import React, { useEffect, useState } from 'react'
import time from '../../assets/time.svg'
import back from '../../assets/back.svg'

import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantsAsync } from '../../redux/actions/restaurantActions'

const Dish = () => {
    const [counter, setCounter] = useState(1)
    const [total, setTotal] = useState(0)

    const { dish } = useParams()
    const { restaurant } = useParams()
    const { restaurants } = useSelector(state => state.restaurants)



    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRestaurantsAsync())

    }, [])

    const res = restaurants[0]?.find(rest => rest.name === restaurant)
    const currentDish = res?.dishes.filter(e => e.name === dish)



    const handlePlus = () => {
        setCounter(counter + 1)


    }
    const handleMinus = () => {
        const value = counter > 0 ? counter - 1 : 0
        setCounter(value)



    }



    // const getTotal = (ingredient) => {
    //     let data = []
    //     data.push(ingredient)
    //     data.map(e => console.log(e);)


    //     // if (data.indexOf(ingredient) === -1) {
    //     //     data.push(ingredient)
    //     //     setTotal(total + 2)



    //     // } else {
    //     //     data.splice(data.indexOf(ingredient), 1)
    //     //     console.log(total);
    //     //     setTotal(total - 2)
    //     // }
    //     console.log(data);






    // }






    const navigate = useNavigate()
    return (
        <article className='dish'>
          <img src={back} alt="back" style={{width:'10px', margin:'10px'}}  onClick={() =>navigate(-1)}/>


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
                                <small>{ingredient}<span>+2$</span></small>
                            </label>)}

                        </section>



                    </div>


                    <div className='dish__btns'>
                        <section>
                            <button onClick={() => handleMinus(e.price)}>-</button>
                            <span>{counter}</span>
                            <button onClick={() => handlePlus(e.price)}>+</button>
                        </section>
                        <button className='dish__btns__pay'>Add <span>${(e.price * counter) + total}</span></button>

                    </div>
                </>
                ) : <></>}

        </article >
    )
}

export default Dish