import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Landing } from "./pages/Landing/Landing";
import { Constants } from "./utilities";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={Constants.BaseURLPath} element={<Outlet />}>
            <Route index element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
