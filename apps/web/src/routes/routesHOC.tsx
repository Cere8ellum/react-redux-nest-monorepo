import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import App from "../app";
import appRoutes from "./routes";
import Page404 from "../pages/Page404/page404";
import * as authStore from "../core/stores/slices/AuthSlice";
import { useAppSelector } from "../core/stores/hooks";

const RoutesHOC = () => {
  const { isAuthenticated } = useAppSelector(authStore.authSelector);

  // App
  const { publicRoutes: appRoutesPublic, authRoutes: appRoutesAuth } =
    appRoutes;

  const appRoutesToUse = isAuthenticated
    ? appRoutesPublic.concat(...appRoutesAuth)
    : appRoutesPublic;

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<App />}>
          {appRoutesToUse.map((el, i) => (
            <Route key={i} {...el} />
          ))}
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesHOC;
