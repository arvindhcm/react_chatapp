import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { applyTheme, getSavedTheme } from "./themes";

// Apply before first render so there is no flash of the default theme.
applyTheme(getSavedTheme());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
