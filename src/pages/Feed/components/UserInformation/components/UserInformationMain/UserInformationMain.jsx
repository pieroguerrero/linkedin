import { FadeInAnimationDiv } from "../../../../../../components/FadeInAnimationDiv";
// eslint-disable-next-line no-unused-vars
import { User } from "../../../../../../models";
import { Constants } from "../../../../../../utilities";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns {JSX.Element}
 */
export default function UserInformationMain({ objLoggedUser }) {
  return (
    <div className=" overflow-hidden flex flex-col  w-[230px] h-fit rounded-lg bg-white shadow-sm p-3 pb-0">
      <FadeInAnimationDiv
        strDuration="duration-[4000ms]"
        className="relative h-[57px] flex justify-center m-[-12px] mb-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('" + objLoggedUser.objProfile?.strBgPicPath + "')",
        }}
      >
        <div className="absolute w-[72px] h-[72px] bottom-[-36px]">
          <img
            referrerPolicy="no-referrer"
            className="w-[72px] h-auto rounded-full"
            src={objLoggedUser.strProfilePicURL}
            alt={objLoggedUser.strFullName}
          />
        </div>
      </FadeInAnimationDiv>
      <div className="flex flex-col items-center mt-[54px] mb-4">
        <a className=" hover:underline cursor-pointer  text-center text-color-text-darker uppercase font-bold text-[17px] leading-6">
          {objLoggedUser.strFullName}
        </a>
        <p className="text-[13px] text-color-text font-medium text-center mt-[2px]">
          {objLoggedUser.objProfile?.objIntro.strHeadline ===
          Constants.ProfileHeadLineEmptyName
            ? "--"
            : objLoggedUser.objProfile?.objIntro.strHeadline}
        </p>
      </div>
      <div className="border-solid border-t mx-[-12px]"></div>
      <div className=" py-3 flex">
        <button
          type="button"
          className=" p-1 flex justify-between flex-1 text-xs hover:bg-[#00000014] mx-[-12px]"
        >
          <div className=" flex flex-col items-start justify-center ml-3">
            <p className=" text-color-text font-bold">Connections</p>
            <p className="font-bold">Grow your Network</p>
          </div>
          <div className="pt-[1px]  mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
            </svg>
          </div>
        </button>
      </div>
      <div className="border-solid border-t mx-[-12px]"></div>
      <button
        type="button"
        className=" py-3 text-xs hover:bg-[#00000014] mx-[-12px]"
      >
        <p className="text-color-text text-left mx-3">
          {"Access exclusive tools & insights"}
        </p>
        <span className="flex items-center gap-1 text-color-text-darker text-xs font-bold hover:text-color-blue  w-fit mx-3 mt-[2px]">
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            width="24"
            height="24"
            focusable="false"
          >
            <path
              d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
              fill="#f8c77e"
            ></path>
            <path
              d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
              fill="#e7a33e"
            ></path>
          </svg>
          Try Premium for free
        </span>
      </button>
      <div className="border-solid border-t mx-[-12px]"></div>
      <button
        type="button"
        className=" py-3 text-xs font-bold flex gap-2 hover:bg-[#00000014] mx-[-12px]"
      >
        <span className=" text-color-text ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
          </svg>
        </span>
        <p>My Items</p>
      </button>
    </div>
  );
}
