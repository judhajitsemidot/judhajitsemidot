import { allowedFileTypes, commonFields, isEmptyObject, isUndefined } from "../common";
export const nameValue = (value) => /^[a-z,A-Z," ",0-9]+$/i.test(value);
export const lettersOnly = (value) => /^[a-z,A-Z," "]+$/i.test(value);
export const numbersOnly = (value) => /^[0-9]+$/i.test(value);
export const indianMobileNumber = (value) => /^[6-9][0-9]{9}$/.test(value);
// export const numbersWithDecimal = (value)=>/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/.test(value)

export const numbersWithDecimal = (value)=>{
var checkvalue = /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/.test(value) ;
  if(checkvalue || value === null || value == ""){
    return true
  }else{
    return false
  }
}
export const strongPassword = (value) =>
  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
    value
  );
export const minTenDigits = (value) => {
  return !isUndefined(value) && value.toString().length >= 10;
};
export const maxTenDigits = (value) => {
  return !isUndefined(value) && value.toString().length <= 11;
};

export const fileSize = (value) => {
  if (!isUndefined(value) && value.size >= commonFields.MAX_FILE_SIZE) {
    return false;
  } else {
    return true;
  }
};

export const fileSizeStore = (value) => {
  if (!isUndefined(value) && value.size >= commonFields.MAX_FILE_SIZE_3MB) {
    return false;
  } else {
    return true;
  }
};

export const fileType = (value) => {
  if (!isUndefined(value) && !allowedFileTypes.includes(value.type)) {
    return false;
  } else {
    return true;
  }
};

export const atLeastOne = (value) => {
 
  if (!isUndefined(value) && !value.includes(true)) {
    return false;
  } else {
    return true;
  }
};

export const selectValue = (value) => {
 
  if (!isEmptyObject(value)) {
    return true;
  } else if (
    value !== undefined &&
    value !== "undefined" &&
    value !== null &&
    value !== "null"
  ) {
    return true;
  } else {
    return false;
  }
};
