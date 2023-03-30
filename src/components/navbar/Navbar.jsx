import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './navbar.scss'
import logo from '../../assets/logo.svg'
// import home from '../../assets/home.svg'
// import search from '../../assets/searchNav.svg'
// import profile from '../../assets/user.svg'
// import order from '../../assets/recent.svg'
import { BsSearch } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";



const Navbar = () => {


    return (
        <>
            <nav>
                <Link to='/' className='navlink info'>
                    <img src={logo} alt="logo" />
                    <small>BigCenter</small>
                </Link>
                <ul>
                    <NavLink to='/' className='navlink'><IoHomeOutline />Home</NavLink>
                    <NavLink to='search' className='navlink'><BsSearch /> Buscar</NavLink>
                    <NavLink to='allOrder' className='navlink'> <RxCounterClockwiseClock /> Ordenes</NavLink>
                    <NavLink to='profile' className='navlink'><HiOutlineUser /> Cuenta</NavLink>
                </ul>

            </nav>
            <Outlet />
        </>

    )
}

export default Navbar