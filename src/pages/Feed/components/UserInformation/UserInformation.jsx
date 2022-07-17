import { UserInformationMain } from "./components/UserInformationMain";
// eslint-disable-next-line no-unused-vars
import { User } from "../../../../models";
import { UserInformationMainAdditional } from "./components/UserInformationAdditional";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns {JSX.Element}
 */
export default function UserInformation({ objLoggedUser }) {
  return (
    <div className=" flex flex-col gap-2">
      <UserInformationMain objLoggedUser={objLoggedUser} />
      <UserInformationMainAdditional objLoggedUser={objLoggedUser} />
    </div>
  );
}
