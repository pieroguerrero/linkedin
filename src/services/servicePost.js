import { shapePost } from "../models";
import { CollectionNames } from "../utilities";
import { getDocumentCreator } from "./firestoreUtil";
// eslint-disable-next-line no-unused-vars
import { Post } from "../models";

/**
 * @module ServicePost
 */

/**
 *
 * @param {string} strUserId
 * @param {string} strText
 * @param {"photo" | "video" | "none"} strMediaType
 * @param {string} strMediaURL
 * @returns {Promise<Post | null>}
 */
const createPost = async (strUserId, strText, strMediaType, strMediaURL) => {
  const objDocCreator = getDocumentCreator(
    CollectionNames.USERS,
    strUserId,
    CollectionNames.POSTS
  );

  const objPost = shapePost(
    objDocCreator?.strNewId ?? "no-id",
    strUserId,
    strText,
    0,
    0,
    0,
    strMediaType,
    strMediaURL,
    new Date(),
    true
  );

  if (await objDocCreator?.saveDoc(objPost)) {
    return objPost;
  }

  return null;
};

export { createPost };
