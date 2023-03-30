import React from 'react'
import logo from '../../../assets/logo.svg'
import './signIn.scss'
import phone from '../../../assets/phone.svg'
import { Outlet, useNavigate } from 'react-router-dom'


const SignIn = () => {
    const navigate = useNavigate()
    return (
        <article className='signIn'>
            <div className='signIn__info'>
                <section>
                    <figure>
                        <img src={logo} alt="logo" />
                    </figure>
                    <h3>Sign in</h3>
                    <p>Login or create an account with your phone number to start ordering</p>
                    <form>
                        <label>
                            <img src={phone} alt="phone" />
                            <input type="number" placeholder="+1" />
                        </label>
                    </form>
                </section>

                <footer>
                    <p>By clicking the button next you accept<br />Terms of user</p>
                    <button onClick={() => navigate('verification')}>Login</button>
                </footer>
            

            </div>

        </article>
    )
}

export default SignIn