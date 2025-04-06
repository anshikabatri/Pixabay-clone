import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import PixabayState from "./context/PixabayState.jsx";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <PixabayState>
    <App />
  </PixabayState>
);