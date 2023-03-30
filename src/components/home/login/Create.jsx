import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUserAsync } from '../../../redux/actions/userActions';

const Create = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch()
    const { user, error } = useSelector((store) => store.users)

    useEffect(() => {

        console.log(user);
        console.log(error);

    }, [user])




    const onSubmit = (data) => {
        console.log(data);
        navigate('/')
        // dispatch(createUserAsync(data))
    }

    return (
        <article className='create'>
            <div className='create__info'>
                <h3>Create Account</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>NAME
                        <input type="text" placeholder='Type your name' {...register('name', {
                            required: 'This field is required'
                        })} />
                    </label>
                    {errors.name ? <span>{errors.name.message}</span> : <></>}
                    <label>EMAIL
                        <input type="text" placeholder='Type your email' {...register('email', {
                            required: 'This field is required'
                        })} />
                    </label>
                    {errors.email ? <span>{errors.email.message}</span> : <></>}

                    <label>PASSWORD
                        <input type="password" placeholder='Type your password' {...register('password', {
                            required: 'This field is required'
                        })} />
                    </label>
                    {errors.password ? <span>{errors.password.message}</span> : <></>}
                    <label>BIRTHDAY
                        <input type="date" {...register('birthday', {
                            required: 'This field is required'
                        })} />
                    </label>
                    {errors.birthday ? <span>{errors.birthday.message}</span> : <></>}
                    <label >PHONE
                        <input type="number" placeholder='Phone' {...register('phone', {
                            required: 'This field is required'
                        })} />
                    </label>
                    {errors.phone ? <span>{errors.phone.message}</span> : <></>}
                    


                    <button>Sign In</button>
                </form>

            </div>

        </article>
    )
}

export default Create