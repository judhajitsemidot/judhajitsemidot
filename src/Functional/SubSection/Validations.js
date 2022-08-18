import { object, string, array,boolean } from "yup";
import {
  commonFields,
  decimalOnly,
  indianMobileNumber,
  lettersOnly,
  maxSixDigits,
  maxTenDigits,
  minSixDigits,
  minTenDigits,
  numbersOnly,
  numbersWithDecimal,
  rSpace,
  toLower,
  validationErrors,
} from "../../common";


export const ProfileFirstStepSchema = object().shape({
  first_name: string()
    .required(validationErrors.PLEASE_ENTER + commonFields.FIRST_NAME)
    .test(validationErrors.ONLY_STRING, validationErrors.ONLY_STRING, (value) =>
      lettersOnly(value)
    ),
  last_name: string()
    .required(validationErrors.PLEASE_ENTER + commonFields.LAST_NAME)
    .test(validationErrors.ONLY_STRING, validationErrors.ONLY_STRING, (value) =>
      lettersOnly(value)
    ),
  username: string()
    .required(validationErrors.PLEASE_ENTER + commonFields.USER_NAME)
    .test(validationErrors.ONLY_STRING, validationErrors.ONLY_STRING, (value) =>
      lettersOnly(value)
    ),
  user_type: object().shape({
    value: string()
      .required("User type is required")
  }),
  gender: object().shape({
    value: string()
      .required("Gender is required")
  }),
  location: string()
    .required(validationErrors.PLEASE_ENTER + commonFields.COUNTRY)
});

export const WorkExperienceSecondStepSchema = object().shape({
  condition:string()
  .required(validationErrors.PLEASE_ENTER  + commonFields.VALUE),
   current_organization:string().when('condition', {
    is: (condition)=> condition !="1",
    then: string().required(validationErrors.PLEASE_ENTER + commonFields.Employer)
  }),
  designation:string().when('condition', {
    is: (condition)=> condition !="1",
    then: string().required(validationErrors.PLEASE_ENTER + commonFields.Designation)
  }),
  category: object().when('condition', {
    is: (condition)=> condition !="1",
    then: object().required(validationErrors.PLEASE_ENTER + commonFields.Category)
  }),
  charge_per_hour:string().when('condition', {
    is: (condition)=> condition !="1",
    then: string().required(validationErrors.PLEASE_ENTER + commonFields.ChargesUser).test(validationErrors.ONLY_NUMBERS, validationErrors.ONLY_NUMBERS, (value) =>
    numbersWithDecimal(value)
   ),
    otherwise:string()
    .test(validationErrors.ONLY_NUMBERS, validationErrors.ONLY_NUMBERS, (value) =>
     numbersWithDecimal(value)
    )
  }),
  experience:string()
  .test(validationErrors.ONLY_NUMBERS, validationErrors.ONLY_NUMBERS, (value) =>
   numbersWithDecimal(value)
  )
});



