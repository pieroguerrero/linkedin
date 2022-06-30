import {
  RoundedTextButton,
  ButtonRounded,
} from "../../../../components/form-controls/";
import {
  showCustomTextToast,
  showNotAvailableToast,
} from "../../../../utilities";

const HeroForm = () => {
  const handleAgreeAndJoinClick = () => {
    showCustomTextToast(
      "Email and Password login not implemented yet. Please continue with Google or Guest options.",
      5
    );
  };

  const handleJoinGoogleClick = () => {};

  const handleGuestClick = () => {};

  const handleTermsAndConditions = () => {
    showNotAvailableToast();
  };

  return (
    <form className="w-full sm:w-[408px]">
      <p className="pb-[24px] sm:pb-0 text-[33px] sm:text-[58px] text-color-text-accent sm:font-light leading-[1.2]  sm:text-opacity-90">
        Welcome to your professional community
      </p>
      <div className=" pt-3 pb-7 sm:pt-8 sm:pb-4">
        <div className="flex flex-col gap-3">
          <input
            className="w-full h-12 border-color-button-gray rounded-sm bg-transparent px-3 text-base"
            type="email"
            name="input-text-email"
            id="input-text-email"
            placeholder="Email or phone number"
          />
          <input
            type="password"
            name="input-text-pass"
            id="input-text-pass"
            placeholder="Password (8+ characters)"
          />
        </div>
        <p className=" py-3 text-[15px] leading-5 text-color-text font-medium">
          By clicking Agree & Join, you agree to the LinkedIn{" "}
          <span
            onClick={handleTermsAndConditions}
            className=" hover:cursor-pointer hover:underline text-color-blue font-bold"
          >
            User Agreement, Privacy Policy
          </span>
          {" and "}
          <span
            onClick={handleTermsAndConditions}
            className="hover:cursor-pointer hover:underline text-color-blue  font-bold"
          >
            Cookie Policy
          </span>
          .
        </p>
        <div className="sm:text-xl">
          <RoundedTextButton
            strColor="blue"
            strText="Agree & Join"
            booBorder={true}
            booColoredBackground={true}
            booFullWidth={true}
            handleClick={handleAgreeAndJoinClick}
          />
        </div>
        <div className=" mt-4">
          <ButtonRounded onClick={handleJoinGoogleClick}>
            <div className="flex gap-4 sm:gap-6 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                x="0"
                y="0"
                preserveAspectRatio="xMinYMin meet"
                focusable="false"
              >
                <g>
                  <path
                    fill="#E94435"
                    d="M12.1,5.8c1.6-0.1,3.1,0.5,4.3,1.6l2.6-2.7c-1.9-1.8-4.4-2.7-6.9-2.7c-3.8,0-7.2,2-9,5.3l3,2.4C7.1,7.2,9.5,5.7,12.1,5.8z"
                  ></path>
                  <path
                    fill="#F8BB15"
                    d="M5.8,12c0-0.8,0.1-1.6,0.4-2.3l-3-2.4C2.4,8.7,2,10.4,2,12c0,1.6,0.4,3.3,1.1,4.7l3.1-2.4C5.9,13.6,5.8,12.8,5.8,12z"
                  ></path>
                  <path
                    fill="#34A751"
                    d="M15.8,17.3c-1.2,0.6-2.5,1-3.8,0.9c-2.6,0-4.9-1.5-5.8-3.9l-3.1,2.4C4.9,20,8.3,22.1,12,22c2.5,0.1,4.9-0.8,6.8-2.3L15.8,17.3z"
                  ></path>
                  <path
                    fill="#547DBE"
                    d="M22,12c0-0.7-0.1-1.3-0.2-2H12v4h6.1v0.2c-0.3,1.3-1.1,2.4-2.2,3.1l3,2.4C21,17.7,22.1,14.9,22,12z"
                  ></path>
                </g>
              </svg>
              <p className=" text-color-button-gray text-lg sm:text-xl font-medium">
                Join with Google
              </p>
            </div>
          </ButtonRounded>
        </div>
        <div
          className="flex items-center justify-center my-4 px-4 
      before:h-[1px] before:w-auto before:flex-1 before:bg-color-button-gray before:bg-opacity-50 before:content-['']
      after:h-[1px] after:w-auto after:flex-1 after:bg-color-button-gray after:content-['']  after:bg-opacity-50"
        >
          <span className="text-color-text-low-emphasis px-2">or</span>
        </div>
        <div className=" mt-4">
          <ButtonRounded onClick={handleGuestClick}>
            <div className="flex gap-6 items-center justify-center">
              <p className=" text-color-text text-lg sm:text-[21px] font-bold">
                {"Continue as a "}
                <strong className=" text-color-blue">{"Guest"}</strong>
              </p>
            </div>
          </ButtonRounded>
        </div>
      </div>
    </form>
  );
};

export { HeroForm };
