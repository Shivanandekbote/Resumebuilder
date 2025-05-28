import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DarkModeProvider } from "./components/DarkModeContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="739025187333-l7bcdcgmbr9u5t0i6jnu4t32ipb4og1s.apps.googleusercontent.com">
    <DarkModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DarkModeProvider>
  </GoogleOAuthProvider>
);
