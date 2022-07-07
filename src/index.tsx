import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const container = document.getElementById("tlpwa");
const root = createRoot(container!);

root.render(
  <>
    <App />
  </>
);

serviceWorkerRegistration.register();

reportWebVitals();
