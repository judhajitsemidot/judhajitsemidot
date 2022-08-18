import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes"
import { apiError, loginSuccess } from "./actions"

//Include Both Helper File with needed methods
 import {
  postJwtLogin,
} from "../../../src/helpers/backend_helper";
import { Auth } from "../../../src/Authentication/Auth";

function* loginUser({ payload: { user, history } }) {

  try {
    if (process.env.NEXT_PUBLIC_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      })
      let formData = { ...response.data.user, auth_token: response.data.access };
      Auth.authenticateUserData(formData, user.remember_me);
      yield put(loginSuccess(response));

      history.push("/profile")
    }
  } catch (error) {
    yield put(apiError(error))
  }
}

function* logoutUser({ payload: { history } }) {

  try {

    localStorage.removeItem("userInfo");
    Cookies.remove("userInfo");
    Cookies.remove("auth_token");
    history.push("/login");

  } catch (error) {

    yield put(apiError(error));

  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeEvery(LOGOUT_USER, logoutUser)

}

export default authSaga
