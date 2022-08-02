import { useLayoutEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { User } from "../../../../../../../../../../models";
import {
  MediaTypes,
  showNotAvailableToast,
} from "../../../../../../../../../../utilities";
import TextContentImageButton from "./TextContentImageButton";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns {JSX.Element}
 */
export default function TextConent({ objLoggedUser }) {
  // eslint-disable-next-line no-unused-vars
  const [enabledPostButton, setEnabledPostButton] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [contentType, setContentType] = useState(MediaTypes.NONE);

  /**
   * @type {HTMLInputElement}
   */
  const emtpyInput = null;
  const refDivText = useRef(emtpyInput);

  useLayoutEffect(() => {
    if (refDivText && refDivText.current) {
      refDivText.current.focus();
    }
  });

  const handleOnPostClick = async () => {
    //To get the correct media URL based on the 'contentype'
    const strMediaURL = "";

    const { createPost } = await import(
      "../../../../../../../../../../services/servicePost"
    );
    try {
      const objPost = await createPost(
        objLoggedUser.strUserId,
        refDivText.current.innerText,
        // @ts-ignore
        contentType,
        strMediaURL
      );
      console.log("handleOnPostClick", objPost);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChangeText = (e) => {
    setEnabledPostButton(e.target.textContent.length > 0);
  };

  const handleHashTagClick = () => {
    if (refDivText.current) {
      refDivText.current.textContent = refDivText.current.textContent + " #";
    }
  };

  return (
    <div className="flex flex-col">
      <div
        ref={refDivText}
        onInput={handleOnChangeText}
        contentEditable={true}
        className="min-h-[96px] h-fit mx-6 my-3 empty:before:content-['What_do_you_want_to_talk_about?'] empty:before:text-color-text cursor-text outline-none border-none overflow-auto text-color-text-darker text-[17px] leading-6"
      ></div>
      <button
        type="button"
        onClick={handleHashTagClick}
        className=" text-[17px] font-bold text-color-blue pt-[15px]  flex items-center justify-start pl-6 pb-[7px]"
      >
        Add hashtag
      </button>
      <div className="flex py-3 pl-4 pr-6 items-center">
        <div className="flex mr-2">
          <TextContentImageButton
            strText="Add a photo"
            handleClick={showNotAvailableToast}
          />
          <TextContentImageButton
            strText="Add a video"
            handleClick={showNotAvailableToast}
          />
          <TextContentImageButton
            strText="Add a document"
            handleClick={showNotAvailableToast}
          />
          <TextContentImageButton
            strText="Share that you’re hiring"
            handleClick={showNotAvailableToast}
          />
          <TextContentImageButton
            strText="Celebrate an occasion"
            handleClick={showNotAvailableToast}
          />
          <TextContentImageButton
            strText="Create a poll"
            handleClick={showNotAvailableToast}
          />
          <TextContentImageButton
            strText="Add to your post"
            handleClick={showNotAvailableToast}
          />
        </div>
        <div className="border-solid border-l pl-2">
          <button
            type="button"
            onClick={showNotAvailableToast}
            className="flex items-center gap-1 px-3 py-[5px] rounded-[28px] w-fit h-fit hover:bg-black hover:bg-opacity-[0.04] text-color-text "
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
                <path d="M5 8h5v1H5zm11-.5v.08a6 6 0 01-2.75 5L8 16v-3H5.5A5.51 5.51 0 010 7.5 5.62 5.62 0 015.74 2h4.76A5.5 5.5 0 0116 7.5zm-2 0A3.5 3.5 0 0010.5 4H5.74A3.62 3.62 0 002 7.5 3.53 3.53 0 005.5 11H10v1.33l2.17-1.39A4 4 0 0014 7.58zM5 7h6V6H5z"></path>
              </svg>
            </span>
            <span className=" leading-5 text-[15px] font-bold">Anyone</span>
          </button>
        </div>
        <div className=" flex-1 flex justify-end">
          <button
            type="button"
            onClick={handleOnPostClick}
            disabled={!enabledPostButton}
            className={
              "flex justify-center items-center py-[6px] px-[16px] rounded-[28px] w-fit h-fit font-bold leading-5 text-[18px]" +
              " " +
              (enabledPostButton
                ? "border-color-button-blue bg-color-button-blue hover:bg-color-button-blue-darker text-white"
                : "bg-[#00000014] text-[#0000004d] border-[#0000004d] cursor-not-allowed")
            }
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
