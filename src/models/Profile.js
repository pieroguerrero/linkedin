/**
 * @module Factory_Profile
 */

/**
 * @typedef {Object} ProfileIntro
 * @property {string} strFirstName
 * @property {string} strLastName
 * @property {string} strHeadline
 * @property {string} strCountryLoc
 * @property {string} strPostalCodeLoc
 */

/**
 * @typedef {Object} Profile
 * @property {string} strProfileId - A composite Id with the shape  of "strUserId-strLanguageId"
 * @property {boolean} booPrimary - Indicates if this is the primary profile or not
 * @property {("education"|"skill"|"experience")[]} arrSections - Contains the list of section this Profile has configured with at least one register or document in the database.
 * @property {string} strAbout
 * @property {ProfileIntro} objIntro
 * @property {string} strProfilePicURL
 * @property {string} strBgPicPath
 * @property {Date} dtCreatedOn
 * @property {boolean} booActive
 * @property {string} strUserId
 */

/**
 * @param {string} strProfileId - A composite Id with the shape  of "strUserId-strLanguageId"
 * @param {boolean} booPrimary - Indicates if this is the primary profile or not
 * @param {("education"|"skill"|"experience")[]} arrSections - Contains the list of section this Profile has configured with at least one register or document in the database.
 * @param {string} strAbout
 * @param {ProfileIntro} objIntro
 * @param {string} strProfilePicURL
 * @param {string} strBgPicPath
 * @param {Date} dtCreatedOn
 * @param {boolean} booActive
 * @param {string} strUserOwnerId
 * @returns {Profile}
 */
function shapeProfile(
  strProfileId,
  booPrimary,
  arrSections,
  strAbout,
  objIntro,
  strProfilePicURL,
  strBgPicPath,
  dtCreatedOn,
  booActive,
  strUserOwnerId
) {
  return {
    strProfileId,
    booPrimary,
    arrSections,
    strAbout,
    objIntro,
    strProfilePicURL,
    strBgPicPath,
    dtCreatedOn,
    booActive,
    strUserId: strUserOwnerId,
  };
}

/**
 * @param {string} strFirstName
 * @param {string} strLastName
 * @param {string} strHeadline
 * @param {string} strCountryLoc
 * @param {string} strPostalCodeLoc
 * @returns {ProfileIntro}
 */
function shapeProfileIntro(
  strFirstName,
  strLastName,
  strHeadline,
  strCountryLoc,
  strPostalCodeLoc
) {
  return {
    strFirstName,
    strLastName,
    strHeadline,
    strCountryLoc,
    strPostalCodeLoc,
  };
}

/**
 *
 * @param {string} strUserOwnerId
 * @param {string} strLanguageId
 * @returns {string}
 */
const composeNewProfileId = (strUserOwnerId, strLanguageId) => {
  return strUserOwnerId + "-" + strLanguageId;
};

export { shapeProfile, shapeProfileIntro, composeNewProfileId };
