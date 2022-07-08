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
          <>
            <Outlet />
            <div id="div-feed-portal"></div>
          </>
        </MainMenuBar>
      )}
    </>
  );
}

export default App;
