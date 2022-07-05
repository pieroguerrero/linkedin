import { Outlet, useLocation } from "react-router-dom";
import { MainMenuBar } from "./layouts/MainMenuBar/";
import { NavigationPaths } from "./utilities";

function App() {
  const objLocation = useLocation();

  return (
    <>
      {objLocation.pathname.toLowerCase().replace(/\/$/g, "") ===
      NavigationPaths.BASE ? (
        <Outlet />
      ) : (
        <MainMenuBar>
          <Outlet />
        </MainMenuBar>
      )}
    </>
  );
}

export default App;
