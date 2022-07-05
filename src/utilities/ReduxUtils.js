// eslint-disable-next-line no-unused-vars
import { RootState } from "../redux/store";
// eslint-disable-next-line no-unused-vars
import { User } from "../models/User";

/**
 * @param {RootState} state
 * @returns {User}
 */
export const getReduxState = (state) => state.loggedUser.value;
