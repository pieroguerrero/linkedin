import { shapePost } from "../models";
import { CollectionNames } from "../utilities";
import { getBatch, getDocumentCreator, where, orderBy } from "./firestoreUtil";
// eslint-disable-next-line no-unused-vars
import { Post } from "../models";
import { postFromDatabase } from "../adapters/PostAdapter";

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
/**
 *
 * @param {object} [objStartKey=null] - NULL for the first batch of Documents
 * @param {string} strUserId
 * @returns {Promise<Post[] | null>}
 */

// eslint-disable-next-line no-unused-vars
const getNextBatch = async (strUserId, objStartKey = null) => {
  try {
    //TODO: use the firestoreUtil.getBatch method to get the data from the posts
    //Detecting when user scrolls to bottom of div with React js:
    //https://stackoverflow.com/questions/45585542/detecting-when-user-scrolls-to-bottom-of-div-with-react-js
    //Inifinite Scroll: https://dev.to/hadi/infinite-scroll-in-firebase-firestore-and-react-js-55g3
    //https://firebase.google.com/docs/firestore/query-data/query-cursors

    const arrQuerySnapDocs = await getBatch(
      CollectionNames.POSTS,
      objStartKey,
      5,
      [where("booActive", "==", true), orderBy("dtCreatedOn", "desc")]
    );
    if (arrQuerySnapDocs) {
      const arrFormatedData = arrQuerySnapDocs.map((objDocData) => {
        const objPost = postFromDatabase(objDocData.data());
        if (objPost) {
          return objPost;
        }

        throw new Error("servicePost.getNextBatch: objPost cannot be null.");
      });

      return arrFormatedData;
    }
  } catch (error) {
    console.error(error);
  }

  return null;
};

export { createPost, getNextBatch };
