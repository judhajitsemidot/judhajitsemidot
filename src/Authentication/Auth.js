import Cookies from "js-cookie";
import { is_server } from "../common";

export const userData = {};

export const getUserData = () => {
  
  let userData = localStorage.getItem("userInfo");
  if (userData !== null && userData!=="null") {
    return { isUserAuthenticated: true, data: JSON.parse(userData) };
  } else {
    return { isUserAuthenticated: false, data: {} };
  }
};

export const Auth = {
  isUserAuthenticated: false,
  userInfo: null,
  auth_token: "",
  authenticateUserData(AuthData,remember_me) {
    this.isUserAuthenticated = true;
    !is_server() &&
      window.localStorage.setItem("userInfo", JSON.stringify(AuthData));
    this.userInfo = AuthData;
    this.auth_token = AuthData.auth_token;
    if (remember_me && remember_me === true) {
            let expireInDays = 30;
            Cookies.set("remember_token", AuthData.auth_token, {
              expires: expireInDays,
            });
          } else {
            Cookies.set("remember_token", AuthData.auth_token);
          }
  },
  signOut() {
    this.isUserAuthenticated = false;
    !is_server() && window.localStorage.setItem("userInfo", null);
    this.userInfo = null;
    this.auth_token = null;
    Cookies.remove("userInfo");
    Cookies.remove("auth_token");
  },
  getAuthenticationStatus() {
    return this.isUserAuthenticated;
  },
};
