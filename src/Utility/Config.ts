import { env } from "process";

export const BASE_URL = `${window.location.protocol}//${
  window.location.hostname == "localhost" ||
  window.location.hostname == "192.168.2.166"
    ? // ? "3.108.186.63" /* DCB SIT */
      // : "3.108.186.63"
      "3.108.246.158" /* Muthoot SIT */
    : "3.108.246.158"
  //   "dcb-sit-434678025.ap-south-1.elb.amazonaws.com"
  // : "dcb-sit-434678025.ap-south-1.elb.amazonaws.com"
  //   "10.10.245.120" /* DCB UAT */
  // : "10.10.245.120"
  //   "localhost" /* localhost */
  // : "localhost"
}`;

export const API_URL = `${BASE_URL}:18000`;
// export const API_URL = `${BASE_URL}`;

export const WEB_SOCKET_CONNECTION_URL = `${BASE_URL}:18000/notification/socket`;
// export const WEB_SOCKET_CONNECTION_URL = `${BASE_URL}/notification/socket`;

export const FrontendURL = `${window.location.protocol}//${window.location.hostname}:5000`;

export const FileUrl = `${window.location.protocol}//${window.location.hostname}/`;

export const clientCode = "/muthoot/";
