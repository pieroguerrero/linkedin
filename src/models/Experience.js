/**
 * @module Factory_Experience
 */

/**
 * @typedef {Object} Experience
 * @property {string} strExperienceId
 * @property {string} strProfileId
 * @property {string} strTitle
 * @property {string} strCompanyName
 * @property {string} strLocation
 * @property {string} strIndustry
 * @property {string} strDescription
 * @property {string} strEmploymentType
 * @property {boolean} booCurrent
 * @property {string} strStartMonth
 * @property {string} strStartYear
 * @property {string} strEndMonth
 * @property {string} strEndYear
 * @property {Date} dtCreatedOn
 * @property {boolean} booActive
 */

/**
 * @param {string} strExperienceId
 * @param {string} strProfileId
 * @param {string} strTitle
 * @param {string} strCompanyName
 * @param {string} strLocation
 * @param {string} strIndustry
 * @param {string} strDescription
 * @param {string} strEmploymentType
 * @param {boolean} booCurrent
 * @param {string} strStartMonth
 * @param {string} strStartYear
 * @param {string} strEndMonth
 * @param {string} strEndYear
 * @param {Date} dtCreatedOn
 * @param {boolean} booActive
 * @returns {Experience}
 */
function shapeExperience(
  strExperienceId,
  strProfileId,
  strTitle,
  strCompanyName,
  strLocation,
  strIndustry,
  strDescription,
  strEmploymentType,
  booCurrent,
  strStartMonth,
  strStartYear,
  strEndMonth,
  strEndYear,
  dtCreatedOn,
  booActive
) {
  return {
    strExperienceId,
    strProfileId,
    strTitle,
    strCompanyName,
    strLocation,
    strIndustry,
    strDescription,
    strEmploymentType,
    booCurrent,
    strStartMonth,
    strStartYear,
    strEndMonth,
    strEndYear,
    dtCreatedOn,
    booActive,
  };
}

export { shapeExperience };
