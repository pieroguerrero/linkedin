import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
// eslint-disable-next-line no-unused-vars
import { User } from "../../../../models/User";
import { NavigationPaths, showNotAvailableToast } from "../../../../utilities";
import { SearchBox } from "../SearchBox/";
import { NavMenuOptions } from "../NavMenuOptions/NavMenuOptions";
import { FadeInAnimationDiv } from "../../../../components/FadeInAnimationDiv/FadeInAnimationDiv";
const UserDisplay = lazy(() => import("./components/UserDisplay/UserDisplay"));

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns {JSX.Element}
 */
export function DesktopNavBar({ objLoggedUser }) {
  const handleNotAvailableClick = () => {
    showNotAvailableToast();
  };
  return (
    <nav className="hidden sm:flex justify-center w-full shadow-sm border-b">
      <FadeInAnimationDiv
        strDuration="duration-700"
        className={"flex gap-1 justify-center items-center w-full max-w-6xl"}
      >
        <Link to={"/" + NavigationPaths.FEED} className="text-color-blue">
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

        <Suspense>
          <UserDisplay objLoggedUser={objLoggedUser} />
        </Suspense>
        <button
          type="button"
          className={
            "flex items-center flex-row sm:flex-col gap-1.5 sm:gap-0 h-[52px] w-fit sm:w-[80px] sm:min-w-[80px] justify-center  sm:border-solid sm:border-b-2 text-color-text-low-emphasis hover:text-black sm:border-b-transparent"
          }
          onClick={handleNotAvailableClick}
        >
          <span className="flex w-8 sm:w-auto h-fit  flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
            </svg>
          </span>

          <span className="flex items-center text-sm font-bold sm:font-normal break-all leading-[18px] ">
            {"Work"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
            </svg>
          </span>
        </button>
        <button
          onClick={handleNotAvailableClick}
          type="button"
          className="w-full max-w-[100px] text-[#915907] text-[13px] leading-[18px] font-normal hover:text-[#5d3b09] underline"
        >
          Try Premium for free
        </button>
      </FadeInAnimationDiv>
    </nav>
  );
}
