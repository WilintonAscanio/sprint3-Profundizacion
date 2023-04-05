import { restaurantsTypes } from "../types/restaurantTypes";

const initialValue = {
    restaurants : [],
    error : {
        status : null,
        message : ''
    }
}

export const restaurantsReducer = (state = initialValue, action) => {
    switch (action.type) {
        case restaurantsTypes.GET_RESTAURANTS:
            return {
                ...state,
                restaurants: [...state.restaurants, action.payload]

            }
            
    
        default:
            return state;
    }
  
}