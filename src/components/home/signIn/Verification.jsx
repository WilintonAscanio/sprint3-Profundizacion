import React from 'react'
import './verification.scss'
import logo from '../../../assets/logo.svg'
import './signIn.scss'
import phone from '../../../assets/phone.svg'
import { useNavigate } from 'react-router-dom'

const Verification = () => {
    const navigate = useNavigate()
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
                <form className='verify__info__form'>
                    <input type="number" placeholder='----' />
                    
                </form>
            </section>
            <footer>
                <button onClick={() => navigate('/create')}>Iniciar sesión</button>
            </footer>

        </div>

    </article>


    )
}

export default Verification