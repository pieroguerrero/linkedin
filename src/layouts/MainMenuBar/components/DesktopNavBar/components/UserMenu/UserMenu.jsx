import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import UserCard from "../../../../../../components/UserCard/UserCard";
// eslint-disable-next-line no-unused-vars
import { User } from "../../../../../../models/User";
import { clearLogedUser } from "../../../../../../redux";
import { googleSignOutUser } from "../../../../../../services";
import { showNotAvailableToast } from "../../../../../../utilities";
import { GroupTitle } from "./components/GroupTitle";
import { LinkOption } from "./components/LinkOption";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @param {function():void} props.handleCloseEvent
 * @returns {JSX.Element}
 */
export default function UserMenu({ objLoggedUser, handleCloseEvent }) {
  const dispatch = useDispatch();
  const objNavigate = useNavigate();

  const handleNotAvailableClick = () => {
    showNotAvailableToast();
  };

  const handleLogOut = () => {
    googleSignOutUser()
      .then(() => {
        dispatch(clearLogedUser);
        objNavigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      tabIndex={-1}
      className="absolute w-[264px] h-[400px] rounded-lg rounded-tr-none shadow-lg bg-white top-[60px] right-0 z-10 "
      onBlur={handleCloseEvent}
    >
      <div className="flex flex-col h-full p-2 pb-0 pt-[6px]">
        <div>
          <UserCard objLoggedUser={objLoggedUser} strDirection="Horizontal" />
        </div>
        <div className="text-color-text-low-emphasis border-solid border-t flex flex-col gap-[6px] px-1 mt-[6px]">
          <GroupTitle strText="Account" />
          <button
            type="button"
            onClick={handleNotAvailableClick}
            className="flex items-center gap-1 text-color-text text-sm font-bold hover:text-color-blue cursor-pointer w-fit"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                fill="#f8c77e"
              ></path>
              <path
                d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                fill="#e7a33e"
              ></path>
            </svg>
            Try Premium for free
          </button>
          <LinkOption
            strText="Settings & Privacy"
            handleClick={handleNotAvailableClick}
          />
          <LinkOption strText="Help" handleClick={handleNotAvailableClick} />
          <LinkOption
            strText="Language"
            handleClick={handleNotAvailableClick}
          />
        </div>
        <div className=" flex flex-col gap-[6px] px-1 text-color-text-low-emphasis border-solid border-t  mt-[6px]">
          <GroupTitle strText="Manage" />
          <LinkOption
            strText="Posts & Activity"
            handleClick={handleNotAvailableClick}
          />
          <LinkOption
            strText="Jobs Posting Account"
            handleClick={handleNotAvailableClick}
          />
        </div>
        <div className="text-color-text-low-emphasis border-solid border-t  mt-[7px] flex items-center h-full">
          <LinkOption
            //TODO:finish the Sign Out process
            strText="Sign Out"
            handleClick={handleLogOut}
          />
        </div>
      </div>
    </div>
  );
}
