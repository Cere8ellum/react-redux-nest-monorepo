import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IResponseLoadingStore {
  loading: boolean;
}

const initialState: IResponseLoadingStore = {
  loading: false,
};

export const requestProcessSlice = createSlice({
  name: "getLoading",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading } = requestProcessSlice.actions;

// Reducer
export default requestProcessSlice.reducer;

// Selector
export const requestProcessSelector = (state: RootState) =>
  state.requestProcessReducer;
