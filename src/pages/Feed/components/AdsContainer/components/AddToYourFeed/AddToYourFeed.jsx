import { showNotAvailableToast } from "../../../../../../utilities";
import AccountToFollow from "../../../AccountToFollow/AccountToFollow";

export default function AddToYourFeed() {
  return (
    <div className="w-[315px] h-auto rounded-lg border bg-white shadow-sm p-[12px]">
      <div className="flex justify-between items-center">
        <span className=" text-color-text-darker text-[17px] font-bold leading-6">
          Add to your feed
        </span>
        <span className=" text-color-text w-4 h-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
          </svg>
        </span>
      </div>
      <ul className=" mt-4 ">
        <li className=" my-3">
          <AccountToFollow
            strProfilePicURL={
              "https://firebasestorage.googleapis.com/v0/b/linkedin-39dcf.appspot.com/o/util%2Ftemp%2Fdell.jpeg?alt=media"
            }
            strFullName={"Dell Technologies"}
            strSubTitle={"Information Technology & Services"}
          />
        </li>
        <li className=" my-3">
          <AccountToFollow
            strProfilePicURL={
              "https://firebasestorage.googleapis.com/v0/b/linkedin-39dcf.appspot.com/o/util%2Ftemp%2Felastic.jpeg?alt=media"
            }
            strFullName={"Elastic"}
            strSubTitle={"Computer Software"}
          />
        </li>
        <li className=" my-3">
          <AccountToFollow
            strProfilePicURL={
              "https://firebasestorage.googleapis.com/v0/b/linkedin-39dcf.appspot.com/o/util%2Ftemp%2Fpercona.jpeg?alt=media"
            }
            strFullName={"Percona"}
            strSubTitle={"Information Technology & Services"}
          />
        </li>
      </ul>
      <div className="flex justify-start py-[2px] px-2">
        <a
          className=" text-color-text flex gap-1 font-bold items-center justify-center text-[15px] cursor-pointer"
          onClick={showNotAvailableToast}
        >
          {"View all recommendations"}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
