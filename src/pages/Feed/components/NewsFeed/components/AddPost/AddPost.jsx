import { lazy, Suspense, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { User } from "../../../../../../models";
import { showNotAvailableToast } from "../../../../../../utilities";
import AddPostButton from "./components/AddPostButton/AddPostButton";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @param {function(object):void} props.addPostToFeed
 * @returns {JSX.Element}
 */
// eslint-disable-next-line no-unused-vars
export default function AddPost({ objLoggedUser, addPostToFeed }) {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleAddPostClick = () => {
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };

  const handleNotAvailableClick = () => {
    showNotAvailableToast();
  };
  return (
    <>
      <div className="w-[545px] h-fit flex flex-col rounded-lg border shadow-sm bg-white">
        <div className="flex gap-2 mb-1 mt-3 mx-4">
          <div className=" w-12 h-12">
            <img
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-12 h-auto rounded-full"
              src={objLoggedUser.strProfilePicURL}
              alt={objLoggedUser.strFullName}
            />
          </div>
          <button
            onClick={handleAddPostClick}
            className="flex items-center border border-[#0000004d] rounded-[35px] border-solid py-[10px] pl-4 pr-2 h-12 w-[452.5px] text-color-text text-[15px] font-bold hover:bg-[#00000014]"
          >
            Start a post
          </button>
        </div>
        <div className="flex justify-around items-center pb-1">
          <AddPostButton
            strType="Photo"
            handleClick={handleNotAvailableClick}
          />
          <AddPostButton
            strType="Video"
            handleClick={handleNotAvailableClick}
          />
          <AddPostButton
            strType="Event"
            handleClick={handleNotAvailableClick}
          />
          <AddPostButton
            strType="Write article"
            handleClick={handleNotAvailableClick}
          />
        </div>
      </div>
      {(() => {
        if (showPopUp) {
          const AddPostPopUp = lazy(() =>
            import("./components/AddPostPopUp/AddPostPopUp")
          );

          return (
            <Suspense>
              <AddPostPopUp
                handleCloseEvent={closePopUp}
                objLoggedUser={objLoggedUser}
                addPostToFeed={addPostToFeed}
              />
            </Suspense>
          );
        }

        return null;
      })()}
    </>
  );
}
