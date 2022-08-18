// import { Auth } from "../Authentication/Auth";
import { errorMessages, notificationType, showNotification } from "../common";
import { is_server } from "./CommonUtils";
import { routesList } from "./Urls";

const errorFourHoundred = (response) => {
  if (response.data) {
    let data = response.data;
    Object.values(data).map((value) =>
      showNotification(notificationType.ERROR, value)
    );
  } else {
    showNotification(notificationType.ERROR, response.data.emailnotfound);
  }
};

const errorFourNotOne = (errorObject) => {
  errorResponse(errorObject);
 
};

const errorFourNotTwo = () => {
  showNotification(notificationType.ERROR, errorMessages.fourNotTwo);
 
};

const errorFourNotThree = () => {
  showNotification(notificationType.ERROR, errorMessages.fourNotThree);
};

const errorFourNotFour = () => {
  showNotification(notificationType.ERROR, errorMessages.fourNotFour);
};

const errorFourNotNine = () => {
  showNotification(notificationType.ERROR, errorMessages.fourNotNine);
};

const errorFourOneZero = () => {
  showNotification(notificationType.ERROR, errorMessages.fourOneZero);
};

const errorFourOneNine = () => {
  showNotification(notificationType.ERROR, errorMessages.fourOneNine);
};

const errorFourTwoTwo = (errorObject) => {
    errorResponse(errorObject)
};
const errorFourTwoNine = () => {
  showNotification(notificationType.ERROR, errorMessages.fourTwoNine);
};

const errorFiveHoundredSeries = () => {
  showNotification(notificationType.ERROR, errorMessages.fiveHoundredSeries);
};
const errorResponse = (errorObject) =>{
  
  const { errors } = errorObject
  const keys = Object.keys(errors);
  let length = keys.length;
  if (length > 0) {
    for (let i = 0; i < length; i++) {
      showNotification(notificationType.ERROR, typeof errors[keys[i]] === "string" ? errors[keys[i]] : errors[keys[i]][0]);
    }
  }

}
export function ErrorManagement(error) {
  if (error.response !== undefined) {
 
    switch (error.response.status) {
      case 400:
        errorFourHoundred(error.response);
        break;
      case 401:
        errorFourNotOne(error.response?.data);
        break;
      case 402:
        errorFourNotTwo();
        break;
      case 403:
        errorFourNotThree();
        break;
      case 404:
        errorFourNotFour();
        break;
      case 409:
        errorFourNotNine();
        break;
      case 410:
        errorFourOneZero();
        break;
      case 419:
        errorFourOneNine();
        break;
      case 422:
        errorFourTwoTwo(error.response?.data);
        break;
      case 429:
        errorFourTwoNine();
        break;
      case 500:
        errorFiveHoundredSeries();
        break;
      case 502:
        errorFiveHoundredSeries();
        break;
      case 503:
        errorFiveHoundredSeries();
        break;
      case 504:
        errorFiveHoundredSeries();
        break;
      default:
        showNotification(notificationType.ERROR, error.response?.status);
    }
  } else {
    showNotification(notificationType.ERROR, error.message);
  }
}
