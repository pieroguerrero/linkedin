import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getReduxState } from "../../utilities/ReduxUtils";
import { EmptyUserState } from "../../redux/states/logedUserSlice";
import { useNavigate } from "react-router-dom";
import { NavigationPaths } from "../../utilities";

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
    <div>
      <header>{"Header"}</header>
      <div>{children}</div>
    </div>
  );
}
