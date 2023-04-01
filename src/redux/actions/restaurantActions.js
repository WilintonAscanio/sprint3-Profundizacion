import { filterCollections } from "../../services/filterCollections";
import { restaurantsTypes } from "../types/restaurantTypes";

const collectionName = "restaurants";

const getRestaurants = (data) => {
  return {
    type: restaurantsTypes.GET_RESTAURANTS,
    payload: data,
  };
};

export const getRestaurantsAsync = () => {
  return async (dispatch) => {
    try {
      const data = await filterCollections({key : '', collectionName, value : null})
      dispatch(getRestaurants(data))
    } catch (error) {
      console.log(error);
      dispatch(getRestaurants([]))
    }
  };
};
