import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactUsSchema } from '../../Validation/Validation';
import {
  GlobalForm,
  GlobalInput as Input,
  GlobalSubmit,
  GlobalImage as Image,
  GlobalTextarea  as TextArea
} from '../GlobalComponents';
import {
  apiUrls,
  getFormData,
  manageUndefined,
  notificationType,
  routesList,
  sendPostRequest,
  showNotification,
} from '../../common';
 
export const ContentSection = () => {

  const [form, setForm] = useState({});
  const [formEmail, setFormEmail] = useState({});
  const [headTitle, setHeadTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [optFormState, setOtpFormState] = useState(true);
  const history = useRouter();
  const [routingPath, setRoutingPath] = useState(routesList.homePage)

  const {
    register: registerContectUs,
    formState: { errors: errorContactUs, isValid: isValidUp },
    handleSubmit: handleSubmitContactUs,
    reset: resetContactUs,
    watch: watchUp,
    setValue,
    getValues
  } = useForm({
    mode: "all",
    reValidateMode: "onSubmit",
    resolver: yupResolver(ContactUsSchema),

  });
  const handleRegistration = (data, event) => {
    event.preventDefault();
    var params = getValues();
    sendPostRequest(apiUrls.contactUs, getFormData({ ...params })).then((response) => {
      if (response?.status === false) {
        // showNotification(notificationType.ERROR, response.message);
        setValue('email', emailValue)
      } else if (response?.status === true) {
        resetContactUs();
        setForm({});
        // history.push(routesList.homePage);
      }
    });
  };

  const handleInputChange = (event, data) => {
    setForm({ ...form, [data.name]: data.value });
  };
  
  return (
    <section className="content_setion">
      <div className="container">
        <div className="heading_block text-start text-lg-center">
          <h2>Contact U<span>s</span></h2>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="feature_box">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nunc a in morbi. Ac, aenean
                iaculis purus turpis est sollicitudin blandit ut leo.Lorem ipsum dolor sit amet, consectetur
              </p>
              <ul className="links_list">
                <li><a href="#"><i className="icon-call" /> +91-7248-485764</a></li>
                <li><a href="#"><i className="icon-message" /> info@eatstreetindia.com</a></li>
                <li><a href="#"><i className="icon-location" /> Pantnagar, Uttarakhand</a></li>
              </ul>
              <ul className="social">
                <li><a href="#"><i className="icon-google" /></a></li>
                <li><a href="#"><i className="icon-linkdin" /></a></li>
                <li><a href="#"><i className="icon-facebook" /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <GlobalForm onSubmit={handleSubmitContactUs(handleRegistration)}>
              <div className="mb-3">
                <label>Name</label>
                <Input
                  name="name"
                  id="name"
                  className="form-control"
                  type="text"
                  value={form.name || ""}
                  {...registerContectUs("name")}
                  onChange={(e, data) => {
                    registerContectUs("name").onChange(e),
                      handleInputChange(e, data);
                  }}
                  errorType={manageUndefined(errorContactUs?.name)}
                  errorMessage={manageUndefined(
                    errorContactUs?.name?.message
                  )}
                  placeholder="Enter Name" />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <Input
                  name="email"
                  id="email"
                  className="form-control"
                  type="email"
                  value={form.email || ""}
                  {...registerContectUs("email")}
                  onChange={(e, data) => {
                    registerContectUs("email").onChange(e),
                      handleInputChange(e, data);
                  }}
                  errorType={manageUndefined(errorContactUs?.email)}
                  errorMessage={manageUndefined(
                    errorContactUs?.email?.message
                  )}
                  placeholder="mail@abc.com" />
              </div>
              <div className="mb-3">
                <label>Phone</label>
                <Input
                  name="phone"
                  id="phone"
                  className="form-control"
                  type="text"
                  value={form.phone || ""}
                  {...registerContectUs("phone")}
                  onChange={(e, data) => {
                    registerContectUs("phone").onChange(e),
                      handleInputChange(e, data);
                  }}
                  errorType={manageUndefined(errorContactUs?.phone)}
                  errorMessage={manageUndefined(
                    errorContactUs?.phone?.message
                  )}
                  placeholder="9090909090" />
              </div>
              <div className="mb-3">
                <label>Message</label>
                
                <TextArea 
                name="message"
                id="message"
                className="form-control" 
                placeholder="Enter your message" 
                value={form.message || ""}
                  {...registerContectUs("message")}
                  onChange={(e, data) => {    
                    registerContectUs("message").onChange(e),
                      handleInputChange(e, data);
                  }}
                  errorType={manageUndefined(errorContactUs?.message)}
                  errorMessage={manageUndefined(
                    errorContactUs?.message?.message
                  )}
                defaultValue={""} />
              </div>
              <GlobalSubmit className="btn brown">
                Send
              </GlobalSubmit>
            </GlobalForm>

          </div>
        </div>
      </div>
    </section>
  )
}
