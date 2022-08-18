import axios from "axios";
import { Subject } from "rxjs";
import { apiUrls, urlQuery } from "../common";
import API from "../common/AxiosConfiguration";
const subject = new Subject();

export const UserService = {
  getObserved: () => subject.asObservable(),
  getFollowings: async (pageNo, form) => {
    const response = await API.post(
      `${apiUrls.getFollowings}${urlQuery.symbol}${urlQuery.page}${pageNo}`,
      form
    );
    return response;
  },

  followStore: async (form) => {
    const response = await API.post(apiUrls.followUser, form);
    return response;
  },

  getBlockedUsers: async (form) => {
    const response = await API.post(apiUrls.getBlockedUserList, form);
    return response;
  },

  blockUser: async (form) => {
    const response = await API.post(apiUrls.blockUnBlockUser, form);
    return response;
  },

  getNetworkData: async () => {
    const response = await axios.get(apiUrls.getNetworkData);
    return response;
  },

  getMyPlan: async () => {
    const response = await API.post(apiUrls.getMyPlans);
    return response;
  },

  autoRenewal: async (form) => {
    const response = await API.post(apiUrls.updateAutoRenewal, form);
    return response;
  },

  changePassword: async (form) => {
    const response = await API.post(apiUrls.changeOldPassword, form);
    return response;
  },
  contactUs: async (form) => {
    const response = await API.post(apiUrls.contactUs, form);
    return response;
  },
};
