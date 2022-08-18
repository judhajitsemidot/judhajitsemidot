import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SignUpInLayout } from "../../layouts";
import {
  apiUrls,
  manageUndefined,
  notificationType,
  notUndefined,
  routesList,
  sendPostRequest,
  showNotification,
} from "../../src/common";
import {
  GlobalForm,
  GlobalSubmit,
  GlobalInput as Input,
  GlobalImage as Image,
} from "../../src/Components/GlobalComponents";
import { EmailVerification } from "../../src/Components/SubSection";
import {
  otpSchema,
  passwordMatchSchema,
} from "../../src/Validation/Validation";
import { Logo } from "../../src/Components/CommonSections";
const ForgotPassword = () => {
  const [optFormState, setOtpFormState] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [form, setForm] = useState({});
  const [formPasswordMatch, setFormPasswordMatch] = useState({});
  const [formStep, setFormState] = useState(1);
  const [headTitle, setHeadTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const history = useRouter();
  const {
    register: registerForgetOtp,
    formState: { errors: errorForgetOtp },
    handleSubmit: handleSubmitForgetOtp,
    reset: resetForgetOtp,
  } = useForm({
    mode: "all",
    reValidateMode: "onSubmit",
    resolver: yupResolver(otpSchema),
  });
  const {
    register: registerPasswordMatch,
    formState: { errors: errorPasswordMatch },
    handleSubmit: handleSubmitPasswordMatch,
  } = useForm({
    mode: "all",
    reValidateMode: "onSubmit",
    resolver: yupResolver(passwordMatchSchema),
  });

  const setFormProps = (headTitile, metaDescription) => {
    setHeadTitle(headTitile);
    setMetaDescription(metaDescription);
  };
  const handleInputChange = (event, data) => {
    setForm({ ...form, [data.name]: data.value });
  };
  const handleInputChangePassword = (event, data) => {
    setFormPasswordMatch({ ...formPasswordMatch, [data.name]: data.value });
  };
  useEffect(() => {
    setFormProps("Forget Password", "");
  }, []);

  const handleOtp = () => {
    setFormState(3);
    setFormProps("Enter Password", "");
  };

  const handleSubmit = (data, event) => {
    event.preventDefault();
    let newForm = {};
    newForm.email = emailValue;
    newForm.otp = form?.otp;
    newForm.password = formPasswordMatch.password;
    sendPostRequest(apiUrls.forgotPassword, { ...newForm }).then((response) => {
      if (response?.status === false || !notUndefined(response?.status)) {
        setFormState(2);
        response?.message &&
          showNotification(notificationType.ERROR, response.message);
      } else if (response?.status === true) {
        showNotification(
          notificationType.SUCCESS,
          response.message ? response.message : "Change Successfully "
        );
        setForm({});
        setFormPasswordMatch({});
        setOtpFormState(false);
        history.push(routesList.signIn);
      }
    });
  };

  /**
   * function backToPage
   * return current page status
   */

  const backToPage = () => {
    if (emailValue === "" && formStep === 1) {
      history.push(routesList.signIn);
      setEmailValue("");
    } else if (emailValue != "" && formStep === 1) {
      setEmailValue("");
      setOtpFormState(true);
    } else if (formStep === 1) {
      setOtpFormState(true);
      setEmailValue("");
    } else if (formStep === 3) {
      setOtpFormState(false);
      setFormState(2);
    } else if (formStep === 2) {
      setOtpFormState(true);
      setFormState(1);
      setEmailValue("");
    }
  };

  return (
    <div className="main">
      <div className="back_button clickable " onClick={backToPage}>
        <i className="icon-back-arrow"></i>
      </div>
      <Logo className="logo" src="images/logo.svg" />
      <div className="media_div top-img mt-3 d-block d-lg-none">
        <Image src="images/log-in-image.png" />
      </div>
      <div className="media_div top-img mt-3 d-block d-lg-none"></div>
      <div className="heading_block">
        <h1>{headTitle}</h1>
      </div>
      {formStep === 3 ? (
        <GlobalForm onSubmit={handleSubmitPasswordMatch(handleSubmit)}>
          <div className="form-group ">
            <label>Password</label>
            <Input
              name="password"
              id="password"
              className="form-control"
              type="password"
              placeholder="******"
              value={formPasswordMatch.password || ""}
              {...registerPasswordMatch("password")}
              onChange={(e, data) => {
                registerPasswordMatch("password").onChange(e),
                  handleInputChangePassword(e, data);
              }}
              errorType={manageUndefined(errorPasswordMatch?.password)}
              errorMessage={manageUndefined(
                errorPasswordMatch?.password?.message
              )}
            />
          </div>
          <div className="form-group mb-0">
            <label>Confirm Password</label>
            <Input
              name="confirm_password"
              id="confirm_password"
              className="form-control"
              type="password"
              placeholder="******"
              value={formPasswordMatch.confirm_password || ""}
              {...registerPasswordMatch("confirm_password")}
              onChange={(e, data) => {
                registerPasswordMatch("confirm_password").onChange(e),
                  handleInputChangePassword(e, data);
              }}
              errorType={manageUndefined(errorPasswordMatch?.confirm_password)}
              errorMessage={manageUndefined(
                errorPasswordMatch?.confirm_password?.message
              )}
            />
          </div>
          <GlobalSubmit className="btn login_signin">Submit</GlobalSubmit>
        </GlobalForm>
      ) : optFormState ? (
        <EmailVerification
          type={apiUrls.forgetPasswordSendOtp}
          setOuterState={(state) => {
            setOtpFormState(state);
          }}
          setOuterEmailState={(state) => {
            setEmailValue(state);
          }}
        />
      ) : emailValue || formStep === 2 ? (
        <GlobalForm
          id={"registrationFormEmail"}
          onSubmit={handleSubmitForgetOtp(handleOtp)}
        >
          <div className="form-group">
            <label>OTP</label>
            <Input
              name="otp"
              id="otp"
              className="form-control"
              type="text"
              value={form?.otp || ""}
              {...registerForgetOtp("otp")}
              onChange={(e, data) => {
                registerForgetOtp("otp").onChange(e),
                  handleInputChange(e, data);
              }}
              errorType={manageUndefined(errorForgetOtp?.otp)}
              errorMessage={manageUndefined(errorForgetOtp?.otp?.message)}
              placeholder="Enter Otp"
            />
          </div>
          <GlobalSubmit className="btn login_signin">Send OTP</GlobalSubmit>
        </GlobalForm>
      ) : (
        ""
      )}
    </div>
  );
};

export default ForgotPassword;
ForgotPassword.Layout = SignUpInLayout;
