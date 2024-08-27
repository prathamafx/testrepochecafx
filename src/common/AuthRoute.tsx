import * as React from "react";
import {
  Link,
  Route,
  RouteProps,
  useLocation,
  Navigate,
} from "react-router-dom";
import { getToken } from "../Utility/Helper";
import jwt_decode from "jwt-decode";
import { RouterProps } from "../interfaces/interfaces";
const AuthRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = getToken() !== null ? true : false; // get Token or flag from Localstorage for dynamic
  const location = useLocation();
  const array: any = [];

  // React.useEffect(() => {
  //   console.log("chil", children, location)
  //   let token = localStorage.getItem("accessToken");
  //   let decode: any;
  //   let newArray: any;

  //   if (token) {
  //     decode = jwt_decode(token);
  //     // console.log("decoded", decode)
  //     if (decode) {
  //       newArray = JSON.parse(decode.access);
  //       // console.log("newArray", newArray)
  //     }
  //     if (newArray) {
  //       newArray?.filter((res) => {
  //         // console.log("res", res.pageCode);
  //         array.push(res.pageCode);
  //         // setDashboardItems(array)
  //       })
  //     }
  //   }
  // }, [location.pathname])

  const token = localStorage.getItem("accessToken");
  let decode: any;
  let newArray: any;
  let newPath: any;

  if (token) {
    decode = jwt_decode(token);
    // console.log("decoded", decode)
    if (decode) {
      newArray = JSON.parse(decode.access);
      // console.log("newArray", newArray)
    }
    if (newArray) {
      newArray?.filter((res) => {
        // console.log("res", res.pageCode);
        array.push(res.pageCode);
        // setDashboardItems(array)
      });
    }

    const replacePathName: any = location.pathname.replace(/\//, "");
    newPath = replacePathName.split("/");
    // console.log("new", newPath);
  }

  if (!isAuthenticated) {
    return <Navigate to="/log-in" state={{ from: location }} />;
  }

  if (array) {
    if (!array?.includes(newPath[0]) && isAuthenticated) {
      return <Navigate to="/dashboard" state={{ from: location }} />;
    }
  }

  return children;
};

export default AuthRoute;
