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
 */

/**
 *
 * @param {string} strUserId
 * @param {string} strEmail
 * @param {string} strFullName
 * @param {string} strAuthMethod
 * @param {string} strProfilePicURL
 * @param {Date} dtCreatedOn
 * @returns {User}
 */
function shapeUser(
  strUserId,
  strEmail,
  strFullName,
  strAuthMethod,
  strProfilePicURL,
  dtCreatedOn
) {
  return {
    strUserId,
    strEmail,
    strFullName,
    strAuthMethod,
    strProfilePicURL,
    dtCreatedOn,
  };
}

export { shapeUser };
