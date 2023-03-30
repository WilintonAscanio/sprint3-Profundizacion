import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './profile.scss'
import photo from '../../../assets/profile.png'
import next from '../../../assets/next.svg'
import user from '../../../assets/user.svg'
import payment from '../../../assets/payment.svg'



const Profile = () => {
  const navigate = useNavigate()
  return (
    <article className='profile'>
      <figure>
        <img src={photo} alt="profile" />
        <span>Jenny Tourn</span>

      </figure>
      <div>
        <section onClick={() => navigate('edit')}>
          <Link to='edit' className='profile__link'>
            <img src={user} alt="user" />
            Account Edit</Link>
          <img src={next} alt="go" />

        </section>
        <section onClick={() => navigate('payment')}>
          <Link to='payment' className='profile__link'>
            <img src={payment} alt="user" />
           Payment</Link>
          <img src={next} alt="go" />

        </section>



      </div>



    </article>
  )
}

export default Profile