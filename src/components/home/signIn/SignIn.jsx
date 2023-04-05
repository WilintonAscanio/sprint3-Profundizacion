import React, { useState } from 'react'
import logo from '../../../assets/logo.svg'
import './signIn.scss'
import phone from '../../../assets/phone.svg'
import { Outlet, useNavigate } from 'react-router-dom'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../../../firebase/firebaseConfig'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'


const SignIn = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const generateRecaptcha = () => {
        try {
            window.recaptchaVerifier = new RecaptchaVerifier('recaptch-container', {
                'size': 'invisible',
                'callback': () => {

                }
            }, auth)

        } catch (error) {
            console.log(error);

        }
    }
    const sendSMS = (ind, number, recaptchaVerifier) => {
        signInWithPhoneNumber(auth, `${ind}${number}`, recaptchaVerifier)
            .then((response) => {
                window.confirmationResult = response
                console.log(window.confirmationResult)
                
                Swal.fire({
                    icon: 'success',
                    title: 'Perfecto',
                    text: 'En unos instantes te llegará un código de verificación'
                }).then(() => {
                    navigate('verification')

                })

            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Lo sentimos',
                    text: `Ha ocurrido un error ${error.message}`
                })

            })

    }
    const onSubmit = (data) => {
        console.log(data.number);
        generateRecaptcha()
        const appVerifier = window.recaptchaVerifier;
        sendSMS('+57', data.number, appVerifier)
        console.log(appVerifier);

    }
    return (
        <article className='signIn'>
            <div className='signIn__info'>
                <section>
                    <figure>
                        <img src={logo} alt="logo" />
                    </figure>
                    <h3>Sign in</h3>
                    <p>Login or create an account with your phone number to start ordering</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            <img src={phone} alt="phone" />
                            <input type="text" placeholder="+1" {...register('number', {
                                required:'This field is required'
                            })} />
                        </label>
                        {errors.number ? <span>{errors.number.message}</span> : <></>}
                        <footer>
                            <p>By clicking the button next you accept<br />Terms of user</p>
                            <button type='submit'>Send Code</button>
                            <small>If you have an account click Login</small>
                            <button onClick={() => navigate('/loginEmail') }>Login</button>
                        </footer>
                    </form>
                </section>
                




            </div>
            <div id='recaptch-container'></div>

        </article>
    )
}

export default SignIn