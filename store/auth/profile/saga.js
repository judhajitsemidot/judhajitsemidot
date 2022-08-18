import {
  takeEvery,
  fork,
  put,
  all,
  call,
  takeLatest,
} from "redux-saga/effects";
// Login Redux States
import { EDIT_PROFILE, GET_PROFILE } from "./actionTypes";

import {
  profileSuccess,
  getProfile,
  profileError,
  editProfile,
} from "./actions";//action fetch
import {
  postJwtProfile,
  postJwtProfileEdit,
} from "../../../src/helpers/backend_helper";
//Generator functions
function* editProfileGenerator({ payload: {values,formData} }) {
  try {
    if (process.env.NEXT_PUBLIC_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtProfileEdit,data);
      if (response) {
        yield put(editProfile(response));
      }
    }
  } catch (error) {
    yield put(profileError(error));
  }
}

function* getProfileGenrator() {
  try {
    if (process.env.NEXT_PUBLIC_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtProfile);
      yield put(profileSuccess(response));
    }
  } catch (error) {
    yield put(profileError(error));
  }
}
// combine all generator 
export function* ProfileSaga() {
  yield takeLatest(EDIT_PROFILE, editProfileGenerator);
  yield takeEvery(GET_PROFILE, getProfileGenrator);
}

export default ProfileSaga;
