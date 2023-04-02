import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import './home.scss'
import location from '../../assets/locations.png'
import arrow from '../../assets/arrow.svg'
import special from '../../assets/special.png'
import dish from '../../assets/dish.png'
import deliver from '../../assets/delivery.png'
import hamburguer from '../../assets/hamburguer.svg'
import pizza from '../../assets/pizza.svg'
import star from '../../assets/star.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantsAsync } from '../../redux/actions/restaurantActions'


const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.users)
  const { restaurants } = useSelector(state => state.restaurants)
  const { loading } = useSelector((state) => state.loading)
    console.log(loading);

  useEffect(() => {
    dispatch(getRestaurantsAsync())
    
  }, [])

  
  
  return (
    <article className='home'>
      <Navbar />
      <div className='home__info'>
        <figure className='home__info__local' onClick={() => navigate('/adress')}>
          <img src={location} alt="locationY" />
          <small>DELIVER TO <span>{user.location ? user.location : <></>} <img src={arrow} alt="downArrow" /></span></small>
        </figure>
        <section>
          <figure>
            <img src={special} alt="img1" />
            <img src={deliver} alt="img2" />
          </figure>
        </section>
        <h5>Restaurants and cafes</h5>
        <section>
          <button className='actual'>All</button>
          <button><img src={hamburguer} alt="hamburguer" /> Fast food</button>
          <button><img src={pizza} alt="pizza" /> Pizza</button>
        </section>
        
        {restaurants[0]?.map((res, index) => 
          <section className='home__info__dish' key={index}>
          <figure className='home__info__dish__main'>
            <img src={res.img} alt="dish" />
          </figure>
          <div>
          <small>{res.name}</small>
          <figure>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </figure>
          <small>Worktime {res.worktime} <span>Before you <strong>4$</strong></span></small>
          

          </div>
        </section>
          
        )}
    


      </div>

    </article>
  )
}

export default Home