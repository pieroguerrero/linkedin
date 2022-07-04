import { PopUpPortal } from "../../../../../../../../components/PopUpPortal";
import { MenuBar } from "../../../MenuBar/";
import { RoundedTextButton } from "../../../../../../../../components/form-controls/RoundedTextButton";
import { showNotAvailableToast } from "../../../../../../../../utilities";

/**
 *
 * @param {object} props
 * @param {function(object): void} props.handleClose
 * @returns {JSX.Element}
 */
const SideBarMenu = ({ handleClose }) => {
  const handleJoinNowClick = () => {
    showNotAvailableToast();
  };
  return (
    <PopUpPortal>
      <>
        <div className=" w-full h-full flex flex-col bg-white">
          <section>
            <div className="flex flex-col justify-between border-color-border-faint border-none pt-3 px-6 pb-4">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className={" h-[40px]"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="24px"
                    height="24px"
                    className="artdeco-icon"
                    focusable="false"
                  >
                    <path
                      d="M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="font-semibold leading-normal text-color-text text-2xl">
                Menu
              </div>
            </div>
          </section>
          <div className="flex flex-col justify-between h-full px-6">
            <MenuBar />
            <div className="w-full flex justify-center gap-1 mb-6">
              <RoundedTextButton
                strColor="blue"
                strText="Join Now"
                booBorder={true}
                handleClick={handleJoinNowClick}
                booFullWidth={true}
              />
              <RoundedTextButton
                strColor="blue"
                strText="Sign In"
                booBorder={true}
                handleClick={handleJoinNowClick}
                booFullWidth={true}
                booColoredBackground={true}
              />
            </div>
          </div>
        </div>
      </>
    </PopUpPortal>
  );
};

export { SideBarMenu };
