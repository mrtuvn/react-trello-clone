import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import App from "./App";
// styles
import "./index.css";
import { AppProvider } from "./context/AppContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(_jsx(AppProvider, { children: _jsx(App, {}) }));
