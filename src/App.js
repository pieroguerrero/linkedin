import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { User } from "./models/User";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../src/redux/store";
// eslint-disable-next-line no-unused-vars
import { EmptyUserState } from "../src/redux/states/";
import { NavigationPaths } from "./utilities";

function App() {
  console.log("App loaded!");
  const objLocation = useLocation();
  const objLoggedUser = useSelector(
    /**
     *
     * @param {RootState} state
     * @returns {User}
     */
    (state) => state.loggedUser.value
  );

  if (
    objLocation.pathname.toLowerCase().replace(/\/$/g, "") ===
    NavigationPaths.BASE
  ) {
    console.log("objLocation.pathname:", objLocation.pathname);
    console.log("objlocation.key:", objLocation.key);
    return <Outlet />;
  }
  console.log("objLocation.pathname:", objLocation.pathname);
  return (
    //Show the menu bar and the content of the private zone
    <>
      <div>{objLoggedUser.strEmail}</div>
      <Outlet />
    </>
  );
}

export default App;
