import * as React from "react";
import {
  Link,
  Route,
  RouteProps,
  useLocation,
  Navigate,
} from "react-router-dom";
import { getToken } from "../Utility/Helper";
import { RouterProps } from "../interfaces/interfaces";

const GuestRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();

  const isAuthenticated = getToken() !== null ? true : false; // get Token or flag from Localstorage for dynamic

  if (isAuthenticated) {
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }

  return children;
};

export default GuestRoute;
