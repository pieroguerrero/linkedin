// eslint-disable-next-line no-unused-vars
import { User } from "../../../../models/User";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns {JSX.Element}
 */
export function SearchBox({ objLoggedUser }) {
  console.log("SearchBox:", objLoggedUser);
  return (
    <div className="relative w-full">
      <input
        type="text"
        name="input-search-box"
        id="input-search-box"
        placeholder="Search"
        className="flex items-center pl-10 pr-2 w-full h-[34px] bg-color-gray-soft-background rounded-[4px] border-none text-sm font-normal text-color-text-darker max-w-[232px] focus:max-w-[260px]"
      />
      <div className="absolute top-2.5 left-4 text-color-text w-4 h-4">
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
  );
}
