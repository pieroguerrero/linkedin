import { shapeUser } from "../models/User";
import { CollectionNames } from "../utilities/Enums";
import { createWithId, selectById } from "./firestoreUtil";
// eslint-disable-next-line no-unused-vars
import { User } from "../models/User";
import { userFromDataBase } from "../adapters/UserAdapter";

/**
 * @module ServiceUser
 */

/**
 *
 * @param {string} strUserId
 * @param {string} strEmail
 * @param {string} strFullName
 * @param {string} strAuthMethod
 * @param {string} strProfilePicURL
 * @returns {Promise<User | null>}
 */
const createUser = async (
  strUserId,
  strEmail,
  strFullName,
  strAuthMethod,
  strProfilePicURL
) => {
  const objUser = shapeUser(
    strUserId,
    strEmail,
    strFullName,
    strAuthMethod,
    strProfilePicURL,
    new Date(),
    true
  );
  if (await createWithId(objUser, strUserId, CollectionNames.USERS)) {
    return objUser;
  } else {
    return null;
  }
};

/**
 *
 * @param {string} strId
 * @returns {Promise<User | null>}
 */
const getUser = async (strId) => {
  const objRawUser = await selectById(strId, CollectionNames.USERS);
  return userFromDataBase(objRawUser);
};

export { createUser, getUser };
