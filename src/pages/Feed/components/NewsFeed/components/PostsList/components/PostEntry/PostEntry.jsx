// eslint-disable-next-line no-unused-vars
import { Post, User, Profile } from "../../../../../../../../models";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { showNotAvailableToast } from "../../../../../../../../utilities";
import { useLayoutEffect, useRef } from "react";
import InteractionCounter from "./components/InteractionCounter";
import CommentsList from "./components/CommentsList/CommentsList";
import { useState } from "react";
import PostActionButton from "./components/PostActionButton";
import LikeHoverPopUp from "./components/LikeHoverPopUp/LikeHoverPopUp";
/**
 *
 * @param {Object} props
 * @param {Profile} props.objCreatorProfile
 * @param {User} props.objLoggedUser
 * @param {Post} props.objPost
 * @param {number} props.intLikesCount
 * @param {number} props.intCommentsCount
 * @param {number} props.intSharesCount
 * @returns {JSX.Element}
 */
export default function PostEntry({
  objLoggedUser,
  objCreatorProfile,
  objPost,
  intLikesCount,
  intCommentsCount,
  intSharesCount,
}) {
  // eslint-disable-next-line no-unused-vars
  const [showComments, setShowComments] = useState(false);
  const [showLikeHoverPopUp, setShowLikeHoverPopUp] = useState(false);
  const refDivText = useRef(null);
  useLayoutEffect(() => {
    if (refDivText && refDivText.current) {
      refDivText.current.innerText = objPost.strText; //sanitizeHTML(objPost.strText);
    }
  }, []);

  //TODO: add the buttons to interact socialy: LINK, COMMENT, SHARE, etc
  //Give the final shape to the entry

  return (
    <div className=" bg-white h-fit rounded-lg border shadow-sm">
      <div className="flex px-1 justify-between items-start m-3">
        <button
          type="button"
          onClick={showNotAvailableToast}
          className="flex gap-2"
        >
          <div className=" w-12 min-h-full flex items-end">
            <img
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-12 h-auto rounded-full"
              src={objCreatorProfile.strProfilePicURL}
              alt={
                objCreatorProfile.objIntro.strFirstName +
                " " +
                objCreatorProfile.objIntro.strLastName
              }
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-1">
              <p className="text-color-text-darker capitalize font-bold text-base leading-5">
                {objCreatorProfile.objIntro.strFirstName +
                  " " +
                  objCreatorProfile.objIntro.strLastName}
              </p>
              <p className=" text-color-text">
                {"• " +
                  (objLoggedUser.strUserId === objPost.strUserId
                    ? "You"
                    : "3rd")}
              </p>
            </div>
            <p className="text-color-text text-sm leading-4">
              {objCreatorProfile.objIntro.strHeadline}
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
            "relative rounded-full h-8 w-8 hover:bg-[#00000014] text-color-text flex items-center justify-center  whitespace-nowrap"
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
        className=" px-4 text-[15px] text-color-text-darker font-normal leading-5"
        ref={refDivText}
      ></div>
      {intLikesCount > 0 || intCommentsCount > 0 || intSharesCount > 0 ? (
        <InteractionCounter />
      ) : null}

      <div className="flex items-center justify-center py-1 px-3">
        <div className="relative flex-auto flex rounded">
          <button
            type="button"
            onMouseEnter={() => {
              setShowLikeHoverPopUp(true);
            }}
            onMouseLeave={() => {
              setTimeout(() => {
                setShowLikeHoverPopUp(false);
              }, 500);
            }}
            className=" py-[10px] flex-1 px-2 hover:bg-[#00000014] rounded  max-w-[480px]"
          >
            <div className="flex gap-1 items-center justify-center">
              <span className=" text-color-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                </svg>
              </span>
              <span className="text-color-text text-[15px] font-bold leading-7">
                Like
              </span>
            </div>
          </button>
          {showLikeHoverPopUp ? (
            <LikeHoverPopUp objLoggedUser={objLoggedUser} />
          ) : null}
        </div>

        <PostActionButton
          strType="Comment"
          handleClick={showNotAvailableToast}
        />
        <PostActionButton strType="Share" handleClick={showNotAvailableToast} />
        <PostActionButton strType="Send" handleClick={showNotAvailableToast} />
      </div>
      {showComments ? <CommentsList /> : null}
    </div>
  );
}
