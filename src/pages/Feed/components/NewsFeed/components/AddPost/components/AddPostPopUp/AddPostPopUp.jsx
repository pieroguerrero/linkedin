import { useLayoutEffect, useRef } from "react";
import { PopUpPortal } from "../../../../../../../../components/PopUpPortal";
// eslint-disable-next-line no-unused-vars
import { User } from "../../../../../../../../models";
import { showNotAvailableToast } from "../../../../../../../../utilities";
import { TextConent } from "./components/TextConent";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @param {function():void} props.handleCloseEvent
 * @param {function(object):void} props.addPostToFeed
 * @returns {JSX.Element}
 */

export default function AddPostPopUp({
  objLoggedUser,
  handleCloseEvent,
  addPostToFeed,
}) {
  const refPopUp = useRef(null);

  const handleNotAvailableClick = () => {
    showNotAvailableToast();
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      // @ts-ignore
      refPopUp.current.classList.remove("opacity-0");
      // @ts-ignore
      refPopUp.current.classList.add("opacity-100");
    }, 1);
  }, []);

  return (
    <PopUpPortal>
      <div
        onClick={handleCloseEvent}
        ref={refPopUp}
        className="  w-full h-full flex justify-center transition-opacity   duration-700 opacity-0 bg-color-text"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className=" w-[552px] h-fit rounded-lg bg-white mt-12"
        >
          <div className="flex justify-between px-6 py-4">
            <h2 className=" text-color-text-darker font-normal text-[22px] leading-7">
              Create a post
            </h2>
            <button
              type="button"
              onClick={handleCloseEvent}
              className=" text-color-text"
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
                <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
              </svg>
            </button>
          </div>
          <div className="border-solid border-t"></div>
          <div className="px-6 py-3 flex gap-2">
            <div className=" w-12 min-h-full flex items-end">
              <img
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-12 h-auto rounded-full"
                src={objLoggedUser.strProfilePicURL}
                alt={objLoggedUser.strFullName}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-color-text-darker uppercase font-bold text-[17px] leading-6">
                {objLoggedUser.strFullName}
              </p>
              <button
                type="button"
                onClick={handleNotAvailableClick}
                className="flex items-center gap-1 px-3 py-[4px] rounded-[28px] w-fit border border-solid border-color-button-gray border-opacity-60 hover:border-opacity-90 hover:bg-black hover:bg-opacity-[0.04] text-color-text"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                  </svg>
                </span>
                <span className=" leading-5 text-[15px] font-bold">Anyone</span>
                <span>
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
            </div>
          </div>
          <TextConent
            objLoggedUser={objLoggedUser}
            addPostToFeed={addPostToFeed}
            handleClosePopUp={handleCloseEvent}
          />
          <div></div>
        </div>
      </div>
    </PopUpPortal>
  );
}
