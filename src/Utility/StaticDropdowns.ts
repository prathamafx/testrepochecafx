import moment from "moment";
import { EnumForAgencyMasterType } from "./Helper";
export const DESIGNATIONS = [
  { label: "Director", value: "Director" },
  { label: "Partner", value: "Partner" },
  { label: "Proprietor", value: "Proprietor" },
];

export const AGENCY_TYPE = [
  {
    label: EnumForAgencyMasterType.CREDIT_FIELD_INVESTIGATION,
    value: EnumForAgencyMasterType.CREDIT_FIELD_INVESTIGATION,
  },
  {
    label: EnumForAgencyMasterType.CREDIT_LEGAL,
    value: EnumForAgencyMasterType.CREDIT_LEGAL,
  },
  {
    label: EnumForAgencyMasterType.CREDIT_VALUATION,
    value: EnumForAgencyMasterType.CREDIT_VALUATION,
  },
  {
    label: EnumForAgencyMasterType.MARKETING,
    value: EnumForAgencyMasterType.MARKETING,
  },
  {
    label: EnumForAgencyMasterType.COLLECTION,
    value: EnumForAgencyMasterType.COLLECTION,
  },
];
export const EDUCATIONQUALIFICATION = [
  { label: "Matric/High School", value: "Matric/High School" },
  {
    label: "Intermediate/Higher Secondary/12th Standard",
    value: "Intermediate/Higher Secondary/12th Standard",
  },
  { label: "Certificate", value: "Certificate" },
  { label: "Diploma", value: "Diploma" },
  { label: "BA", value: "BA" },
  { label: "BA (Hons.)", value: "BA (Hons.)" },
  { label: "B. Com.", value: "B. Com." },
  { label: "B.Com. (Hons.)", value: "B.Com. (Hons.)" },
  { label: "B.Sc.", value: "B.Sc." },
  { label: "B.Sc. (Hons.)", value: "B.Sc. (Hons.)" },
  { label: "B. Ed.", value: "B. Ed." },
  { label: "LLB", value: "LLB" },
  { label: "BE", value: "BE" },
  { label: "B. Tech", value: "B. Tech" },
  { label: "AMIE (Part A & Part B)", value: "AMIE (Part A & Part B)" },
  { label: "B.Sc. (Engg.)", value: "B.Sc. (Engg.)" },
  { label: "BCA", value: "BCA" },
  { label: "BBA", value: "BBA" },
  {
    label: "Graduation issued by Defence (Indian Army, Air Force, Navy)",
    value: "Graduation issued by Defence (Indian Army, Air Force, Navy)",
  },
  { label: "B. Lib.", value: "B. Lib." },
  { label: "B. Pharm.", value: "B. Pharm." },
  { label: "ICWA", value: "ICWA" },
  { label: "CA", value: "CA" },
  { label: "PG Diploma", value: "PG Diploma" },
  { label: "MA", value: "MA" },
  { label: "M.Com.", value: "M.Com." },
  { label: "M. Sc.", value: "M. Sc." },
  { label: "M.Ed.", value: "M.Ed." },
  { label: "LLM", value: "LLM" },
  { label: "ME", value: "ME" },
  { label: "M. Tech.", value: "M. Tech." },
  { label: "M. Sc. (Engg.)", value: "M. Sc. (Engg.)" },
  { label: "MCA", value: "MCA" },
  { label: "MBA", value: "MBA" },
  { label: "Others", value: "Others" },
];
export const EXPERIENCETYPE = [
  { label: "Housing Loans", value: "Housing Loans" },
  { label: "Personal Loans", value: "Personal Loans" },
  { label: "Credit Cards", value: "Credit Cards" },
  { label: "Mobiles", value: "Mobiles" },
  { label: "Others", value: "Others" },
];
export const ACTIVITYISCONTINUING = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];
export const ISREGCOMPOSITION = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];
export const SERVICEPROVIDEDUNDERCRM = [
  { label: "Yes", value: "true" },
  { label: "No", value: "false" },
];
export const ISMARKEDFORHIGHERTDSRATE = [
  { label: "Yes", value: "true" },
  { label: "No", value: "false" },
];
export const GOODSSALEMORETHAN50LAC = [
  { label: "Yes", value: "true" },
  { label: "No", value: "false" },
];
export const MULTIOFFICEVENDOR = [
  { label: "Yes", value: "true" },
  { label: "No", value: "false" },
];
export const PARENTSUPPLIER = [
  { label: "Yes", value: "true" },
  { label: "No", value: "false" },
];
export const SUPLLIERSUBCONRACT = [
  { label: "Yes", value: "true" },
  { label: "No", value: "false" },
];
export const HSNSAC = [
  { label: "Services Provided By Recovery Agents", value: 998592 },
  { label: "Architect's Services", value: 998321 },
  { label: "Banking And Other Financial Services", value: 997119 },
  { label: "Other Services Auxiliary To Financial Services", value: 997159 },
  { label: "Business Exhibition Services", value: 998596 },
  { label: "Consulting Engineer's Services", value: 998331 },
  {
    label: "Other Professional, Technical And Business Services N.E.C.",
    value: 998399,
  },
  { label: "Legal Consultancy Services", value: 998216 },
  {
    label:
      "Legal Advisory And Representation Services Concerning Other Fields Of Law",
    value: 998212,
  },
  {
    label:
      "Legal Documentation And Certification Services Concerning Other Documents",
    value: 998214,
  },
  { label: "Other Legal Services N.E.C.", value: 998216 },
  {
    label: "Architectural Services For Residential Building Projects",
    value: 998322,
  },
  {
    label: "Architectural Services For Non-Residential Building Projects",
    value: 998323,
  },
  {
    label:
      "Other Information Services FI Services (Field Investigation Agents)",
    value: 998598,
  },
  {
    label:
      "Legal Documentation Certification Concerning Patents, Copyrights, Other Intellectual Property Right",
    value: 998213,
  },
  { label: "Other Support Services N.E.C.", value: 998599 },
  {
    label:
      "Services Provided For A Fee/Commission Or Contract Basis On Retail Trade",
    value: 996211,
  },
  {
    label: "Other Professional, Technical And Business Services N.E.C.",
    value: 998399,
  },
];
export const FREQUNCYOFGSTRETURNFLLING = [
  { label: "Monthly", value: "Monthly" },
  { label: "Quarterly", value: "Quarterly" },
];
export const ORGANIZATIONREGISTEREDUNDERMSMED = [
  { label: "Yes", value: "true" },
  { label: "No", value: "false" },
];
export const SUBAGENTSTATUS = [
  { label: "Active", value: true },
  { label: "Inactive", value: false },
];
export const NATUREOFBUSINESS = [
  { label: "Nature Of Business 1", value: "Nature Of Business 1" },
  { label: "Nature Of Business 2", value: "Nature Of Business 2" },
  { label: "Nature Of Business 3", value: "Nature Of Business 3" },
  { label: "Nature Of Business 4", value: "Nature Of Business 4" },
];
export const NATUREOFEXPERIENCE = [
  { label: "Nature Of Exp 1", value: "Nature Of Exp 1" },
  { label: "Nature Of Exp 2", value: "Nature Of Exp 2" },
  { label: "Nature Of Exp 3", value: "Nature Of Exp 3" },
  { label: "Nature Of Exp 4", value: "Nature Of Exp 4" },
];
export const LANGUAGES = [
  { label: "Hindi", value: "Hindi" },
  { label: "English", value: "English" },
  { label: "Marathi", value: "Marathi" },
];
export const AREAOFOERATION = [
  { label: "Base Location 1", value: 1 },
  { label: "Base Location 2", value: 2 },
  { label: "Base Location 3", value: 3 },
];
export const ACCOUNTTYPE = [
  { label: "Savings", value: "Savings" },
  { label: "Current", value: "Current" },
];
export const NATUREOFDEFAULTERSYOUCANCONTACT = [
  { label: "Soft Bucket", value: "Soft Bucket" },
  { label: "VIP Customers", value: "VIP Customers" },
  { label: "Chronic Default", value: "Chronic Default" },
];
export const CHOICEOFAREAOFFICE = [
  { label: "Area Office 1", value: "Area Office 1" },
  { label: "Area Office 2", value: "Area Office 2" },
  { label: "Area Office 3", value: "Area Office 3" },
  { label: "Area Office 4", value: "Area Office 4" },
];

export const dayOfCycleDropDown = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },
  {
    label: "4",
    value: "4",
  },
  {
    label: "5",
    value: "5",
  },
  {
    label: "6",
    value: "6",
  },
  {
    label: "7",
    value: "7",
  },
  {
    label: "8",
    value: "8",
  },
  {
    label: "9",
    value: "9",
  },
  {
    label: "10",
    value: "10",
  },
  {
    label: "11",
    value: "11",
  },
  {
    label: "12",
    value: "12",
  },
  {
    label: "13",
    value: "13",
  },
  {
    label: "14",
    value: "14",
  },
  {
    label: "15",
    value: "15",
  },
  {
    label: "16",
    value: "16",
  },
  {
    label: "17",
    value: "17",
  },
  {
    label: "18",
    value: "18",
  },
  {
    label: "19",
    value: "19",
  },
  {
    label: "20",
    value: "20",
  },
  {
    label: "21",
    value: "21",
  },
  {
    label: "22",
    value: "22",
  },
  {
    label: "23",
    value: "23",
  },
  {
    label: "24",
    value: "24",
  },
  {
    label: "25",
    value: "25",
  },
  {
    label: "26",
    value: "26",
  },
  {
    label: "27",
    value: "27",
  },
  {
    label: "28",
    value: "28",
  },
  {
    label: "29",
    value: "29",
  },
  {
    label: "30",
    value: "30",
  },
  {
    label: "31",
    value: "31",
  },
];

export const roleHierarchyDropdown = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },
  {
    label: "4",
    value: "4",
  },
  {
    label: "5",
    value: "5",
  },
  {
    label: "6",
    value: "6",
  },
  {
    label: "7",
    value: "7",
  },
  {
    label: "8",
    value: "8",
  },
  {
    label: "9",
    value: "9",
  },
  {
    label: "10",
    value: "10",
  },
];

export const QuarterlyDropDown = () => {
  const data: any = [];
  for (let i = 1; i <= 90; i++) {
    data.push({ label: i, value: i });
  }
  return data;
};

export const dayOfday = () => {
  const data: any = [];
  for (let i = 1; i <= 180; i++) {
    data.push({ label: i, value: i });
  }
  return data;
};

export const yearDropdown = () => {
  const data: any = [];
  for (let i = 2018; i <= moment().year(); i++) {
    data.push({ label: i, value: i });
  }
  return data;
};

export const invoiceTypeDropDown = [
  {
    label: "Payout",
    value: "application",
  },
  {
    label: "Ad Hoc",
    value: "adhoc",
  },
  {
    label: "Debit Note",
    value: "debitNote",
  },
  {
    label: "Credit Note",
    value: "creditNote",
  },
];

export const TERMS_AND_CONDITIONS_AGREEMENT_STATUS = [
  { label: "Active", value: true },
  { label: "Inactive", value: false },
];

export const PAYOUT_APPLICABLE = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];

export const FREQUENCY_DROPDOWN = [
  {
    label: "Weekly",
    value: "Weekly",
  },
  {
    label: "Monthly",
    value: "Monthly",
  },
  {
    label: "Bi Monthly",
    value: "Bi Monthly",
  },
  {
    label: "Quarterly",
    value: "Quarterly",
  },
  {
    label: "Half Yearly",
    value: "Half Yearly",
  },
  {
    label: "Yearly",
    value: "Yearly",
  },
  {
    label: "Adhoc",
    value: "Adhoc",
  },
];

export const SPECIALDEALERSCHEME = [
  { label: "Greater than", value: "gt" },
  { label: "Less than", value: "lt" },
];

export const IMPORT_REPORT_DROPDOWN = [
  { label: "Agent Onboard (Payouts)", value: "agentOnboard" },
  { label: "Active Cases (Payouts)", value: "activeCases" },
  { label: "Employee Onboard (Incentives)", value: "employeeOnboard" },
  { label: "Active Cases (Incentives)", value: "activeCasesIncentives" },
  { label: "Hygiene Factors (Incentives)", value: "hygieneFactors" },
  { label: "Branch Office Hierarchy", value: "hierarchy" },
];
export const FREQUENCY_DROPDOWN_FOR_MUTHOOT = [
  {
    label: "Monthly",
    value: "Monthly",
  },
  {
    label: "Quarterly",
    value: "Quarterly",
  },
  {
    label: "Adhoc",
    value: "Adhoc",
  },
];
export const AREA_TYPE_DROPDOWN = [
  { label: "AO", value: "AO" },
  { label: "BO", value: "BO" },
];
