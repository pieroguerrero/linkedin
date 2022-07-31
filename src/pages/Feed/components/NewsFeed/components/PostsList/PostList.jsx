import { useEffect, useState } from "react";
import { getNextBatch } from "../../../../../../services/servicePost";
// eslint-disable-next-line no-unused-vars
import { Post } from "../../../../../../models";
// eslint-disable-next-line no-unused-vars
import { User } from "../../../../../../models";
import PostEntry from "./components/PostEntry";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns {JSX.Element}
 */
export default function PostList({ objLoggedUser }) {
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
    <ul className=" flex flex-col gap-2">
      {arrPosts.map((objPost) => {
        return (
          <li key={objPost.strPostId}>
            <PostEntry objLoggedUser={objLoggedUser} objPost={objPost} />
          </li>
        );
      })}
    </ul>
  );
}
