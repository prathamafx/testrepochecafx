import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_URL, BASE_URL } from "./Config";
import {
  getServerValidation,
  getToken,
  excludeTokenAPIList,
  getClientId,
  encryptedForApiUrl,
  customJsonInclude,
} from "./Helper";
import { te, ts } from "./Toaster";
import { ResponseWrapperDTO } from "../interfaces/interfaces";
import { LOGOUT_API } from "./ApiList";
import { getLogoutSuccess } from "../redux/Login/login.action";
export const getFilePath = (filePath: string) =>
  filePath && filePath.replace("/var/www/html", BASE_URL);

export type responseType = ReturnType<typeof handleResponse>;
export type errorType = ReturnType<typeof handleError>;

let count: any = 1;
export const get = async (
  url: string,
  headers: any,
  isPrivate = true,
  responseType = undefined,
  customUrl = false
): Promise<AxiosResponse> => {
  let apiUrl = API_URL + url;
  if (customUrl) {
    apiUrl = url;
  }
  if (isPrivate && getToken()) {
    const isParam = apiUrl.includes("?");
    if (isParam) apiUrl = `${apiUrl}&&api_token=${getToken()}`;
    else apiUrl = `${apiUrl}?api_token=${getToken()}`;
  }
  const axiosObj: AxiosRequestConfig = {
    method: "get",
    url: apiUrl,
  };
  if (excludeTokenAPIList.indexOf(url) < 0) {
    let ezPayoutHeader: any;
    if (url) {
      let splitUrl = url.split("?");
      let tempToken = localStorage.getItem("tmpToken");
      // let replaceClientCode = splitUrl?.[0]?.replace(/\/dcb/g, "");
      ezPayoutHeader = await encryptedForApiUrl(
        splitUrl?.[0] + "*" + new Date().getTime(),
        tempToken
      );
    }
    if (ezPayoutHeader) {
      axiosObj.headers = {
        token: getToken() ? getToken() : "",
        clientId: getClientId() ? getClientId() : "",
        "x-ezpayout-key": ezPayoutHeader ? ezPayoutHeader : "",
        // "Access-Control-Allow-Origin": "*",
      };
    }
  }
  // if (headers) {
  //   axiosObj.headers = headers;
  // }
  if (responseType) axiosObj.responseType = responseType;
  return axios(axiosObj)
    .then((response: any) => handleResponse(response))
    .catch((error: any) => {
      console.log("return handleError(error)", error);
      return handleError(error);
    });
};
export const post = async (
  url: string,
  bodyObj = {} as any,
  isPrivate = true,
  mediaFile = false,
  uat = false,
  contentType?: any
): Promise<AxiosResponse> => {
  customJsonInclude(bodyObj);
  // console.log("body", bodyObj);
  const apiUrl = !uat ? API_URL + url : url;

  if (isPrivate && getToken()) {
    const token: any = getToken();
    if (bodyObj instanceof FormData) bodyObj.append("api_token", token);
    else bodyObj["api_token"] = getToken();
  }
  if (mediaFile == true) {
    const formData = new FormData();
    // console.log("bodyObj", bodyObj);
    Object.keys(bodyObj).map((key) => {
      formData.append(key, bodyObj[key]);
    });
    bodyObj = formData;
  }
  let header: any = {};
  if (excludeTokenAPIList.indexOf(url) < 0) {
    let ezPayoutHeader: any;
    if (url) {
      let splitUrl = url.split("?");
      let tempToken = localStorage.getItem("tmpToken");
      // let replaceClientCode = splitUrl?.[0]?.replace(/\/dcb/g, "");
      ezPayoutHeader = await encryptedForApiUrl(
        splitUrl?.[0] + "*" + new Date().getTime(),
        tempToken
      );
    }
    if (ezPayoutHeader) {
      header = {
        token: getToken() ? getToken() : "",
        clientId: bodyObj.clientId ? bodyObj.clientId : getClientId(),
        "Access-Control-Allow-Origin": "*",
        "x-ezpayout-key": ezPayoutHeader ? ezPayoutHeader : "",
        // clientId: bodyObj?.clientId ? bodyObj?.clientId : null,
      };
      if (contentType) {
        header["Content-Type"] = contentType;
      }
    }
  }
  if (uat) {
    header["x-api-key"] = "n16HKWRvRq5ZwHTSrWm1o6BbuCT6PCVR62uotv3m";
    header["Access-Control-Allow-Origin"] = "*";
  }
  return axios
    .post(apiUrl, bodyObj, {
      headers: header,
    })
    .then((response: any) => handleResponse(response))
    .catch((error: any) => {
      console.log("error interceptor", error);
      return handleError(error);
    });
};
export const put = async (
  url: string,
  bodyObj: any = {},
  isPrivate = true,
  mediaFile = false,
  uat = false
): Promise<AxiosResponse> => {
  const apiUrl = !uat ? API_URL + url : url;

  if (isPrivate && getToken()) {
    const token: any = getToken();
    if (bodyObj instanceof FormData) bodyObj.append("api_token", token);
    else bodyObj["api_token"] = getToken();
  }
  if (mediaFile == true) {
    const formData = new FormData();
    // console.log("bodyObj", bodyObj);
    Object.keys(bodyObj).map((key) => {
      formData.append(key, bodyObj[key]);
    });
    bodyObj = formData;
  }
  let header: any = {};
  if (excludeTokenAPIList.indexOf(url) < 0) {
    let ezPayoutHeader: any;
    if (url) {
      let splitUrl = url.split("?");
      let tempToken = localStorage.getItem("tmpToken");
      // let replaceClientCode = splitUrl?.[0]?.replace(/\/dcb/g, "");
      ezPayoutHeader = await encryptedForApiUrl(
        splitUrl?.[0] + "*" + new Date().getTime(),
        tempToken
      );
    }
    if (ezPayoutHeader) {
      header = {
        token: getToken() ? getToken() : "",
        clientId: getClientId() ? getClientId() : "",
        "x-ezpayout-key": ezPayoutHeader ? ezPayoutHeader : "",
        "Access-Control-Allow-Origin": "*",
      };
    }
  }
  if (uat) {
    header["x-api-key"] = "n16HKWRvRq5ZwHTSrWm1o6BbuCT6PCVR62uotv3m";
    header["Access-Control-Allow-Origin"] = "*";
  }
  return axios
    .put(apiUrl, bodyObj, {
      headers: header,
    })
    .then((response: any) => handleResponse(response))
    .catch((error: any) => {
      console.log("error interceptor", error);
      return handleError(error);
    });
};
const handleResponse = (response: any): AxiosResponse<ResponseWrapperDTO> => {
  return {
    ...response,
  };
};

const logoutFromSystem = (objBody = {}) => {
  return post(`${LOGOUT_API}`, objBody, false).then((res) => {
    console.log("resssss", res);
    if (res.data.code === "LOS") {
      ts(res.data.message);
      localStorage.clear();
      localStorage.removeItem("clientId");
      localStorage.removeItem("username");
      localStorage.removeItem("loginId");
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userType");
      localStorage.removeItem("roleType");
      localStorage.removeItem("loginCode");
      setTimeout(() => {
        window.location.href = `/muthoot/#/session-time-out/${res?.data?.code}`;
      }, 500);
    } else {
      te(res.data.message);
    }
  });
};

const handleError = (error: any): any => {
  const { response } = error;
  console.log(response);
  const parsedError = response && JSON.parse(JSON.stringify(response.data));
  console.log(
    "handleError",
    parsedError,
    parsedError.statusCode,
    parsedError && parsedError.statusCode == 401
  );

  let errorMsg: string | undefined =
    "Sorry, something went wrong. Please try again.";
  if (response && response != undefined && response.status === 422) {
    // handle server validation
    if (response.data && response.data.errors)
      errorMsg = getServerValidation(response.data.errors) || errorMsg;
    else if (response.data.message) errorMsg = response.data.message;
  } else if (parsedError && parsedError.status == 503) {
    errorMsg = parsedError.error;
    te(errorMsg);
    return;
  } else if (
    response &&
    response != undefined &&
    JSON.parse(JSON.stringify(response.data)).toString().includes("401")
  ) {
    // Unauthorized
    const element = document.getElementById("unauthorized-box");
    if (element) {
      element.style.display = "block";
      errorMsg = undefined;
    }
    syncLogout();
  } else if (response && response != undefined && response.status === 401) {
    const obj = {
      clientId: localStorage.getItem("clientId"),
      username: localStorage.getItem("userId"),
    };
    if (count === 1) {
      // localStorage.removeItem("token");
      logoutFromSystem(obj);
      count = 0;
    }
  }
  // else if (response && response != undefined && response.status === 500) {
  //   const obj = {
  //     clientId: localStorage.getItem("clientId"),
  //     username: localStorage.getItem("userId"),
  //   };
  //   if (count === 1) {
  //     localStorage.removeItem("token");
  //     logoutFromSystem(obj);
  //     count = 0;
  //   }
  // }
  else {
    te("Sorry, something went wrong. Please try again.");
  }
  // return {
  //   ...response,
  // };
};

export const awspost = async (
  url: string,
  bodyObj: any = {},
  isPrivate = true,
  mediaFile = false,
  uat = false
) => {
  const apiUrl = !uat ? API_URL + url : url;

  if (isPrivate && getToken()) {
    const token: any = getToken();
    if (bodyObj instanceof FormData) bodyObj.append("api_token", token);
    else bodyObj["api_token"] = getToken();
  }
  if (mediaFile == true) {
    const formData = new FormData();
    Object.keys(bodyObj).map((key) => {
      formData.append(key, bodyObj[key]);
    });
    bodyObj = formData;
  }
  let header = {};
  if (excludeTokenAPIList.indexOf(url) < 0) {
    let ezPayoutHeader: any;
    if (url) {
      let splitUrl = url.split("?");
      let tempToken = localStorage.getItem("tmpToken");
      // let replaceClientCode = splitUrl?.[0]?.replace(/\/dcb/g, "");
      ezPayoutHeader = await encryptedForApiUrl(
        splitUrl?.[0] + "*" + new Date().getTime(),
        tempToken
      );
    }
    if (ezPayoutHeader) {
      header = {
        token: getToken() ? getToken() : "",
        "x-ezpayout-key": ezPayoutHeader ? ezPayoutHeader : "",
        "Access-Control-Allow-Origin": "*",
        "x-api-key": "lksaflsajf",
      };
    }
  }
  return axios
    .post(apiUrl, bodyObj, {
      headers: header,
    })
    .then((response: any) => handleResponse(response))
    .catch((error: any) => handleError(error));
};
function syncLogout() {
  throw new Error("Logout");
}

export const downloadFileAPI = async (
  url: string,
  fileName?: string
): Promise<any> => {
  const apiUrl = API_URL + url;
  let header = {};
  if (excludeTokenAPIList.indexOf(url) < 0) {
    let ezPayoutHeader: any;
    if (url) {
      let splitUrl = url.split("?");
      let tempToken = localStorage.getItem("tmpToken");
      // let replaceClientCode = splitUrl?.[0]?.replace(/\/dcb/g, "");
      ezPayoutHeader = await encryptedForApiUrl(
        splitUrl?.[0] + "*" + new Date().getTime(),
        tempToken
      );
    }
    if (ezPayoutHeader) {
      header = {
        token: getToken() ? getToken() : "",
        clientId: getClientId(),
        "Access-Control-Allow-Origin": "*",
        "x-ezpayout-key": ezPayoutHeader ? ezPayoutHeader : "",
      };
    }
  }
  // Fetch the dynamically generated excel document from the server.
  return axios
    .get(apiUrl, { responseType: "arraybuffer", headers: header })
    .then((response: any) => {
      // // Log somewhat to show that the browser actually exposes the custom HTTP header
      // console.log('2@ res', JSON.parse(new TextDecoder().decode(response.data)))
      console.log("RESPONSE " + response);
      if (response.status === 200) {
        const fileNameHeader = "x-suggested-filename";
        const suggestedFileName = response.headers[fileNameHeader];
        const effectiveFileName =
          suggestedFileName === undefined
            ? fileName
              ? fileName
              : "sampleFile.csv"
            : suggestedFileName;
        console.log(
          `Received header[${fileNameHeader}]: ${suggestedFileName}, effective fileName: ${effectiveFileName} `
        );

        // Let the user save the file.
        // FileSaver.saveAs(response.data);

        // const outputFilename = effectiveFileName;

        // If you want to download file automatically using link attribute.
        const url = URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", effectiveFileName);
        document.body.appendChild(link);
        link.click();

        const customResponse: ResponseWrapperDTO = {
          status: "200",
          message: "File Downloaded Successfully.",
          error: false,
          data: {
            data: { fileName: suggestedFileName },
          },
          path: response.data,
        };
        return handleResponse(customResponse);
      } else {
        console.log(
          "2@ res",
          JSON.parse(new TextDecoder().decode(response.data))
        );
        const obj = JSON.parse(new TextDecoder().decode(response.data));
        console.log(obj);
        return handleResponse(obj);
      }
    })
    .catch((error: any) => {
      console.log(error);

      const { response } = error;
      // console.log('2@ res', JSON.parse(new TextDecoder().decode(response.data)))
      const obj = JSON.parse(new TextDecoder().decode(response.data));
      console.log(obj);

      return handleResponse(obj);
    });
};

export const deleteAPI = async (
  url: string,
  bodyObj: any = {},
  isPrivate = true,
  mediaFile = false,
  uat = false
): Promise<AxiosResponse> => {
  const apiUrl = !uat ? API_URL + url : url;

  if (isPrivate && getToken()) {
    const token: any = getToken();
    if (bodyObj instanceof FormData) bodyObj.append("api_token", token);
    else bodyObj["api_token"] = getToken();
  }
  if (mediaFile == true) {
    const formData = new FormData();
    // console.log("bodyObj", bodyObj);
    Object.keys(bodyObj).map((key) => {
      formData.append(key, bodyObj[key]);
    });
    bodyObj = formData;
  }
  let header: any = {};
  if (excludeTokenAPIList.indexOf(url) < 0) {
    let ezPayoutHeader: any;
    if (url) {
      let splitUrl = url.split("?");
      let tempToken = localStorage.getItem("tmpToken");
      // let replaceClientCode = splitUrl?.[0]?.replace(/\/dcb/g, "");
      ezPayoutHeader = await encryptedForApiUrl(
        splitUrl?.[0] + "*" + new Date().getTime(),
        tempToken
      );
    }
    if (ezPayoutHeader) {
      header = {
        token: getToken() ? getToken() : "",
        clientId: getClientId(),
        "Access-Control-Allow-Origin": "*",
        "x-ezpayout-key": ezPayoutHeader ? ezPayoutHeader : "",
      };
    }
  }
  if (uat) {
    header["x-api-key"] = "n16HKWRvRq5ZwHTSrWm1o6BbuCT6PCVR62uotv3m";
    header["Access-Control-Allow-Origin"] = "*";
  }
  return axios
    .delete(apiUrl, {
      headers: header,
    })
    .then((response: any) => handleResponse(response))
    .catch((error: any) => {
      console.log("error interceptor", error);
      return handleError(error);
    });
};

// export const downloadXLSFile = async (url) => {
//   const apiUrl = API_URL + url;
//   // Its important to set the 'Content-Type': 'blob' and responseType:'arraybuffer'.
//   const headers = {'Content-Type': 'blob'};
//   const config: AxiosRequestConfig = {method: 'GET', url: API_URL, responseType: 'arraybuffer', headers};

//   try {
//       const response = await axios(config);

//       const outputFilename = `${ Date.now() }.xls`;

//       // If you want to download file automatically using link attribute.
//       const url = URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', outputFilename);
//       document.body.appendChild(link);
//       link.click();

//       // // OR you can save/write file locally.
//       // fs.writeFileSync(outputFilename, response.data);
//   } catch (error) {
//     te("Could not Download the Excel report from the backend.");

//   }
// }

export const downloadFilePostAPI = async (
  url: string,
  bodyObj: any = {},
  fileName?: string
): Promise<any> => {
  const apiUrl = API_URL + url;
  let header = {};
  if (excludeTokenAPIList.indexOf(url) < 0) {
    let ezPayoutHeader: any;
    if (url) {
      let splitUrl = url.split("?");
      let tempToken = localStorage.getItem("tmpToken");
      // let replaceClientCode = splitUrl?.[0]?.replace(/\/dcb/g, "");
      ezPayoutHeader = await encryptedForApiUrl(
        splitUrl?.[0] + "*" + new Date().getTime(),
        tempToken
      );
    }
    if (ezPayoutHeader) {
      header = {
        token: getToken() ? getToken() : "",
        clientId: getClientId(),
        "Access-Control-Allow-Origin": "*",
        "x-ezpayout-key": ezPayoutHeader ? ezPayoutHeader : "",
      };
    }
  }
  // Fetch the dynamically generated excel document from the server.
  return axios
    .post(apiUrl, bodyObj, { responseType: "arraybuffer", headers: header })
    .then((response: any) => {
      // // Log somewhat to show that the browser actually exposes the custom HTTP header
      // console.log('2@ res', JSON.parse(new TextDecoder().decode(response.data)))
      console.log("RESPONSE " + response);
      if (response.status === 200) {
        const fileNameHeader = "x-suggested-filename";
        const suggestedFileName = response.headers[fileNameHeader];
        const effectiveFileName =
          suggestedFileName === undefined
            ? fileName
              ? fileName
              : "sampleFile.csv"
            : suggestedFileName;
        console.log(
          `Received header[${fileNameHeader}]: ${suggestedFileName}, effective fileName: ${effectiveFileName} `
        );

        // Let the user save the file.
        // FileSaver.saveAs(response.data);

        // const outputFilename = effectiveFileName;

        // If you want to download file automatically using link attribute.
        const url = URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", effectiveFileName);
        document.body.appendChild(link);
        link.click();

        const customResponse: ResponseWrapperDTO = {
          status: "200",
          message: "File Downloaded Successfully.",
          error: false,
          data: {
            data: { fileName: suggestedFileName },
          },
          path: response.data,
          type: response,
        };
        return handleResponse(customResponse);
      } else {
        console.log(
          "2@ res",
          JSON.parse(new TextDecoder().decode(response.data))
        );
        const obj = JSON.parse(new TextDecoder().decode(response.data));
        console.log(obj);
        return handleResponse(obj);
      }
    })
    .catch((error: any) => {
      console.log(error);

      const { response } = error;
      // console.log('2@ res', JSON.parse(new TextDecoder().decode(response.data)))
      const obj = JSON.parse(new TextDecoder().decode(response.data));
      console.log(obj);

      return handleResponse(obj);
    });
};
