/**
 * @module Factory_Education
 */

/**
 * @typedef {Object} Education
 * @property {string} strEducationId
 * @property {string} strProfileId
 * @property {string} strSchool
 * @property {string} strDegree
 * @property {string} strFieldOfStudy
 * @property {string} strGrade
 * @property {string} strDescription
 * @property {string} strStartMonth
 * @property {string} strStartYear
 * @property {string} strEndMonth
 * @property {string} strEndYear
 * @property {string} strActivitiesAndSoc
 * @property {boolean} booCurrent
 * @property {Date} dtCreatedOn
 * @property {boolean} booActive
 */

/**
 * @param {string} strEducationId
 * @param {string} strProfileId
 * @param {string} strSchool
 * @param {string} strDegree
 * @param {string} strFieldOfStudy
 * @param {string} strGrade
 * @param {string} strDescription
 * @param {string} strStartMonth
 * @param {string} strStartYear
 * @param {string} strEndMonth
 * @param {string} strEndYear
 * @param {string} strActivitiesAndSoc
 * @param {boolean} booCurrent
 * @param {Date} dtCreatedOn
 * @param {boolean} booActive
 * @returns {Education}
 */
function shapeEducation(
  strEducationId,
  strProfileId,
  strSchool,
  strDegree,
  strFieldOfStudy,
  strGrade,
  strDescription,
  strActivitiesAndSoc,
  booCurrent,
  strStartMonth,
  strStartYear,
  strEndMonth,
  strEndYear,
  dtCreatedOn,
  booActive
) {
  return {
    strEducationId,
    strProfileId,
    strSchool,
    strDegree,
    strFieldOfStudy,
    strGrade,
    strDescription,
    strActivitiesAndSoc,
    booCurrent,
    strStartMonth,
    strStartYear,
    strEndMonth,
    strEndYear,
    dtCreatedOn,
    booActive,
  };
}

export { shapeEducation };
