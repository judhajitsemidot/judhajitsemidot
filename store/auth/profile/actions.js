import {
  PROFILE_ERROR,
  GET_PROFILE,
  PROFILE_SUCCESS,
  EDIT_PROFILE,
  RESET_PROFILE_FLAG,
} from "./actionTypes";

export const getProfile = (user) => {
  return {
    type: GET_PROFILE,
    payload: { user },
  };
};

export const editProfile = (data) => {
  return {
    type: EDIT_PROFILE,
    payload:data,
  };
};

export const profileSuccess = (msg) => {
  return {
    type: PROFILE_SUCCESS,
    payload: msg,
  };
};

export const profileError = (error) => {
  return {
    type: PROFILE_ERROR,
    payload: error,
  };
};

export const resetProfileFlag = (error) => {
  return {
    type: RESET_PROFILE_FLAG,
  };
};
