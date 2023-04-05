import React, { useEffect, useState } from 'react'
import './restaurants.scss'
import back from '../../assets/back.svg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import pardes from '../../assets/pardes.png'
import hat from '../../assets/hat.svg'
import dishs from '../../assets/dish.png'
import dishes from '../../assets/dishes.png'
import star from '../../assets/star.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantsAsync } from '../../redux/actions/restaurantActions'




const Restaurants = () => {
  const [data, setData] = useState([])

  const { restaurant } = useParams()
  const { restaurants } = useSelector(state => state.restaurants)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRestaurantsAsync())

  }, [])

  const res = restaurants[0]?.find(rest => rest.name === restaurant)
  const filterType = (type) => {
    const filtered = res?.dishes.filter(dish => dish.type === type)
  
    setData(filtered)
    console.log(data);
    console.log(filtered);


  }


  const navigate = useNavigate()
  return (
    <article className='restaurant'>
      <Link to='/'> <img src={back} alt="back" /></Link>

      {res?.name ? <>
        <figure className='restaurant__logo'>
          <img src={hat} alt="hat" />
          <img src={pardes} alt="pardes" />
        </figure>
        <section className='restaurant__dish'>
          <figure className='restaurant__dish__left'>
            <img src={res.img} alt="dish" />
          </figure>
          <div>
            <h4>{res.name}</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure? Doloremque, labore, dicta quidem dolor alias perferendis architecto aliquid magni! Fuga optio odit commodi.

            </p>

            <section>
              <figure>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </figure>
              <small>{res.worktime}</small>

            </section>

          </div>



        </section>

      </> : <></>}

      <section className='restaurant__btns'>
        <button onClick={() => filterType()}>All</button>
        <button onClick={() => filterType(1)}>Salates</button>
        <button onClick={() => filterType(2)}>Fast Food</button>
      </section>
      <section className='restaurant__dishes'>
        {data.length ? data.map((e, index) =>
          <figure onClick={() => navigate(`/${restaurant}/${e.name}`)} key={index}>
            <img src={e.img} alt="dishes" />
            <figcaption>
              <strong>{e.name}</strong>
              <small>${e.price}</small>
            </figcaption>
          </figure>) : res?.dishes.map((e, index) =>
            <figure onClick={() => navigate(`/${restaurant}/${e.name}`)} key={index}>
              <img src={e.img} alt="dishes" />
              <figcaption>
                <strong>{e.name}</strong>
                <small>${e.price}</small>
              </figcaption>
            </figure>)}


      </section>

    </article>
  )
}

export default Restaurants