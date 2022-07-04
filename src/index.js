import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import App from "./App";
import { getFirebaseConfig } from "./firebase-config";
import { initializeApp } from "firebase/app";

initializeApp(getFirebaseConfig());

const divRoot = document.getElementById("root");

if (divRoot) {
  const root = ReactDOM.createRoot(divRoot);
  root.render(
    // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

    // </React.StrictMode>
  );
}
