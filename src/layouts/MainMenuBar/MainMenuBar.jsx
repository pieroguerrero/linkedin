import { useSelector } from "react-redux";
import { getReduxState } from "../../utilities/ReduxUtils";
import { EmptyUserState } from "../../redux/states/logedUserSlice";
import { Navigate } from "react-router-dom";
import { DesktopNavBar } from "./components/DesktopNavBar/";
import { Outlet } from "react-router-dom";

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
        {/* Desktop */}
        <DesktopNavBar objLoggedUser={objLoggedUser} />
        {/* Mobile Top*/}
        <nav className="sm:hidden flex">
          <div>{"personal menu"}</div>
          <div>{"search"}</div>
          <div>{"messenger"}</div>
        </nav>
      </header>
      <div className="relative h-full flex-1 flex flex-col">
        <Outlet />
        <div id="div-feed-portal"></div>
      </div>
      {/* Mobile Bottom*/}
      <div>
        <nav className="sm:hidden">
          <div>{"menu options"}</div>
        </nav>
      </div>
    </div>
  );
}
