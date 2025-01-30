import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IAuthStore {
  isAuthenticated: boolean;
  accessToken: string;
}

const initialState: IAuthStore = {
  isAuthenticated: false,
  accessToken: "",
};

export const authSlice = createSlice({
  name: "changeAuth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<IAuthStore>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.accessToken = action.payload.accessToken;
    },
    clearAuth: (state) => {
      state.isAuthenticated = false;
      state.accessToken = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, clearAuth } = authSlice.actions;

// Reducer
export default authSlice.reducer;

// Selector
export const authSelector = (state: RootState) => state.authReducer;
