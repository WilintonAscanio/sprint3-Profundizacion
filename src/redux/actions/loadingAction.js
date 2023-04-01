import { loadingTypes } from "../types/userType"

export const toggle_loading = (value = false) => {
  return {
    type : loadingTypes.TOGGLE_LOADING,
    payload : value
  }
}