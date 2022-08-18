import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
} from "./actionTypes"
import { HYDRATE} from 'next-redux-wrapper';
const initialState = {
  error: "",
  loading: false,
  Me:{}
 
}

const login = (state = initialState, action) => {
 
  switch (action.type) {
    case HYDRATE:
      state = {
        ...state,
        loading: true,
      }
      break
      case LOGIN_USER:
        state = {
          ...state,
          loading: true,
        }
        break
        
    case LOGIN_SUCCESS:
      
      state = {
        ...state,
        loading: false,
        Me: action.payload
      }
      break
    case LOGOUT_USER:
      state = { ...state }
      break
    case LOGOUT_USER_SUCCESS:
      state = { ...state }
      break
    case API_ERROR:
      state = { ...state, error: action.payload, loading: false }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default login
