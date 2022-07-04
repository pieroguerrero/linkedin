/**
 * @module Factory_PostComment
 */

/**
 * @typedef {Object} PostComment
 * @property {string} strPostCommentId
 * @property {string} strUserId
 * @property {string} strPostId
 * @property {string} strText
 * @property {("photo"|"video"|"none")} strMediaType
 * @property {string} strMediaURL
 * @property {number} intReactionCount
 * @property {number} intReplyCount
 * @property {Date} dtCreatedOn
 */

/**
 *
 * @param {string} strPostCommentId
 * @param {string} strUserId
 * @param {string} strPostId
 * @param {string} strText
 * @param {("photo"|"video"|"none")} strMediaType
 * @param {string} strMediaURL
 * @param {number} intReactionCount
 * @param {number} intReplyCount
 * @param {Date} dtCreatedOn
 * @returns {PostComment}
 */
function shapePostComment(
  strPostCommentId,
  strUserId,
  strPostId,
  strText,
  strMediaType,
  strMediaURL,
  intReactionCount,
  intReplyCount,
  dtCreatedOn
) {
  return {
    strPostCommentId,
    strUserId,
    strPostId,
    strText,
    strMediaType,
    strMediaURL,
    intReactionCount,
    intReplyCount,
    dtCreatedOn,
  };
}

export { shapePostComment };
