// eslint-disable-next-line no-unused-vars
import { User } from "../../../../../../../models";
// eslint-disable-next-line no-unused-vars
import { Post } from "../../../../../../../models";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { showNotAvailableToast } from "../../../../../../../utilities";
import { useLayoutEffect, useRef } from "react";
/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @param {Post} props.objPost
 * @returns {JSX.Element}
 */
export default function PostEntry({ objLoggedUser, objPost }) {
  const refDivText = useRef(null);
  useLayoutEffect(() => {
    if (refDivText) {
      refDivText.current.innerText = objPost.strText; //sanitizeHTML(objPost.strText);
    }
  }, []);

  return (
    <div className=" bg-white h-fit rounded-lg border shadow-sm">
      <div className="flex px-4 justify-between items-start">
        <button
          type="button"
          onClick={showNotAvailableToast}
          className="pt-3 flex gap-2"
        >
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
            <div className="flex gap-1">
              <p className="text-color-text-darker capitalize font-bold text-base leading-5">
                {objLoggedUser.strFullName}
              </p>
              <p className=" text-color-text">
                {"• " +
                  (objLoggedUser.strUserId === objPost.strUserId
                    ? "You"
                    : "3rd")}
              </p>
            </div>
            <p className="text-color-text text-sm leading-4">
              {objLoggedUser.objProfile?.objIntro.strHeadline}
            </p>
            <div className="flex gap-1 items-center text-color-text">
              <p className=" text-sm">
                {formatDistanceToNow(objPost.dtCreatedOn) + " •"}
              </p>
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
            </div>
          </div>
        </button>
        <button
          type="button"
          onClick={showNotAvailableToast}
          className={
            "relative mt-1 rounded-full h-8 w-8 hover:bg-[#00000014] text-color-text flex items-center justify-center  whitespace-nowrap"
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
            <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
          </svg>
        </button>
      </div>
      <div
        ref={refDivText}
        // dangerouslySetInnerHTML={{ __html: sanitizeHTML(objPost.strText) }}
      ></div>
      <div className="flex justify-between">
        <div>{"Likes count"}</div> <div>{"Comments Count"}</div>{" "}
      </div>
      <div>{"Comment actions"}</div>
    </div>
  );
}
