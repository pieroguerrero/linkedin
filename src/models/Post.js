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
  dtCreatedOn
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
  };
}

export { shapePost };
