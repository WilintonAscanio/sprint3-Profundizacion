import React from 'react'
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


const Home = () => {
  const navigate = useNavigate()
  return (
    <article className='home'>
      <Navbar />
      <div className='home__info'>
        <figure className='home__info__local' onClick={() => navigate('/adress')}>
          <img src={location} alt="locationY" />
          <small>DELIVER TO <span>882 Well St, New-York <img src={arrow} alt="downArrow" /></span></small>
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
        <section className='home__info__dish'>
          <figure className='home__info__dish__main'>
            <img src={dish} alt="dish" />
          </figure>
          <div>
          <small>Pardes Restaurant</small>
          <figure>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </figure>
          <small>Work time 09:30 - 23:00 <span>Before you <strong>4$</strong></span></small>
          

          </div>
        </section>
        <section className='home__info__dish'>
          <figure className='home__info__dish__main'>
            <img src={dish} alt="dish" />
          </figure>
          <div>
          <small>Pardes Restaurant</small>
          <figure>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </figure>
          <small>Work time 09:30 - 23:00 <span>Before you <strong>4$</strong></span></small>
          

          </div>
        </section>
        <section className='home__info__dish'>
          <figure className='home__info__dish__main'>
            <img src={dish} alt="dish" />
          </figure>
          <div>
          <small>Pardes Restaurant</small>
          <figure>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </figure>
          <small>Work time 09:30 - 23:00 <span>Before you <strong>4$</strong></span></small>
          

          </div>
        </section>
        <section className='home__info__dish'>
          <figure className='home__info__dish__main'>
            <img src={dish} alt="dish" />
          </figure>
          <div>
          <small>Pardes Restaurant</small>
          <figure>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </figure>
          <small>Work time 09:30 - 23:00 <span>Before you <strong>4$</strong></span></small>
          

          </div>
        </section>


      </div>

    </article>
  )
}

export default Home