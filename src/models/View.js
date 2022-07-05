/**
 * @module Factory_View
 */

/**
 * Stores a profile view from another user different than profiles'owner
 * @typedef {Object} View
 * @property {string} strViewId
 * @property {string} strProfileId - Viewed profile Id
 * @property {string} strUserId - Viwer user Id
 * @property {Date} dtCreatedOn
 * @property {boolean} booActive
 */

/**
 * @param {string} strViewId
 * @param {string} strProfileId - Viewed profile Id
 * @param {string} strUserId - Viwer user Id
 * @param {Date} dtCreatedOn
 * @param {boolean} booActive
 * @returns {View}
 */
function shapeView(strViewId, strProfileId, strUserId, dtCreatedOn, booActive) {
  return { strViewId, strProfileId, strUserId, dtCreatedOn, booActive };
}

export { shapeView };
