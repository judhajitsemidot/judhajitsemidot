// get all action types
import { PROFILE_ERROR, GET_PROFILE, PROFILE_SUCCESS, EDIT_PROFILE, RESET_PROFILE_FLAG } from "./actionTypes"
/**
 * initial state for insert respsonse
 */
const initialState = {
  error: "",
  success: "",
  data:[]
}

const profile = (state = initialState, action) => {
    
   switch (action.type) {
    case EDIT_PROFILE:
      state = { ...state ,data: action.payload }
      break
    case GET_PROFILE:
      state = { ...state }
      break
    case PROFILE_SUCCESS:
      state = { ...state, data: action.payload }
      break
    case PROFILE_ERROR:
      state = { ...state, error: action.payload }
      break
    case RESET_PROFILE_FLAG:
      state = { ...state, success: null }
      break
    default:
      state = { ...state }
      break
  }

  return state

}

export default profile
