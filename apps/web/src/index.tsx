import React from "react";
import "normalize.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./core/stores/store";
import RoutesHOC from "./routes/routesHOC";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RoutesHOC />
    </React.StrictMode>
  </Provider>
);
