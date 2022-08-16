import { useEffect, useState } from "react";
import { getNextBatch } from "../../../../../../services/servicePost";
// eslint-disable-next-line no-unused-vars
import { Post, User, Profile } from "../../../../../../models";
import PostEntry from "./components/PostEntry";
import { getMainProfileAll } from "../../../../../../services/serviceProfile";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns {JSX.Element}
 */
export default function PostList({ objLoggedUser }) {
  //TODO: Finish the infinite scroll
  /**
   * @type {Array<{objPost:Post,objProfile: Profile}>}
   */
  const arrInitialValue = [];
  const [arrPostsProfile, setArrPostsProfile] = useState(arrInitialValue);

  // eslint-disable-next-line no-unused-vars
  const [dtStartPoint, setDtStartPoint] = useState(null);

  //TODO:move this logic to the parent (NewsFeed) so when a new post is added it can be added to the list.
  //TODO: Also is needed to reorder the list in descendent order
  useEffect(() => {
    getNextBatch(objLoggedUser.strUserId, dtStartPoint).then(
      (arrPostsResponse) => {
        if (arrPostsResponse) {
          const arrUserOwnerIds = arrPostsResponse.map(
            (objPost) => objPost.strUserId
          );

          getMainProfileAll(Array.from(new Set(arrUserOwnerIds))).then(
            (arrProfilesResponse) => {
              if (arrProfilesResponse) {
                const arrPostProfile = arrPostsResponse.map((objPost) => {
                  const arrProfiles = arrProfilesResponse.filter(
                    (objProfile) => objProfile.strUserId === objPost.strUserId
                  );

                  if (arrProfiles.length === 1) {
                    return { objPost, objProfile: arrProfiles[0] };
                  }

                  throw new Error(
                    "PostList.useEffect: Every Post must have a corresponding Profile object."
                  );
                });

                setArrPostsProfile(arrPostProfile);
              }
            }
          );
        }
      }
    );
  }, [dtStartPoint]);

  return (
    <ul className=" flex flex-col gap-2">
      {arrPostsProfile.map((objPostProfile) => {
        return (
          <li key={objPostProfile.objPost.strPostId}>
            <PostEntry
              objLoggedUser={objLoggedUser}
              objCreatorProfile={objPostProfile.objProfile}
              objPost={objPostProfile.objPost}
              intCommentsCount={0}
              intLikesCount={0}
              intSharesCount={0}
            />
          </li>
        );
      })}
    </ul>
  );
}
