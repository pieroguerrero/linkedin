// eslint-disable-next-line no-unused-vars
import { User } from "../../models";
import { FadeInAnimationDiv } from "../FadeInAnimationDiv";
import { RoundedTextButton } from "../form-controls";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @param {("Horizontal" | "Vertical")} props.strDirection
 * @returns {JSX.Element}
 */
export default function UserCard({ objLoggedUser, strDirection }) {
  const handleViewProfileClick = () => {};
  return (
    <div>
      <div
        className={
          "flex items-center " +
          (strDirection === "Horizontal" ? "flex-row gap-1" : "flex-col")
        }
      >
        <FadeInAnimationDiv
          strDuration="duration-[3000ms]"
          className="w-14 h-14 min-w-[56px] min-h-[56px]"
        >
          <img
            referrerPolicy="no-referrer"
            className="w-14 h-auto rounded-full"
            src={objLoggedUser.strProfilePicURL}
            alt={objLoggedUser.strFullName}
          />
        </FadeInAnimationDiv>

        <div>
          <p className=" uppercase font-bold text-color-text-darker text-[17px] leading-6">
            {objLoggedUser.strFullName}
          </p>
          <p className=" text-color-text-darker text-[15px] leading-5 font-normal ">
            {objLoggedUser.objProfile?.objIntro.strHeadline}
          </p>
        </div>
      </div>
      <div className={strDirection === "Horizontal" ? " mt-2" : ""}>
        <RoundedTextButton
          strColor="blue"
          strText="View Profile"
          handleClick={handleViewProfileClick}
          booBorder={true}
          booFullWidth={true}
          booColoredBackground={false}
          booFitHeigth={true}
        />
      </div>
    </div>
  );
}
