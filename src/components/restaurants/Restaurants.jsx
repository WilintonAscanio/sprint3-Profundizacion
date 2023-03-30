import React from 'react'
import './restaurants.scss'
import back from '../../assets/back.svg'
import { Link, useNavigate } from 'react-router-dom'
import pardes from '../../assets/pardes.png'
import hat from '../../assets/hat.svg'
import dishs from '../../assets/dish.png'
import dishes from '../../assets/dishes.png'
import star from '../../assets/star.svg'




const Restaurants = () => {

  const navigate = useNavigate()
  return (
    <article className='restaurant'>
      <Link to='/'> <img src={back} alt="back" /></Link>
      <figure className='restaurant__logo'>
        <img src={hat} alt="hat" />
        <img src={pardes} alt="pardes" />
      </figure>
      <section className='restaurant__dish'>
        <figure className='restaurant__dish__left'>
          <img src={dishs} alt="dish" />
        </figure>
        <div>
          <h4>Pardes Restaurant</h4>
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
            <small>15-20 min</small>

          </section>

        </div>



      </section>
      <section className='restaurant__btns'>
        <button>All</button>
        <button>Salates</button>
        <button>Pizza</button>
      </section>
      <section className='restaurant__dishes'>
        <figure onClick={() => navigate('/dish')}>
          <img src={dishes} alt="dishes" />
          <figcaption>
            <strong>Bolognese salda</strong>
            <small>$14.45</small>
          </figcaption>
        </figure>
        <figure>
          <img src={dishes} alt="dishes" />
          <figcaption>
            <strong>Bolognese salda</strong>
            <small>$14.45</small>
          </figcaption>
        </figure>
        <figure>
          <img src={dishes} alt="dishes" />
          <figcaption>
            <strong>Bolognese salda</strong>
            <small>$14.45</small>
          </figcaption>
        </figure>
        <figure>
          <img src={dishes} alt="dishes" />
          <figcaption>
            <strong>Bolognese salda</strong>
            <small>$14.45</small>
          </figcaption>
        </figure>
      </section>

    </article>
  )
}

export default Restaurants