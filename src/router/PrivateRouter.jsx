import { onAuthStateChanged } from 'firebase/auth';
import React, { Children, useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebaseConfig';
import { getUsers } from '../services/getUsers';
import { loginUser } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';

const PrivateRouter = ({children}) => {
  const [logged, setLogged] = useState(undefined)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUsers(user.uid)
          .then((response) => {
            dispatch(loginUser(response, { status: false, message: "" }));
            setLogged(true)
          })
          .catch((error) => {
            dispatch(loginUser({}, { status: true, message: error.message }));
            
          });
      } else {
        console.log("No tas");
        setLogged(false)
        navigate('/signIn')
        
      }
    });
  }, []);
  return (
    <div>{logged ? children : <></>}</div>
  )
}

export default PrivateRouter