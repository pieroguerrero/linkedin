// eslint-disable-next-line no-unused-vars
import { User } from "../../../../models";
import { showNotAvailableToast } from "../../../../utilities";
import { SearchBox } from "../SearchBox";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns {JSX.Element}
 */
export default function MobileNavBarTop({ objLoggedUser }) {
  const handleNotAvailableClick = () => {
    showNotAvailableToast();
  };

  return (
    <nav className="sm:hidden flex h-12 w-full bg-white py-2 pl-4 pr-[6px] border-b">
      <button type="button" className=" w-8 h-8 min-w-8 min-h-8 mr-4">
        <img
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-8 h-auto rounded-full"
          src={objLoggedUser.strProfilePicURL}
          alt={objLoggedUser.strFullName}
        />
      </button>
      <div className=" min-w-[245px] m-[2px] mr-2 flex items-center">
        <SearchBox objLoggedUser={objLoggedUser} />
      </div>

      <button
        type="button"
        onClick={handleNotAvailableClick}
        className=" w-[52px] h-8 flex items-center justify-center text-color-button-gray-ligth"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="messages-medium"
          data-supported-dps="24x24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
        </svg>
      </button>
    </nav>
  );
}
