import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getReduxState } from "../../utilities/ReduxUtils";
import { EmptyUserState } from "../../redux/states/logedUserSlice";
import { useNavigate } from "react-router-dom";
import { NavigationPaths } from "../../utilities";
import { DesktopNavBar } from "./components/DesktopNavBar/";

/**
 * @param {Object} props
 * @param {JSX.Element} props.children
 * @returns {JSX.Element}
 */
export function MainMenuBar({ children }) {
  const objNavigate = useNavigate();
  const objLoggedUser = useSelector(getReduxState);

  useEffect(() => {
    if (objLoggedUser === EmptyUserState) {
      objNavigate(NavigationPaths.BASE);
    }
  }, []);

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
      <div className="relative h-full flex-1 flex flex-col">{children}</div>
      {/* Mobile Bottom*/}
      <div>
        <nav className="sm:hidden">
          <div>{"menu options"}</div>
        </nav>
      </div>
    </div>
  );
}
