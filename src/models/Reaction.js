/**
 * @module Factory_Reaction
 */

/**
 * @typedef {Object} Reaction
 * @property {string} strReactionId
 * @property {string} strParentId
 * @property {("post"|"post-comment"|"comment-reply")} strParentType
 * @property {("like"|"celebrate"|"support"|"funny"|"love"|"insightful"|"curious")} strReactionType
 * @property {Date} dtCreatedOn
 */

/**
 *
 * @param {string} strReactionId
 * @param {string} strParentId
 * @param {("post"|"post-comment"|"comment-reply")} strParentType
 * @param {("like"|"celebrate"|"support"|"funny"|"love"|"insightful"|"curious")} strReactionType
 * @param {Date} dtCreatedOn
 * @returns {Reaction}
 */
function shapeReaction(
  strReactionId,
  strParentId,
  strParentType,
  strReactionType,
  dtCreatedOn
) {
  return {
    strReactionId,
    strParentId,
    strParentType,
    strReactionType,
    dtCreatedOn,
  };
}

export { shapeReaction };
