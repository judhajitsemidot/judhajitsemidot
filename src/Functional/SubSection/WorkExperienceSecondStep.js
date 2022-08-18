import React, { useEffect, useState } from 'react'
import { useDropzone } from "react-dropzone";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { getUserData } from '../../Authentication/Auth';
import { useSelector, useDispatch, connect } from "react-redux"
import { editProfile } from "../../../store/actions";
import {
  GlobalFile as File,
  GlobalFile,
  GlobalForm,
  GlobalImage as Image,
  GlobalInput as Input,
  GlobalModal,
  GlobalParagraph as Paragraph,
  GlobalSelect,
  GlobalSubmit,
} from '../../Components/GlobalComponents';
import { useRouter } from 'next/router';
import { apiUrls, formatStringToDateYYYYMMDD, genderOptions, getFormData, notificationType, notUndefined, routesList, sendGetRequest, sendPostRequest, sendPutRequest, showNotification, userTypeOptions } from '../../common';
import { ProfileFirstStepSchema, WorkExperienceSecondStepSchema } from './Validations';
import CustomDatePicker from '../../Components/GlobalComponents/CustomDatePicker';
import { manageUndefined } from '../../common';
import moment from 'moment';
const baseStyle = {
  cursor: "pointer",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export const WorkExperienceSecondStep = React.forwardRef(
  ({ formData, location, updateForm, ...rest }, ref) => {
    const [startDate, setStartDate] = useState(new Date());
    const [form, setForm] = useState({});
    const [categories,setCategories] = useState([]);
    const [subCategories,setSubCategories] = useState([]);
    const {
      register,
      unregister,
      control,
      clearErrors,
      formState: { errors },
      handleSubmit,
      watch,
      getValues,
      setValue,
      reset,
      trigger,
    } = useForm({
      mode: "all",
      reValidateMode: "onSubmit",
      resolver: yupResolver(WorkExperienceSecondStepSchema),
    });
    const dispatch = useDispatch()
const history = useRouter()
useEffect(()=>{
 setValue("condition",
 formData.registered_as
 ) ;
   sendGetRequest(apiUrls.categoriesUserexp, getFormData({ ...form })).then((response) => {
        if (response?.status === false || !notUndefined(response?.status)) {
      
        } else if (response?.status === true) {
          var Categories =[];
          response?.data.map((d)=>{
            Categories.push({label:d.name,value:d.code})
          })
           setCategories(Categories)
        }
      });
},[])
 
    const handleInputChange = (event, data) => {
      setForm({ ...form, [data.name]: data.value });
    };
    const handleSelectChange = (event, name) => {
      setForm({ ...form, [name]: event?.value || "" });
    };

    const SubcategoryList = (val)=>{
      sendGetRequest(apiUrls.categoriesUserexp, getFormData({ val:val})).then((response) => {
        if (response?.status === false || !notUndefined(response?.status)) {
      
        } else if (response?.status === true) {
          var Categories =[];
          response?.data.map((d)=>{
            Categories.push({label:d.name,value:d.code})
          })
           setCategories(Categories)
        }
      });
    }

    const handleWorkExperience = (dataVal,event) => {
      event.preventDefault();
      var values = getValues();
        dispatch(editProfile({values,formData}))
    }

 
    return (
      <section className="contant_form_setion pt-0">
        <div className="container">
          <div className="inner-form">
            <div className="row justify-content-center">
              <div className="col-lg-8">
              <GlobalForm
                    className="form-horizontal"
                    id="bookingStepFirstForm"
                    onSubmit={handleSubmit(handleWorkExperience)}
                  >
                  <div className="row">
                    <div className="col-lg-12"><div className="heading_block"><h2>Work Experience 1</h2></div></div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <Input
                          label="Employer"
                          id="current_organization"
                          name="current_organization"
                          type="text"
                          className="form-control"
                          placeholder="Enter Employeer"
                          value={form?.current_organization || ""}
                          {...register("current_organization")}
                          onChange={(event, data) => {
                            register("current_organization").onChange(event),
                              handleInputChange(event, data);
                          }}
                          errorType={manageUndefined(errors?.current_organization)}
                          errorMessage={manageUndefined(
                            errors?.current_organization?.message
                          )}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <Input
                          label="Job Title"
                          id="designation"
                          name="designation"
                          type="text"
                          className="form-control"
                          placeholder="Enter Job Title"
                          value={form?.designation || ""}
                          {...register("designation")}
                          onChange={(event, data) => {
                            register("designation").onChange(event),
                              handleInputChange(event, data);
                          }}
                          errorType={manageUndefined(errors?.designation)}
                          errorMessage={manageUndefined(
                            errors?.designation?.message
                          )}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label>Category</label>
                        <Controller
                            className="form-control"
                            id={`category`}
                            name="category"
                            control={control}
                            render={({ field }) => (
                              <GlobalSelect
                                style={{ "padding": "9px 0px" }}
                                isClearable={true}
                                isSearchable={true}
                                {...field}
                                instanceId={"d"}
                                options={categories}
                                value={field.value}
                                onChange={(e) => {
                                  field.onChange(e);
                                  SubcategoryList(e.value);
                                }}
                                placeholder={"Select Category"}
                              />
                            )}
                          />

                          {errors?.category &&
                            (errors?.category !== "" ||
                              errors?.category !== "undefined") && (
                              <label className="error_customized" style={{ "color": "red" }}>
                                {errors?.category?.message}
                              </label>
                            )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label>Subcategory</label>
                        <Controller
                            className="form-control"
                            id={`subcategories`}
                            name="subcategories"
                            control={control}
                            render={({ field }) => (
                              <GlobalSelect
                                style={{ "padding": "9px 0px" }}
                                isClearable={true}
                                isSearchable={true}
                                isMulti={true}
                                {...field}
                                instanceId={"d"}
                                options={categories}
                                value={field.value}
                                onChange={(e) => {
                                  field.onChange(e);
                                  //  SubcategoryList(e.value);
                                }}
                                placeholder={"Select SubCategories"}
                              />
                            )}
                          />
                          {errors?.subcategories &&
                            (errors?.subcategories !== "" ||
                              errors?.subcategories !== "undefined") && (
                              <label className="error_customized" style={{ "color": "red" }}>
                                {errors?.subcategories?.message}
                              </label>
                            )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label>Skills</label>
                        <Controller
                            className="form-control"
                            id={`skills`}
                            name="skills"
                            control={control}
                            render={({ field }) => (
                              <GlobalSelect
                                style={{ "padding": "9px 0px" }}
                                isClearable={true}
                                isSearchable={true}
                                isMulti={true}
                                {...field}
                                instanceId={"d"}
                                options={categories}
                                value={field.value}
                                onChange={(e) => {
                                  field.onChange(e);
                                 }}
                                placeholder={"Select Skill"}
                              />
                            )}
                          />

                          {errors?.skills &&
                            (errors?.skills?.value !== "" ||
                              errors?.skills?.value !== "undefined") && (
                              <label className="error_customized" style={{ "color": "red" }}>
                                {errors?.skills?.value?.message}
                              </label>
                            )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <Input
                          label="Per hour rate in $"
                          id="charge_per_hour"
                          name="charge_per_hour"
                          type="text"
                          className="form-control"
                          placeholder="Enter Employeer"
                          value={form?.charge_per_hour || ""}
                          {...register("charge_per_hour" )}
                          onChange={(event, data) => {
                            register("charge_per_hour").onChange(event),
                              handleInputChange(event, data);
                          }}
                          errorType={manageUndefined(errors?.charge_per_hour)}
                          errorMessage={manageUndefined(
                            errors?.charge_per_hour?.message
                          )}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                         <Input
                          label="Experience (In months)"
                          id="experience"
                          name="experience"
                          type="text"
                          className="form-control"
                          placeholder="Enter Experience"
                          value={form?.experience || ""}
                          {...register("experience")}
                          onChange={(event, data) => {
                            register("experience").onChange(event),
                              handleInputChange(event, data);
                          }}
                          errorType={manageUndefined(errors?.experience)}
                          errorMessage={manageUndefined(
                            errors?.experience?.message
                          )}
                        />
 
                      </div>
                    </div>
 
                    <div className="col-lg-12">
                      <div className="form-group check-group mb-0 d-flex justify-content-between">
                        <div className="form-check">
                          <Input
                                 id="is_negotiable"
                                 name="is_negotiable"
                                 type="checkbox" 
                                 className="form-check-input"
                                 {...register("is_negotiable")}
                                 checked={form?.is_negotiable}
                                  onChange={(event, data) => {
                                    register("is_negotiable").onChange(event),
                                   handleInputChange(event, data);
                                 }}
                          />
                          <label className="form-check-label" htmlFor="flexCheckDefault">Is negotiable</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-start justify-content-lg-end">
                      <GlobalSubmit className="btn brown" >Save and Continue</GlobalSubmit>
                    </div>
                  </div>
                </GlobalForm>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  });

WorkExperienceSecondStep.displayName = "WorkExperienceSecondStep";
const mapStateToProps = ()=>{

}
const mapDispatchToProps =()=>{
  
}
connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(WorkExperienceSecondStep)

