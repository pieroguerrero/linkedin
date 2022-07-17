// eslint-disable-next-line no-unused-vars
import { Profile } from "./Profile";

/**
 *
 * @module Factory_User
 */

/**
 * @typedef {Object} User
 * @property {string} strUserId
 * @property {string} strEmail
 * @property {string} strFullName
 * @property {string} strAuthMethod
 * @property {string} strProfilePicURL
 * @property {Date} dtCreatedOn
 * @property {boolean} booActive
 * @property {Profile | null} objProfile
 */

/**
 *
 * @param {string} strUserId
 * @param {string} strEmail
 * @param {string} strFullName
 * @param {string} strAuthMethod
 * @param {string} strProfilePicURL
 * @param {Date} dtCreatedOn
 * @param {boolean} booActive
 * @returns {User}
 */
function shapeUser(
  strUserId,
  strEmail,
  strFullName,
  strAuthMethod,
  strProfilePicURL,
  dtCreatedOn,
  booActive
) {
  return {
    strUserId,
    strEmail,
    strFullName,
    strAuthMethod,
    strProfilePicURL,
    dtCreatedOn,
    booActive,
    objProfile: null,
  };
}

export { shapeUser };
