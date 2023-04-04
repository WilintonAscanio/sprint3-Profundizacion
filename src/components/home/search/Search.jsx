import React, { useEffect, useState } from 'react'
import './search.scss'
import search from '../../../assets/search.svg'
import pizza from '../../../assets/pizza.png'
import recent from '../../../assets/recent.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantsAsync } from '../../../redux/actions/restaurantActions'
import { useNavigate } from 'react-router-dom'




const Search = () => {
  const [input, setInput] = useState('');
  const { user } = useSelector(state => state.users)
  const { restaurants } = useSelector(state => state.restaurants)
  const [data, setData] = useState([])
  const [searchs, setSearchs] = useState([])
  const navigate = useNavigate()


  let arrays = []


  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getRestaurantsAsync())
    restaurants[0]?.map(e => {

      e.dishes?.map(a => {
        if (a.name !== undefined) {
          arrays.push(a)

        }
      })
    })
    setData(arrays)



  }, [user])

  const inputValue = ({ target }) => {
    setInput(target.value)

    const filtered = data.filter(e => e.name.toLowerCase().includes(target.value.toLowerCase()))
    setSearchs(filtered)



  }
  return (
    <article className='search'>
      <section className='search__input'>
        <img src={search} alt="lupa" />
        <input type="text" placeholder='Search...' onChange={(e) => inputValue(e)} />
        <button>🗑</button>

      </section>
      <div>
        {input && searchs ?
          searchs.map((e, index) =>
            <figure onClick={() => navigate(`/${e.name}`)} key={index}>
              <img src={e.img} alt="searchImg" />
              <strong>{e.name} <span>$29.00</span></strong>
            </figure>)


          :
          <section>
            {user?.name ? user.recentsSearch.map(
              (search, index) =>
                <span key={index}><img src={recent} alt="recent" />{search.name}</span>

            ) : <></>}

          </section>

        }

      </div>

    </article>
  )
}

export default Search