import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginWithEmail } from '../../../redux/actions/userActions'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Creating from '../../loaders/Creating'
import { toggle_loading } from '../../../redux/actions/loadingAction'

const SignWithEmail = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { user } = useSelector(state => state.users)
    const loading = useSelector((store) => store.loading)


    const onSubmit = (data) => {
        dispatch(loginWithEmail(data))

    }
    useEffect(() => {
        if (user?.uid) {

            setTimeout(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Bienvenido',
                    text: `Que bueno verte ${user.name}`
                })
                navigate('/')

            }, 2000);

        }


    }, [user])

    return (
        <article className='signWithEmail'>
            <div className='signWithEmail__info'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Email
                        <input type="text" placeholder='Type your email' {...register('email', {
                            required: 'This field is required'
                        })} />
                    </label>
                    {errors.email ? <span>{errors.email.message}</span> : <></>}
                    <label>
                        Password
                        <input type="password" placeholder='Type your password' {...register('password', {
                            required: 'This field is required'
                        })} />
                    </label>
                    {errors.password ? <span>{errors.password.message}</span> : <></>}
                    <button type='submit'>Login</button>

                </form>
                {loading ? <Creating /> : <></>}


            </div>



        </article>
    )
}

export default SignWithEmail