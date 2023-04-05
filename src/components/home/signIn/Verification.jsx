import React, { useEffect } from 'react'
import './verification.scss'
import logo from '../../../assets/logo.svg'
import './signIn.scss'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { auth } from '../../../firebase/firebaseConfig'
import { verifyCodeAsync } from '../../../redux/actions/userActions'

const Verification = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {error} = useSelector(store => store.users)

    const onSubmit = (data) => {
        console.log(data);
        dispatch(verifyCodeAsync(data.code))
      
    }
    useEffect(() => {
        if (error.status) {
            Swal.fire({
                icon : 'error',
                title: 'Omaiga',
                text : `No lo puedo creer 😮, ha ocurrido un error y es este : ${error.message}`
            })
            
        } else if (error.status === false){
            Swal.fire({
                icon : 'success',
                title : 'SIIIIIU',
                text : 'Eso ya te verificamos, por favor completa los siguientes campos.'
            }).then( () => {
                if (auth.currentUser.displayName && auth.currentUser.photoURL) {
                    navigate('/')
                    
                } else {
                    navigate('/create')
                }
              
            })
        }
     
    }, [error])
    
    return (
        <article className='verify'>
            <div className='verify__info'>
                <section>
                    <figure>
                        <img src={logo} alt="logo" />
                    </figure>
                    <h3>Verification</h3>
                    <p>Enter the four-digit code from SMS</p>
                    <small>SMS not received. <strong>Send again?</strong></small>
                    <form className='verify__info__form' onSubmit={handleSubmit(onSubmit)}>
                        <input type="number" placeholder='----' {...register('code', {
                            required: 'This field is required'
                        })} />

                        {errors.code ? <span>{errors.code.message}</span> : <></>}

                        <footer>
                            <button type='submit'>Iniciar sesión</button>
                        </footer>

                    </form>
                </section>


            </div>

        </article>


    )
}

export default Verification