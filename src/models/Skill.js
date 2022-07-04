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
 */

/**
 * @param {string} strSkillId
 * @param {string} strProfileId
 * @param {string} strName
 * @param {Date} dtCreatedOn
 * @returns {Skill}
 */
function shapeSkill(strSkillId, strProfileId, strName, dtCreatedOn) {
  return { strSkillId, strProfileId, strName, dtCreatedOn };
}

export { shapeSkill };
