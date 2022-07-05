// eslint-disable-next-line no-unused-vars
import { shapeUser, User } from "../models/User";

/**
 *
 * @param {Object} objRawUser
 * @returns {User | null}
 */
const userFromDataBase = (objRawUser) => {
  try {
    const objUser = shapeUser(
      objRawUser.strUserId,
      objRawUser.strEmail,
      objRawUser.strFullName,
      objRawUser.strAuthMethod,
      objRawUser.strProfilePicURL,
      objRawUser.dtCreatedOn.toDate(),
      objRawUser.booActive
    );

    if (objUser) {
      return objUser;
    }
  } catch (error) {
    console.error("UserAdapter.fromDataBase:", error);
  }

  return null;
};

/**
 * Converts the object to be serializable
 * @param {User} objUser
 * @returns {Object}
 */
const userToReduxStore = (objUser) => {
  return { ...objUser, dtCreatedOn: objUser.dtCreatedOn.getTime() };
};

/**
 * Converts the input parameter into a User object
 * @param {Object} objRawUser
 * @returns {Object}
 */
const userFromReduxStore = (objRawUser) => {
  return { ...objRawUser, dtCreatedOn: new Date(objRawUser.dtCreatedOn) };
};

export { userFromDataBase, userToReduxStore, userFromReduxStore };
