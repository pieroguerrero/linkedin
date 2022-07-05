import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import App from "./App";
import { NavigationPaths } from "./utilities";
import { Landing } from "./pages/Landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Feed } from "./pages/Feed/Feed";

const divRoot = document.getElementById("root");

if (divRoot) {
  const root = ReactDOM.createRoot(divRoot);
  root.render(
    // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={NavigationPaths.BASE} element={<App />}>
            <Route index element={<Landing />} />
            {/* //TODO: Create the Feed component Layout */}
            <Route path={NavigationPaths.FEED} element={<Feed />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>

    // </React.StrictMode>
  );
}
