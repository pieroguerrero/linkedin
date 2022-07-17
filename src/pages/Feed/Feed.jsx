import UserInformation from "./components/UserInformation/UserInformation";
import { NewsFeed } from "./components/NewsFeed";
import MediaQueries from "../../utilities/MediaQueries";
import { AdsContainer } from "./components/AdsContainer";
import { useSelector } from "react-redux";
import { getReduxState } from "../../utilities/ReduxUtils";

export default function Feed() {
  const objLoggedUser = useSelector(getReduxState);

  return (
    <div className=" bg-color-main-background h-full flex-1 w-full flex justify-center pt-6">
      <div className="flex gap-6 justify-center w-full max-w-6xl">
        {MediaQueries.minWidth640px.matches ? (
          <div>
            <UserInformation objLoggedUser={objLoggedUser} />
          </div>
        ) : null}
        <main>
          <NewsFeed />
        </main>

        {MediaQueries.minWidth640px.matches ? (
          <aside>
            <AdsContainer objLoggedUser={objLoggedUser} />
          </aside>
        ) : null}
      </div>
    </div>
  );
}
