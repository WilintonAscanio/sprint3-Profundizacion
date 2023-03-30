import { userTypes } from "../types/userType";

const initialState = {
  user: {
    name: "",
    email: "",
    photo: "",
    birthday: "",
    phone: "",
    orders: [],
    payments: [],
    recentsSearch: [],
    type: ''
  },
  error: {
    status: undefined,
    message: "",
  },
  isLogged: false,
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.LOGIN_USER:
      return {
        ...state,
        user : action.payload.user,
        error : action.payload.error,
        isLogged : true,

      };


    default:
      return state;
  }
};
