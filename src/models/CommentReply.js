/**
 * @module Factory_CommentReply
 */

/**
 * @typedef {Object} CommentReply
 * @property {string} strCommentReplyId
 * @property {string} strUserId
 * @property {string} strPostCommentId
 * @property {string} strText
 * @property {("photo"|"video"|"none")} strMediaType
 * @property {string} strMediaURL
 * @property {number} intReactionCount
 * @property {Date} dtCreatedOn
 * @property {(1 | 2)} [intDepthLevel=1] - 1 indicates if it is a reply of a comment or 2 a reply of another reply.
 */

/**
 *
 * @param {string} strCommentReplyId
 * @param {string} strUserId
 * @param {string} strPostCommentId
 * @param {string} strText
 * @param {("photo"|"video"|"none")} strMediaType
 * @param {string} strMediaURL
 * @param {number} intReactionCount
 * @param {Date} dtCreatedOn
 * @param {(1 | 2)} [intDepthLevel=1] - 1 indicates that is a reply of a comment. 2 indicates that is a reply of another reply.
 * @returns {CommentReply}
 */
function shapeCommentReply(
  strCommentReplyId,
  strUserId,
  strPostCommentId,
  strText,
  strMediaType,
  strMediaURL,
  intReactionCount,
  dtCreatedOn,
  intDepthLevel = 1
) {
  return {
    strCommentReplyId,
    strUserId,
    strPostCommentId,
    strText,
    strMediaType,
    strMediaURL,
    intReactionCount,
    dtCreatedOn,
    intDepthLevel,
  };
}

export { shapeCommentReply };
