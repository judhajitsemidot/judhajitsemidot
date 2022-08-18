import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../src/Validation/Validation";
import {
  GlobalForm,
  GlobalInput as Input,
  GlobalSubmit,
  GlobalImage as Image,
} from "../../src/Components/GlobalComponents";
import {
  apiUrls,
  getFormData,
  manageUndefined,
  notificationType,
  routesList,
  sendPostRequest,
  showNotification,
} from "../../src/common";
import { EmailVerification } from "../../src/Components/SubSection";
import { SignUpInLayout } from "../../layouts";
import { LinkedIn, Logo } from "../../src/Components/CommonSections";

const SignUp = () => {
  const [form, setForm] = useState({});
  const [formEmail, setFormEmail] = useState({});
  const [headTitle, setHeadTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [optFormState, setOtpFormState] = useState(true);
  const history = useRouter();
  const [routingPath, setRoutingPath] = useState(routesList.homePage);

  const {
    register: registerSignUp,
    formState: { errors: errorSignUp, isValid: isValidUp },
    handleSubmit: handleSubmitSignUp,
    reset: resetSignUp,
    watch: watchUp,
    setValue,
  } = useForm({
    mode: "all",
    reValidateMode: "onSubmit",
    resolver: yupResolver(registerSchema),
  });

  const [emailValue, setEmailValue] = useState("");

  const setFormProps = (headTitile, metaDescription) => {
    setHeadTitle(headTitile);
    setMetaDescription(metaDescription);
  };

  useEffect(() => {
    setFormProps(
      "Sign Up your Account",
      "See what is going on with your business"
    );
  }, []);

  const handleInputChange = (event, data) => {
    setForm({ ...form, [data.name]: data.value });
  };

  const handleRegistration = (data, event) => {
    event.preventDefault();
    let newForm = {};
    newForm.email = emailValue;
    newForm.password = form.password;
    newForm.confirm_password = form.confirm_password;
    newForm.otp = form.otp;

    sendPostRequest(apiUrls.userRegistration, getFormData({ ...newForm })).then(
      (response) => {
        if (response?.status === false) {
          showNotification(notificationType.ERROR, response.message);
          setValue("email", emailValue);
        } else if (response?.status === true) {
          resetSignUp();
          setForm({});
          history.push(routesList.signIn);
        }
      }
    );
  };
  const backtToPage = () => {
    if (optFormState) {
      history.push(routingPath);
    } else {
      setOtpFormState(true);
    }
  };

  return (
    <div className="main">
      <div className="back_button clickable" onClick={backtToPage}>
        <i className="icon-back-arrow"></i>
      </div>
      <Logo className="logo" src="images/logo.svg" />
      <div className="media_div top-img mt-3 d-block d-lg-none">
        <Image src="images/log-in-image.png" />
      </div>
      <div className="heading_block">
        <h1>{headTitle}</h1>
        <p>{metaDescription}</p>
      </div>
      <LinkedIn />
      <div className="divider">
        <span>------------- or Sign up with Email ------------- </span>
      </div>
      {optFormState ? (
        <EmailVerification
          type={apiUrls.generateOtp}
          setOuterState={(state) => {
            setOtpFormState(state);
          }}
          setOuterEmailState={(state) => {
            setEmailValue(state);
          }}
        />
      ) : (
        <GlobalForm onSubmit={handleSubmitSignUp(handleRegistration)}>
          <div className="form-group">
            <label>Email</label>
            <Input
              name="email"
              id="email"
              className="form-control"
              type="email"
              value={emailValue}
              {...registerSignUp("email")}
              onChange={(e, data) => {
                registerSignUp("email").onChange(e), handleInputChange(e, data);
              }}
              errorType={manageUndefined(errorSignUp?.email)}
              errorMessage={manageUndefined(errorSignUp?.email?.message)}
              placeholder="mail@abc.com"
            />
          </div>
          <div className="form-group">
            <label>Enter OTP</label>
            <Input
              name="email"
              id="email"
              className="form-control"
              type="text"
              value={form.otp || ""}
              {...registerSignUp("otp")}
              onChange={(e, data) => {
                registerSignUp("otp").onChange(e), handleInputChange(e, data);
              }}
              errorType={manageUndefined(errorSignUp?.otp)}
              errorMessage={manageUndefined(errorSignUp?.otp?.message)}
              placeholder="Enter otp"
            />
          </div>

          <div className="form-group ">
            <label>Password</label>
            <Input
              name="password"
              id="password"
              className="form-control"
              type="password"
              placeholder="******"
              value={form.password || ""}
              {...registerSignUp("password")}
              onChange={(e, data) => {
                registerSignUp("password").onChange(e),
                  handleInputChange(e, data);
              }}
              errorType={manageUndefined(errorSignUp?.password)}
              errorMessage={manageUndefined(errorSignUp?.password?.message)}
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
              value={form.confirm_password || ""}
              {...registerSignUp("confirm_password")}
              onChange={(e, data) => {
                registerSignUp("confirm_password").onChange(e),
                  handleInputChange(e, data);
              }}
              errorType={manageUndefined(errorSignUp?.confirm_password)}
              errorMessage={manageUndefined(
                errorSignUp?.confirm_password?.message
              )}
            />
          </div>

          <div className="form-group check-group mb-0 d-flex justify-content-between">
            <div className="form-check">
              <Input
                type="checkbox"
                className="custom-control-input"
                id="termsCondition"
                name="termsCondition"
                value={form.termsCondition || ""}
                {...registerSignUp("termsCondition")}
                onChange={(e, data) => {
                  registerSignUp("termsCondition").onChange(e),
                    handleInputChange(e, data);
                }}
              />{" "}
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Are you agree our terms and conditions ?
              </label>
              {manageUndefined(errorSignUp?.termsCondition) &&
                (manageUndefined(errorSignUp?.termsCondition) !== "" ||
                  manageUndefined(errorSignUp?.termsCondition) !==
                    "undefined") && (
                  <span className="error-feedback d-block">
                    {errorSignUp?.termsCondition?.message}
                  </span>
                )}
            </div>
          </div>
          <GlobalSubmit className="btn login_signin">Signup</GlobalSubmit>
        </GlobalForm>
      )}

      <div className="text-center not-register">
        <p>
          Already Registered?
          <Link href={routesList.signIn}>
            <a className="links">Sign in Now</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
SignUp.Layout = SignUpInLayout;
