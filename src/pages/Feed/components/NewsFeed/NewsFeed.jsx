import { AddPost } from "./components/AddPost";
// eslint-disable-next-line no-unused-vars
import { User } from "../../../../models";
import { PostList } from "./components/PostsList";

/**
 *
 * @param {Object} props
 * @param {User} props.objLoggedUser
 * @returns {JSX.Element}
 */
export default function NewsFeed({ objLoggedUser }) {
  return (
    <div className=" flex flex-col">
      <AddPost objLoggedUser={objLoggedUser} />
      <div className="w-[540px] flex flex-col">
        <div>{"filter"}</div>
        <PostList objLoggedUser={objLoggedUser} />
      </div>
    </div>
  );
}
