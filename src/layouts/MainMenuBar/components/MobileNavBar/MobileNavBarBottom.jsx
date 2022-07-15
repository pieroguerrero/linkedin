import { NavMenuOptions } from "../NavMenuOptions";
// eslint-disable-next-line no-unused-vars
import { User } from "../../../../models";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns {JSX.Element}
 */
export default function MobileNavBarBottom({ objLoggedUser }) {
  return (
    <nav className="sm:hidden">
      <NavMenuOptions objLoggedUser={objLoggedUser} booMessaging={false} />
    </nav>
  );
}
