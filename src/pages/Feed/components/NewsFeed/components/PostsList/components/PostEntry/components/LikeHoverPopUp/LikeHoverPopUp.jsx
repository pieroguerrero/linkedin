// eslint-disable-next-line no-unused-vars
import { User } from "../../../../../../../../../../models";
import { showNotAvailableToast } from "../../../../../../../../../../utilities";
import LikeHoverButton from "./LikeHoverButton";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns
 */
// eslint-disable-next-line no-unused-vars
export default function LikeHoverPopUp({ objLoggedUser }) {
  return (
    <div className=" absolute top-[-100px] w-52 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
      <LikeHoverButton strType="Like" handleClick={showNotAvailableToast} />
      <LikeHoverButton
        strType="Celebrate"
        handleClick={showNotAvailableToast}
      />
      <LikeHoverButton strType="Curious" handleClick={showNotAvailableToast} />
      <LikeHoverButton strType="Funny" handleClick={showNotAvailableToast} />
      <LikeHoverButton
        strType="Insightful"
        handleClick={showNotAvailableToast}
      />
      <LikeHoverButton strType="Love" handleClick={showNotAvailableToast} />
      <LikeHoverButton strType="Support" handleClick={showNotAvailableToast} />
    </div>
  );
}
