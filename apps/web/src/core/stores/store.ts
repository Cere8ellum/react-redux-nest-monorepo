import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { createLogger } from "redux-logger";
import { requestProcessSlice } from "./slices/RequestProcessSlice";
import { authSlice } from "./slices/AuthSlice";

// const loggerMiddleware = createLogger();

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  requestProcessReducer: requestProcessSlice.reducer,
  authReducer: authSlice.reducer,
});

// Required for Provider in tests. PreloadedState can be changed.
export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    // Redux Toolkit's configureStore function automatically sets up the thunk middleware by default.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    // prepend and concat calls can be chained
    // .concat(loggerMiddleware),
    devTools: process.env.NODE_ENV !== "production",
  });
};

// Required for Provider in App
export const store = setupStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
