import { lazy, Suspense, useState } from "react";
const PoUpFullContainer = lazy(() =>
  import("../../../../components/PoUpFullContainer/PoUpFullContainer")
);
// eslint-disable-next-line no-unused-vars
import { User } from "../../../../models/User";
import { Constants } from "../../../../utilities";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns {JSX.Element}
 */
// eslint-disable-next-line no-unused-vars
export function SearchBox({ objLoggedUser }) {
  const [showSearchPopUp, setShowSearchPopUp] = useState(false);

  const handleOnFocus = () => {
    setShowSearchPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowSearchPopUp(false);
  };

  return (
    <>
      <div className="relative w-full flex-1 shrink-0">
        <input
          onFocus={handleOnFocus}
          onBlur={handleClosePopUp}
          type="text"
          name="input-search-box"
          id="input-search-box"
          placeholder="Search"
          className="flex items-center pl-8 sm:pl-10 sm:pr-2 w-full h-8 sm:h-[34px] bg-color-gray-soft-background rounded-[4px]  border-none text-[17px] sm:text-sm font-bold sm:font-normal sm:transition-all sm:ease-in-out text-color-gray-ligth focus:text-color-text-darker sm:text-color-text-darker sm:max-w-[280px] focus:shadow-inner focus:border-[#f1c40f] sm:focus:border-black sm:focus:max-w-[384px] focus:border-[2px] focus:border-solid focus:outline-[0px] focus:ring-0 sm:duration-500 "
        />
        <div className="absolute top-2 left-2 sm:top-2.5 sm:left-4 text-color-text w-4 h-4">
          <svg
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
          </svg>
        </div>
      </div>
      {showSearchPopUp ? (
        <Suspense>
          <PoUpFullContainer
            strBgColor="shade"
            strBgColorMobile="white"
            strPortalDivId={Constants.FeedPortalDivId}
            handleCloseEvent={handleClosePopUp}
          >
            <></>
          </PoUpFullContainer>
        </Suspense>
      ) : null}
    </>
  );
}
