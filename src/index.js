import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import App from "./App";
import { NavigationPaths } from "./utilities";
const Landing = lazy(() => import("./pages/Landing/Landing"));
import { BrowserRouter, Route, Routes } from "react-router-dom";

// const ToastContainer = lazy(() =>
//   import("react-toastify").then((module) => ({
//     default: module.ToastContainer,
//   }))
// );
import "react-toastify/dist/ReactToastify.css";
const Feed = lazy(() => import("./pages/Feed/Feed"));
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";

const divRoot = document.getElementById("root");

if (divRoot) {
  const root = ReactDOM.createRoot(divRoot);
  root.render(
    // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path={NavigationPaths.BASE} element={<App />}>
              <Route index element={<Landing />} />
              <Route path={NavigationPaths.FEED} element={<Feed />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
    </Provider>

    // </React.StrictMode>
  );
}
