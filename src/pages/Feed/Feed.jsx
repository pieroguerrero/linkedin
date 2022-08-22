import { useSelector } from "react-redux";
import MediaQueries from "../../utilities/MediaQueries";
import { getLoggedUserState } from "../../utilities/ReduxUtils";
import { AdsContainer } from "./components/AdsContainer";
import { NewsFeed } from "./components/NewsFeed";
import UserInformation from "./components/UserInformation/UserInformation";

export default function Feed() {
  const objLoggedUser = useSelector(getLoggedUserState);

  return (
    <div className=" bg-color-main-background h-full flex-1 w-full flex justify-center pt-6">
      <div className="flex gap-6 justify-center w-full max-w-6xl">
        {MediaQueries.minWidth640px.matches ? (
          <div>
            <UserInformation objLoggedUser={objLoggedUser} />
          </div>
        ) : null}
        <main>
          <NewsFeed objLoggedUser={objLoggedUser} />
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
