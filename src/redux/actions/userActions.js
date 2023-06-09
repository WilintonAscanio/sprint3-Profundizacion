import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, dataBase } from "../../firebase/firebaseConfig";
import { userTypes } from "../types/userType";
import { toggle_loading } from "./loadingAction";
import { getUsers } from "../../services/getUsers";

const collectionName = "usersSprint";
const usersCollection = collection(dataBase, collectionName);

export const loginUser = (user, error) => {
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
    dispatch(toggle_loading());

    try {
      const verificate = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log(verificate);
      const newUser = {
        name: user.name,
        email: user.email,
        birthday: user.birthday,
        phone: user.phone,
        orders: [],
        payments: [],
        recentsSearch: [],
        type: "user",
        currentOrder: [],
      };
      const userDoc = await addDoc(usersCollection, newUser);

      dispatch(loginUser({ ...newUser }, { status: false, message: "" }));
      dispatch(toggle_loading());
    } catch (error) {
      console.log(error);
      dispatch(loginUser({}, { status: true, message: error.message }));
    }
  };
};
const updateLocation = (data) => {
  return {
    type: userTypes.UPDATE_LOCATION,
    payload: data,
  };
};

export const updateLocationAsync = (location) => {
  return async (dispatch) => {
    const currentUser = auth.currentUser;
    let lastLocation;

    let id;
    try {
      const q = query(usersCollection, where("uid", "==", currentUser.uid));
      const userDoc = await getDocs(q);
      userDoc.forEach((user) => {
        id = user.id;
        lastLocation = user.data().location;
      });
      const userRef = doc(dataBase, collectionName, id);
      await updateDoc(userRef, { location: location });
      dispatch(updateLocation(location));
    } catch (error) {
      console.log(error);
      dispatch(updateLocation(lastLocation));
    }
  };
};
const addSearch = (data) => {
  return {
    type: userTypes.ADD_SEARCH,
    payload: data,
  };
};
export const addSearchAsync = (recentsSearch) => {
  return async (dispatch) => {
    const currentUser = auth.currentUser;
    let id;
    let array = [];

    try {
      const q = query(usersCollection, where("uid", "==", currentUser.uid));
      const userDoc = await getDocs(q);
      userDoc.forEach((user) => {
        id = user.id;
        array = user.data().recentsSearch;
      });

      let newData = [...array, recentsSearch];
      const userRef = doc(dataBase, collectionName, id);
      await updateDoc(userRef, { recentsSearch: newData });
      dispatch(addSearch(newData));
    } catch (error) {
      console.log(error);
      dispatch(addSearch(array));
    }
  };
};
const addPayment = (data) => {
  return {
    type: userTypes.ADD_CARD,
    payload: data,
  };
};
export const addPaymentAsync = (payment) => {
  return async (dispatch) => {
    const currentUser = auth.currentUser;
    let id;
    let array = [];

    try {
      const q = query(usersCollection, where("uid", "==", currentUser.uid));
      const userDoc = await getDocs(q);
      userDoc.forEach((user) => {
        id = user.id;
        array = user.data().payments;
      });

      let payments = [...array, payment];
      const userRef = doc(dataBase, collectionName, id);
      await updateDoc(userRef, { payments: payments });
      dispatch(addPayment(payments));
    } catch (error) {
      console.log(error);
      dispatch(addPayment(array));
    }
  };
};
const addOrder = (data) => {
  return {
    type: userTypes.ADD_ORDER,
    payload: data,
  };
};
export const resetOrder = () => {
  return {
    type: userTypes.RESET_ORDER,
  };
};
export const resetOrderAsync = () => {
  return async (dispatch) => {
    const currentUser = auth.currentUser;
    let id;
    let array = [];

    try {
      const q = query(usersCollection, where("uid", "==", currentUser.uid));
      const userDoc = await getDocs(q);
      userDoc.forEach((user) => {
        id = user.id;
        array = user.data().currentOrder;
      });

      let current= [];
      const userRef = doc(dataBase, collectionName, id);
      await updateDoc(userRef, { currentOrder: current });
      dispatch(resetOrder(current));
    } catch (error) {
      console.log(error);
      dispatch(resetOrder(array));
    }
  };
};
export const addOrderAsync = (order) => {
  return async (dispatch) => {
    const currentUser = auth.currentUser;
    let id;
    let array = [];

    try {
      const q = query(usersCollection, where("uid", "==", currentUser.uid));
      const userDoc = await getDocs(q);
      userDoc.forEach((user) => {
        id = user.id;
        array = user.data().orders;
      });

      let orders = [...array, order];
      const userRef = doc(dataBase, collectionName, id);
      await updateDoc(userRef, { orders: orders });
      dispatch(addOrder(orders));
    } catch (error) {
      console.log(error);
      dispatch(addOrder(array));
    }
  };
};
const createOrder = (data) => {
  return {
    type: userTypes.CREATE_ORDER,
    payload: data,
  };
};
export const createOrderAsync = (order) => {
  return async (dispatch) => {
    const currentUser = auth.currentUser;
    let id;
    let array = [];

    try {
      const q = query(usersCollection, where("uid", "==", currentUser.uid));
      const userDoc = await getDocs(q);
      userDoc.forEach((user) => {
        id = user.id;
        array = user.data().currentOrder;
      });

      const newOrder = {
        Date: "26.11.22",
        dishes: [
          {
            Price: order.price,
            Quantity: order.quantity,
            name: order.name,
            total: order.total,
            img: order.img,
          },
        ],
        restaurantNAme: order.resName,
        status: "Delivered",
        total: order.total,
      };
      const dish = {
        Price: order.price,
        Quantity: order.quantity,
        name: order.name,
        total: order.total,
        img: order.img,
      };
      const userRef = doc(dataBase, collectionName, id);
      if (array.dishes) {
        array = { ...array, dishes: [...array.dishes, dish] };
      } else {
        array = newOrder;
      }
      await updateDoc(userRef, { currentOrder: array });
      dispatch(createOrder(array));
    } catch (error) {
      console.log(error);
      dispatch(createOrder({}));
    }
  };
};

export const verifyCodeAsync = (code) => {
  return (dispatch) => {
    window.confirmationResult
      .confirm(code)
      .then(async (result) => {
        const user = result.user.auth.currentUser;
        const userCollection = await getUsers(user.uid);
        console.log(userCollection);
        dispatch(
          loginUser({ ...userCollection }, { status: false, message: "" })
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginUser({}, { status: true, message: error.message }));
      });
  };
};

export const updateProfileAsync = (user) => {
  return async (dispatch) => {
    dispatch(toggle_loading());
    try {
      console.log(user);
      const userAuth = auth.currentUser;
      await updateProfile(userAuth, {
        displayName: user.name,
        photoURL: user.photo,
        phoneNumber: user.phone,
        birthday: user.birthday,
      });
      await updatePassword(userAuth, user.password);
      await updateEmail(userAuth, user.email);

      const newUser = {
        uid: userAuth.uid,
        name: user.name,
        email: user.email,
        photo: user.photo,
        location: user.location,
        phone: userAuth.phoneNumber,
        birthday: user.birthday,
        type: "user",
        orders: [],
        payments: [],
        recentsSearch: [],
        currentOrder: [],
      };
      console.log(newUser);
      const userDocs = await addDoc(usersCollection, newUser);
      dispatch(
        loginUser(
          { ...newUser, id: userDocs.id },
          {
            status: false,
            message: "",
          }
        )
      );
      dispatch(toggle_loading());
    } catch (error) {
      console.log(error);
      dispatch(loginUser({}, { status: true, message: error.message }));
    }
  };
};
const logOut = () => {
  return {
    type: userTypes.LOGOUT,
  };
};
export const logOutAsync = () => {
  return async (dispatch) => {
    try {
      signOut(auth);
      dispatch(logOut());
    } catch (error) {
      console.log(error);
    }
  };
};
export const loginWithEmail = (user) => {
  console.log(user);

  return async (dispatch) => {
    dispatch(toggle_loading());

    try {
      const email = user.email;
      const password = user.password;
      const userAuth = await signInWithEmailAndPassword(auth, email, password);
      const userCollection = await getUsers(userAuth.user.uid);
      console.log(userCollection);
      dispatch(
        loginUser(
          {
            ...userCollection,
          },
          { status: false, message: "" }
        )
      );
      dispatch(toggle_loading());
    } catch (error) {
      console.log(error);
      dispatch(loginUser({}, { status: true, message: error.message }));
    }
  };
};

export const editUserAsync = (user) => {
  return async (dispatch) => {
    dispatch(toggle_loading());

    try {
      const userAuth = auth.currentUser;

      await updateProfile();
    } catch (error) {
      console.log(error);
    }
  };
};
