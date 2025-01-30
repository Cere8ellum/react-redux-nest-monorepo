import React from "react";
import { ROUTES } from "./constants";
import Home from "../pages/Home/home";
import Login from "../pages/Login/login";
import News from "../pages/News/news";

type TRoute = {
  path: ROUTES;
  element: React.ReactElement;
};

const publicRoutes: TRoute[] = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.LOGIN, element: <Login /> },
  { path: ROUTES.NEWS, element: <News /> },
];

const authRoutes: TRoute[] = [];

const appRoutes = { publicRoutes, authRoutes };
export default appRoutes;
