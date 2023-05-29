import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import MainFunctionStateProvider from "./States/MainFunctionState";
import ChannelDataStateProvider from "./States/ChannelDataState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChannelDataStateProvider>
      <MainFunctionStateProvider>
        <App />
      </MainFunctionStateProvider>
    </ChannelDataStateProvider>
  </React.StrictMode>
);
