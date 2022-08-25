// eslint-disable-next-line no-unused-vars
import { User } from "../../../../models";
import strImgExternalAd from "./../../../../assets/images/side-ad1.png";
import AddToYourFeed from "./components/AddToYourFeed/AddToYourFeed";
import { FormalLinks } from "./components/FormalLinks";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns {JSX.Element}
 */
// eslint-disable-next-line no-unused-vars
export default function AdsContainer({ objLoggedUser }) {
  return (
    <div className=" flex flex-col ">
      <AddToYourFeed />
      <div className="w-[315px] h-[250px] flex justify-center px-2 rounded-lg border bg-white shadow-sm mt-[6px]">
        <img loading="lazy" src={strImgExternalAd} alt="External Ad" />
      </div>
      <FormalLinks />
    </div>
  );
}
