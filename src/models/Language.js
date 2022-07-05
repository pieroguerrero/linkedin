/**
 * @module Factory_Language
 */

/**
 * @typedef {Object} Language
 * @property {string} strLanguageId
 * @property {string} strName
 * @property {Date} dtCreatedOn
 * @property {boolean} booActive
 */

/**
 * @param {string} strLanguageId
 * @param {string} strName
 * @param {Date} dtCreatedOn
 * @param {boolean} booActive
 * @returns {Language}
 */
function shapeLanguage(strLanguageId, strName, dtCreatedOn, booActive) {
  return { strLanguageId, strName, dtCreatedOn, booActive };
}

export { shapeLanguage };
