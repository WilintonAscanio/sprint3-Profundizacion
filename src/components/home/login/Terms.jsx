import React from 'react'
import { useParams } from 'react-router-dom'
import car from '../../../assets/car.svg'
import man from '../../../assets/man.svg'
import cel from '../../../assets/cel.svg'

const Terms = () => {
  const { terms } = useParams()

  return (
    <article className='login__info__terms'>

      <figure>
        {terms === 'phone' ?
        <>
        <img src={cel} alt="cel" />
        <p>Choose what to eat choosing from a variety of restaurants from the list</p>
        </> 
        :
       (terms === 'man' ?
       <>
       <img src={man} alt="man" />
       <p>Choose where you want to deliver by indicating on the map</p>
       </>
         :
         <>
         <img src={car} alt="car" />
         <p>We will deliver as soon as possible</p>
         </>
         ) }
      </figure>
      
      
      
    </article>
    
  )
}

export default Terms