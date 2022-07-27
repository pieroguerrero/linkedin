import { useEffect, useState } from "react";
import { getNextBatch } from "../../../../../../services/servicePost";
// eslint-disable-next-line no-unused-vars
import { Post } from "../../../../../../models";

export default function PostList() {
  //TODO: Finish the infinite scroll
  /**
   * @type {Post[]}
   */
  const arrInitialValue = [];
  const [arrPosts, setArrPosts] = useState(arrInitialValue);
  // eslint-disable-next-line no-unused-vars
  const [dtStartPoint, setDtStartPoint] = useState(null);

  useEffect(() => {
    getNextBatch(dtStartPoint).then((arrPostsResponse) => {
      if (arrPostsResponse) {
        setArrPosts(arrPostsResponse);
      }
    });
  }, [dtStartPoint]);
  return (
    <ul>
      {arrPosts.map((objPost) => {
        return <li key={objPost.strPostId}>{objPost.strText}</li>;
      })}
    </ul>
  );
}
