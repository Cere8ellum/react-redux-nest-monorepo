import axios from "axios";
import { TResponse } from "@monorepo/types/TResponse";
import { API_ROUTES } from "@monorepo/constants/apiRoutes";
import { apiActionDecorator } from "./decorators";
import { BASE_API_URL } from "./base";

type TApiFunction<T> = (
  data?: any,
  isLoadingRequired?: boolean
) => Promise<TResponse<T>>;

// Instance
export const api = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: false,
});

export const apiFetchHello: TApiFunction<string> = async () => {
  const apiRoute = API_ROUTES.SAY_HELLO;
  const request = () =>
    api.get(`${BASE_API_URL}/${apiRoute.controller}/${apiRoute.action}`);
  return await apiActionDecorator<string>(request);
};

export const apiFetchTextAndDate: TApiFunction<string> = async (
  data,
  isLoadingRequired
) => {
  const apiRoute = API_ROUTES.SAY_SOMETHING_WITH_DATE;
  const request = () =>
    api.post(`${BASE_API_URL}/${apiRoute.controller}/${apiRoute.action}`, data);
  return await apiActionDecorator<string>(request, isLoadingRequired);
};
