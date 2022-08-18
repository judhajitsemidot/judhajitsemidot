import * as yup from "yup";
import {
  bothSideSpace,
  indianMobileNumber,
  lettersOnly,
  maxTenDigits,
  minTenDigits,
  numbersOnly,
  rSpace,
  strongPassword,
  commonFields,
  validationErrors,
  nameValue,
  fileSize,
  fileType,
  atLeastOne,
  selectValue,
  fileSizeStore,
  isUndefined,
} from "../common";

export const UserValidation = () => { };

export const registerSchema = yup.object().shape({
  otp: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.OTP),
  // email: yup
  //   .string()
  //   .email()
  //   .required(validationErrors.PLEASE_ENTER + commonFields.EMAIL),
  
    password: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.PASSWORD
    )
    .min(8)
    .max(18)
    .test(
      validationErrors.STRONG_PASSWORD,
      validationErrors.STRONG_PASSWORD,
      (value) => strongPassword(value)
    ),/*  */
  confirm_password: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.PASSWORD
    )
    .oneOf([yup.ref("password")], validationErrors.SAME_PASSWORD),
  termsCondition: yup
    .boolean()
    .oneOf([true], validationErrors.TERMS_AND_CONDITION),
});

export const registerEmailSchema = yup.object().shape({

  email: yup
    .string()
    .email()
    .required(validationErrors.PLEASE_ENTER + commonFields.EMAIL),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(validationErrors.PLEASE_ENTER + commonFields.EMAIL),
  password: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.PASSWORD
    )
    .min(8)
    .max(32),
});

export const otpSchema = yup.object().shape({
  otp: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.OTP),
});
export const passwordMatchSchema = yup.object().shape({
   password: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.PASSWORD
    )
    .min(8)
    .max(18)
    .test(
      validationErrors.STRONG_PASSWORD,
      validationErrors.STRONG_PASSWORD,
      (value) => strongPassword(value)
    ),/*  */
  confirm_password: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.PASSWORD
    )
    .oneOf([yup.ref("password")], validationErrors.SAME_PASSWORD),
});
export const forgotPasswordSchema = yup.object().shape({
  otp: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.OTP),

    password: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.PASSWORD
    )
    .min(8)
    .max(18)
    .test(
      validationErrors.STRONG_PASSWORD,
      validationErrors.STRONG_PASSWORD,
      (value) => strongPassword(value)
    ),/*  */
  confirm_password: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.PASSWORD
    )
    .oneOf([yup.ref("password")], validationErrors.SAME_PASSWORD),
});


export const ChangePasswordSchema = yup.object().shape({
  old_password: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.PASSWORD),
  new_password: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.PASSWORD),
  confirm_password: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.PASSWORD)
    .oneOf([yup.ref("new_password")], validationErrors.SAME_PASSWORD),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER +
      commonFields.THE +
      commonFields.NEW +
      commonFields.PASSWORD
    )
    .min(8)
    .max(18)
    .test(
      validationErrors.STRONG_PASSWORD,
      validationErrors.STRONG_PASSWORD,
      (value) => strongPassword(value)
    ),
  confirmPassword: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER +
      commonFields.THE +
      commonFields.NEW +
      commonFields.PASSWORD +
      bothSideSpace(commonFields.TO) +
      commonFields.CONFIRM
    )
    .oneOf([yup.ref("password")], validationErrors.SAME_PASSWORD),
});

export const otpVerifySchema = yup.object().shape({
  otp_code: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.OTP)
    .min(1)
    .max(4)
    .test(
      validationErrors.ONLY_NUMBERS,
      validationErrors.ONLY_NUMBERS,
      (value) => numbersOnly(value)
    ),
});

export const updateProfileSchema = yup.object().shape({
  first_name: yup.string().when("profileFlag", {
    is: (profileFlag) => profileFlag && profileFlag.toString() === "name",
    then: yup
      .string()
      .required(validationErrors.PLEASE_ENTER + commonFields.FIRST_NAME)
      .test(
        validationErrors.ONLY_STRING,
        validationErrors.ONLY_STRING,
        (value) => lettersOnly(value)
      ),
  }),
  last_name: yup.string().when("profileFlag", {
    is: (profileFlag) => profileFlag && profileFlag === "name",
    then: yup
      .string()
      .required(validationErrors.PLEASE_ENTER + commonFields.LAST_NAME)
      .test(
        validationErrors.ONLY_STRING,
        validationErrors.ONLY_STRING,
        (value) => lettersOnly(value)
      ),
  }),
  email: yup.string().when("profileFlag", {
    is: (profileFlag) => profileFlag && profileFlag.toString() === "email",
    then: yup
      .string()
      .email()
      .required(validationErrors.PLEASE_ENTER + commonFields.EMAIL),
  }),
  mobile_number: yup.string().when("profileFlag", {
    is: (profileFlag) =>
      profileFlag &&
      (profileFlag.toString() === "new_number" ||
        profileFlag.toString() === "update_number"),
    then: yup
      .string()
      .required(validationErrors.PLEASE_ENTER + commonFields.MOBILE_NUMBER)
      .test("digitsOnly", validationErrors.ONLY_NUMBERS, (value) =>
        numbersOnly(value)
      )
      .test("minTen", validationErrors.MINIMUM_TEN_DIGITS, (value) =>
        minTenDigits(value)
      )
      .test("maxTen", validationErrors.MAXIMUM_TEN_DIGITS, (value) =>
        maxTenDigits(value)
      )
      .test(
        validationErrors.INDIAN_MOBILE_NUMBER,
        validationErrors.INDIAN_MOBILE_NUMBER,
        (value) => indianMobileNumber(value)
      ),
  }),
});

export const changePasswordSchema = yup.object().shape({
  old_password: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER +
      commonFields.THE +
      commonFields.OLD +
      commonFields.PASSWORD
    ),
  new_password: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER +
      commonFields.THE +
      commonFields.NEW +
      commonFields.PASSWORD
    )
    .min(8)
    .max(18)
    .test(
      validationErrors.STRONG_PASSWORD,
      validationErrors.STRONG_PASSWORD,
      (value) => strongPassword(value)
    ),
  confirm_password: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER +
      commonFields.THE +
      commonFields.NEW +
      commonFields.PASSWORD +
      bothSideSpace(commonFields.TO) +
      commonFields.CONFIRM
    )
    .oneOf([yup.ref("new_password")], validationErrors.SAME_PASSWORD),
});

export const verifyNumberSchema = yup.object().shape({
  otp: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.OTP
    ),
});

export const ContactUsSchema = yup.object().shape({
  name: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + rSpace("Your") + commonFields.NAME
    )
    .test(validationErrors.ONLY_STRING, validationErrors.ONLY_STRING, (value) =>
      lettersOnly(value)
    ),
  email: yup
    .string()
    .email()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + rSpace("Email")
    ),
  phone: yup
    .string()
    .test("digitsOnly", validationErrors.ONLY_NUMBERS, (value) =>
      numbersOnly(value)
    )
    .test("minTen", validationErrors.MINIMUM_TEN_DIGITS, (value) =>
      minTenDigits(value)
    )
    .test("maxTen", validationErrors.MAXIMUM_TEN_DIGITS, (value) =>
      maxTenDigits(value)
    )
    .test(
      validationErrors.INDIAN_MOBILE_NUMBER,
      validationErrors.INDIAN_MOBILE_NUMBER,
      (value) => indianMobileNumber(value)
    ),

  message: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + rSpace("Message")
    ),
});

export const addAddressSchema = yup.object().shape({
  contact_name: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER +
      commonFields.THE +
      rSpace("Contact") +
      commonFields.NAME
    )
    .test(validationErrors.ONLY_STRING, validationErrors.ONLY_STRING, (value) =>
      lettersOnly(value)
    ),
  phone_number: yup
    .string()
    .test("digitsOnly", validationErrors.ONLY_NUMBERS, (value) =>
      numbersOnly(value)
    )
    .test("minTen", validationErrors.MINIMUM_TEN_DIGITS, (value) =>
      minTenDigits(value)
    )
    .test("maxTen", validationErrors.MAXIMUM_TEN_DIGITS, (value) =>
      maxTenDigits(value)
    )
    .test(
      validationErrors.INDIAN_MOBILE_NUMBER,
      validationErrors.INDIAN_MOBILE_NUMBER,
      (value) => indianMobileNumber(value)
    ),
  street: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.STREET
    ),
  postal_code: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.POSTALCODE
    )
    .min(6)
    .max(6),
  city: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.CITY
    ),
  state: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.STATE
    ),
  country: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.COUNTRY
    ),
  type: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.TYPE
    ),
});

export const writeAReviewSchema = yup.object().shape({
  title: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.TITLE),
  review: yup.string().required(validationErrors.PLEASE_ENTER + "Review"),
});
