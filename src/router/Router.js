import React, { useEffect } from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Adress from "../components/adress/Adress";
import Home from "../components/home/Home";
import Navbar from "../components/navbar/Navbar";
import Order from "../components/home/order/Order";
import Profile from "../components/home/profile/Profile";
import Restaurants from "../components/restaurants/Restaurants";
import Search from "../components/home/search/Search";
import Login from "../components/home/login/Login";
import Terms from "../components/home/login/Terms";
import SignIn from "../components/home/signIn/SignIn";
import Verification from "../components/home/signIn/Verification";
import Payment from "../components/home/profile/Payment";
import EditUser from "../components/home/profile/EditUser";
import CardUser from "../components/home/profile/CardUser";
import AllOrder from "../components/home/order/AllOrder";
import Dish from "../components/restaurants/Dish";
import NewOrder from "../components/restaurants/NewOrder";
import CurrentOrder from "../components/restaurants/CurrentOrder";
import Create from "../components/home/login/Create";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { getUsers } from "../services/getUsers";
import { loginUser } from "../redux/actions/userActions";
import SignWithEmail from "../components/home/login/SignWithEmail";

const Router = () => {
  const dispatch =useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user => {

      if (user) {
        getUsers(user.uid).then((response) => {
          dispatch(loginUser(response, {status : false, message : ''}))
          
        }).catch((error) => {
          dispatch(loginUser({}, {status : true, message : error.message}))
          
        })
        
      
      }
      else{
        console.log('No logged');
      }

    }))
   

  }, [])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}>
          <Route path=":terms" element={<Terms />} />
        </Route>
        <Route path="loginEmail" element={<SignWithEmail />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signIn/verification" element={<Verification />} />
    

        <Route path="/" element={<Home />} />
        <Route path="/" element={<Navbar />}>
          <Route path="adress" element={<Adress />} />
          <Route path="allOrder" element={<AllOrder />} />
          <Route path="allOrder/order" element={<Order />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/payment" element={<Payment />} />
          <Route path="profile/edit" element={<EditUser />} />
          <Route path="/profile/payment/card" element={<CardUser />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route path="restaurants" element={<Restaurants />} />

        <Route path="dish" element={<Dish />} />
        <Route path="newOrder" element={<NewOrder />} />
        <Route path="currentOrder" element={<CurrentOrder />} />
        <Route path="create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
