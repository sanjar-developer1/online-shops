import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n.js"; // i18n ni import qildim

createRoot(document.getElementById("root")).render(<App />);
