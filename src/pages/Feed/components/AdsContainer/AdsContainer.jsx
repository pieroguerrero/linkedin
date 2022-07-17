// eslint-disable-next-line no-unused-vars
import { User } from "../../../../models";
import strImgExternalAd from "./../../../../assets/images/side-ad1.png";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns {JSX.Element}
 */
// eslint-disable-next-line no-unused-vars
export default function AdsContainer({ objLoggedUser }) {
  return (
    <div className=" flex flex-col gap-2 ">
      <div className="w-[315px] h-[373px] rounded-lg border bg-white shadow-sm">
        {"Add to your feed"}
      </div>
      <div className="w-[315px] h-[250px] flex justify-center px-2 rounded-lg border bg-white shadow-sm">
        <img loading="lazy" src={strImgExternalAd} alt="External Ad" />
      </div>
      <div>{"Formal Links"}</div>
    </div>
  );
}
