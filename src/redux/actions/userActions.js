import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, dataBase } from "../../firebase/firebaseConfig";
import { userTypes } from "../types/userType";

const collectionName = "usersSprint";
const usersCollection = collection(dataBase, collectionName);

const loginUser = (user, error) => {
  return {
    type: userTypes.LOGIN_USER,
    payload: { user, error },
  };
};
export const loginUserAsync = (email, password) => {
  return async (dispatch) => {
    try {
      const login = await signInWithEmailAndPassword(auth, email, password);
      dispatch(loginUser());
    } catch (error) {
      console.log(error);
    }
  };
};
const createUser = (user) => {
  return {
    type: userTypes.CREATE_USER,
  };
};
export const createUserAsync = (user) => {
  return async (dispatch) => {
    try {
      const verificate = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log(verificate);
      const newUser = {
        name: user.name,
        email : user.email,
        birthday : user.birthday,
        phone : user.phone,
        orders : [],
        payments : [],
        recentsSearch : [],
        type: 'user'
      }
      const userDoc = await addDoc(usersCollection, newUser);

      dispatch(loginUser({...newUser}, {status: false, message: ''}));
    } catch (error) {
      console.log(error);
      dispatch(loginUser({}, {status: true, message: error.message}))
    }
  };
};
