/**
 * @module Factory_Skill
 */

/**
 *
 * @typedef {Object} Skill
 * @property {string} strSkillId
 * @property {string} strProfileId
 * @property {string} strName
 * @property {Date} dtCreatedOn
 * @property {boolean} booActive
 */

/**
 * @param {string} strSkillId
 * @param {string} strProfileId
 * @param {string} strName
 * @param {Date} dtCreatedOn
 * @param {boolean} booActive
 * @returns {Skill}
 */
function shapeSkill(strSkillId, strProfileId, strName, dtCreatedOn, booActive) {
  return { strSkillId, strProfileId, strName, dtCreatedOn, booActive };
}

export { shapeSkill };
