import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUserAsync, updateProfileAsync } from '../../../redux/actions/userActions';
import Creating from '../../loaders/Creating';
import { fileUpLoad } from '../../../services/fileUpLoad';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';

const Create = () => {
    const [isEdit, setIsEdit] = useState(false)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const { loading, error } = useSelector((store) => store.users)






    const onSubmit = async (data) => {
        console.log(data);
        const photo = data.photo[0] ? await fileUpLoad(data.photo[0]) : '';

        const user = {
            name: data.name,
            email: data.email,
            password: data.password,
            photo: photo,
            location: data.location,
            birthday: data.birthday

        }
        if (isEdit) {
            dispatch(updateProfileAsync(user))
            setTimeout(() => {
                navigate('/')

            }, 2000);
        } else {
            dispatch(createUserAsync({...user, phone : data.phone}))
            setTimeout(() => {
                navigate('/')

            }, 2000);

        }



    }

    useEffect(() => {
        onAuthStateChanged(auth, (user => {
            if (user) {
                setIsEdit(true)

            }
        }))

    }, [])


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
                    <label >LOCATION
                        <input type="text" placeholder='Type your location' {...register('location', {
                            required: 'This field is required'
                        })} />
                    </label>
                    {errors.location ? <span>{errors.location.message}</span> : <></>}
                    <label >Photo
                        <input type="file"  {...register('photo', {
                            required: 'This field is required'
                        })} />
                    </label>
                    {errors.photo ? <span>{errors.photo.message}</span> : <></>}



                    <button>Sign In</button>
                    {loading ? <Creating /> : <></>}
                </form>

            </div>

        </article>
    )
}

export default Create