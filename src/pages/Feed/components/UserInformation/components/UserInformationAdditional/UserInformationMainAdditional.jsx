// eslint-disable-next-line no-unused-vars
import { User } from "../../../../../../models";
import { showNotAvailableToast } from "../../../../../../utilities";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns {JSX.Element}
 */
// eslint-disable-next-line no-unused-vars
export default function UserInformationMainAdditional({ objLoggedUser }) {
  const handleNotAvailableClick = () => {
    showNotAvailableToast();
  };
  return (
    <div className="w-[225px] h-fit rounded-lg bg-white shadow-sm">
      <div className="flex flex-col gap-2 pt-3 pb-1">
        <button
          onClick={handleNotAvailableClick}
          className=" text-xs text-color-blue font-bold cursor-pointer hover:underline w-full flex justify-start px-3 py-1"
        >
          Groups
        </button>
        <div className="w-full px-3 py-1 flex justify-between">
          <button
            onClick={handleNotAvailableClick}
            className=" text-xs text-color-blue font-bold cursor-pointer hover:underline flex justify-start "
          >
            Events
          </button>
          <button
            onClick={handleNotAvailableClick}
            className=" text-color-text"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
          </button>
        </div>

        <button
          onClick={handleNotAvailableClick}
          className=" text-xs text-color-blue font-bold cursor-pointer hover:underline w-full flex justify-start px-3 py-1"
        >
          Followed Hashtags
        </button>
      </div>
      <div className="border-solid border-t"></div>

      <button
        onClick={handleNotAvailableClick}
        className="py-3 w-full text-sm font-bold gap-2 text-color-text text-center hover:bg-[#00000014]"
      >
        {"Discover More"}
      </button>
    </div>
  );
}
