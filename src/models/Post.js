/**
 * @module Factory_Post
 */

/**
 * @typedef {Object} Post
 * @property {string} strPostId
 * @property {string} strUserId - Owner of the Post
 * @property {string} strText
 * @property {number} intViewCount
 * @property {number} intReactionCount
 * @property {number} intCommentCount
 * @property {("photo"|"video"|"none")} strMediaType
 * @property {string} strMediaURL
 * @property {Date} dtCreatedOn
 * @property {boolean} booActive
 */

/**
 *
 * @param {string} strPostId
 * @param {string} strUserId
 * @param {string} strText
 * @param {number} intViewCount
 * @param {number} intReactionCount
 * @param {number} intCommentCount
 * @param {("photo"|"video"|"none")} strMediaType
 * @param {string} strMediaURL
 * @param {Date} dtCreatedOn
 * @param {boolean} booActive
 * @returns {Post}
 */
function shapePost(
  strPostId,
  strUserId,
  strText,
  intViewCount,
  intReactionCount,
  intCommentCount,
  strMediaType,
  strMediaURL,
  dtCreatedOn,
  booActive
) {
  return {
    strPostId,
    strUserId,
    strText,
    intViewCount,
    intReactionCount,
    intCommentCount,
    strMediaType,
    strMediaURL,
    dtCreatedOn,
    booActive,
  };
}

export { shapePost };
