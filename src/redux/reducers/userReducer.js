import { userTypes } from "../types/userType";

const initialState = {
  user: {
    name: "",
    email: "",
    photo: "",
    birthday: "",
    phone: "",
    location: "",
    orders: [],
    payments: [],
    recentsSearch: [],
    type: "",
    uid: "",
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
        user: action.payload.user,
        error: action.payload.error,
        isLogged: true,
      };

    case userTypes.UPDATE_LOCATION:
      return {
        ...state,
        user: {
          ...state.user,
          location: action.payload,
        },
      };
    case userTypes.LOGOUT:
      return state;

    default:
      return state;
  }
};
