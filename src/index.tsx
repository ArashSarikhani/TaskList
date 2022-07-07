import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { store } from "./store";
import { Provider } from "react-redux";
const container = document.getElementById("tlpwa");
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorkerRegistration.register();

reportWebVitals();
