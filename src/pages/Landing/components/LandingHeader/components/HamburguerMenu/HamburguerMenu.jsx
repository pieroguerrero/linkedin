import { useState } from "react";
import { SideBarMenu } from "./components/SideBarMenu";

const HamburguerMenu = () => {
  const [popUp, setPopUp] = useState(false);
  const handleClick = () => {
    setPopUp(true);
  };

  const handleClose = () => {
    setPopUp(false);
  };
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center justify-center gap-1 cursor-pointer"
        aria-expanded="false"
      >
        <span
          className="flex items-center h-3 w-3 text-color-blue mr-1"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            fill="none"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M.333 4.667h13.334V3.333H.333v1.334Zm0-3.334h13.334V0H.333v1.333ZM.333 8h13.334V6.667H.333V8Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <span className="font-sans text-sm font-bold text-color-blue leading-[1.2]">
          Menu
        </span>
      </button>
      {popUp ? <SideBarMenu handleClose={handleClose} /> : null}
    </>
  );
};

export { HamburguerMenu };
