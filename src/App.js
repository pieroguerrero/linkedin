import { lazy, Suspense } from "react";
const Landing = lazy(() => import("./pages/Landing/Landing"));
const Feed = lazy(() => import("./pages/Feed/Feed"));
const MainMenuBar = lazy(() => import("./layouts/MainMenuBar/MainMenuBar"));
const ToastContainer = lazy(() =>
  import("react-toastify").then((module) => ({
    default: module.ToastContainer,
  }))
);
import { NavigationPaths } from "./utilities";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Suspense>
      <BrowserRouter basename={NavigationPaths.BASE}>
        <Routes>
          <Route index element={<Landing />} />
          <Route element={<MainMenuBar />}>
            <Route path={NavigationPaths.FEED} element={<Feed />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Suspense>
  );
}

export default App;
