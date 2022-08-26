// eslint-disable-next-line no-unused-vars
import { User } from "../../../../models";
import { ButtonImageText } from "../../../../components/form-controls";
import { useLocation } from "react-router-dom";
import { NavigationPaths, showNotAvailableToast } from "../../../../utilities";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns {JSX.Element}
 */
export default function MobileNavBarBottom({ objLoggedUser }) {
  const objLocation = useLocation();

  const handleHomeClick = () => {
    console.log("NavMenuOptions.Home:", objLoggedUser);
  };

  const handleNotAvailableClick = () => {
    showNotAvailableToast();
  };

  return (
    <footer className=" fixed left-0 bottom-0 border sm:hidden flex justify-center h-[46px] pt-[2px] bg-white">
      <div className="flex justify-center w-full">
        <ButtonImageText
          strTitle="Home"
          handleClick={handleHomeClick}
          booSelected={
            objLocation.pathname ===
            NavigationPaths.BASE + "/" + NavigationPaths.FEED
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
          </svg>
        </ButtonImageText>
        <ButtonImageText
          strTitle="My Network"
          handleClick={handleNotAvailableClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
          </svg>
        </ButtonImageText>

        <ButtonImageText strTitle="Post" handleClick={handleNotAvailableClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="post-fill-medium"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
          >
            <path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm-5 8h4v2h-4v4h-2v-4H7v-2h4V7h2z"></path>
          </svg>
        </ButtonImageText>

        <ButtonImageText
          strTitle="Notifications"
          handleClick={handleNotAvailableClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
          </svg>
        </ButtonImageText>
        <ButtonImageText strTitle="Jobs" handleClick={handleNotAvailableClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
          </svg>
        </ButtonImageText>
      </div>
    </footer>
  );
}
