import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import './home.scss'
import location from '../../assets/locations.png'
import arrow from '../../assets/arrow.svg'
import special from '../../assets/special.png'
import deliver from '../../assets/delivery.png'
import hamburguer from '../../assets/hamburguer.svg'
import pizza from '../../assets/pizza.svg'
import star from '../../assets/star.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantsAsync } from '../../redux/actions/restaurantActions'
import { Carousel } from 'react-responsive-carousel'
import Creating from '../loaders/Creating';



const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.users)
  const { restaurants } = useSelector(state => state.restaurants)
  const { loading } = useSelector((state) => state.loading)
  const [data, setData] = useState([])
  const [button, setButton] = useState('')
  const [button2, setButton2] = useState('')
  const [all, setAll] = useState('clicked')

  useEffect(() => {
    dispatch(getRestaurantsAsync())



  }, [])

  const arrayFilter = (type) => {
    const filtered = restaurants[0]?.filter(res => res.type === type
    )
    setData(filtered)
    if (!type) {
      // setData(restaurants[0].slice(0 , 10))
      setButton('')
      setButton2('')
      setAll('clicked')

    }
    if (type === 1) {
      setButton('clicked')
      setAll('')
      setButton2('')

    }
    if (type === 2) {
      setButton2('clicked')
      setButton('')
      setAll('')

    }

  }



  return (
    <article className='home'>
      <Navbar />
      <div className='home__info'>
        <figure className='home__info__local' onClick={() => navigate('/adress')}>
          <img src={location} alt="locationY" />
          <small>DELIVER TO <span>{user.location ? user.location : <></>} <img src={arrow} alt="downArrow" /></span></small>
        </figure>
        <section>
          <Carousel
            className="carousel-imgs"
            centerSlidePercentage={20}
            showIndicators={false}
            centerMode
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={false}

          >
            <img className="carousel-img" src={special} alt="image" />
            <img src={deliver} alt="image" />

          </Carousel>


        </section>
        <h5>Restaurants and cafes</h5>
        <section>
          <button className={all} onClick={() => arrayFilter()}>All</button>
          <button onClick={() => arrayFilter(1)} className={button}><img src={hamburguer} alt="hamburguer" /> Fast food</button>
          <button onClick={() => arrayFilter(2)} className={button2}><img src={pizza} alt="pizza" /> Pizza</button>
        </section>
        {!restaurants.length ? <Creating /> : <></>}
        <div className='home__info__dishes'>

          {data.length ?
            data.map((res, index) =>
              <section className='home__info__dish' key={index} onClick={() => navigate(`${res.name}`) }>
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

            )
            :

            restaurants[0]?.map((res, index) =>
              <section className='home__info__dish' key={index} onClick={() => navigate(`${res.name}`) }>
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





      </div>

    </article>
  )
}

export default Home