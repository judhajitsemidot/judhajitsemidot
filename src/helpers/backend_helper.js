 
import { apiUrls, sendGetRequest, sendPostRequest,sendPutRequest } from "../common"

// Gets the logged in user data from local session
const getLoggedInUser = () => {
  const user = localStorage.getItem("user")
  if (user) return JSON.parse(user)
  return null
}

//is user is logged in
const isUserAuthenticated = () => {
  return getLoggedInUser() !== null
}
 
// Login Method
const postJwtLogin = data => sendPostRequest(apiUrls.login, data)
// profile
const postJwtProfile = data => sendGetRequest(apiUrls.myProfile, data);//get Profile
const postJwtProfileEdit = data => {
  debugger
  sendPutRequest(apiUrls.userBasicInfoUpdate, data)} //Edit profile
export {
  postJwtLogin,//working
  postJwtProfile,//working 
  postJwtProfileEdit,//working edit profile
}
