import React from 'react'
import { Link } from 'react-router-dom'
import './adress.scss'
import back from '../../assets/back.svg'
import location from '../../assets/locationGray.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { updateLocationAsync } from '../../redux/actions/userActions'
import { color } from '@cloudinary/url-gen/qualifiers/background'
import { ToastContainer, toast } from 'react-toastify'

//Hacer el use selector de loading y luego pasarselo en el button como disabled asi disabled={loading}
const Adress = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const { user } = useSelector(state => state.users)

  console.log(user);


  const dispatch = useDispatch()
  const onSubmit = (data) => {
    if (data) {
      dispatch(updateLocationAsync(data.location))
      reset()
      toast('✔ Location was updated!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  


    }




  }
  return (
    <article className='adress'>

      <div className='adress__main'>
        <Link className='adress__main__back' to={'/'}>
          <img src={back} alt="back" />
          <small>Manage adresses</small>
        </Link>
        <section onSubmit={handleSubmit(onSubmit)}>
          <img src={location} alt="location" />
          <small style={{ fontWeight: 'bold', color: 'black' }}>{user?.name ? user.location : <></>}</small>
          <button>🗑</button>
        </section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <img src={location} alt="location" />
          <label>Adress 1
            <input type='text' placeholder='Add adress' {...register('location', {
              required: 'This field is required'
            })} />
          </label>
          {errors.location ? <span>{errors.location.message}</span> : <></>}
          <button style={{ color: 'gray', width: '95px' }}>Save</button>
        </form>


      </div>

      <button>Specify on the map</button>
      <ToastContainer />


    </article>
  )
}

export default Adress