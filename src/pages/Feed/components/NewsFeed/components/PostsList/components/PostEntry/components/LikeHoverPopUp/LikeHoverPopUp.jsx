// eslint-disable-next-line no-unused-vars
import { User } from "../../../../../../../../../../models";
import { showNotAvailableToast } from "../../../../../../../../../../utilities";
import LikeHoverButton from "./LikeHoverButton";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @param {function():void} props.handleKeepOpen
 * @param {function():void} props.handleClose
 * @returns
 */

export default function LikeHoverPopUp({
  // eslint-disable-next-line no-unused-vars
  objLoggedUser,
  handleKeepOpen,
  handleClose,
}) {
  return (
    <div
      onMouseEnter={handleKeepOpen}
      onMouseLeave={handleClose}
      className=" absolute top-[-58px] left-[-24px] w-[290px] h-[50px] bg-white rounded-lg shadow-md flex items-center justify-center border"
    >
      <LikeHoverButton strType="Like" handleClick={showNotAvailableToast} />
      <LikeHoverButton
        strType="Celebrate"
        handleClick={showNotAvailableToast}
      />
      <LikeHoverButton strType="Support" handleClick={showNotAvailableToast} />
      <LikeHoverButton strType="Funny" handleClick={showNotAvailableToast} />
      <LikeHoverButton strType="Love" handleClick={showNotAvailableToast} />
      <LikeHoverButton
        strType="Insightful"
        handleClick={showNotAvailableToast}
      />
      <LikeHoverButton strType="Curious" handleClick={showNotAvailableToast} />
    </div>
  );
}
