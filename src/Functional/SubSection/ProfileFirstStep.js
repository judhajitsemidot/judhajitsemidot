import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import {
  GlobalFile as File,
  GlobalForm,
  GlobalInput as Input,
  GlobalSelect,
  GlobalSubmit,
} from '../../Components/GlobalComponents';
import { genderOptions, notificationType, showNotification, userTypeOptions } from '../../common';
import { ProfileFirstStepSchema } from './Validations';
import CustomDatePicker from '../../Components/GlobalComponents/CustomDatePicker';
import { manageUndefined } from '../../common';

export const ProfileFirstStep = React.forwardRef(
  ({ formData, location, updateForm, ...rest }, ref) => {
    const [form, setForm] = useState({});
    const {
      register,
      control,
      formState: { errors },
      handleSubmit,
      watch,
      getValues,
      setValue,

    } = useForm({
      defaultValues: {
        registered_as: "0",
        first_name: "",
      },
      mode: "all",
      reValidateMode: "onSubmit",
      resolver: yupResolver(ProfileFirstStepSchema),
    });
    const handleInputChange = (event, data) => {
      setForm({ ...form, [data.name]: data.value });
    };

    const handleSelectChange = (event, name) => {
      setForm({ ...form, [name]: event?.value || "" });
    };


    const handleCollectionAddressSubmit = (data, event) => {
      var values = getValues();
      event.preventDefault();
      updateForm({ ...values, step: 2 });
      if (values) {
        showNotification(notificationType.SUCCESS, "Profile Detail successfully done!!");
      }
    }
    return (
      <>
        <section className="contant_form_setion pt-0">
          <div className="container">
            <div className="inner-form">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <GlobalForm
                    className="form-horizontal"
                    id="bookingStepFirstForm"
                    onSubmit={handleSubmit(handleCollectionAddressSubmit)}

                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <Input
                            label="First Name"
                            id="first_name"
                            name="first_name"
                            type="text"
                            className="form-control"
                            placeholder="Enter First Name"
                            value={form?.first_name || ""}
                            {...register("first_name")}
                            onChange={(event, data) => {
                              register("first_name").onChange(event),
                                handleInputChange(event, data);
                            }}
                            errorType={manageUndefined(errors?.first_name)}
                            errorMessage={manageUndefined(
                              errors?.first_name?.message
                            )}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <Input
                            label="Last Name"
                            id="last_name"
                            name="last_name"
                            type="text"
                            className="form-control"
                            placeholder="Enter Last Name"
                            value={form.last_name}
                            readOnly={form.isLocked}
                            {...register("last_name")}
                            onChange={(event, data) => {
                              register("last_name").onChange(event),
                                handleInputChange(event, data);
                            }}
                            errorType={manageUndefined(errors?.last_name)}
                            errorMessage={manageUndefined(errors?.last_name?.message)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <Input
                            label="Username"
                            id="username"
                            name="username"
                            type="text"
                            className="form-control"
                            placeholder="Enter Last Name"
                            value={form.username}
                            readOnly={form.isLocked}
                            {...register("username")}
                            onChange={(event, data) => {
                              register("username").onChange(event),
                                handleInputChange(event, data);
                            }}
                            errorType={manageUndefined(errors?.username)}
                            errorMessage={manageUndefined(errors?.username?.message)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label>Gender</label>
                          <Controller
                            className="form-control"
                            id={`gender`}
                            name="gender"
                            control={control}
                            render={({ field }) => (
                              <GlobalSelect
                                style={{ "padding": "9px 0px" }}
 
                                {...field}
                                instanceId={"d"}
                                options={genderOptions}
                                value={field.value}
                                onChange={(e) => {
                                  field.onChange(e);
                                }}
                                placeholder={"Select Contact Type"}
                              />
                            )}
                          />
                          {errors?.gender &&
                            (errors?.gender?.value !== "" ||
                              errors?.gender?.value !== "undefined") && (
                              <label className="error_customized" style={{ "color": "red" }}>
                                {errors?.gender?.value?.message}
                              </label>
                            )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label>Date of birth</label>
                          <Controller
                            control={control}
                            name="dob"
                            render={({
                              field: { onChange, onBlur, value, name, ref, event }
                            }

                            ) => (
                              <>
                                <CustomDatePicker
                                  id="dob"
                                  className="form-control form-select"
                                  selected={value ? value : new Date()}
                                  onChange={onChange}
                                  dateFormat={'yyyy/MM/dd'}
                                  value={value}
                                  name={name}
                                  ref={ref}
                                  onBlur={onBlur}
                                  maxDate={new Date()}
                                />
                              </>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <Input
                          label="Country"
                          id="location"
                          name="location"
                          type="text"
                          className="form-control"
                          placeholder="Enter Country"
                          value={form.location}
                          {...register("location")}
                          onChange={(event, data) => {
                            register("location").onChange(event),
                              handleInputChange(event, data);
                          }}
                          errorType={manageUndefined(errors?.location)}
                          errorMessage={manageUndefined(errors?.location?.message)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label>Enroll as</label>
                        <Controller
                          id={`user_type`}
                          name="user_type"
                          control={control}
                          render={({ field }) => (
                            <GlobalSelect
                              isClearable={true}
                              isSearchable={true}
                              {...field}
                              instanceId={"dd"}
                              options={userTypeOptions}
                              value={field.value}
                              onChange={(e) => {
                                field.onChange(e);
                                handleSelectChange(e, "gender");
                              }}
                              placeholder={"Select Contact Type"}
                            />
                          )}
                        />
                        {errors?.gender &&
                          (errors?.gender?.value !== "" ||
                            errors?.gender?.value !== "undefined") && (
                            <label className="error_customized" style={{ "color": "red" }}>
                              {errors?.gender?.value.message}
                            </label>
                          )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label htmlFor="input_file">Upload your recent Resume or CV</label>
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          className="file_input"
                          {...register("resume")}
                        />
                        <label className="upload_box form-control" htmlFor="resume">
                          <i className="icon-file-upload" />
                          <p id="file_name">{"Upload your file"} </p>
                        </label>
                        <p className="file_type">File types: PDF, DOCX</p>
                      </div>
                    </div>
                    <div className="col-lg-12 register_div">
                      <div className="mb-3">
                        <label>Register as</label>
                        <div className="form-checkk">
                          <Input
                            type="radio"
                            className="form-check-input"
                            name="registered_as"
                            id="registered_as0"
                            value="0"
                            {...register("registered_as")}
                          />
                          <label className="form-check-label" htmlFor="register1">Talent</label>
                        </div>
                        <div className="form-checkk">
                          <Input
                            className="form-check-input"
                            type="radio"
                            name="registered_as"
                            id="registered_as1"
                            value="1"
                            {...register("registered_as")}

                          />
                          <label className="form-check-label" htmlFor="register2">Client</label>
                        </div>
                        <div className="form-checkk">

                          <Input
                            className="form-check-input"
                            type="radio"
                            name="registered_as"
                            id="registered_as1"
                            value="2"
                            {...register("registered_as")}
                          />
                          <label className="form-check-label" htmlFor="register3">Both</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-start justify-content-lg-end">
                      <GlobalSubmit className="btn brown">
                        Save and Continue
                      </GlobalSubmit>
                    </div>
                  </GlobalForm>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  });
ProfileFirstStep.displayName = "ProfileFirstStep";
