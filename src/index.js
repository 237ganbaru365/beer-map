//this is for react v18, no longer avairable to use ReactDOM
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import { UserContextProvider } from "./store/user-context";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AuthContextProvider>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </AuthContextProvider>
);
