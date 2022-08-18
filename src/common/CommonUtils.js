import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Auth } from "../Authentication/Auth";
import API from "./AxiosConfiguration";
import { notificationType } from "./";
import {
  commonFields,
  genderOptions,
  placeHolderImage,
  valuesType,
} from "../common";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
import { apiUrls } from "./Urls";

export const sendPostRequest = async (url, data, ...options) => {
  try {
    const response = await API.post(url, data, options);
      if (response?.status === true) {
        showNotification(notificationType.SUCCESS, response.message ? response.message :"Success")
      }else{
        showNotification(notificationType.ERROR, response.message ? response.message :"Error ")
      }
    return response;
  } catch (error) {
    showNotification(notificationType.ERROR,"Something went wrong");
  }
};


export const sendPutRequest = async (url, data, ...options) => {
  
  try {
    const response = await API.put(url, data, options);
      if (response?.status === true) {
        showNotification(notificationType.SUCCESS, response.message ? response.message :"Success")
      }else{
        showNotification(notificationType.ERROR, response.message ? response.message :"Error ")
      }
    return response;
  } catch (error) {
    showNotification(notificationType.ERROR,"Something went wrong");
  }
};

export const sendGetRequest = async (url, data, ...options) => {
  try {
    const response = await API.get(url, data, options);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const showNotification = (type, message, title, ...rest) => {
  switch (type) {
    case notificationType.INFO:
      NotificationManager.info(message, title || "", rest.timeOut);
      break;
    case notificationType.SUCCESS:
      NotificationManager.success(message, title || "", rest.timeOut);
      break;
    case notificationType.WARNING:
      NotificationManager.warning(message, title || "", rest.timeOut);
      break;
    case notificationType.ERROR:
      NotificationManager.error(message, title || "", rest.timeOut);
      break;
    default:
  }
};

export function scrollToTop() {
  !is_server() && window.scrollTo(0, 0);
}

export const extractQueryStringParamsByKey = (key) => {
  let params = new URLSearchParams(!is_server() && window.location.search);
  if (params.has(key)) {
    return params.get(key);
  }
  return false;
};

export function splitOnFirst(str, sep) {
  const index = str.indexOf(sep);
  return index < 0
    ? [str]
    : [str.slice(0, index), str.slice(index + sep.length)];
}

export const removeEmptyStrings = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((prop) => {
    if (obj[prop] !== "") {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
};

export function is_server() {
  return !(typeof window !== "undefined" && window.document);
}

export function is_browser() {
  return typeof window !== "undefined" && window.document;
}

export function is_navigator() {
  return is_browser() && typeof window.navigator !== "undefined";
}

export function manageUndefined(value) {
  if (value === "undefined" || value === undefined || value === null) {
    return "";
  }
  return value;
}

export function isUndefined(value) {
  if (value === "undefined" || value === undefined || value === null) {
    return true;
  }
  return false;
}

export function notUndefined(value) {
  if (value !== "" && value !== undefined && value !== null) {
    return true;
  }
  return false;
}

export function capitalizeFirstLetter(value) {
  return value.toString().charAt(0).toUpperCase() + value.slice(1);
}

export function capitalizeEachWord(value) {
  var subString = value.toString().toLowerCase().split(" ");
  for (let i = 0; i < subString.length; i++) {
    subString[i] =
      subString[i].charAt(0).toUpperCase() + subString[i].substring(1);
  }
  return subString.join(" ");
}

export function toLower(value) {
  return value.toString().toLowerCase();
}

export function toUpper(value) {
  return value.toString().toUpperCase();
}

export function toArray(value, seprator) {
  return value.split(seprator);
}

export function toString(value) {
  return !isEmptyArray(value) ? value.toString() : "";
}

export function lSpace(value) {
  return commonFields.SPACE + value.toString();
}

export function rSpace(value) {
  return value.toString() + commonFields.SPACE;
}

export function bothSideSpace(value) {
  return commonFields.SPACE + value.toString() + commonFields.SPACE;
}

export function trimLeftSide(value) {
  return manageUndefined(value) !== "" ? value.toString().trimStart() : "";
}

export function trimRightSide(value) {
  return manageUndefined(value) !== "" ? value.toString().trimEnd() : "";
}

export function trimValue(value) {
  return manageUndefined(value) !== "" ? value.toString().trim() : "";
}

export function getFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach((key) => formData.append(key, object[key]));
  return formData;
}

export const encryptObject = (value) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(value),
    process.env.NEXT_PUBLIC_SECRET_KEY
  ).toString();
};

export const decryptObject = (value) => {
  let bytes = CryptoJS.AES.decrypt(value, process.env.NEXT_PUBLIC_SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

export const encryptValue = (value) => {
 
  return CryptoJS.AES.encrypt(
    value,
    process.env.NEXT_PUBLIC_SECRET_KEY
  ).toString();
};

export const decryptValue = (value) => {
  let bytes = CryptoJS.AES.decrypt(value, process.env.NEXT_PUBLIC_SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const processEncryptCookie = (
  cookieName,
  cookieValue,
  type,
  ...rest
) => {
  let options = {};
  if (rest.length > 0) {
    let a;
    a = rest.find((obj) => Object.keys(obj) == "setCookieOptions");
    if (a !== undefined) {
      options = a.setCookieOptions;
    }
  }
  if (type === valuesType.VALUE) {
    setCookie(cookieName, encryptValue(cookieValue), options);
  } else if (type === valuesType.OBJECT) {
    setCookie(cookieName, encryptObject(cookieValue), options);
  }
};

export const processDecryptCookie = (cookieName, type, ...rest) => {
  let cookie = getCookie(cookieName);
  let form = "";
  if (cookie) {
    if (type === valuesType.VALUE) {
      form = decryptValue(cookie);
    } else if (type === valuesType.OBJECT) {
      form = decryptObject(cookie);
    }
    // removeCookie(cookieName);
  }
  return form;
};

export const setCookie = (name, value, ...rest) => {
  let options = {};
  if (rest.length > 0) {
    options = rest[0];
  }

  Cookies.set(name, value, options);
};

export const getCookie = (name, ...rest) => {
  return Cookies.get(name, rest);
};

export const removeCookie = (name, ...rest) => {
  Cookies.remove(name, rest);
};

export const ratingSplitter = (value) => {
  if (!isUndefined(value)) {
    return value.toString().split(".");
  }
  return null;
};

export const isProd = () => {
  return process.env.NODE_ENV === "production";
};

export const appendBasePathOnProd = (value) => {
  return isProd()
    ? `${process.env.NEXT_PUBLIC_BASE_PATH}/${value}`
    : `/${value}`;
};

export const imageContains = (value) => {
  if (value) {
    return value.includes("storage/")
      ? appendBasePathOnProd(placeHolderImage)
      : value;
  }
  return null;
};

export const getRating = (value) => {
  let rate = [];
  if (value) {
    let denom = parseInt(value[1]);

    for (let i = 1; i <= 5; i++) {
      if (value.length === 2) {
        if (value[0] >= i) {
          rate.push(<span key={"rating" + i} className="active"></span>);
        } else if (parseInt(value[0]) + 1 === i && denom > 0) {
          rate.push(<span key={"rating" + i} className="active-half"></span>);
        } else {
          rate.push(<span key={"rating" + i}></span>);
        }
      } else {
        if (value[0] >= i) {
          rate.push(<span key={"rating" + i} className="active"></span>);
        } else {
          rate.push(<span key={"rating" + i}></span>);
        }
      }
    }
  }

  return rate;
};

export const processSocialLoginData = (data) => {
  sendPostRequest(apiUrls.userSocialSignIn, { ...data }).then((response) => {
    if (response?.status === false) {
      showNotification(notificationType.ERROR, response.message);
      return response.status;
    } else if (response?.status === true) {
      let formData = { ...response.data, auth_token: response.token };
      Auth.authenticateUserData(formData);
      // if (form.remember_me && form.remember_me === true) {
      //   let expireInDays = 30;
      //   Cookies.set("auth_token", response.token, {
      //     expires: expireInDays,
      //   });
      // } else {
      Cookies.set("auth_token", response.token);
      // }
      return response.status;
    }
  });
};

export const stickHeader = (refClass) => {
  if (is_browser()) {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 40) {
        refClass.add("sticky");
      } else {
        refClass.remove("sticky");
      }
    });
  }
};

export function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export const setUTCDaysForExpiry = (days) => {
  var timeToAdd = 1000 * 60 * 60 * 24 * days; //milliseconds * seconds * minutes * hours * days
  var date = new Date();
  var expiryTime = parseInt(date.getTime()) + timeToAdd;
  date.setTime(expiryTime);
  return date;
};

function ConvertToUTC(date) {
  if (date !== undefined) {
    let d = new Date(date);
    let yyyy = d.getFullYear().toString();
    let mm = (d.getMonth() + 1).toString(); // getMonth() is zero-based
    let dd = d.getDate().toString();
    return { y: yyyy, m: mm, d: dd };
  }
  return { y: "", m: "", d: "" };
}

export function formatStringToDateDDMMYYYY(date, seperator) {
  let d = ConvertToUTC(date);
  return (
    (d.d[1] ? d.d : "0" + d.d[0]) +
    seperator +
    (d.m[1] ? d.m : "0" + d.m[0]) +
    seperator +
    d.y
  );
}

export function formatStringToDateMMDDYYYY(date, seperator) {
  let d = ConvertToUTC(date);
  return (
    (d.m[1] ? d.m : "0" + d.m[0]) +
    seperator +
    (d.d[1] ? d.d : "0" + d.d[0]) +
    seperator +
    d.y
  );
}

export function formatStringToDateDMMM(date) {
  let d = ConvertToUTC(date);
  console.log(d);
  return d.d + " " + d.m;
}

export function formatStringToDateYYYYMMDD(date, seperator) {
  let d = ConvertToUTC(date);
  return (
    d.y +
    seperator +
    (d.m[1] ? d.m : "0" + d.m[0]) +
    seperator +
    (d.d[1] ? d.d : "0" + d.d[0])
  );
}

export function dateDifference(date1, date2) {
  if (!isUndefined(date1) && !isUndefined(date2)) {
    return parseInt(
      (new Date(date1) - new Date(date2)) / (1000 * 60 * 60 * 24),
      10
    );
  }
}

export function isEmptyArray(value) {
  if (value && value.length > 0) {
    return false;
  }
  return true;
}

export function isEmptyObject(obj) {
  if (obj && Object.keys(obj).length > 0) {
    return false;
  }
  return true;
}

export function isEmptyValue(value) {
  if (value !== "") {
    return false;
  }
  return true;
}

export const replaceAllOccurance = (string, toReplace, withReplace) => {
  return string.split(toReplace).join(withReplace);
};

export const slugGeneratorPlain = (value) => {
  if (value !== undefined) {
    return replaceAllOccurance(toLower(value), " ", "-");
  }
  return null;
};

export const sortArray = (arrayValue) => {
  let tempArray = [...arrayValue];
  if (tempArray.length > 0) {
    tempArray.sort((a, b) =>
      new Date(a.created_at).getTime() < new Date(b.created_at).getTime()
        ? 1
        : -1
    );
  }
  return tempArray;
};

export const convertArrayValuesToString = (valueArray) => {
  if (valueArray && valueArray.length > 0) {
    let tempArray = [];
    valueArray.map((ele, idx) => {
      tempArray.push(ele.value);
    });
    return toString(tempArray);
  }
  return "";
};

export const assignValueLabeltoObject = (object) => {
  return {
    ...object,
    value: object?.id,
    label: object?.name ? object.name : object?.title ? object.title : "",
  };
};