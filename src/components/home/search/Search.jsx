import React, { useEffect, useState } from 'react'
import './search.scss'
import search from '../../../assets/search.svg'
import pizza from '../../../assets/pizza.png'
import recent from '../../../assets/recent.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantsAsync } from '../../../redux/actions/restaurantActions'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { addSearchAsync } from '../../../redux/actions/userActions'




const Search = () => {
  const [input, setInput] = useState('');
  const { user } = useSelector(state => state.users)
  const { restaurants } = useSelector(state => state.restaurants)
  const [data, setData] = useState([])
  const [searchs, setSearchs] = useState([])
  const navigate = useNavigate()
  const { register, watch, handleSubmit, formState: { errors } } = useForm()

  const value = watch('recent')


  let arrays = []


  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getRestaurantsAsync())
    restaurants[0]?.map(e => {

      e.dishes?.map(a => {
        if (a.name !== undefined) {
          arrays.push({ ...a, resName: e.name })

        }
      })
    })
    setData(arrays)



  }, [user])



  const filtered = data.filter(e => e.name.toLowerCase().includes(value.toLowerCase()))




  const onSubmit = (data) => {
    dispatch(addSearchAsync(data.recent))

  }


  return (
    <article className='search'>
      <form className='search__input' onSubmit={handleSubmit(onSubmit)}>
        <img src={search} alt="lupa" />
        <input type="text" placeholder='Search...' {...register('recent', {
          required: 'This field is required'
        })} />
        {errors.recent ? <span>{errors.recent.message}</span> : <></>}
        <button type='submit'>🗑</button>

      </form>
      <div>
        {value ?
          filtered?.map((e, index) =>
            <figure onClick={() => navigate(`/${e.resName}/${e.name}`)} key={index}>
              <img src={e.img} alt="searchImg" />
              <strong>{e.name} <span>$29.00</span></strong>
            </figure>)


          :
          <section>
            {user?.name ? user?.recentsSearch.map(
              (search, index) =>
                <span key={index}><img src={recent} alt="recent" />{search}</span>

            ) : <></>}

          </section>

        }

      </div>

    </article>
  )
}

export default Search