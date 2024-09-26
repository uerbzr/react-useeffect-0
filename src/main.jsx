import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  /*<StrictMode>*/
  <App />
  /*</StrictMode>,*/
  /* strict mode is removed because the useEffect runs twice...?  see https://react.dev/reference/react/StrictMode */
);
