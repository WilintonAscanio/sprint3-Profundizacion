import React from 'react'
import time from '../../assets/time.svg'
import salad from '../../assets/salad.png'

const Dish = () => {
    return (
        <article className='dish'>
            <div className='dish__info'>
                <figure>
                    <img src={salad} alt="salad" />
                </figure>
                <h3>Caesar salad without sauge <span><img src={time} alt="time" /> 15-20 min</span>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque non porro quis ad nostrum, ipsam incidunt vero ducimus, iste nam fugiat dignissimos voluptatibus voluptatum. Neque nobis exercitationem dolore culpa et.</p>

                <h5>Additional Ingredients</h5>
                <label>
                    <input type="checkbox" value='1' />
                    <small>Tomatoes <span>+2$</span></small>
                </label>
                <label>
                    <input type="checkbox" value='2' />
                    <small>Grain <span>+1$</span></small>
                </label>
                <label>
                    <input type="checkbox" value='2' />
                    <small>Lettuce leaf <span>+1$</span></small>
                </label>
            </div>
            <div className='dish__btns'>
            <section>
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </section>
            <button className='dish__btns__pay'>Add <span>$14.00</span></button>

            </div>
            

        </article>
    )
}

export default Dish