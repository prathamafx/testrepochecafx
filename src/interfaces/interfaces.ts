import { RouteProps } from "react-router-dom";

export const EnumForAgentStatus = {
  ACTIVE: "Active",
  SUSPEND: "Suspend",
  INACTIVE: "Inactive",
  LEAVE: "Leave",
  TERMINATE: "Terminate",
  EXPIRED: "Expired",
} as const;
export const EnumForRoleCategory = {
  AGENT: "Agent",
  LICHFL: "DCB",
  LENDER: "Lender",
} as const;
export const EnumForRole = {
  MAKER: "maker",
  CHECKER: "checker",
  APPROVER: "approver",
} as const;
export const EnumForCostSheetStatus = {
  MAKER_FREEZE: "makerFreeze",
  CHECKER_FREEZE: "checkerFreeze",
  APPROVER_FREEZE: "approverFreeze",
} as const;
export const EnumForChartCategory = {
  ACCOUNTS: "Accounts",
  AGENT_ONBOARDING: "Agent Onboarding",
  AGENTS: "Agents",
  PAYOUTS: "Payouts",
} as const;
export const EnumForLenderChartList = {
  ACTIVE_AGENTS: "Active Agents",
  ALL_AGENTS: "All Agents",
  AGENTS_BY_AGENCYTYPE: "Agents by Agency Type",
  AGENTS_NPA: "Agents NPA",
  AGENTS_TO_RE_REGISTER: "Agents to Re Register",
  AGENTS_RE_REGISTERED: "Agents Re Registered",
  PAYOUT_CASES_BY_AGENCY_TYPE: "Payout Cases by Agency Type",
  PAYOUT_CASES_BY_SUB_AGENCY_TYPE: "Payout Cases by Sub Agency Type",
  PAYOUT_CASES_BY_PRODUCT: "Payout cases By Product",
  PAYOUTS_BY_STATUS: "Payouts by Status",
  PAYOUTS_BY_TYPE: "Payouts by Type",
  PAYOUTS_BY_AMOUNT: "Payouts by Amount",
  PAYOUTS_FINALIZED: "Payouts Finalized",
  INVOICES_BY_STATUS: "Invoices by Status",
  CREDIT_NOTES: "Credit Notes",
  DEBIT_NOTES: "Debit Notes",
  PAYOUT_CASES: "Payout Cases",
  COUNT_OF_CALCULATED_PAYOUTS: "Count of Calculated Payouts",
  AMOUNT_OF_CALCULATED_PAYOUTS: "Amount of Calculated Payouts",
  PAYOUT_BY_STATUS_AMOUNT: "Payouts by Status (Amount)",
  EMPLOYEES_BY_TYPE: "Employees by Type",
  COUNT_OF_INCENTIVES_CALCULATED: "Count of Incentives Calculated",
  AMOUTNT_OF_INCENTIVES_CALCULATED: "Amount of Incentives Calculated",
  INCENTIVES_AMOUNT_BY_EMPLOYEE_TYPE: "Incentives Amount by Employee Type",
  COUNT_OF_INCENTIVES_CALCULATED_INDIA: "Count of Incentives Calculated India",
  AMOUNT_OF_INCENTIVES_CALCULATED_INDIA:
    "Amount of Incentives Calculated India",
} as const;

export const EnumForAgentChartList = {
  ASSIGNED_PAYOUT_CASES: "Assigned Payout Cases",
  PAYOUT_CASES_BY_PRODUCT_AGENT: "Payout cases By Product Agent",
  PAYOUT_BY_STATUS_AGENT: "Payouts by Status Agent",
  PAYOUT_BY_TYPE_AGENT: "Payouts by Type Agent",
  PAYOUT_BY_AMOUNT_AGENT: "Payouts by Amount Agent",
  PAYOUT_FINALISED_AGENT: "Payouts Finalized Agent",
  INVOICE_BY_STATUS_AGENT: "Invoices by Status Agent",
  PAYOUT_CASES_AGENT: "Payout Cases Agent",
  COUNT_OF_CALCULATED_PAYOUTS_AGENT: "Count of Calculated Payouts Agent",
  AMOUNT_OF_CALCULATED_PAYOUTS_AGENT: "Amount of Calculated Payouts Agent",
  CREDIT_NOTES_AGENT: "Credit Notes Agent",
  DEBIT_NOTES_AGENT: "Debit Notes Agent",
  PAYOUT_BY_STATUS_AMOUNT_AGENT: "Payouts by Status (Amount) Agent",
} as const;
export const EnumForMarkType = {
  U: "U",
  D: "D",
} as const;
export const EnumForAsseesseeType = {
  P: "Individual",
  C: "Company",
  H: "Hindu Undivided Family",
  A: "Association of Persons",
  B: "Body of Individuals",
  G: "Government Agency",
  J: "Artificial Juridical Person",
  L: "Local Authority",
  F: "Firm / Limited Liability Partnership",
  T: "Trust",
} as const;
export const AsseesseeTypes = [
  // "P",
  "C",
  "H",
  "A",
  "B",
  "G",
  "J",
  "L",
  "F",
  "T",
];

export const AsseesseeTypesForProprietorship = [
  "P",
  "C",
  "H",
  "A",
  "B",
  "G",
  "J",
  "L",
  "F",
  "T",
];

export const EnumForLenderCeditNoteRequest = {
  CNM_S: "CNM_S",
  CNM_R: "CNM_R",
  CNC_PQ: "CNC_PQ",
  CNC_A: "CNC_A",
} as const;

export const EnumForLenderDebitNoteRequest = {
  DN_RC: "DN_RC",
  DN_RJ: "DN_RJ",
  DN_A: "DN_A",
} as const;

export const EnumForAdhocPayoutRequest = {
  APM_S: "APM_S",
  APM_R: "APM_R",
  APA_PQ: "APA_PQ",
  APA_A: "APA_A",
} as const;

export const EnumForAgentOnboardRequest = {
  ADM_S: "ADM_S",
  ADM_R: "ADM_R",
  ADM_D: "ADM_D",
  ADA_S: "ADA_S",
  ADA_A: "ADA_A",
} as const;

export const EnumForAgentOnboardReRegisterRequest = {
  ARRM_REC: "ARRM_REC",
  ARRM_REJ: "ARRM_REJ",
  ARRA_S: "ARRA_S",
} as const;

export const statusArray: any = [
  EnumForAgentStatus.ACTIVE,
  EnumForAgentStatus.SUSPEND,
  EnumForAgentStatus.INACTIVE,
  EnumForAgentStatus.LEAVE,
  EnumForAgentStatus.TERMINATE,
  EnumForAgentStatus.EXPIRED,
];

export enum EnumForDeActivateAgentStatus {
  ACTIVE = "Active",
  SUSPEND = "Suspend",
  INACTIVE = "Inactive",
  LEAVE = "Leave",
  TERMINATE = "Terminate",
  EXPIRED = "Expired",
}

export const EnumForPreAgentStatus = {
  SUBMITTED: "Submitted",
  REJECTED: "Rejected",
  DRAFT: "Draft",
  APPROVED: "APPROVED",
} as const;

export const EnumForStaffStatus = {
  SUBMITTED: "Submitted",
  REJECTED: "Rejected",
  DRAFT: "Draft",
  APPROVED: "APPROVED",
  ACTIVE: "Active",
  INACTIVE: "Inactive",
  RECEIVED: "Received",
} as const;

export const EnumForPreAgentReRegistrationStatus = {
  RE_REGISTRATION: "RE_REGISTRATION",
  RE_SUBMITTED: "RE_SUBMITTED",
  RE_REJECTED: "RE_REJECTED",
  RE_APPROVED: "RE_APPROVED",
} as const;

export const EnumForAgencyType = {
  FI: "FI",
  VALUER: "VALUER",
  ADVOCATE: "ADVOCATE",
  DSA: "DSA",
  HLA: "HLA",
  CRA: "CRA",
  DME: "DME",
  CONNECTOR: "CONNECTOR",
  CORP: "CORP",
  DRA: "DRA",
  EA: "EA",
  RO: "RO",
  BO: "BO",
  AO: "AO",
} as const;

export const EnumForAgentType = {
  FIRM: "FIRM",
  INDIVIDUAL: "INDIVIDUAL",
} as const;

export const EnumForDocumentType = {
  GST_CERTIFICATE: "GST_CERTIFICATE",
  PAN: "PAN",
  AADHAAR: "AADHAAR",
  AGREEMENT: "AGREEMENT",
  AOA: "AOA",
  MOA: "MOA",
  VOTERID: "VOTERID",
  MARKSHEET: "MARKSHEET",
} as const;

export const PermissionValues = {
  write: "WRITE",
  read: "READ",
};

export const APIResponseEnum = {
  SQI: "SQI", // Security Question Answered
  SQNI: "SQNI", // Security Question Not Answered
  PC: "PC", //PASSWORD CHANGED
  PS: "PS",
  UNF: "UNF", // User Not Found
  UF: "UF", // User Found
  WP: "WP", // Wrong Password
  LNF: "LNF", // Login Not FOund
  SQA: "SQA", // Security Question Answered
  SQNA: "SQNA", // Security Question Not Answered
  DS: "DS", // Data Saved
  PF: "PF", // Profile Found
  PNF: "PNF", // profile not found
  IP: "IP", // Invalid PAN
  IT: "IT", // invalid token
  TE: "TE", // Token exipred
  IF: "IF", //invalid format
  SCS: "SCS", // Success
  OTPS: "OTPS", // OTP sent
  OTPNS: "OTPNS", // OTP Not Sent
  OTPM: "OTPM", // OTP Matched
  OTPNM: "OTPNM", // OTP Not Matched
  OTPEX: "OTPEX", // OTP Expired
  AV: "AV", // Account Verified
  NM: "NM", // Name Mismatch
  IA: "IA", // Invalid Account
  CS: "CS", // Customer Saved
  DOBMISMATCH: "DOBMISMATCH", // dob mismatch with existing profile
  DF: "DF", // Data Found
  CNF: "CNF", // customer not found
  FNF: "FNF", // FD not found
  URL: "URL", // payment URL
  INVPAYURL: "INVPAYURL", //  Invaid URL
  PLGF: "PLGF", // payment link generation failed
  PAID: "PAID", // paid through check
  NDF: "NDF", // No Data Found
  FAIL: "FAIL", // Fail (Cash Limit Check)
  INV_IFSC: "INV_IFSC", // invalid ifsc
  BIGFILE: "BIGFILE",
  COMPFAIL: "COMPFAIL",
  DD: "DD", // DATA DELETED
  DU: "DU", //DATA UPDATED
  DA: "DA", //DATA ADDED
  PRLS: "PRLS", //PASSWORD LINK SENT,
  PLE: "PLE", // PASSWORD LINK EXPIRED
  PA: "PA", //PRODUCT ADD,
  PAE: "PAE", //PRODUCT ALREADY EXIST
  PCAE: "PCAE", //PRODUCT CODE ALREADY EXIST
  PU: "PU", //PRODUCT UPDATED
  PD: "PD", //PRODUCT DELETED
  DNF: "DNF", // Data Not Found
  GT: "GT", // GATEWAY
  NRFP: "NRFP",
  DAE: "DAE",
  SC: "SC",
  NF: "NF", // Notifications Found
  NNF: "NNF", // Notifications not found
  DCAP: "DCAP", //Dsa code already present
  LOS: "LOS", //Logout Successfully
  LS: "LS",
  LIDNF: "LIDNF",
  ANF: "ANF", // Application not found
  OS: "OS", // OTP sent
  OE: "OE", // OTP expired
  OV: "OV", // OTP verified
  OI: "OI", // OTP Invalid
};

export interface ResponseWrapperDTO {
  status: string;
  message: string;
  data: any;
  path?: string;
  error: boolean;
  type?: any;
}

export interface PageRequest {
  pageNo: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: string;
  searchText?: string;
  ids?: any;
}

export interface PreAgentPageRequest extends PageRequest {
  agentStatus?: string;
  city?: string;
  agencyType?: string;
  agentType?: string;
  dealerCode?: any;
  dealerNameCode?: any;
  productName?: any;
  state?: string;
}
export interface AgentPageRequest extends PageRequest {
  isActiveList?: boolean;
  agentStatus?: string;
  city?: string;
  agencyType?: string;
  agentType?: string;
  dealerCode?: any;
  dealerNameCode?: any;
  productName?: any;
  state?: string;
}
export interface CostSheetApplicationsRequest extends PageRequest {
  loginType?: string;
  agencyType?: any;
  agentId?: any;
  product?: any;
  year?: any;
  month?: any;
  id?: any;
  applicationNo?: any;
  pddStatus?: any;
  createdDate?: any;
  frequencyFromDate?: any;
  frequencyToDate?: any;
  dealerId?: any;
  fromDate?: any;
  toDate?: any;
  applicationDate?: any;
  empId?: any;
  employeeTypeId?: any;
  schemeidGrp?: string;
  branchId?: any;
  state?: any;
}

export interface CommonProps {
  className: string | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  searchTxt: string | undefined;
  value: string | number | readonly string[] | undefined;
}

export interface ModalContextProps {
  modal: boolean;
  handleModal: (content?: any, value?: any, dismissModal?: boolean) => void;
  modalContent: any;
  modalValue: any;
}

export interface RoutesList {
  path: string; // the url
  icon: JSX.Element;
  name: string; // name that appear in Sidebar
  exact: boolean;
}

export interface PaginationProps {
  onPageChange: any;
  totalCount: number;
  siblingCount?: 1 | undefined;
  currentPage: number;
  pageSize: number;
  className: string;
  onPageSizeChange: any;
  otherHtml?: any;
}

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  text?: any;
  disabled?: any;
  icon?: JSX.Element;
  children?: any;
}

export interface TextFieldProps {
  name: any;
  title?: any;
  label: string;
  type: string;
  placeholder: string;
  maxLength: any;
  width: any;
  value?: any;
  disabled?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
  error: ((errorMessage: string) => React.ReactNode) | undefined;
  onPaste?: React.ClipboardEventHandler<HTMLInputElement> | undefined;
  onCopy?: React.ClipboardEventHandler<HTMLInputElement> | undefined;
  onCut?: React.ClipboardEventHandler<HTMLInputElement> | undefined;
}

export interface RouterProps {
  component: any;
  path: string;
  caseSensitive?: boolean;
}

export interface DropdownListFormat {
  label: string;
  value: any;
  sub?: Array<DropdownListFormat>;
  other?: any;
}

export interface AgentAuthorisedRepresentative {
  id: number;
  mobileNo: number;
  panNo: string;
  name: string;
  address: string;
  pincode: number;
  city: string;
  state: string;
  photo: any;
  signature: any;
  photoFileName: string;
  signatureFileName: string;
  department: string;
  emailId: string;
  agentDetails: AgentDetails;
  agentId: number;
  createdDate: any;
  updatedDate: any;
}
export interface AgentBankdetails {
  id: number;
  ifscCode: string;
  bankName: string;
  bankBranch: string;
  accountNo: string;
  accountName: string;
  accountType: string;
  agentDetails: AgentDetails;
  agentId: string;
  micrCode: string;
  createdDate: any;
  updatedDate: any;
  isBankVerified: boolean;
}
export interface BankACDetails {
  ifsc: string;
  micr: string;
  branch: string;
  bank: string;
  acNo: string;
  acName: string;
  nameMatchedScore?: any;
}
export interface AgentDetails {
  id: string;
  agentCode: string;
  agencyName: string;
  fatherOrHusbandName: string;
  panNo: string;
  panName: string;
  mobileNo: string;
  alternateMobileNo: string;
  emailId: string;
  directorId: string;
  website: string;
  // address: string;

  // new Fields Start
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  addressLine5: string;
  backOffice: string;
  panIssueDate: any;
  panFirstName: string;
  panLastName: string;
  panMiddleName: string;
  firmPanName: string;
  panVerificationStatus: string;
  // new Fields End

  pinCode: string;
  city: string;
  state: string;
  country: string;
  doi: any;
  status: string;
  gstNo: any;
  empanelmentDate: any;
  agencyTypeId: string;
  agentTypeId: string;
  createdDate: any;
  updatedDate: any;
  agentType: string;
  name: string;
  designation: string;
  fatherName: string;
  aadhaarNo: string;
  dob: any;
  agentConstitutionType: string;
  agentDirectors: Array<AgentDirector>;
  agentAuthorisedRepresentatives: Array<AgentAuthorisedRepresentative>;
  agentPastExperiences: Array<AgentPastExperience>;
  agentReferences: Array<AgentReference>;
  agentGSTDetails: Array<AgentGSTDetails>;
  agentBankDetails: Array<AgentBankdetails>;
  agentDocuments: Array<AgentDocument>;
  subAgentDetails: Array<SubAgentDetails>;
  agentProfile: AgentProfile;
  agentOthers: AgentOthers;
  baseAreaOffice: string;
  assesseeType: string;
  // isMarkedForHigherTDSRate: boolean;
  // fromDateForHigherTDSRate: any;
  payableControlCode: string;
  parentSupplier: boolean;
  parentSupplierCode: string;
  supplierSubContract: boolean;

  agencyType: string;
  inactiveReason: string;
  isAgentRenewRequired: boolean;
  renewStatus: string;
  npa: any;

  areaType: string;

  isPanVerified: boolean;
  isMobileNumberVerified: boolean;
  isAltMobileNumberVerified: boolean;
  isEmailVerified: boolean;

  // imeiNo: any;
  // imeiNoTwo: any;
  isPayoutApplicable?: boolean;
  productMapping?: any;
  manufacturer?: any;
  dealerId: string;
  altAddressLine1: string;
  altAddressLine2: string;
  altAddressLine3: string;
  altAddressLine4: string;
  altAddressLine5: string;
  altCountry: any;
  altPinCode: any;
  altCity: any;
  altState: any;
  secondaryAdrsFlag: boolean;
  isTADealer: boolean;
  dealerCode?:string;
  dealerLocation?:string;
  dealerName?:string;
}

export interface PanDetails {
  pan: string;
  name: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  dob: any;
  mobileNo: string;
  emailId: string;
  issueDate: any;
  pinCode: string;
  city: string;
  state: string;
  country: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  addressLine5: string;
}
export interface AgentDirector {
  id: number;
  mobileNo: any;
  panNo: string;
  name: string;
  designation: string;
  address: string;
  pinCode: string;
  city: string;
  state: string;
  photo: any;
  emailId: string;
  fatherName: string;
  aadhaarNo: string;
  dob: string;
  educationQualification: string;
  markSheet: string;
  photoFileName: string;
  keyPerson: boolean;
}
export interface AgentDocument {
  id: number;
  attachment: string;
  attachmentName: string;
  agentId: number;
  documentTypeId: number;
  documentTypeName: string;
  createdDate: any;
  updatedDate: any;
  fileName: any;
  document: any;
  agentDirectorId: any;
}
export interface AgentGSTDetails {
  id: number;
  gstNo: string;
  tradeName: string;
  address: string;
  pinCode: number;
  city: string;
  state: string;
  typeOfBusiness: string;
  registrationDate: any;
  gstVerificationStatus: string;
  agentDetails: AgentDetails;
  agentId: number;
  isRegComposition: boolean;
  createdDate: any;
  updatedDate: any;
}
export interface AgentOthers {
  id: string;
  operationArea: string;
  agentDetails: AgentDetails;
  agentId: number;
  createdDate: any;
  updatedDate: any;
  serviceTaxRegistrationNo: any;
  // operationAreaList: Array<number>;
  // new Fields Start
  isServiceProvidedUnderRCM: any;
  isOrganizationRegisteredUnderMSMED: any;

  // lowerTDSCertificateRate: any;
  hsnOrSac: any;
  serviceItemMasterId: any;
  reportingTo: any;
  cibilScore: string;
  // new Fields End
}

export interface AgentPastExperience {
  id: number;
  experienceType: string;
  experienceOthers: string;
  institutionName: string;
  natureOfExperience: string;
  tenure: number;
  noOfCasesDone: number;
  revenueGenerated: number;
  engagementActivityStatus: boolean;
  // new Fields Start
  remark: string;
  // new Fields End
  agentDetails: AgentDetails;
  agentId: number;
  experienceMonths: number;
  experienceYears: number;
  createdDate: any;
  updatedDate: any;
}
export interface AgentProfile {
  id: string;
  yearsInBusiness: any;
  officePhone: any;
  // residencePhone: any;
  // faxNo: any;
  natureOfBusiness: string;
  // presentOccupation: string;
  // yearsInEmployment: any;
  // languagesKnown: string;
  // languages: Array<string>;
  otherInformation: string;
  agentDetails: AgentDetails;
  agentId: number;
  createdDate: any;
  updatedDate: any;
}
export interface AgentReference {
  id: number;
  name: string;
  mobileNo: number;
  address: string;
  pinCode: number;
  city: string;
  state: string;
  agentDetails: AgentDetails;
  agentId: number;
  createdDate: any;
  updatedDate: any;
}
export interface SubAgentDetails {
  id: number;
  subAgentId: string;
  name: string;
  mobileNo: number;
  imeiNo: number;
  imeiNoTwo: number;
  status: boolean;
  agentDetails: AgentDetails;
  agentId: number;
}

// master
export interface AgencyMaster {
  id: number;
  agencyName: string;
  agencyDescription: string;
  agencyBPType: string;
  subAgencyBPType: string;
  bpTypeAndSubTypeMasterId: any;
  isReportingTo: boolean;
}
export interface AgencyTypeMaster {
  id: number;
  name: string;
  constitutionType: string;
}
export interface BankMaster {
  id: number;
  ifscCode: string;
  bankName: string;
  bankBranch: string;
}
export interface DocumentMaster {
  id: number;
  documentName: string;
  allowedExtention: string;
}
export interface PinCodeMaster {
  id: number;
  pinCode: number;
  city: string;
  state: string;
  country: string;
  flag: boolean;
}

export interface DropdownResponse {
  agencyTypeMaster: Array<DropdownListFormat>;
  pincodeMaster: Array<DropdownListFormat>;
  agentStatus: Array<DropdownListFormat>;
  agencyMaster: Array<DropdownListFormat>;
  cityMaster: Array<DropdownListFormat>;
  city_master: Array<DropdownListFormat>;
  inactiveAgentStatus: Array<DropdownListFormat>;
  activeAgentStatus: Array<DropdownListFormat>;
  documentMaster: Array<DropdownListFormat>;
  branchOfficeMaster: Array<DropdownListFormat>;
  agencyConstituiton: any;
  productMaster: Array<DropdownListFormat>;
  year: Array<DropdownListFormat>;
  month: Array<DropdownListFormat>;
  states: Array<DropdownListFormat>;
  agentType: Array<DropdownListFormat>;
  agencyType: Array<DropdownListFormat>;
  subAgencyType: Array<DropdownListFormat>;
  stateOffice: Array<DropdownListFormat>;
  hsnOrSac: Array<DropdownListFormat>;
  controlPayableCode: Array<DropdownListFormat>;
  stateOfficeMaster: Array<DropdownListFormat>;
  other: Array<DropdownListFormat>;
  areaType: Array<DropdownListFormat>;
  requiredReportTo: Array<string>;
  requiredCibil: Array<string>;
  manufacturer: Array<DropdownListFormat>;
  agencyMasterData: Array<DropdownListFormat>;
}

export interface AgentListResponse {
  id: number;
  agentCode: string;
  agentName: string;
  agentType: string;
  agencyType: string;
  mobileNo: string;
  email: string;
  city: string;
  status: string;
  empanelmentDate: any;
  inactiveSince: any;
  startDate: any;
  endDate: any;
  modalOpen: boolean;
  isGlSync: any;
  isPanentSync: any;
  reportingTo: string;
  dealerName: string;
  productName: string;
  dispStatus: string;
  dealerLocation?:string;
}

export interface ProductListRequest extends PageRequest {}

export interface ProductListResponse {
  id: number;
  losCode: string;
  name: string;
  description: string;
  modalOpen: boolean;
}

export interface Product {
  id?: number;
  losCode: string;
  name: string;
  description: string;
  termAndConditionId?: any;
  agreementId?: any;
}

export interface AgencyListRequest extends PageRequest {}

export interface AgencyListResponse {
  id: number;
  agencyName: string;
  agencyDescription: string;
  agencyLOSCode: string;
  agencyType: string;
  modalOpen: boolean;
}

export interface Agency {
  id?: number;
  agencyLOSCode: string;
  agencyName: string;
  agencyDescription: string;
  agencyBPType?: string;
  subAgencyBPType?: string;
  bpTypeAndSubTypeMasterId?: any;
  schemeTypeIds?: any;
  agencyType: string;
  agencyDealerType?: string;
  isReportingTo: boolean;
  isCibilReportRequired: boolean;
  isTADealerRequired: boolean;
  agentSchemeTermsId: any;
}

export interface agentStatusChangeDetails {
  agentId: number;
  status: string;
  startDate?: string;
  endDate?: string;
}
export interface RoleEntity {
  roleId: number;
  roleName: string;
  status: number;
  roleType: string;
  hierarchy: number;
  entryDt: any;
  entryBy: string;
  updatedDt: any;
  updatedBy: string;
  ipAddress: string;
  category: string;
  systemRole: boolean;
}

export interface Page {
  pageUrl: string;
  id: number;
  pageCode: string;
  status: number;
  accessType: string;
}
export interface Notification {
  id: any;
  notificationType: string;
  isNotification: boolean;
}

export interface DebitNote {
  id: string;
  debitNoteNo: string;
  status: string;
  billURL: string;
  description: string;
  comment: string;
  amount: number;
  utr: string;
  productName: string;
  paidAmount: number;
  paymentStatus: string;
  paymentDate: any;
  createdDate: any;
  url: any;
  monthName: string;
  year: number;
  finalAmountAfterDeduction: number;
  invoiceGeneratedId: any;
}

export interface Invoice {
  id: string;
  month: number;
  year: number;
  status: string;
  invoiceNo: string;
  url: string;
  totalPOAmount: number;
  utr: string;
  paidAmount: number;
  paymentDate: any;
  cGST: number;
  sGST: number;
  iGST: number;
  tds: number;
}

export interface ApplicationDetail {
  id: string;
  applicationId: string;
  applicationName: string;
  applicationStatus: string;
  applicationDate: any;
  appliedAmount: number;
  sanctionAmount: number;
  disbursedAmount: number;
  disbursedDate: any;
  roi: number;
  tenure: number;
  emiAmount: number;
  npa: number;
  year: number;
  month: number;
  status: string;
  calculatedPayout: number;
  markType: string;
  markValue: number;
  maxPayout: number;
  markUpVal: number;
  markDownVal: number;
  finalPOAmount: number;
  comment: string;
  branchName: string; // branch name
  productName: string; // product name
  agentCode: string; // agentcode
  backOffice: string; // back office
  agentname: string; // agentname
  agencyType: string; // agencyType
  monthName: string; // monthName
  totalFinalPOAmount: number;
  isSelected: boolean;
  typeOfAllocation: any;
  agentProcessedDate: any;
  schemeName: any;
  isPDDStatusPending: string;
  payoutName?: string;
  payoutId?: string;
  stateName?: string;
  subAgent?: string;
  state?: string;
  ownershipCnt?:string;
}

export interface IncentivesActiveCasesApplicationDetail {
  id: string;
  aplicationId: string;
  applicantName: string;
  applicationStatus: string;
  disbursedDate: any;
  disbLoanAmt: number;
  branch: string; // branch name
  productName: any; // product name
  isSelected: boolean;
  backOffice: any;
  state: any;
  npaStatus?:string;
  pddCollStatus?:string;
  firstEmiColl?:string;
  secEmiColl?:string;
  thirdEmiColl?:string;
  enachPenetration?:string;
}

export interface consolidateData {
  agencyType: string;
  agentCode: string;
  agentId: number;
  agentname: string;
  calculatedPayout: number;
  createdDate: string;
  finalPOAmount: number;
  freezeCnt: number;
  isPDDStatusPending: string;
  payoutId: string;
  schemeId: number;
  totalCnt: number;
  isSelected: boolean;
  key: number;
  status: string;
  dealerAgencyName?: any;
  disbursedAmount: number;
  frequencyToDate: string;
  frequencyFromDate: string;
  rejectionReason: string;
  rejectionDate: string;
  rejectByName: string;
  approvedDate: string;
  dispFrequency?: string;
  role?: string;
  actionByName?: string;
  pddApprovedCnt: number;
  pddCompletedCnt: number;
  dispStatus: string;
  empCode?: string;
  employeeName?: string;
  employeeTypeName?: string;
  incentivePayout?: string;
  upfrontPayout?: any;
  balancePayout?: any;
  schemeidGrp?: string;
  dispFrequencyDb?: string;
  points?: any;
  applicationId?: any;
  schemeType?: any;
}

export interface ConsolidateData {
  id: number;
  count: number;
  createdDate: string;
  finalAmountAfterDeduction: number;
  finalInvoiceAmount: number;
  totalPOAmount: number;
  isSelected: boolean;
  acceptStatus: string;
  disbursedAmount: number;
  frequencyToDate: string;
  frequencyFromDate: string;
  payoutId: string;
  isPDDStatusPending: string;
  approvedDate?: string;
  pddApprovedReason: string;
  key: number;
  calculatedPayout?: any;
  totalCnt?: any;
  dispFrequency: any;
}
export interface DropdownAPIResponse {
  agencyMaster: Array<DropdownListFormat>;
  productMaster: Array<DropdownListFormat>;
  year: Array<DropdownListFormat>;
  month: Array<DropdownListFormat>;
  agencyName: Array<DropdownListFormat>;
}

export interface CostSheetFreezeSubmitRequest {
  loginType: string;
  applicationdetail: ApplicationDetail;
}

export interface InvoiceDTO {
  id: number;

  /*** table fields */
  month: number;
  year: number;
  status: string;
  invoiceNo: string;
  url: string;
  totalPOAmount: number;
  utr: string;
  paidAmount: number;
  finalInvoiceAmount: number;
  finalAmountAfterDeduction: number;
  paymentDate: any;
  cgst: number;
  sgst: number;
  igst: number;
  tds: number;
  rejectReason: string;
  paymentStatus: string;

  /**
   * relation mapping
   */
  productId: number; // from payoutConfig DB product id
  agentId: number; // from agentOnBoard DB agentDetails id
  agentGstDetailsId: number; // from agentOnBoard DB agentGstDetails id
  agentBankDetailsId: number; // from agentOnBoard DB agentBankDetails id

  /**
   * other
   */

  agencyType: string;

  productName: string;
  productCode: string;

  agentName: string;

  monthName: string;
  updatedDate?: string;
}
export interface AdhocPayout {
  id: number;

  /*** table fields */

  adhocPayoutNo: string;
  amount: any;
  year: any;
  month: any;
  status: string;
  comment: string;
  description: string;
  dealerAgencyName: string;
  modalOpen: boolean;
  actionBy: string;
  actionDateTime: any;
  dispStatus: string;

  /**
   * relation mapping
   */
  branchId: any; // from admin DB branchOfficeMaster id
  productId: any; // from payoutConfig DB product id
  agentId: any; // from agentOnBoard DB agentDetails id
  agencyName: string;
  agentName: string;
  agentCode: string;
  productName: string;
  branchName: string;
  createdDate: any;
  updatedDate: any;
  agentType: any;
  backOffice: any;

  isSelected: boolean;
}
export interface CreditNote {
  id: number;

  /*** table fields */
  creditNoteNo: string;
  status: string;
  description: string;
  comment: string;
  amount: any;

  /**
   * relation mapping
   */
  productId: number; // from payoutConfig DB product id
  agentId: number; // from agentOnBoard DB agentDetails id
  invoiceId: number;
  applicationDetailId: number;

  /*** others */
  agencyName: string;
  agentType: string;
  agentCode: string;
  createdDate: any;
  updatedDate: any;

  invoiceNo: string;
  applicationId: string;
}
export interface ChartCategory {
  id: any;

  category: string;

  status: boolean;

  createdDate: any;

  updatedDate: any;

  chart_for?: any;
}

export interface TableCategory {
  id: any;

  category: string;

  status: boolean;

  createdDate: any;

  updatedDate: any;

  table_for?: any;
}
export interface ReportCategory {
  id: any;

  category: string;

  status: boolean;

  createdDate: any;

  updatedDate: any;

  report_for?: any;
}

export interface ImportCategory {
  id: any;

  category: string;

  status: boolean;

  createdDate: any;

  updatedDate: any;

  report_for?: any;
}

export interface SchemeSetupSaveRequest {
  id: any; //scheme setup will newver be updated
  /*** table fields */
  description: string;
  startDate: any;
  spSchemeStartDate: any;
  spSchemeEndDate: any;
  /*** relations mapping from other service */
  agencyId: any;
  productId: any;
  /*** relations mapping */
  commissionTypeId: any;
  schemeTypeId: any;
  specialCommissionTypeId: any;
  /*** sub entity Start */
  /***
   * frequency
   */
  frequencyName: string;
  frequencyDate: any;
  frequencyDayOfWeek: number;
  frequencyDay: number;
  frequencyDay2: number;
  isDaysPastDue: boolean;
  /**
   * special schemes
   */

  listOfSpecialSchemeAllocationRequest: Array<any>;
  /**
   * dra regular
   */
  commissionSlabDraRegulars: Array<CommissionSlabDraRegularRequest>;
  eventDraRegulars: Array<EvnetDraRegularRequest>;
  commissionSlabRoBoNpaReductionForMonths: Array<CommissionSlabRoBoNpaReductionForMonthequest>;
  commissionSlabAoNpaReductionIIs: Array<CommissionSlabAoNpaReductionII>;
  /**
   * dra regular end
   */

  accountUpdateCommission: number;
  accountOutOfNPACommission: number;
  commissionSlabDraEaNpaCaseIs: Array<CommissionSlabDraEaNpaCaseIRequest>;

  /*** sub entity End */
}

export interface CommissionSlabDraRegularRequest {
  id: number;

  defaultPeriodLower: number;
  defaultPeriodUpper: number;

  emiCollectedLower: number;
  emiCollectedUpper: number;

  loanAmtOutstandingLower: number;
  loanAmtOutstandingUpper: number;
  commissionValue: number;
  minPerEmi: number;
  maxPerEmi: number;
  max: number;
  addCommIfPrincipalAmt: number;
  addCommIfPrincipalAmtPlusInterest: boolean;
  modalOpen: boolean;

  /*** relations mapping */

  accountStatusMasterId: any;
  calculationTypeId: any;
  commissionPaidOnId: any;
  // additionalCommissionDraRegularRequests: Array<AdditionalCommissionDraRegularRequest>;
  additionalCommissionDraRegulars: Array<AdditionalCommissionDraRegularRequest>;
}
export interface AdditionalCommissionDraRegularRequest {
  perOfInterestCollectedUpper: any;
  perOfInterestCollectedLower: any;
  perValue: any;
  flatValue: any;
  /*** relations mapping */
  commissionPaidOnId: number;
}
export interface EvnetDraRegularRequest {
  id: any;
  slabApplicable: any;
  commissionValue: number;
  additionalCommision: any;
  value: number;
  modalOpen: boolean;
  /*** relations mapping */
  eventId: any;
  calculationTypeId: any;
  commissionPaidOnId: any;
}

export interface CommissionSlabRoBoNpaReductionForMonthequest {
  id: number;
  reductionAmountLowerLimit: number;
  reductionAmountUpperLimit: number;
  commissionValue: number;
  additionalCommission: boolean;
  value: number;
  reductionAmount: number;
  maxValues: number;
  modalOpen: boolean;
}

export interface ROBOCasesOutOfNpaRequest {
  id: number;
  percentageOfAccountsOutOfNPA: number;
  commissionValue: number;
  additionalCommissionPercentageValue: number;
  modalOpen: boolean;
}

export interface CommissionSlabAoNpaReductionII {
  id: number;

  /*** table fields */
  npaLoanAmtOutstandingLower: number;
  npaLoanAmtOutstandingUpper: number;
  commissionValue: number;
  minUpdationClosure: number;
  modalOpen: boolean;
}
export interface AoNpaReductionOneRequest {
  id: number;
  loanAmtOutstandingLower: number;
  loanAmtOutstandingUpper: number;
  commissionValue: number;
  modalOpen: boolean;
}

export interface CommissionSlabDraEaNpaCaseIRequest {
  id: number;
  outstandingPrincipalLower: number;
  outstandingPrincipalUpper: number;
  commissionSlabDraEaNpaCaseIAccountClosureSlabs: Array<CommissionSlabDraEaNpaCaseIAccountClosureSlabRequest>;
  modalOpen: boolean;
}
export interface CommissionSlabDraEaNpaCaseIAccountClosureSlabRequest {
  id?: any;
  defaultDurationFrom: any;
  defaultDurationTo: any;
  value: any;
}

export interface CommissionSlabTelecallerRequest {
  id: number;
  resoRngLower: number;
  resoRngUpper: number;
  commissionSlabTeleCommVals: Array<CommissionSlabCaseVolumeSlabRequest>;
  modalOpen: boolean;
}

export interface CommissionSlabCaseVolumeSlabRequest {
  id?: any;
  caseVolLower: any;
  caseVolUpper: any;
  commValue: any;
}
export interface DraEaAccountFullUpdationClosure {
  id: number;
  npaDurationLower: number;
  npaDurationUpper: number;
  commissionValue: number;
  addCommForAccClosure: boolean;
  value: number;
  modalOpen: boolean;
}

export interface DraEaNpaCasesTwoRequest {
  id: number;
  outstandingPrincipalLower: number;
  outstandingPrincipalUpper: number;
  accountOutOfNPA: number;
  accountUpdation: number;
  accountClosure: number;
  modalOpen: boolean;
}
export interface CommissionSlabDraEaPotentialNpaCasesRequest {
  id: number;
  outstandingPrincipalLower: number;
  outstandingPrincipalUpper: number;
  commissionValueAccClosure: number;
  modalOpen: boolean;
}
export interface commissionSlabRequest {
  id: number;
  lowerLimit: number;
  upperLimit: number;
  commissionValue: number;
}

export interface stipendSlabRequest {
  id: number;
  lowerLimit: number;
  upperLimit: number;
  monthlyTarget: number;
  quarterlyTarget: number;
  stipend: number;
}

export interface consolidateArray {
  id?: number;
  agentId: string;
  frequency: string;
  dayOfCycle?: string;
  dayOfWeek?: string;
  adHocDate?: string;
  agentSchemeStartDate: string;
  agentSchemeEndDate: string;
  countOfCases: string;
  valueOfCases: string;
  irr: string;
  projectedPayout: string;
  modalOpen?: boolean;
}

export interface AgentSchemeRequest {
  id?: number;
  payoutId: string;
  payoutName: string;
  modalOpen?: boolean;
  consolidateArray: Array<consolidateArray>;
}

export const EnumForInvoiceStatus = {
  INVOICE_GENERATED: "invoiceGenerated",
  TO_APPROVE: "toApprove",
  FINALIZED: "finalized",
  REJECTED: "rejected",
  TO_GL_LISTING: "toGlListing",
  WRITE_OFF_INVOICE: "writeOff",
} as const;

export const EnumForAdhocPayoutStatus = {
  SUBMITTED: "SUBMITTED",
  REJECTED: "REJECTED",
  CHECKER_APPROVED: "CHECKER_APPROVED",
  APPROVED: "APPROVED",
} as const;

export const EnumForNotificationRedirection = {
  VIEW_COST_SHEET_MAKER: "/cost-sheet-maker",
  VIEW_COST_SHEET_CHECKER: "/cost-sheet-checker",
  VIEW_COST_SHEET_APPROVAL: "/cost-sheet-approval",
  VIEW_INVOICE: "/invoice-listing",
  VIEW_DEBIT_NOTE_LENDER: "/lender-debit-notes",
  VIEW_CREDIT_NOTE_LENDER: "/credit-notes-checker",
  VIEW_CREDIT_NOTE_MAKER: "/credit-notes-maker",
  VIEW_ADHOC_PAYOUT_MAKER: "/ad-hoc-payouts-maker",
  VIEW_ADHOC_PAYOUT_CHECKER: "/ad-hoc-payouts-checker",
  VIEW_ADHOC_PAYOUT_APPROVAL: "/ad-hoc-payouts-approval",
  VIEW_AGENT_DETAILS: "/agents-checker",
  VIEW_REJECT_AGENT: "/agents-maker",

  VIEW_PAYOUT_CASES: "/agent-payout-cases",
  GENERATE_INVOICE: "/invoice-generator",
  VIEW_PAYMENT_STATUS: "/payment-status",
  VIEW_INVOICE_AGENT: "/invoice-generator",
  VIEW_DEBIT_NOTE: "/agent-debit-notes",
  VIEW_CREDIT_NOTE: "/agent-credit-notes",
  VIEW_EMPLOYEE_ONBOARD: "/employee-approver",
} as const;

export const EnumForCollectionAgency = {
  DRA: "DRA",
  EA: "EA",
  RO: "RO",
  BO: "BO",
  AO: "AO",
} as const;

export const EnumForCollectionCommission = {
  REGULAR: "Regular",
  SPECIAL: "Special",
};
export const EnumForCalculationType = {
  FLAT: "Flat",
  PERCENTAGE: "Percentage",
};
export const EnumForSchemeType = {
  DRA_SCHEME_1: "DRA scheme1", // DRA Regular
  EA_SCHEME_1: "EA scheme1", // EA Regular
  NPA_REDUCTION_1: "NPA Reduction I", // AO Special
  NPA_REDUCTION_2: "NPA Reduction II", // AO Special
  ACCOUNT_FULL_UPDATION_CLOSURE: "Account Full Updation / Closure", // DRA, EA Special
  NPA_CASES_1: "NPA Cases I", // DRA, EA Special
  NPA_CASES_2: "NPA Cases II", // DRA, EA Special
  CASES_OUT_OF_NPA: "Cases out of NPA", // DRA, EA Special
  NPA_REDUCTION_FOR_MONTH: "NPA Reduction for Month", // RO, BO Special
  POTENTIAL_NPA_CASES: "Potential NPA Cases", // RO, BO Special
  TELECALLER_SCHEME: "Telecaller Scheme",
};

export const EnumForPayoutConfigMakerScreen = {
  PENDING: "PC_P",
  APPROVE: "PC_A",
  REJECT: "PC_R",
  APPROVAL: "PCA_A",
} as const;

export interface SettingsListResponse {
  id: number;
  dispName: string;
  controlType: string;
  identifier: string;
  settingAns: string;
  settingOption: string;
  isDirty: boolean;
  isMandatory: boolean;
  group?: string;
}

export interface ApprovalManagementDropdownResponse {
  approvalCategoryMaster: Array<DropdownListFormat>;
  stateOfficeMaster: Array<DropdownListFormat>;
  roleMaster: Array<DropdownListFormat>;
  productMaster: Array<DropdownListFormat>;
  agencyMaster: Array<DropdownListFormat>;
  departmentMaster: Array<DropdownListFormat>;
  levelDropDown: Array<DropdownListFormat>;
}

export interface ApprovalManagementDetails {
  agencyId: number;
  approvalCaregoryId: number;
  approvalCategoryMaster: any;
  approvalDesc: string;
  approvalLevels: any;
  backOfficeId: number;
  departmentMaster: any;
  id: number;
  productId: number;
  stateOfficeMaster: any;
  totalLevel: number;
}

export interface agentSchemePayout {
  id: number;
  payoutId: string;
  payoutName: string;
  frequencyName: string;
  frequencyCycle: string;
  startDate: string;
  endDate: string;
  frequency: string;
  dayOfCycle?: string;
  dayOfWeek?: string;
  adHocDate?: string;
  assignmentDate: string;
  updatedDate: string;
  acceptanceDate: string;
  schemeTermsId: string;
  agentSchemeId: any;
}

export interface TermsConditionsAndAgreementListResponse {
  id: number;
  code: string;
  name: string;
  description: string;
  modalOpen: boolean;
  status: any;
}

export interface TermsConditionsAndAgreement {
  id?: number;
  name: string;
  description: string;
  status: any;
}

export interface InvoiceDetailsInterface {
  applicationId: string;
  calculatedPayout: number;
  finalPOAmount: number;
  id: number;
  payoutId: any;
  key?: number;
}

export const EnumForCostSheetRequest = {
  ECS_R: "ECS_R",
  ECS_PQ: "ECS_PQ",
  ECS_A: "ECS_A",
} as const;

export const EnumForInvoiceRequest = {
  IS_PQ: "IS_PQ",
  IS_R: "IS_R",
  IS_A: "IS_A",
  IS_WOFF: "IS_WOFF",
} as const;

export const EnumForAgentPayoutCasesRequest = {
  PC_PDDP: "PC_PDDP",
  PC_PDDA: "PC_PDDA",
  PC_PDDC: "PC_PDDC",
} as const;

export const EnumForAgentSubEmployeesMappingRequest = {
  ASE_P: "ASE_P",
  ASE_A: "ASE_A",
  ASE_R: "ASE_R",
} as const;

export interface AgentSubEmployeesMappingDropdownResponse {
  year: Array<DropdownListFormat>;
  month: Array<DropdownListFormat>;
  stateOffice: Array<DropdownListFormat>;
  productMaster: Array<DropdownListFormat>;
  backOffice: Array<DropdownListFormat>;
  state: Array<DropdownListFormat>;
}

export interface agentSubEmployeesFilterInterface {
  year?: any;
  month?: any;
  dealer?: any;
  fromDate?: any;
  toDate?: any;
  branch?: any;
  product?: any;
  backOffice?: any;
  state?: any;
  pageNo: any;
  pageSize: any;
  applicationNo?: any;
  selectedTab?: any;
}

export interface agentSubEmployeesChildListingFormat {
  id: number;
  agencyTypeId: number;
  payoutId?: number;
  other?: any;
  agentId: any;
  payout_Id: string;
  isRejected?: any;
  agencyName: string;
  isDirty?: any;
}

export interface agentSubEmployeesListingInterface {
  id: number;
  application_Id: string;
  dealer_id: number;
  dealer_code: string;
  branch_Id: number;
  state: string;
  month: number;
  year: null;
  date: string;
  branchName: string;
  backOffice: string;
  dealerName: string;
  rejectBy?: any;
  subAgents: Array<agentSubEmployeesChildListingFormat>;
  modalOpen?: any;
  isDirty?: any;
}

export interface payoutStatusDTO {
  key?: number;
  createdDate: string;
  updatedDate: string;
  id: number;
  applicationId: string;
  status: string;
  applicationDate: string;
  dealerName: string;
  agentName: string;
  agentType: string;
  agentCode: string;
  productName: string;
  branchName: string;
  backOffice: string;
  stateName: string;
  calculatedPayout: number;
  loanId: any;
}

export interface agentAgreementDTO {
  key?: number;
  id: number;
  code: string;
  dealerName: string;
  agentType: string;
  agentCode: string;
  agentName: string;
  mobileNo: number;
  branchOffice: string;
  agentAgreementSignDate: string;
  empanelmentDate: string;
  agencyName: string;
  agencyType: string;
  agentId: any;
  productName: string;
}

export const EnumForagentAgreement = {
  AA_P: "AA_P",
  AA_A: "AA_A",
} as const;

/** Interfaces for Staff Setup */

export interface IEmployee {
  employeeCode: String;
  employeeName: String;
  employeeDescription: String;
  incentiveTypeIds: any;
  staffStatus: boolean;
}
export interface StaffListRequest extends PageRequest {}

export interface StaffListResponse {
  modalOpen: any;
  id: number;
  description: string;
  name: string;
  code: string;
  incentiveTypeIds: any;
  isActive: boolean;
}

export interface StaffHierarchyDropdownResponse {
  hierarchyName: Array<DropdownListFormat>;
  levels: Array<DropdownListFormat>;
}
export const PddDetailsStatusCode = {
  IS_A: "IS_A",
  IS_C: "IS_C",
  IS_S: "IS_S",
  IS_P: "IS_P",
  IS_R: "IS_R",
};

export const PddDetailsStatusList = {
  PENDING: "Pending",
  SUBMIT: "Submitted",
  REJECTED: "Rejected",
  COMPLETE: "Completed",
};

export const PddDetailsLenderStatusCode = {
  IS_A: "IS_A",
  IS_C: "IS_C",
  IS_S: "IS_S",
  IS_RJ: "IS_RJ",
  IS_P: "IS_P",
};

export const PddDetailsLenderStatusList = {
  RECEIVED: "Received",
  APPROVED: "Approved",
  REJECTED: "Rejected",
  COMPLETE: "Completed",
};

export const EnumForIncentivesSchemeExceution = {
  CREATED: "Created",
  SUCCESS: "Success",
  FAILED: "Failed",
  EXPIRED: "Expired",
} as const;

export const EnumForIncentivesSchemeExceutionSCode = {
  CREATED: "payoutSchemes",
  SUCCESS: "success",
  FAILED: "failed",
  EXPIRED: "expired",
} as const;
export interface incentivePayoutConfig {
  id: any;
  description: String;
  startDate: any;
  endDate: any;
  isHoldBalance: boolean;
  upfrontPayment: string;
  balancePayment: string;
  isPddCollection: boolean;
  npaAccPddCollection: string;
  nonNpaAccPddCollection: string;
  isEmiCollection: boolean;
  firstEmiCollection: string;
  secondEmiCollection: string;
  thirdEmiCollection: string;
  isEnach: boolean;
  isTargetVsAchievementVol: boolean;
  targetVsAchievementVol: string;
  isTargetVsAchievementVal: boolean;
  targetVsAchievementVal: string;
  isTppCrossSell: boolean;
  tppCrossSell: string;
  isBdeProductiveAchievement: boolean;
  bdeProductiveAchievement: string;
  minCasesForBde: string;
  isMarketShare: boolean;
  isBranchActivation: boolean;
  branchActivation: string;
  minBranchActivation: string;
  isPerOfBdeEarned: boolean;
  perOfBdeEarned: string;
  isMaxIncentivePerEmp: boolean;
  maxIncentivePerEmp: string;
  isDealerActivation: boolean;
  dealerActivation: string;
  minDealerActivation: string;
  incentiveTypeId: string;
  employeeTypeIds: any;
  productIds: any;
  listOfSlab: Array<listOfSlabReq>;
  frequencyName: string;
  frequencyDate: any;
  frequencyDayOfWeek: any;
  frequencyDay: string;
  frequencyDay2: any;
  enach: string;
  schemeFor: string;
  minTppCrossSell: string;
}

export interface listOfSlabReq {
  lowerLimit: string;
  upperLimit: string;
  commissionValue: string;
  slabType: string;
  fromSlab?: string;
  toSlab?: string;
}

export interface SchemeOneRequest {
  id: number;
  lowerLimit: number;
  upperLimit: number;
  commissionSlabDraEaNpaCaseIAccountClosureSlabs: Array<SchemeOnVintageValue>;
  achievementSlab: Array<achievementSlabRequest>;
  modalOpen: boolean;
}
export interface SchemeOnVintageValue {
  id?: any;
  fromSlab: any;
  toSlab: any;
  slabType?: string;
  commissionValue: any;
}

export interface achievementSlabRequest {
  id?: any;
  fromSlab: any;
  toSlab: any;
  slabType?: string;
  commissionValue: any;
}
export interface StaffOnboardDetails {
  id: number;
  employeeId: string;
  employeeName: string;
  email: string;
  mobileNo: string;
  areaType: string;
  baseLocation: string;
  employeeTypeId: string;
  productId: any;
  reportingEmployeeTypeId?: string;
  reportingStaffEmployeeId?: string;
  doj?: string;
  status?: string;
}

export const StaffOnBoardingStatus = {
  SM_D: "SM_D",
  SM_S: "SM_S",
  SM_R: "SM_R",
  SC_R: "SC_R",
  SC_A: "SC_A",
  SL_A: "SL_A",
  SL_I: "SL_I",
} as const;

export interface IncentivesActiveCases {
  loginType?: string;
  empTypeId?: any;
  empId?: any;
  productId?: any;
  //year?: any;
  //month?: any;
  id?: any;
  applicationNo?: any;
  branchId?: any;
  state?: any;
  //pddStatus?: any;
  //createdDate?: any;
  //frequencyFromDate?: any;
  ///frequencyToDate?: any;
  //dealerId?: any;
  //fromDate?: any;
  //toDate?: any;
  disbursedDate?: any;
  pageNo?: any;
  pageSize?: any;
  ids?: any;
  applicationDate?: any;
  product?:any;
}

export interface IncentivesActiveCasesDataInterface {
  empType?: any;
  empId?: any;
  empName?: any;
  branch?: any;
  empCode?: any;
  date?: any;
  state?: any;
  key?: number;
  id?: any;
  totalCount?: any;
  pageNo?: number;
  pageSize?: number;
  employeeTypeName?: any;
  monthName?: any;
  year?: any;
}
export interface SchemeOneRequestPayout {
  id: number;
  lowerLimit: number;
  upperLimit: number;
  commissionSlabDraEaNpaCaseIAccountClosureSlabs: Array<SchemeOnVintageValuePayout>;
  achievementSlab: Array<achievementSlabRequestPayout>;
  modalOpen: boolean;
  loanAmountLowerLimit:number;
  loanAmountUpperLimit:number;
}

export interface SchemeOnVintageValuePayout {
  id?: any;
  fromSlab?: any;
  toSlab?: any;
  slabType?: string;
  commissionValue?: any;
  lowerLimit?:any;
  upperLimit?:any;
}

export interface achievementSlabRequestPayout {
  id?: any;
  fromSlab: any;
  toSlab: any;
  slabType?: string;
  commissionValue: any;
}