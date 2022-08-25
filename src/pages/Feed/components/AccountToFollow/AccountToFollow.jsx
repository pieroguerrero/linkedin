import { ButtonRounded } from "../../../../components/form-controls";
import { showNotAvailableToast } from "../../../../utilities";

/**
 *
 * @param {object} props
 * @param {object} props.strProfilePicURL
 * @param {object} props.strFullName
 * @param {object} props.strSubTitle
 * @returns
 */
export default function AccountToFollow({
  strProfilePicURL,
  strFullName,
  strSubTitle,
}) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-3">
        <div className="w-12 h-12">
          <img
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover rounded-full"
            src={strProfilePicURL}
            alt={strFullName}
          />
        </div>
        <div className="flex flex-col items-start">
          <span className=" text-color-text-darker font-bold text-[15px] leading-5">
            {strFullName}
          </span>
          <span className=" text-color-text text-sm  mb-1">{strSubTitle}</span>
          <ButtonRounded onClick={showNotAvailableToast} booFitToContent={true}>
            <div className="flex items-center justify-center py-[5px] px-4 gap-1 text-color-text">
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
                  <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                </svg>
              </div>
              <div className=" font-bold text-[17px] leading-5">Follow</div>
            </div>
          </ButtonRounded>
        </div>
      </div>
    </div>
  );
}
