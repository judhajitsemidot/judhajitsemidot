import { all, fork } from "redux-saga/effects";
 
import AuthSaga from "./auth/login/saga";
import ProfileSaga from "./auth/profile/saga";
 
export default function* rootSaga() {
  yield all([
    fork(AuthSaga),
    fork(ProfileSaga),
  ])
}
