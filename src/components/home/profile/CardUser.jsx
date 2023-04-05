import React from 'react'
import { Link } from 'react-router-dom'
import back from '../../../assets/back.svg'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addPaymentAsync } from '../../../redux/actions/userActions'
import { ToastContainer, toast } from 'react-toastify'


const CardUser = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    dispatch(addPaymentAsync(data))
    reset()
    toast('✔ Card Added!', {
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
  return (
    <article className='cardUser'>
      <div>
        <Link className='adress__main__back' to={'/profile/payment'}>
          <img src={back} alt="back" />
          <small>Add new card</small>
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder='Card name' {...register('cardName', {
            required: 'This field is required'
          })} />
          {errors.cardName ? <span>{errors.cardName.message}</span> : <></>}
          <input type="text" placeholder='Card Number' {...register('cardNumber', {
            required: 'This field is required'
          })} />
          {errors.cardNumber ? <span>{errors.cardNumber.message}</span> : <></>}


          <div>
            <input type="text" placeholder='Expires' maxLength={5} {...register('expires', {
              required: 'This field is required'
            })} />
            {errors.expires ? <span>{errors.expires.message}</span> : <></>}

            <input type="text" maxLength={3} placeholder='CVV' {...register('cvv', {
              required: 'This field is required'
            })} />
            {errors.cvv ? <span>{errors.cvv.message}</span> : <></>}

          </div>

          <button type='submit'>Save</button>
        </form>

      </div>
      <ToastContainer />


    </article>
  )
}

export default CardUser