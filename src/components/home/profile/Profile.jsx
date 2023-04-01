import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './profile.scss'
import next from '../../../assets/next.svg'
import userSvg from '../../../assets/user.svg'
import payment from '../../../assets/payment.svg'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { logOutAsync } from '../../../redux/actions/userActions'
import { toggle_loading } from '../../../redux/actions/loadingAction'



const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users)


  const logOut = () => {
    Swal.fire({
      icon: 'info',
      title: 'Estás seguro que nos abandonarás?',
      confirmButtonText: 'Sipiti',
      cancelButtonText: 'Nopitis',
      showCancelButton: true,

    }).then((response) => {
      if (response.isConfirmed) {
        dispatch(logOutAsync())
        dispatch(toggle_loading())
        navigate('/signIn')

      }

    }).catch((error) => {
      console.log(error);
      Swal.fire({
        icon: 'success',
        title: 'Que bueno que no nos abandonaste :D'
      })

    })
  }


  return (
    <article className='profile'>
      {user?.name ? <>
        <figure>
          <img src={user.photo} alt="profile" />
          <span>{user.name}</span>

        </figure>
        <div>
          <section onClick={() => navigate('edit')}>
            <Link to='edit' className='profile__link'>
              <img src={userSvg} alt="user" />
              Account Edit</Link>
            <img src={next} alt="go" />

          </section>
          <section onClick={() => navigate('payment')}>
            <Link to='payment' className='profile__link'>
              <img src={payment} alt="user" />
              Payment</Link>
            <img src={next} alt="go" />

          </section>
          <section onClick={() => logOut()} style={{
            backgroundColor : 'red',

          }}>
            <button><span className="material-symbols-outlined">
              close
            </span>LOGOUT</button>
          </section>



        </div>
      </> : <></>}




    </article>
  )
}

export default Profile