import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch, connect } from "react-redux";
// actions

import {
  GlobalForm,
  GlobalInput as Input,
  GlobalSubmit,
} from "../../src/Components/GlobalComponents";
import {
  apiUrls,
  manageUndefined,
  notificationType,
  processDecryptCookie,
  removeCookie,
  routesList,
  sendPostRequest,
  showNotification,
  valuesType,
} from "../../src/common";
import { Auth } from "../../src/Authentication/Auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../src/Validation/Validation";
import { useForm } from "react-hook-form";
import { SignUpInLayout } from "../../layouts";
import { Logo } from "../../src/Components/CommonSections";
import { LinkedIn } from "../../src/Components/CommonSections";
import { loginUser } from "../../store/actions";
const Login = (props) => {
  const [form, setForm] = useState({});
  const [headTitle, setHeadTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [memoryRoute, setMemoryRoute] = useState("");
  const history = useRouter();
  const wrapperRef = useRef();
  const {
    register: registerSignIn,
    formState: { errors: errorSignIn },
    handleSubmit: handleSubmitSignIn,
    reset: resetSignIn,
  } = useForm({
    mode: "all",
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useDispatch();

  const { error } = useSelector((state) => ({
    error: state.Login.error,
  }));

  useEffect(() => {
    setFormProps(
      "Login to your Account",
      "See what is going on with your business"
    );
    let previousRoute = processDecryptCookie("memory_route", valuesType.VALUE);
    if (previousRoute !== "") {
      setMemoryRoute(previousRoute);
    }
  }, []);
  const setFormProps = (headTitile, metaDescription) => {
    setHeadTitle(headTitile);
    setMetaDescription(metaDescription);
  };

  const handleLogin = (data, event) => {
    event.preventDefault();
    let newForm = {};
    newForm.email = form.email;
    newForm.password = form.password;
    newForm.remember_me = form.remember_me;
    dispatch(loginUser(newForm, history));
  };

  const handleInputChange = (event, data) => {
    setForm({ ...form, [data.name]: data.value });
  };

  const backtToPage = () => {
    history.push(routesList.homePage);
  };
  return (
    <>
      <div className="main">
        <div className="back_button clickable" onClick={backtToPage}>
          <i className="icon-back-arrow"></i>
        </div>
        <Logo className="logo" src="images/logo.svg" />
        <div className="media_div top-img mt-3 d-block d-lg-none">
          <img src="images/log-in-image.png" />
        </div>
        <div className="heading_block">
          <h1>{headTitle}</h1>
          <p>{metaDescription}</p>
        </div>
        <LinkedIn />
        <div className="divider">
          <span>------------- or Sign in with Email ------------- </span>
        </div>
        <GlobalForm id={"loginForm"} onSubmit={handleSubmitSignIn(handleLogin)}>
          <div className="form-group">
            <label>Email</label>
            <Input
              type="email"
              className="form-control"
              placeholder="Email"
              id="email"
              name="email"
              value={form.email || ""}
              {...registerSignIn("email")}
              onChange={(e, data) => {
                registerSignIn("email").onChange(e), handleInputChange(e, data);
              }}
              errorType={manageUndefined(errorSignIn?.email)}
              errorMessage={manageUndefined(errorSignIn?.email?.message)}
            />
          </div>
          <div className="form-group mb-0">
            <label>Password</label>
            <Input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              name="password"
              value={form.password || ""}
              {...registerSignIn("password")}
              onChange={(e, data) => {
                registerSignIn("password").onChange(e),
                  handleInputChange(e, data);
              }}
              errorType={manageUndefined(errorSignIn?.password)}
              errorMessage={manageUndefined(errorSignIn?.password?.message)}
            />
          </div>
          <div className="form-group check-group mb-0 d-flex justify-content-between">
            <div className="form-check">
              <Input
                type="checkbox"
                className="custom-control-input"
                id="remember_me"
                name="remember_me"
                value={form.remember_me || ""}
                {...registerSignIn("remember_me")}
                onChange={(e, data) => {
                  registerSignIn("remember_me").onChange(e),
                    handleInputChange(e, data);
                }}
                errorType={manageUndefined(errorSignIn?.remember_me)}
                errorMessage={manageUndefined(
                  errorSignIn?.remember_me?.message
                )}
              />{" "}
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember Me
              </label>
            </div>
            <Link href={routesList.forgotPassword}>
              <a className="links">Forgot Password?</a>
            </Link>
          </div>
          <GlobalSubmit className="btn login_signin">Login</GlobalSubmit>
        </GlobalForm>

        <div className="text-center not-register">
          <p>
            Not Registered Yet? &nbsp;
            <Link href={routesList.signUp}>
              <a className="links">Create an account</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
Login.Layout = SignUpInLayout;
const mapStateToProps = (state) => ({
  data: state.data,
});

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
