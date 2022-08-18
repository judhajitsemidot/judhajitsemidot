 

export const notificationType = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
};

export const statusType = {
  TWO_HOUNDRED: "200",
  THREE_HOUNDRED: "300",
  FOUR_HOUNDRED: "400",
  FIVE_HOUNDRED: "500",
};

export const notificationTypeTitle = {
  SUCCESS: "Congratulations!",
  WARNING: "Warning",
  INFO: "Information",
  ERROR: "Error",
};

export const placeHolderImage = ``;

export const errorMessages = {
  fourNotOne: "Sorry! Your session has been expired, Please login again.",
  fourNotTwo: "Sorry! The parameters were valid but the request failed.",
  fourNotThree:
    "Sorry! You have not the required permissions to perform this action.",
  fourNotFour: "404! Page not found.",
  fourNotNine:
    "Sorry! The request conflicts with another request (perhaps due to using the same idempotent key).",
  fourOneZero: "Sorry! Requested page is no longer available on the server.",
  fourOneNine: "Sorry!, Invalid request.",
  fourTwoNine:
    "Sorry! Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.",
  fiveHoundredSeries:
    "Sorry! Something went wrong on Server's end. (These are rare).",
};

export const commonFields = {
  A: "A ",
  AN: "An ",
  Amount:"Amount",
  Category:"Category",
  ChargesUser:"per hour rate",
  Employer:"Employer",
  Designation:"Designation",
  Digit:"Digit",
  THE: "The ",
  TO: "To",
  FROM: "From",
  Gender:"Gender",
  OLD: "Old ",
  NEW: "New ",
  ID: "Id",
  FIRST_NAME: "First Name",
  LAST_NAME: "Last Name",
  NAME: "Name",
  Number:"Number",  
  EMAIL: "Email ID",
  MOBILE_NUMBER: "Mobile Number",
  PHONE: "Phone No.",
  OTP: "OTP",
  PASSWORD: "Password",
  CONFIRM: "Confirm",
  ADDRESS: "Address",
  STREET: "Street",
  CITY: "City",
  DISTRICT: "District",
  STATE: "State",
  COUNTRY: "Country",
  OTP:"Otp",
  PINCODE: "Pin Code",
  POSTALCODE: "Postal Code",
  TYPE: "Type",
  TITLE: "Title",
  CARD: "Card number",
  SPACE: " ",
  SOME:"Some",
  MAX_FILE_SIZE: 2000000, // 2MB
  MAX_FILE_SIZE_3MB: 3000000, // 1MB,
  VALUE:"Value",
  USER_NAME:'User Name'
};

export const validationErrors = {
  INDIAN_MOBILE_NUMBER: "Enter a valid indian mobile number",
  VALID_MOBILE_NUMBER: "Enter a valid mobile number",
  ONLY_STRING: "Letters And Spaces Only Please!",
  ONLY_NUMBERS: "Digits Only Please!",
  ONLY_SPECIAL_CHAR: "Only Special Characters Please!",
  NO_SPECIAL_CHAR: "No Special Characters Please!",
  PLEASE_ENTER: "Please Enter ",
  MINIMUM_TEN_DIGITS: "Minimum Ten Digits Required",
  MAXIMUM_TEN_DIGITS: "Maximum Ten Digits Allowed",
  STRONG_PASSWORD:
    "Password Must contain at least one uppercase, one lowercase letter, one special character and at least one digit.",
  SAME_PASSWORD: "Entered value must be same as Password",
  TERMS_AND_CONDITION: "Please Accept Terms & Conditions",
  ENTER_MESSAGE: "Please Enter A Message",
};

export const fileTypes = {
  APK: "application/vnd.android.package-archive",
  BMP: "image/bmp",
  BZIP_XPDF: "application/x-bzpdf",
  CSS: "text/css",
  CSV: "text/csv",
  DEB: "application/vnd.debian.binary-package",
  FONT_TTF: "application/x-font-ttf",
  FORM_URLENCODED: "application/x-www-form-urlencoded",
  FONT_WOFF: "application/font-woff",
  GIF: "image/gif",
  GZIP: "application/gzip",
  GZIP_XPDF: "application/x-gzpdf",
  HTML: "text/html",
  JPEG: "image/jpeg",
  JPG: "image/jpg",
  JSON: "application/json",
  JAVASCRIPT: "text/javascript",
  MS_EXCEL: "application/vnd.ms-excel",
  MS_EXCEL_2007:
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  MS_POWERPOINT: "application/vnd.ms-powerpoint",
  MS_POWERPOINT_2007:
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  MS_WORD: "application/msword",
  MS_WORD_2007:
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  MS_XPS: "application/vnd.ms-xpsdocument",
  OPENOFFICE_EXCEL: "application/vnd.oasis.opendocument.spreadsheet",
  OPENOFFICE_POWERPOINT: "application/vnd.oasis.opendocument.presentation",
  OPENOFFICE_TEXT: "application/vnd.oasis.opendocument.text",
  PDF: "application/pdf",
  PNG: "image/png",
  RAR: "application/x-rar-compressed",
  RTF: "text/rtf",
  SQL: "application/sql",
  SVG: "image/svg+xml",
  TIFF: "image/tiff",
  TXT: "text/plain",
  VCF: "text/vcard",
  XML: "application/xml",
  XPDF: "application/x-pdf",
  ZIP_7Z: "application/x-7z-compressed",
  ZIP: "application/zip",
};

export const allowedFileTypes = [
  fileTypes.PDF,
  fileTypes.MS_EXCEL,
  fileTypes.MS_EXCEL_2007,
  fileTypes.OPENOFFICE_EXCEL,
  fileTypes.JPG,
  fileTypes.PNG,
];

export const navigationLinkNames = {
  HOME: "HOME",
  ABOUT_US: "ABOUT US",
  HELP: "HELP",
};

export const valuesType = {
  VALUE: "Value",
  OBJECT: "Object",
  INTEGER: "Integer",
  FLOAT: "Float",
  STRING: "String",
  BOOLEAN: "Boolean",
};

export const userTypes = {
  JOBSEEKER: "Job Seeker",
  JOBPROVIDER: "Job Provider",
};

export const currentCurrency = "$";

export const cookiesName = {
  authToken: "auth_token",
  param: "param",
  chatParams: "chatParams",
  processingParams: "processingParams",
  rememberToken: "remember_token",
};

export const keyWords = {
  loadMore: "Load More...",
  followers: "Followers",
  followings: "Followings",
  follow: "Follow",
  unFollow: "Unfollow",
  block: "Block",
  unBlock: "Unblock",
  moveTo: "Move To",
  draft: "Draft",
  active: "Active",
  expired: "Expired",
  duplicate: "Duplicate",
  publish: "Publish",
  saveTo: "Save To",
  preview: "Preview",
  makePayment: "Make Payment",
  add: "Add",
  edit: "Edit",
  delete: "Delete",
  remove: "Remove",
  list: "List",
};

export const genderOptions = [
  { id: 1, value: 0, label: "Male", color: "#636c72" },
  { id: 2, value: 1, label: "Female", color: "#0275d8" },
  { id: 3, value: 2, label: "Other", color: "#5cb85c" },
];
export const userTypeOptions = [
  { id: 1, value: 0, label: "Individual", color: "#636c72" },
  { id: 2, value: 1, label: "Corporate", color: "#0275d8" },
  { id: 3, value: 2, label: "Start Up", color: "#5cb85c" },
];
export const EducationLevelOptions = [
  { id: 1, value: 0, label: "Full Time", color: "#636c72" },
  { id: 2, value: 1, label: "Part Time", color: "#0275d8" },
  { id: 3, value: 2, label: "Correspondence", color: "#5cb85c" },
];
export const sortOptions = [
  { value: "1", label: "Price low to high" },
  { value: "2", label: "Price high to low" },
];

export const urlQuery = {
  symbol: `?`,
  page: `page=`,
  slash: "/",
};

export const messages = {
  notLoggedIn: "Not Logged In",
  favoriteError: "Kindly login first to make this Post Favorite/Unfavorite",
  blockError: "Kindly login first to make this Post Block/Unblock",
  followError: "Kindly login first to make this Post Follow/Unfollow",
  chatError: "Kindly login first to Message this seller.",
  reviewError: "Kindly login first to Write a Review.",
  proceedError: "Kindly login first to proceed.",
  noFollowings: "You haven't followed any store yet.",
  noFollowers: "You don't have any follower yet.",
  noFavorites: "You haven't added any post as favorite yet.",
  noReviews: "You haven't don't have any reviews yet.",
  isInUnderConstruction: "is in Under Construction.",
  underConstruction: "Under Construction",
};

export const alphabets = {
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  e: "e",
  f: "f",
  g: "g",
  h: "h",
  i: "i",
  j: "j",
  k: "k",
  l: "l",
  m: "m",
  n: "n",
  o: "o",
  p: "p",
  q: "q",
  r: "r",
  s: "s",
  t: "t",
  u: "u",
  v: "v",
  w: "w",
  x: "x",
  y: "y",
  z: "z",
};

export const allAlphabets = [
  alphabets.a,
  alphabets.b,
  alphabets.c,
  alphabets.d,
  alphabets.e,
  alphabets.f,
  alphabets.g,
  alphabets.h,
  alphabets.i,
  alphabets.j,
  alphabets.k,
  alphabets.l,
  alphabets.m,
  alphabets.n,
  alphabets.o,
  alphabets.p,
  alphabets.q,
  alphabets.r,
  alphabets.s,
  alphabets.t,
  alphabets.u,
  alphabets.v,
  alphabets.w,
  alphabets.x,
  alphabets.y,
  alphabets.z,
];
