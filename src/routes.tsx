import * as React from "react";
import { RouterProps } from "./interfaces/interfaces";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Navbar } from "./components/navbar/Navbar";
import { HashRouter as Router, Routes, useLocation } from "react-router-dom";
import GuestRoute from "./common/GuestRoute";
import AuthRoute from "./common/AuthRoute";
import { Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { NotFound } from "./pages/NotFound";

const privateRoutes: RouterProps[] = [
  {
    path: "/",
    component: Dashboard,
    exact: true,
  },
];

const AppRouter = (): JSX.Element => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <div className="">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />{" "}
        </div>

        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Navbar history={history} />

          <React.Suspense
            fallback={<div className="lazy-loading">Loading...</div>}
          >
            <Routes>
              {privateRoutes.map((route, i) => (
                // <GuestRoute key={i} {...route} />
                <Route
                  key={i}
                  caseSensitive={route.exact}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </React.Suspense>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;