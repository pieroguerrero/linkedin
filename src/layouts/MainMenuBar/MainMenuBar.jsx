import { useSelector } from "react-redux";
import { getReduxState } from "../../utilities/ReduxUtils";
import { EmptyUserState } from "../../redux/states/logedUserSlice";
import { Navigate } from "react-router-dom";
import { DesktopNavBar } from "./components/DesktopNavBar/";
import { Outlet } from "react-router-dom";
import { MobileNavBarTop } from "./components/MobileNavBar";
import { MobileNavBarBottom } from "./components/MobileNavBar";
import MediaQueries from "../../utilities/MediaQueries";

/**
 * @returns {JSX.Element}
 */
export default function MainMenuBar() {
  const objLoggedUser = useSelector(getReduxState);

  if (objLoggedUser === EmptyUserState) {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <div className="flex flex-col h-full min-h-screen">
      <header>
        {/*Desktop or Mobile Top depending on the screen size*/}
        {MediaQueries.minWidth640px.matches ? (
          <DesktopNavBar objLoggedUser={objLoggedUser} />
        ) : (
          <MobileNavBarTop objLoggedUser={objLoggedUser} />
        )}
      </header>
      <div className="relative h-full flex-1 flex flex-col">
        <Outlet />
        <div id="div-feed-portal"></div>
      </div>
      {/* Mobile Bottom*/}
      {!MediaQueries.minWidth640px.matches ? (
        <div>
          <MobileNavBarBottom objLoggedUser={objLoggedUser} />
        </div>
      ) : null}
    </div>
  );
}
