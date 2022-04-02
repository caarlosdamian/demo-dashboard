import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { DarkModeContextProvider } from "./context/darkModeContext.js";

ReactDOM.render(
  <AuthContextProvider>
    <DarkModeContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DarkModeContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
