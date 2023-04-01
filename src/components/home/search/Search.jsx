import React, { useState } from 'react'
import './search.scss'
import search from '../../../assets/search.svg'
import pizza from '../../../assets/pizza.png'
import recent from '../../../assets/recent.svg'
import { useSelector } from 'react-redux'




const Search = () => {
  const [value, setValue] = useState('');
  const { user } = useSelector(state => state.users)

  const inputValue = ({ value }) => {
    setValue(value)

  }
  return (
    <article className='search'>
      <section className='search__input'>
        <img src={search} alt="lupa" />
        <input type="text" placeholder='Search...' onChange={(e) => inputValue(e.target)} />
        <button>🗑</button>

      </section>
      <div>
        {value ?
          <figure>
            <img src={pizza} alt="searchImg" />
            <strong>Meat Pizza <span>$29.00</span></strong>
          </figure> :
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