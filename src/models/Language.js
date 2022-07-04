/**
 * @module Factory_Language
 */

/**
 * @typedef {Object} Language
 * @property {string} strLanguageId
 * @property {string} strName
 * @property {Date} dtCreatedOn
 */

/**
 * @param {string} strLanguageId
 * @param {string} strName
 * @param {Date} dtCreatedOn
 * @returns {Language}
 */
function shapeLanguage(strLanguageId, strName, dtCreatedOn) {
  return { strLanguageId, strName, dtCreatedOn };
}

export { shapeLanguage };
