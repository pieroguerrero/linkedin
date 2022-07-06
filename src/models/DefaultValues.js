/**
 * @module Factory_DatabaseValues
 */

/**
 * @typedef {Object} DefaultDatabaseValues
 * @property {string} strDefaultProfilePicURL
 * @property {string} strDefaultBackgroundPicURL
 */

/**
 *
 * @param {string} strDefaultProfilePicURL
 * @param {string} strDefaultBackgroundPicURL
 * @returns {DefaultDatabaseValues}
 */
const shapeDBDefaultValues = (
  strDefaultProfilePicURL,
  strDefaultBackgroundPicURL
) => {
  return { strDefaultProfilePicURL, strDefaultBackgroundPicURL };
};

export { shapeDBDefaultValues };
