import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { User } from "../../../../models/User";
import { NavigationPaths } from "../../../../utilities";
import { SearchBox } from "../SearchBox/";
import { NavMenuOptions } from "../NavMenuOptions/NavMenuOptions";
import { Userdisplay } from "./components/UserDisplay";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns {JSX.Element}
 */
export function DesktopNavBar({ objLoggedUser }) {
  return (
    <nav className="hidden sm:flex justify-center w-full">
      <div className="flex gap-1 justify-center items-center max-w-6xl">
        <Link
          to={NavigationPaths.BASE + "/" + NavigationPaths.FEED}
          className="text-color-blue"
        >
          <svg
            className="w-[41px] h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </Link>
        <SearchBox objLoggedUser={objLoggedUser} />
        <NavMenuOptions objLoggedUser={objLoggedUser} />
        <Userdisplay objLoggedUser={objLoggedUser} />
        <div>{"extra options"}</div>
      </div>
    </nav>
  );
}
