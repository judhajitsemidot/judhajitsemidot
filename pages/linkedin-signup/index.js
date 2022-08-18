import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { SignUpInLayout } from "../../layouts";
import { Auth } from "../../src/Authentication/Auth";
import {
  apiUrls,
  getFormData,
  routesList,
  sendPostRequest,
} from "../../src/common";

export const LinkedinSignUp = () => {
  const location = useRouter();
  const history = useRouter();
  let orderParam = location.query.code;

  useEffect(() => {
    if (orderParam) {
      sendPostRequest(
        apiUrls.linkedin,
        getFormData({ access_code: orderParam })
      ).then((response) => {
        let formData = {
          ...response.data.user,
          auth_token: response.data.access,
        };
        Auth.authenticateUserData(formData);
        Cookies.set("remember_token", response.token);
        history.push(routesList.homePage);
      });
    } else {
      history.push(routesList.signIn);
    }
  }, [orderParam]);

  return <div className="text-center">Signing in...! Please Wait</div>;
};

export async function getServerSideProps() {
  // Fetch data from external API

  return { props: {} };
}
export default LinkedinSignUp;
LinkedinSignUp.Layout = SignUpInLayout;
