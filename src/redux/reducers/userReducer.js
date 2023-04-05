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
    currentOrder : [],
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
    case userTypes.ADD_SEARCH:
      return {
        ...state,
        user: {
          ...state.user,
          recentsSearch: action.payload,
        },
      };
    case userTypes.CREATE_ORDER:
      return {
        ...state,
        user: {
          ...state.user,
          currentOrder: action.payload,
        },
      };
    case userTypes.ADD_CARD:
      return {
        ...state,
        user: {
          ...state.user,
          payments: action.payload,
        },
      };
    case userTypes.ADD_ORDER:
      return {
        ...state,
        user: {
          ...state.user,
          orders: action.payload,
        },
      };

      case userTypes.EDIT_USER:
        return {
          ...state,
          user: {
            ...state.user,
            
          }
        }
      case userTypes.RESET_ORDER:
        return {
         ...initialState
        }
    case userTypes.LOGOUT:
      return state;

    default:
      return state;
  }
};
