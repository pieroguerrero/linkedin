import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Landing } from "./pages/Landing/Landing";
import { Constants } from "./utilities";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Constants.BaseURLPath} element={<Outlet />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
