import { combineReducers } from "redux"
 
// Authentication
import Login from "./auth/login/reducer";
import Profile from "./auth/profile/reducer";
const rootReducer = combineReducers({
  Login:Login,
  Profile:Profile
})
export default rootReducer
