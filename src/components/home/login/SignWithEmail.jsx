import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginUserAsync } from '../../../redux/actions/userActions'
import { useNavigate } from 'react-router-dom'

const SignWithEmail = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onSubmit = ({email, password}) => {
        dispatch(loginUserAsync(email, password)).then((response) => {
            if (response) {
                console.log(response);
                console.log('siii');
                navigate('/')


            }
        }).catch((error) => {
            console.log(error);

        })


    }
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

            </div>


        </article>
    )
}

export default SignWithEmail