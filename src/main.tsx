import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { StoreContext, store } from "./mobx-store";
import { reduxStore } from "./redux-store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </StoreContext.Provider>
  </React.StrictMode>
);
