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
        //TODO: once all the posts are queried, we need to get the profile information from those users that created the posts. To do that, we will query the main profile information by using some sort of query like the one apperas in this article: https://medium.com/firebase-developers/how-to-query-collections-in-firestore-under-a-certain-path-6a0d686cebd2

        //We will need to create a CollectionGroup for profiles and then with the 'FieldPath.documentId() in [userid1, userid2, userid3, etc]' query constraint, try to select only the users that appear in the Posts array we just queried

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
