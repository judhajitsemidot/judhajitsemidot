import axios from "axios";
import { getUserData } from "../Authentication/Auth";
import base_url from "./BaseUrl";
import { ErrorManagement } from "./ErrorManagement";
import { loaderType, StartLoader, StopLoader } from "../Components/Loaders";

let loader = loaderType.BUTTON;
let skeletonCount = 1;
let loaderText = "";

export function SwitchLoader(type, count = 1, customText = "") {
  loader = type;
  skeletonCount = count;
  loaderText = customText;
}

const Instance = axios.create({
  baseURL: `${base_url[process.env.NODE_ENV]}api/`,
});

Instance.interceptors.request.use(
  (config) => {
    StartLoader(loader, skeletonCount, loaderText);
    if(getUserData().data.auth_token){
      config.headers["Authorization"] = `Bearer ${getUserData().data.auth_token}`;
    }
    // config.headers["From"] = "web";
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";
 
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Instance.interceptors.response.use(
  (response) => {
    StopLoader(loader);
 
    return response.data;
  },
  (error) => {
    StopLoader(loader);
 
    ErrorManagement(error);
    return Promise.reject(error);
  }
);

export default Instance;
