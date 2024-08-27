import { cloneDeep } from "lodash";
import moment from "moment";
import CryptoJS from "crypto-js";
import { API_URL, BASE_URL } from "./Config";
import * as React from "react";
import {
  EnumForAgencyType,
  DropdownListFormat,
  EnumForAgentChartList,
} from "../interfaces/interfaces";

import { components } from "react-select";
import jwt_decode from "jwt-decode";
import { EnumForLenderChartList } from "../interfaces/interfaces";
import XLSX from "sheetjs-style";
import * as FileSaver from "file-saver";
import { te } from "./Toaster";

export type returnTypeForString = string | null | undefined;
export type returnTypeForRegex = RegExp | null | undefined;

export const excludeTokenAPIList: Array<string> = [];

export const NO_RECORD_FOUND_MSG = "No Records found.";
export const NO_AGENTS_FOUND_MSG = "No Agents found.";
export const NO_PAYOUT_FOUND_MSG = "No Payout found.";
export const NO_COLLECTION_PAYOUT_FOUND_MSG = "Collection payout not found";
export const NO_PRODUCTS_FOUND_MSG = "No Products found.";
export const NO_TERMS_AND_CONDITION_FOUND_MSG =
  "No Terms and Conditions found.";
export const NO_AGREEMENT_FOUND_MSG = "No Agreement found.";
export const NO_AGENCY_FOUND_MSG = "No Agency found.";
export const NO_ROLE_FOUND_MSG = "No Role found.";
export const NO_PAGES_FOUND_MSG = "No Pages found.";
export const NO_NOTIFICATION_FOUND_MSG = "No Notification found.";
export const NO_CHART_CATEGORY_FOUNT_MSG = "No Chart Category found.";
export const NO_USER_FOUND_MSG = "No User found.";
export const NO_BILLING_SETUP_FOUND_MSG = "No billing setup found.";
export const NO_APPLICATIONS_FOUND_MSG = "No Applications found.";
export const NO_AD_HOC_PAYOUTS_FOUND_MSG = "No Ad Hoc Payouts found.";
export const NO_NPA_AGENTS_FOUND_MSG = "No Npa Agents found.";
// export const NO_INVOICE_FOUND_MSG = "No Invoice found.";
export const NO_DEBIT_NOTE_PAYEMENT_MSG = "No Debit Note found.";
export const NO_PAYOUT_CASES_FOUND_MSG = "No Payout Cases found.";
export const NO_AGENT_DEBIT_NOTE_DATA_FOUND_MSG = "Debit note data not found.";
export const NO_AGENT_CREDIT_NOTE_DATA_FOUND_MSG =
  "Credit note data not found.";
export const NO_LENDER_CREDIT_NOTE_DATA_FOUND_MSG =
  "Credit note data not found.";
export const NO_LENDER_DEBIT_NOTE_DATA_FOUND_MSG = "Debit note data not found.";
export const NO_INVOICE_FOUND_MSG = "Invoice data not found.";
export const NO_DEBIT_NOTE_PAYMENT_LIST_FOUND_MSG = "Debit note data not found";
export const NO_ADHOC_PAYMENT_LIST_FOUND_MSG = "Ad Hoc List data not found";
export const NO_CREDIT_NOTE_PAYMENT_LIST_FOUND_MSG =
  "Credit Note data not found";
export const NO_GST_DATA_FOUND_MSG = "GST Data not found";
export const NO_BANK_DETAILS_FOUND_MSG = "Bank details not found";
export const NO_ACTIVE_CASES_FOUND_MSG = "Active cases not found.";
export const NO_AGREEMENT_FOUND = "Agent Agreement Not Found";
export const NO_PAYOUT_SCHEMES_EXECUTION_LOGS =
  "Payout Schemes Execution Logs Not Found";

export const DATE_FORMAT = "dd-MM-yyyy";
export const DATE_FORMAT_FOR_DISPLAY = "DD-MM-YYYY";

export const FILE_SIZE_FOR_BLOB = 60 * 1024;
export const FILE_SIZE = 1 * 1024 * 1024;
export const FILE_SIZE_FOR_MARKSHEET = 10 * 1024 * 1024;
export const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png",
];

export const SUPPORTED_FORMATS_FOR_IMAGE_AND_PDF = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "application/pdf",
];

export const DASHBOARD_STATE_FILTER_INCLUDE = [
  EnumForLenderChartList.ACTIVE_AGENTS,
  EnumForLenderChartList.ALL_AGENTS,
  EnumForLenderChartList.AGENTS_BY_AGENCYTYPE,
  EnumForLenderChartList.AGENTS_NPA,
  EnumForLenderChartList.AGENTS_TO_RE_REGISTER,
  EnumForLenderChartList.AGENTS_RE_REGISTERED,
  EnumForLenderChartList.PAYOUT_CASES_BY_AGENCY_TYPE,
  EnumForLenderChartList.PAYOUT_CASES_BY_SUB_AGENCY_TYPE,
  EnumForLenderChartList.PAYOUT_CASES_BY_PRODUCT,
  EnumForLenderChartList.PAYOUTS_BY_STATUS,
  EnumForLenderChartList.PAYOUTS_BY_TYPE,
  EnumForLenderChartList.PAYOUTS_BY_AMOUNT,
  EnumForLenderChartList.PAYOUTS_FINALIZED,
  EnumForLenderChartList.INVOICES_BY_STATUS,
  EnumForLenderChartList.CREDIT_NOTES,
  EnumForLenderChartList.DEBIT_NOTES,
  EnumForLenderChartList.PAYOUT_BY_STATUS_AMOUNT,
  EnumForLenderChartList.EMPLOYEES_BY_TYPE,
  EnumForLenderChartList.COUNT_OF_INCENTIVES_CALCULATED,
  EnumForLenderChartList.AMOUTNT_OF_INCENTIVES_CALCULATED,
  EnumForLenderChartList.INCENTIVES_AMOUNT_BY_EMPLOYEE_TYPE,
  // EnumForLenderChartList.COUNT_OF_INCENTIVES_CALCULATED_INDIA,
  // EnumForLenderChartList.AMOUNT_OF_INCENTIVES_CALCULATED_INDIA,
];
export const DASHBOARD_LENDER_AGENCY_TYPE_FILTER_INCLUDE = [
  EnumForLenderChartList.AGENTS_NPA,
  EnumForLenderChartList.AGENTS_BY_AGENCYTYPE,
  EnumForLenderChartList.AGENTS_TO_RE_REGISTER,
  EnumForLenderChartList.AGENTS_RE_REGISTERED,
  EnumForLenderChartList.PAYOUT_CASES_BY_PRODUCT,
  EnumForLenderChartList.PAYOUTS_BY_STATUS,
  EnumForLenderChartList.PAYOUTS_BY_TYPE,
  EnumForLenderChartList.PAYOUTS_BY_AMOUNT,
  EnumForLenderChartList.PAYOUTS_FINALIZED,
  EnumForLenderChartList.INVOICES_BY_STATUS,
  EnumForLenderChartList.CREDIT_NOTES,
  EnumForLenderChartList.DEBIT_NOTES,
  EnumForLenderChartList.PAYOUT_CASES,
  EnumForLenderChartList.COUNT_OF_CALCULATED_PAYOUTS,
  EnumForLenderChartList.AMOUNT_OF_CALCULATED_PAYOUTS,
  EnumForLenderChartList.PAYOUT_CASES_BY_AGENCY_TYPE,
  EnumForLenderChartList.PAYOUT_BY_STATUS_AMOUNT,
];
export const DASHBOARD_LENDER_SUB_AGENCY_TYPE_FILTER_INCLUDE = [
  EnumForLenderChartList.AGENTS_BY_AGENCYTYPE,
  EnumForLenderChartList.AGENTS_NPA,
  EnumForLenderChartList.AGENTS_TO_RE_REGISTER,
  EnumForLenderChartList.AGENTS_RE_REGISTERED,
  EnumForLenderChartList.PAYOUT_CASES_BY_PRODUCT,
  EnumForLenderChartList.PAYOUTS_BY_STATUS,
  EnumForLenderChartList.PAYOUTS_BY_TYPE,
  EnumForLenderChartList.PAYOUTS_BY_AMOUNT,
  EnumForLenderChartList.PAYOUTS_FINALIZED,
  EnumForLenderChartList.INVOICES_BY_STATUS,
  EnumForLenderChartList.CREDIT_NOTES,
  EnumForLenderChartList.DEBIT_NOTES,
  EnumForLenderChartList.PAYOUT_CASES,
  EnumForLenderChartList.COUNT_OF_CALCULATED_PAYOUTS,
  EnumForLenderChartList.AMOUNT_OF_CALCULATED_PAYOUTS,
  EnumForLenderChartList.PAYOUT_CASES_BY_AGENCY_TYPE,
  EnumForLenderChartList.PAYOUT_CASES_BY_SUB_AGENCY_TYPE,
  EnumForLenderChartList.PAYOUT_BY_STATUS_AMOUNT,
];
export const DASHBOARD_LENDER_FROM_TO_DATE_FILTER_INCLUDE = [
  EnumForLenderChartList.AGENTS_NPA,
  EnumForLenderChartList.AGENTS_TO_RE_REGISTER,
  EnumForLenderChartList.AGENTS_RE_REGISTERED,
  EnumForLenderChartList.PAYOUT_CASES_BY_PRODUCT,
  EnumForLenderChartList.PAYOUTS_BY_STATUS,
  EnumForLenderChartList.PAYOUTS_BY_TYPE,
  EnumForLenderChartList.PAYOUTS_BY_AMOUNT,
  EnumForLenderChartList.PAYOUTS_FINALIZED,
  EnumForLenderChartList.INVOICES_BY_STATUS,
  EnumForLenderChartList.CREDIT_NOTES,
  EnumForLenderChartList.DEBIT_NOTES,
  EnumForLenderChartList.PAYOUT_CASES,
  EnumForLenderChartList.COUNT_OF_CALCULATED_PAYOUTS,
  EnumForLenderChartList.AMOUNT_OF_CALCULATED_PAYOUTS,
  EnumForLenderChartList.PAYOUT_CASES_BY_AGENCY_TYPE,
  EnumForLenderChartList.PAYOUT_BY_STATUS_AMOUNT,
  EnumForLenderChartList.COUNT_OF_INCENTIVES_CALCULATED,
  EnumForLenderChartList.AMOUTNT_OF_INCENTIVES_CALCULATED,
  EnumForLenderChartList.INCENTIVES_AMOUNT_BY_EMPLOYEE_TYPE,
  EnumForLenderChartList.COUNT_OF_INCENTIVES_CALCULATED_INDIA,
  EnumForLenderChartList.AMOUNT_OF_INCENTIVES_CALCULATED_INDIA,
];
export const DASHBOARD_STATE_FILTER_INCLUDE_FOR_AGENT = [
  EnumForAgentChartList.ASSIGNED_PAYOUT_CASES,
  EnumForAgentChartList.CREDIT_NOTES_AGENT,
  EnumForAgentChartList.DEBIT_NOTES_AGENT,
  EnumForAgentChartList.INVOICE_BY_STATUS_AGENT,
  EnumForAgentChartList.PAYOUT_BY_AMOUNT_AGENT,
  EnumForAgentChartList.PAYOUT_BY_STATUS_AGENT,
  EnumForAgentChartList.PAYOUT_BY_TYPE_AGENT,
  EnumForAgentChartList.PAYOUT_CASES_BY_PRODUCT_AGENT,
  EnumForAgentChartList.PAYOUT_FINALISED_AGENT,
  EnumForAgentChartList.PAYOUT_BY_STATUS_AMOUNT_AGENT,
];
export const DASHBOARD_LENDER_AGENT_NAME_FILTER_INCLUDE = [
  EnumForLenderChartList.PAYOUT_CASES_BY_PRODUCT,
  EnumForLenderChartList.PAYOUTS_BY_TYPE,
];
export const SUPPORTED_FORMATS_FOR_EXCEL = ["text/csv"];

export const SUPPORTED_FORMATS_FOR_EXCEL_AND_CSV = [
  "text/csv",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];

export const FILE_FORMAT_FOR_EXCEL = [
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];
export const MARKETINGTYPESLIST = [
  EnumForAgencyType.CONNECTOR,
  EnumForAgencyType.CORP,
  EnumForAgencyType.CRA,
  EnumForAgencyType.DSA,
  EnumForAgencyType.HLA,
  EnumForAgencyType.DME,
];
export const COLLECTIONTYPELIST = [
  EnumForAgencyType.DRA,
  EnumForAgencyType.EA,
  EnumForAgencyType.RO,
  EnumForAgencyType.BO,
  EnumForAgencyType.AO,
];

export const EnumForAgencyMasterType = {
  CREDIT_FIELD_INVESTIGATION: "Credit Field Investigation",
  CREDIT_LEGAL: "Credit Legal",
  CREDIT_VALUATION: "Credit Valuation",
  MARKETING: "Marketing",
  COLLECTION: "Collection",
};

export const yearList: DropdownListFormat[] = [
  { label: "2018", value: 2018 },
  { label: "2019", value: 2019 },
  { label: "2020", value: 2020 },
  { label: "2021", value: 2021 },
  { label: "2022", value: 2022 },
];
export const monthList: DropdownListFormat[] = [
  { label: "JANUARY", value: 1 },
  { label: "FEBRUARY", value: 2 },
  { label: "MARCH", value: 3 },
  { label: "APRIL", value: 4 },
  { label: "MAY", value: 5 },
  { label: "JUNE", value: 6 },
  { label: "JULY", value: 7 },
  { label: "AUGUST", value: 8 },
  { label: "SEPTEMBER", value: 9 },
  { label: "OCTOBER", value: 10 },
  { label: "NOVEMBER", value: 11 },
  { label: "DECEMBER", value: 12 },
];

// page list and dropodown list for dropdown API

export const APPLICATION_DETAILS_PAGE_AGENT = "application_detail";
export const APPLICATION_DETAILS_DROPDOWN_LIST_AGENT = [
  "yearAndMonthSeperate",
  "product",
];
export const APPLICATION_DETAILS_PAGE_LENDER = "application_detail";
export const INCENTIVE_APPLICATION_DETAILS_PAGE_LENDER =
  "incentive_application_detail";
export const APPLICATION_DETAILS_DROPDOWN_LIST_LENDER = [
  "yearAndMonthSeperate",
  "product",
  "agencyType",
  // "agencyName",
];

export const INCENTIVE_APPLICATION_DETAILS_DROPDOWN_LIST_LENDER = [
  "yearAndMonthSeperate",
  "product",
];
export const INVOICE_PAGE_LENDER = "invoice";
export const INVOICE_PAGE_LENDER_DROPDOWN_LIST = [
  "yearAndMonthSeperate",
  "product",
  "agencyType",
];
export const INVOICE_PAGE_AGENT = "invoice";
export const INVOICE_PAGE_AGENT_DROPDOWN_LIST = [
  "yearAndMonthSeperate",
  "product",
];
export const AD_HOC_LENDER = "adhoc_payout";
export const AD_HOC_LENDER_DROPDOWN_LIST = ["yearAndMonthSeperate", "product"];

export const PAYOUT_STATUS_DROPDOWN_LIST = [
  "product",
  "agencyType",
  "stateOffice",
  "backOffice",
  "state",
];

export const DEBIT_NOTE_PAGE_LENDER = "debit_note";
export const DEBIT_NOTE_DROPDOWN_LIST_LENDER = [
  "yearAndMonth",
  "product",
  "agencyType",
];
export const DEBIT_NOTE_PAGE_AGENT = "debit_note";
export const DEBIT_NOTE_DROPDOWN_LIST_AGENT = ["yearAndMonth", "product"];

export const CREDIT_NOTE_PAGE_LENDER = "credit_note";
export const CREDIT_NOTE_DROPDOWN_LIST_LENDER = [
  "yearAndMonth",
  "product",
  "agencyType",
];

export const CREDIT_NOTE_PAGE_AGENT = "credit_note";
export const CREDIT_NOTE_DROPDOWN_LIST_AGENT = ["yearAndMonth", "product"];

export const showPasswordIcon = [
  "oldPassword",
  "newPassword",
  "confirmPassword",
];

// get token of loggedIn user
export const getToken = (): returnTypeForString => {
  return localStorage.getItem("token");
};
// get clientId of loggedIn user
export const getClientId = (): returnTypeForString => {
  return localStorage.getItem("clientId");
};
// get token of loggedIn user
export const getName = (): returnTypeForString => {
  return sessionStorage.getItem("name");
};
// get token of loggedIn user
export const getRoleName = (): returnTypeForString => {
  return localStorage.getItem("roleName");
};

// get id of loggedIn user
export const getProfileId = (): returnTypeForString => {
  return localStorage.getItem("profile_id");
};
// get UserId
export const getUserId = (): any => {
  const userId = sessionStorage.getItem("userId");
  return userId ? +userId : 1;
};
// get UserId
export const getUserTypeId = (): any => {
  const userId = localStorage.getItem("userType");
  return userId ? +userId : null;
};
// get IP
export const getIP = (): returnTypeForString => {
  return localStorage.getItem("ip");
};

export const getUniqueNumber = (): returnTypeForString => {
  return localStorage.getItem("unique_number");
};

export const setUniqueNumber = (): void => {
  const uniqueNumber = Math.floor(Date.now() / 1000);
  return localStorage.setItem("unique_number", uniqueNumber.toString());
};

// get role of loggedIn user
export const getRole = (): returnTypeForString => {
  return localStorage.getItem("role");
};

// export const setIP = async () => {
// 	await axios
// 		.get("https://api.ipify.org/?format=json")
// 		.then(async (res) => {
// 			await localStorage.setItem("ip", res.data.ip);
// 		})
// 		.catch((error) => {
// console.log(error);
// 		});
// };

// set session data in local storage
export const setSession = (token: string, id: number, role: string): void => {
  localStorage.setItem("api_token", token);
  localStorage.setItem("profile_id", id.toString());
  localStorage.setItem("role", role);
};

// remove session data from local storage
export const removeSession = (): void => {
  localStorage.removeItem("api_token");
  localStorage.removeItem("profile_id");
  localStorage.removeItem("role");
};

// get letter icon by name
export const getUserLetter = (
  firstName: string,
  lastName: string
): returnTypeForString => {
  let letter = "";
  if (firstName) letter = firstName.substr(0, lastName ? 1 : 2);
  if (lastName) letter += lastName.substr(0, 1);
  return letter;
};

// append scripts in body
export const appendScriptLink = (sources: any): void => {
  sources.map((src: string): any => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  });
};

// load script into body part
export const loadScript = (source: string): void => {
  const s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.innerHTML = source;
  document.body.appendChild(s);
};

// get regexp by type
export const getRegExp = (type: string): returnTypeForRegex => {
  let regx: RegExp | null | undefined = null;
  switch (type) {
    case "email":
      regx =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      break;
    case "mobile10":
      regx = /^[7896]\d{9}$/;
      break;
    case "mobile14":
      regx = /^(?=.*[0-9])[- +()0-9]{10,14}$/;
      break;
    case "mobile":
      regx = /^((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}$/;
      break;
    case "number":
      regx = /^[0-9]*$/;
      break;
    case "onlyAlphabate":
      regx = /^[a-zA-Z ]*$/;
      break;

    default:
      break;
  }
  return regx;
};

// get object of state form
export const getFormDetails = (form: any, changeValidation: any): any => {
  let failed = false;
  for (const val in form.errors) {
    const fieldError = form.errors[val];
    if (fieldError) {
      failed = true;
    } else if (fieldError === null && !form[val]) {
      failed = true;
      changeValidation(val, true);
    }
  }
  if (failed) {
    return false;
  } else {
    const cloneObj = cloneDeep(form);
    delete cloneObj["errors"];
    return cloneObj;
  }
};

//for hashing
export const generatePassword = (password: any) => {
  const iv = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
  const salt = CryptoJS.lib.WordArray.random(128 / 8).toString(
    CryptoJS.enc.Hex
  );
  //@ts-ignore
  const aesUtil = new AesUtil(128, 1000);
  const ciphertext = aesUtil.encrypt(salt, iv, "sarvagram", password);

  const aesPassword = iv + "::" + salt + "::" + ciphertext;
  const hashedpassword = Buffer.from(aesPassword).toString("base64"); //btoa(aesPassword);
  return hashedpassword;
};
//function for generating hashed password
export const AesUtil = function (
  this: any,
  keySize: number,
  iterationCount: any
) {
  this.keySize = keySize / 32;
  this.iterationCount = iterationCount;
};

AesUtil.prototype.generateKey = function (salt: any, passPhrase: any) {
  const key = CryptoJS.PBKDF2(passPhrase, CryptoJS.enc.Hex.parse(salt), {
    keySize: this.keySize,
    iterations: this.iterationCount,
  });
  return key;
};

AesUtil.prototype.encrypt = function (
  salt: any,
  iv: any,
  passPhrase: any,
  plainText: any
) {
  const key = this.generateKey(salt, passPhrase);
  const encrypted = CryptoJS.AES.encrypt(plainText, key, {
    iv: CryptoJS.enc.Hex.parse(iv),
  });
  return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
};

AesUtil.prototype.decrypt = function (
  salt: any,
  iv: any,
  passPhrase: any,
  cipherText: any
) {
  const key = this.generateKey(salt, passPhrase);
  const cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: CryptoJS.enc.Base64.parse(cipherText),
  });
  const decrypted = CryptoJS.AES.decrypt(cipherParams, key, {
    iv: CryptoJS.enc.Hex.parse(iv),
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
};

// perform column sorting
export const getColumnSorting = (key: any, type: string, columns: any[]) => {
  const sortType = type ? (type === "asc" ? "desc" : null) : "asc";
  columns.map((x) => {
    x.sortType = x.key === key ? sortType : null;
  });

  return {
    columns,
    sortType,
    sortKey: sortType ? key : null,
  };
};

// generate random number
export const getRandomNumber = (): string => {
  return Math.random().toString().substr(2);
};

// Return Form Data

export const ConvertInFormData = (obj = {} as any, file = "") => {
  const formData = new FormData();
  Object.keys(obj).map((res) => {
    if (file == res) {
      Object.keys(obj[res]).map((response, index) => {
        // console.log("Image", obj[res][response]);
        formData.append(`${res}`, obj[res][response]);
      });
    } else {
      formData.append(res, JSON.stringify(obj[res]));
    }
  });
  return formData;
};
// get server validation in string format
export const getServerValidation = (errorObj: {
  [x: string]: any[];
}): string => {
  const messages: any = [];
  Object.keys(errorObj).map((val) => {
    errorObj[val].map((arr_val) => messages.push(arr_val));
  });
  return messages.join(",");
};

// convert UTC date to Local date
export const convertUTCtoLocal = (
  date: moment.MomentInput,
  format = "YYYY-MM-DD HH:mm:ss"
) => {
  if (!date) return "";
  moment.locale("en-IN");
  const utcDate = moment(date).format(); //is used to convert to consider input as UTC if timezone offset is not passed
  return moment(utcDate).format(format);
};

// convert Local date to UTC date
export const convertlocaltoUTC = (
  date: moment.MomentInput,
  format = "YYYY-MM-DD HH:mm:ss"
) => {
  if (!date) return "";
  moment.locale("en-IN");
  return moment.utc(date).format(format);
};

//set document element value
export const setDocumentData = (tag: string, value: string) => {
  if (tag === "title") {
    document.title = value + " — SAMI-Aid";
  }
};
export const isEmpty = (value: string | null) => {
  return (
    (typeof value == "string" && !value.trim()) ||
    typeof value == "undefined" ||
    value === null
  );
};

export const getDate = (
  date: moment.MomentInput,
  format = "YYYY-MM-DD HH:mm:ss"
) => {
  return !date ? moment().format(format) : moment(date).format(format);
};

export const isNullUndefinedOrBlank = (obj: any): boolean => {
  if (obj == null || obj === undefined || (obj === "" && obj !== 0)) {
    return true;
  }
  return false;
};
export const isEmptyObjectOrNullUndefiend = (...value: any): boolean => {
  if (value && value.length > 0) {
    for (let i = 0; i < value.length; i++) {
      if (isNullUndefinedOrBlank(value[i]) || isEmptyObject(value[i])) {
        return true;
      }
    }
  }
  return false;
};
/*
 *
 * Used to check if object ios empaty or not..!
 * @param obj = 'indecated object which you want to check'
 * return true if empty..!
 */
export const isEmptyObject = (obj: any): boolean => {
  return obj && Object.keys(obj).length === 0;
};

export const isNumeric = (value: any): boolean => {
  return /^\d+$/.test(value);
};
export const preventSpace = (
  event: React.ChangeEvent<HTMLInputElement>
): void => {
  event.target.value = event.target.value.replace(/^\s+/g, "");
};

/**   Decimal adjustment of a number.
 * @param { String } type The type of adjustment.
 * @param { Number }  value The number.
 * @param { Integer } exp   The exponent(the 10 logarithm of the adjustment base).
 * @returns { Number } The adjusted value.
 **/
export const decimalAdjust = (
  type: string,
  value: number | string[],
  exp: number
): number => {
  // If the exp is undefined or zero...
  if (typeof exp === "undefined" || +exp === 0) {
    //@ts-ignore
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split("e");
  //@ts-ignore
  value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
  // Shift back
  value = value.toString().split("e");
  return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
};

export const download = (APIName: string, docId: number) => {
  const url = API_URL + APIName + "?id=" + docId;
  const dlLink = document.createElement("a");
  dlLink.setAttribute("crossOrigin", "anonymous");
  dlLink.setAttribute("data-downloadurl", url);
  dlLink.href = url;
  dlLink.download = "downloadfile.png";
  dlLink.dataset.downloadurl = [dlLink.download, url["href" as any]].join(":");
  document.body.appendChild(dlLink);
  dlLink.click();
  document.body.removeChild(dlLink);
};

/**
 * This Method Is Use For Remove Blank And Null Key From Object.
 */
export const customJsonInclude = (obj): void => {
  for (const key in obj) {
    // console.log(`key:- ${key} ` + typeof obj[key]);
    // console.log(obj[key]);
    const flag = obj[key] instanceof Blob;
    if (typeof obj[key] === "object" && !flag) {
      // console.log(key);

      if (obj[key] && obj[key].length > 0) {
        obj[key] = removeEmptyElementsFromArray(obj[key]);
      }
      if (isEmptyObject(obj[key])) {
        delete obj[key];
      } else {
        customJsonInclude(obj[key]);
      }
    } else {
      if (obj[key] === undefined || obj[key] === null || obj[key] === "") {
        delete obj[key];
      }
    }
  }
};

/**
 * This Method Is Use From Remove Empty Element From Array
 * @param test_array  your selected array pass as args.
 */
const removeEmptyElementsFromArray = (test_array): Array<any> => {
  let index = -1;
  const arr_length = test_array ? test_array.length : 0;
  let resIndex = -1;
  const result: any = [];

  while (++index < arr_length) {
    const id = test_array[index];
    if (id) {
      result[++resIndex] = id;
    }
  }
  return result;
};

const { ValueContainer, Placeholder }: any = components;
export const CustomValueContainer = ({ children, ...props }) => {
  return (
    <ValueContainer {...props}>
      <Placeholder
        {...props}
        innerProps={{ title: props.selectProps.placeholder }}
        isFocused={props.isFocused}
      >
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, (child) =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};

export const customStylesForDefaultLable = {
  control: (base, state) => ({
    ...base,
    border: state.isDisabled
      ? "1px solid rgb(226 232 240)"
      : "1px solid #DDDDDD",
    background: state.isDisabled ? "#FFFFFF" : "",

    // boxShadow: 'none',
    "&:hover": {
      boxShadow: "none",
      border: state.isDisabled ? "1px solid #DDDDDD" : "1px solid #0D6BC8",
    },
    "&:focus": {
      boxShadow: "none",
      border: "1px solid #0D6BC8",
      position: "absolute",
      top: state.hasValue || state.selectProps.inputValue ? -15 : "50%",
      transition: "top 0.1s, font-size 0.1s",
      fontSize: (state.hasValue || state.selectProps.inputValue) && 13,
    },
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? "#0D6BC8" : "",
    fontSize: "0.875rem",
  }),
  menu: (provided, state) => ({
    ...provided,

    zIndex: 9999,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 1 : 1;
    const color = state.isDisabled ? "#000000" : "#000000";
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition, color };
  },
  multiValue: (provided, state) => {
    const opacity = state.isDisabled ? 1 : 1;
    const color = state.isDisabled ? "#000000" : "#000000";
    const transition = "opacity 300ms";
    const pointerEvents = state.isDisabled ? "none" : "inherit";
    return { ...provided, opacity, transition, color, pointerEvents };
  },

  container: (provided, state) => ({
    ...provided,
    pointerEvents: "inherit",
    // marginTop: 50,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    overflow: "visible",
    // pointerEvents: state.isDisabled && state.isMulti ?"none":"inherit" ,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    // fontSize: "0.875rem",
    // fontColor: "#F00F00",
    // opacity: 0.8,
    color: state.isFocused || state.isDisabled ? "#BBBBBB" : "#808080",

    opacity: state.isFocused ? 0.5 : 1,
    position: "absolute",
    top:
      state.hasValue ||
      state.isFocused ||
      state.isDisabled ||
      state.selectProps.inputValue
        ? -13
        : "",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "98%",
    width: "auto",
    transition: "top 0.1s, font-size 0.1s",
    background:
      state.isDisabled || state.selectProps.inputValue ? "#FFFFFF" : "#FFFFFF",

    paddingLeft:
      state.hasValue || state.isFocused || state.selectProps.inputValue
        ? 4
        : "",
    paddingRight:
      state.hasValue || state.isFocused || state.selectProps.inputValue
        ? 4
        : "",
    fontSize: (state.hasValue || state.selectProps.inputValue) && 13,
  }),
  input: (styles) => ({
    ...styles,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  }),
};

export const customStyles = {
  control: (base, state) => ({
    ...base,
    // cursor: 'not-allowed',
    border: "1px solid #DDDDDD",
    // boxShadow: 'none',
    "&:hover": {
      boxShadow: "none",
      border: "1px solid #0D6BC8",
    },
    "&:focus": {
      boxShadow: "none",
      border: "1px solid #0D6BC8",
    },
    background: state.isDisabled ? "#F3F4F6" : "",
  }),

  option: (provided, state) => ({
    ...provided,
    fontSize: "0.875rem",
    cursor: "pointer",
    background: state.isDisabled
      ? "#F3F4F6"
      : "" || state.isSelected
      ? "#0D6BC8"
      : "",
    placeholder: state.isFocused ? "red" : "green",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.9 : 1;
    const transition = "opacity 300ms";
    const color = state.isDisabled ? "#111111" : "#111111";
    return { ...provided, opacity, transition, color };
  },
  placeholder: (provided, state) => ({
    ...provided,
    fontColor: state.isDisabled ? "#F00F00" : "red",
    fontSize: "0.875rem",
    // fontColor: "#9CA3AF",
    opacity: 1,
    color: "#808080",
  }),
};

export const calculateYearsAndMonth = (startDate, endDate) => {
  const a = moment(startDate);
  const b = moment(endDate);

  // var years = a.diff(b, 'year');
  // b.add(years, 'years');

  // var months = a.diff(b, 'months');
  // b.add(months, 'months');

  // var days = a.diff(b, 'days');
  // console.log(years + ' years ' + months + ' months ' + days + ' days');
  const diffDuration = moment.duration(a.diff(b));

  console.log(diffDuration.years()); // 8 years
  console.log(diffDuration.months()); // 5 months
  console.log(diffDuration.days()); // 2 days
  return { years: diffDuration.years(), months: diffDuration.months() };
};
export const renderError = (
  message:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
) => <p className="text-red-400 text-sm font-normal">{message}</p>;

export const convertBase64ToBlob = (imageBase64: string) => {
  const ImageURL = imageBase64;
  // Split the base64 string in data and contentType
  const block = ImageURL.split(";");
  // Get the content type of the image
  const contentType = block[0].split(":")[1]; // In this case 'image/gif'
  // get the real base64 content of the file
  const realData = block[1].split(",")[1]; // In this case 'R0lGODlhPQBEAPeoAJosM....'

  // Convert it to a blob to upload
  const blob = b64toBlob(realData, contentType);
  return blob;
};

/**
 * Convert a base64 string in a Blob according to the data and contentType.
 *
 * @param b64Data {String} Pure base64 string without contentType
 * @param contentType {String} the content type of the file i.e (image/jpeg - image/png - text/plain)
 * @param sliceSize {Int} SliceSize to process the byteCharacters
 * @return Blob
 */
export const b64toBlob = (b64Data, contentType, sliceSize?) => {
  contentType = contentType || "";
  sliceSize = sliceSize || 512;

  const byteCharacters = atob(b64Data);
  const byteArrays: any = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }
  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};

export const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export async function getFile(url: string) {
  try {
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    });
    const blob = await response.arrayBuffer();
    console.log(new Blob([blob]));

    // console.log(Buffer.from(blob, 'binary').toString('base64'));

    // return [, null];
  } catch (error) {
    console.error(`get: error occurred ${error}`);
    return [null, error];
  }
}

export const getAccessRightsByPageCode = (pageCode: string) => {
  try {
    const token = localStorage.getItem("accessToken");
    let decode: any;
    let newArray: any;
    if (token) {
      decode = jwt_decode(token);
      // console.log("decoded", decode);
      if (decode) {
        newArray = JSON.parse(decode.access);
        // console.log("newArray", newArray);
        const accessRight = newArray.find((val) => val.pageCode === pageCode);
        return accessRight;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const checkIfFilesAreTooBig = (files?: any): boolean => {
  let valid = true;
  if (files) {
    files.map((file) => {
      const size = file.document ? file.document.size : FILE_SIZE_FOR_MARKSHEET;
      if (size > FILE_SIZE_FOR_MARKSHEET) {
        valid = false;
      }
    });
  }
  return valid;
};

export function checkIfFilesAreCorrectType(
  files?: any,
  supportedFormat?: any
): boolean {
  let valid = true;
  if (files) {
    files.map((file) => {
      if (
        !checkExtensionValidOrNot(
          file.attachmentName ? file.attachmentName : file.document.name,
          supportedFormat
        )
      ) {
        valid = false;
      }
    });
  }
  return valid;
}

export const checkExtensionValidOrNot = (
  name: string,
  supportedFormat: any
): boolean => {
  const splitName = name.split(".");
  console.log(name);
  console.log(splitName);
  const extension = splitName[splitName.length - 1];
  console.log(extension);
  console.log(
    supportedFormat.some(
      (item) => item.value.toLowerCase() === extension.toLowerCase()
    )
  );
  console.log(supportedFormat);

  return supportedFormat.some(
    (item) => item.value.toLowerCase() === extension.toLowerCase()
  );
};

export const convertStringFromArrayOfObject = (items: any[], key) => {
  const duplicateItems = [...items];

  return duplicateItems.map((val) => {
    return val[key];
  });
};

//Get the indian currency format

export const formatIndianCurrency = (val: any) => {
  // console.log("val------", val);
  let isNegative: boolean = false;
  if (!isNullUndefinedOrBlank(val)) {
    isNegative = val?.toString().includes("-");
  } else {
    isNegative = false;
  }
  if (isNegative) {
    val = val?.toString()?.replace(/-/gi, "");
  }
  let temp: any = val;
  temp = temp?.toString();
  let afterPoint = "";
  if (temp?.indexOf(".") > 0)
    afterPoint = temp?.substring(temp?.indexOf("."), temp.length);
  if (temp !== "-") {
    temp = isNaN(parseInt(temp)) ? "" : parseInt(temp);
  }
  temp = temp?.toString();
  let lastThree: any = temp?.substring(temp.length - 3);
  const otherNumbers: any = temp?.substring(0, temp.length - 3);
  if (otherNumbers !== "") lastThree = "," + lastThree;
  let res: any =
    otherNumbers?.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
    lastThree +
    afterPoint;
  if (isNegative) {
    res = "-" + res;
  }

  // console.log("curr", res);
  return res;
};

export const replaceComma = (value: any) => {
  return value?.replace(/,/g, "");
};

export const removeSlash = (str) => {
  return str?.replace(/\//g, ",");
};

export const removeComma = (str: any) => {
  return str.replace(",", "");
};

export const makeFilterArray = (ids: any) => {
  const newIds = removeComma(ids);
  const array = newIds.split(",");
  return array;
};

export const encryptId = (id: any) => {
  // return btoa(id)
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(id));
};

export const decryptId = (id: any) => {
  // return atob(id)
  return CryptoJS.enc.Base64.parse(id).toString(CryptoJS.enc.Utf8);
};

export const getFieldErrorNames = (formikErrors) => {
  const transformObjectToDotNotation = (
    obj: any,
    prefix: any = "",
    result: any = []
  ) => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (!value) return;

      const nextKey: any = prefix ? `${prefix}.${key}` : key;
      if (typeof value === "object") {
        transformObjectToDotNotation(value, nextKey, result);
      } else {
        result.push(nextKey);
      }
    });

    return result;
  };

  return transformObjectToDotNotation(formikErrors);
};

export const exportToExcel = async (
  excelData: any,
  fileName: string,
  fileFormat: string
) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

  const ws = XLSX.utils.json_to_sheet(excelData);

  const wb = { Sheets: { data: ws }, SheetNames: ["data"] };

  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

  const data = new Blob([excelBuffer], { type: fileType });

  FileSaver.saveAs(data, fileName + fileFormat);
};

export function checkPayoutConfigBasis() {
  const token = localStorage.getItem("token");
  let decode: any;
  let userdata: any;
  if (token) {
    decode = jwt_decode(token);
    // console.log("decoded", decode);
    // console.log("decode.userdata", decode.userdata);
    if (decode) {
      userdata = JSON.parse(decode.userdata);
    }
    if (userdata) {
      return userdata?.PCB === "A";
    }
  }
}

export function checkPayoutConfigOptionalGst() {
  const token = localStorage.getItem("token");
  let decode: any;
  let userdata: any;
  if (token) {
    decode = jwt_decode(token);
    // console.log("decoded", decode);
    // console.log("decode.userdata", decode.userdata);
    if (decode) {
      userdata = JSON.parse(decode.userdata);
    }
    if (userdata) {
      return userdata?.GO === "Y";
    }
  }
}

export function checkIsDealer() {
  const token = localStorage.getItem("token");
  let decode: any;
  let userdata: any;
  if (token) {
    decode = jwt_decode(token);
    if (decode) {
      userdata = JSON.parse(decode.userdata);
    }
    if (userdata) {
      return userdata?.isDealer === true;
      // return false;
    }
  }
}

export function checkPayoutConfigAgentSchemeAssignmentBase() {
  const token = localStorage.getItem("token");
  let decode: any;
  let userdata: any;
  if (token) {
    decode = jwt_decode(token);
    // console.log("decoded", decode);
    // console.log("decode.userdata", decode.userdata);
    if (decode) {
      userdata = JSON.parse(decode.userdata);
    }
    if (userdata) {
      console.log("decode.userdata", userdata);
      if (userdata?.ACB === "A") {
        return true;
      } else {
        return false;
      }
    }
  }
}

export function checkPayoutConfigAgentSchemeAssignmentBaseForMuthoot() {
  const token = localStorage.getItem("token");
  let decode: any;
  let userdata: any;
  if (token) {
    decode = jwt_decode(token);
    // console.log("decoded", decode);
    // console.log("decode.userdata", decode.userdata);
    if (decode) {
      userdata = JSON.parse(decode.userdata);
    }
    if (userdata) {
      // console.log("decode.userdata", userdata);
      if (userdata?.PCB !== "A") {
        return true;
      } else {
        return false;
      }
    }
  }
}

// let decKeyForApi: any;
// export const setLoginCodeInStorage = async (tempToken) => {
//   let decode: any;
//   let userdata: any;
//   if (tempToken) {
//     decode = jwt_decode(tempToken);
//     // console.log("decoded", decode);
//     // console.log("decode.userdata", decode.userdata);
//     if (decode) {
//       userdata = await JSON.parse(decode.userdata);
//     }
//     if (userdata) {
//       decKeyForApi = await decrypted("abcd");
//       console.log("decode.userdata", userdata, decKeyForApi);
//       // if (userdata?.loginCode) {
//       console.log("loginCode", userdata?.loginCode);
//       localStorage.setItem("loginCode", userdata?.loginCode);

//       // }
//     }
//   }
// };

export const LOCAL_USER_NAME_START_WITH = "AFX_";

// export const preventCutCopyPaste = () => {
//   document.addEventListener("cut", function (e) {
//     e.preventDefault();
//     return false;
//   });

//   document.addEventListener("copy", function (e) {
//     e.preventDefault();
//     return false;
//   });

//   document.addEventListener("paste", function (e) {
//     e.preventDefault();
//     return false;
//   });
// };

export const disableAutocomplete = () => {
  let inputFields = document.querySelectorAll("input");
  inputFields.forEach(function (input) {
    input.setAttribute("autocomplete", "off");
  });
};

// const key = "ODcmS3EzZnI/QXhybUFjeUpQREo2cHB6";
//87&Kq3fr?AxrmAcyJPDJ6ppz
// const parseKey = CryptoJS.enc.Base64.parse(key);

/**
 * New Encryption Logic added
 */
const key = "ABwDEFjHIJKLMtOsQrSTUxWODcmS3EzZ";
const parseKey = CryptoJS.enc.Utf8.parse(key);
let ivForEncryotion = CryptoJS.enc.Utf8.parse(key.substring(0, 16));

export const encrypted: any = (obj: any) => {
  return CryptoJS.AES.encrypt(obj, parseKey, {
    iv: ivForEncryotion,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
};

export const decrypted = (obj: any) => {
  if (isNullUndefinedOrBlank(obj)) {
    return;
  }
  return CryptoJS.AES.decrypt(obj, parseKey, {
    iv: ivForEncryotion,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString(CryptoJS.enc.Utf8);
};

// export const encrypted: any = (obj: any) => {
//   return CryptoJS.AES.encrypt(obj, parseKey, {
//     iv: ivForEncryotion,
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7,
//   }).toString();
// };

// export const decrypted = (obj: any) => {
//   if (isNullUndefinedOrBlank(obj)) {
//     return;
//   }
//   var bytes = CryptoJS.AES?.decrypt(obj, parseKey, {
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7,
//   });
//   var originalText: any = bytes.toString(CryptoJS.enc.Utf8);
//   if (isNullUndefinedOrBlank(originalText)) {
//     return;
//   }
//   return originalText;
//   return JSON?.parse(originalText);
// };

export const hasDoubleExtension = (fileName: any) => {
  if (fileName) {
    let doubleExtension: boolean = /\.[^.]+?\.[^.]+$/.test(fileName);
    let fileExtensionMaxLength = fileName?.split(".");
    if (fileExtensionMaxLength?.length === 2) {
      if (fileExtensionMaxLength?.[1]?.length > 4) {
        te("Maximum length of file extension should be 4");
        return true;
      }
    }
    if (doubleExtension) {
      te("Please remove double extension");
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// let secretkey = "ABCDEFGHIJKLMNOPQRSTUVW" + decKeyForApi;
// let parseKeyForApi = CryptoJS.enc.Utf8.parse(secretkey);
// let iv = CryptoJS.enc.Utf8.parse(secretkey.substring(0, 16));

export const encryptedForApiUrl: any = async (obj: any, tempToken?: any) => {
  let decode: any;
  let userdata: any;
  if (tempToken) {
    decode = jwt_decode(tempToken);
    // console.log("decoded", decode);
    // console.log("decode.userdata", decode.userdata);
    if (decode) {
      userdata = await JSON.parse(decode.userdata);
    }
    if (userdata) {
      if (userdata?.loginCode) {
        let decKeyForApi = await decrypted(userdata?.loginCode);
        // console.log("loginCode", userdata?.loginCode, decKeyForApi);
        let secretkey = "ABwDEFjHIJKLMtOsQrSTUxW" + decKeyForApi;
        let parseKeyForApi = CryptoJS.enc.Utf8.parse(secretkey);
        let iv = CryptoJS.enc.Utf8.parse(secretkey.substring(0, 16));
        // console.log(secretkey, parseKeyForApi, iv, "parseKeyForApi");
        return CryptoJS.AES.encrypt(obj, parseKeyForApi, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7,
        }).toString();
      }
    }
  }
};

// export const decryptedForApiUrl: any = (obj: any) => {
//   return CryptoJS.AES.decrypt(obj, parseKeyForApi, {
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7,
//   }).toString(CryptoJS.enc.Utf8);
// };

// export const setCookie = (name: string, value: any, days?: any) => {
//   const expirationDate = new Date();
//   expirationDate.setDate(expirationDate.getDate() + days);

//   document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
// };

// export const getCookie = (name: string) => {
//   const cookies = document.cookie
//     .split("; ")
//     .find((row) => row.startsWith(`${name}=`));

//   return cookies ? cookies.split("=")[1] : null;
// };

// export const deleteCookie = (name: string) => {
//   document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
// };

export const maskValue = (val) => {
  if (val) {
    const maskValue = val?.replace(/.{1,8}/, (m) => "X".repeat(m.length)) || "";
    return maskValue;
  }
};
export const isArrayEmpty = (arr) => !Array.isArray(arr) || arr.length === 0;

export const formatDate = (date, format = "YYYY-MM-DD") => {
  if (!date) return "";
  const formattedDate = moment(new Date(date)).format(format);
  return formattedDate === "Invalid date" ? "-" : formattedDate;
};

export const NO_TABLE_CATEGORY_FOUND_MSG = "No Table Category found.";

export const NO_REPORT_CATEGORY_FOUND_MSG = "No Report Category found.";

export const SCHEME_FOR_DROPDOWN = [
  {
    label: "Branch",
    value: "branch",
  },
  {
    label: "Dealer",
    value: "dealer",
  },
];
export const NO_IMPORT_CATEGORY_FOUND_MSG = "No Import Category found.";

export const sanitizeInputValue = (inputString) => { 
  let sanitizedString = inputString.replace(/[^0-9.]/g, '');
  let dotIndex = sanitizedString.indexOf('.');
  if (dotIndex !== -1) {
      sanitizedString = sanitizedString.slice(0, dotIndex + 1) + sanitizedString.slice(dotIndex + 1).replace(/\./g, '');
  }
  return sanitizedString;
}

export const roundValueToTwoDecimal = (val)=>{
  console.log(val, 'input')
  const floatVal:any = parseFloat(val);
  if(floatVal){
    console.log(floatVal,'floatVal if', (Math.round(floatVal * 100) / 100).toString())
    return (Math.round(floatVal * 100) / 100).toString();
  }
  else{
    console.log(val,'val else')
  }
  
}

export function hasMoreThanTwoDecimals(value) {
  // Convert the value to a string and split it at the decimal point
  let parts = value.toString().split(".");

  // Check if there is a decimal part and if its length is greater than 2
  if (parts.length > 1 && parts[1].length > 2) {
      return true;
  }
  return false;
}

export const emptySlab = 'Please enter values for ROI and Commission for all the rows in the slab.';
