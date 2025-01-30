import { TResponse } from "@monorepo/types/TResponse";
import { AxiosError, AxiosResponse } from "axios";
import { requestProcessSlice } from "../stores/slices/RequestProcessSlice";
import { store } from "../stores/store";

export async function apiActionDecorator<ReturnData>(
  axiosCb: () => Promise<AxiosResponse>,
  isLoadingRequired: boolean = true
): Promise<TResponse<ReturnData>> {
  try {
    isLoadingRequired &&
      store.dispatch(requestProcessSlice.actions.setLoading(true));

    // Callback()
    const response = await axiosCb();

    isLoadingRequired &&
      store.dispatch(requestProcessSlice.actions.setLoading(false));

    // Return
    return response.data;
  } catch (e) {
    let errText: string | string[] = "An unexpected error occurred (code -f).";

    if (e instanceof AxiosError) {
      // If it has response
      errText = e.response?.data.message ?? errText;
    }

    isLoadingRequired &&
      store.dispatch(requestProcessSlice.actions.setLoading(false));

    return {
      isError: true,
      errorMessage: errText,
    };
  }
}
