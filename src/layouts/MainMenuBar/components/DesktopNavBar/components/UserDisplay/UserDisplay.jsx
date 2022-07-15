import { useState } from "react";
import { FadeInAnimationDiv } from "../../../../../../components/FadeInAnimationDiv/";
// eslint-disable-next-line no-unused-vars
import { User } from "../../../../../../models/User";
import { UserMenu } from "../UserMenu";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns {JSX.Element}
 */
export default function UserDisplay({ objLoggedUser }) {
  const [showPopUp, setShowPopUp] = useState(false);
  const handleClick = () => {
    setShowPopUp((preState) => !preState);
  };

  const closeMenu = () => {
    setShowPopUp(false);
  };
  return (
    <div className="text-color-text-low-emphasis relative border-solid border-b-transparent border-r">
      <button
        type="button"
        className={
          "flex items-center justify-center flex-col h-[52px] min-h-[52px] w-[80px] min-w-[80px]  hover:text-black"
        }
        onClick={handleClick}
      >
        <FadeInAnimationDiv strDuration="duration-1000">
          <img
            referrerPolicy="no-referrer"
            className="w-[23px] h-[23px] rounded-full"
            src={objLoggedUser.strProfilePicURL}
            alt={objLoggedUser.strFullName}
          />
        </FadeInAnimationDiv>
        <span className="flex items-center text-sm font-bold sm:font-normal break-all leading-[18px] ">
          {"Me"}
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
      {showPopUp ? (
        <UserMenu objLoggedUser={objLoggedUser} handleCloseEvent={closeMenu} />
      ) : null}
    </div>
  );
}
