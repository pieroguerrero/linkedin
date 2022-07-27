import { shapePost } from "../models";

const postFromDatabase = (objRawPost) => {
  try {
    const objPost = shapePost(
      objRawPost.strPostId,
      objRawPost.strUserId,
      objRawPost.strText,
      objRawPost.intViewCount,
      objRawPost.intReactionCount,
      objRawPost.intCommentCount,
      objRawPost.strMediaType,
      objRawPost.strMediaURL,
      objRawPost.dtCreatedOn.toDate(),
      objRawPost.booActive
    );

    if (objPost) {
      return objPost;
    }
  } catch (error) {
    console.error("PostAdapter.postFromDatabase:", error);
  }

  return null;
};

export { postFromDatabase };
