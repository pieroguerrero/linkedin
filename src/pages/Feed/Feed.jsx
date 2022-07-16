import UserInformation from "./components/UserInformation/UserInformation";
import { NewsFeed } from "./components/NewsFeed";
import MediaQueries from "../../utilities/MediaQueries";
import { AdsContainer } from "./components/AdsContainer";

export default function Feed() {
  return (
    <div className=" bg-color-main-background h-full flex-1 w-full flex justify-center pt-6">
      <div className="flex gap-6 justify-center w-full max-w-6xl">
        {MediaQueries.minWidth640px.matches ? (
          <div>
            <UserInformation />
          </div>
        ) : null}
        <main>
          <NewsFeed />
        </main>

        {MediaQueries.minWidth640px.matches ? (
          <aside>
            <AdsContainer />
          </aside>
        ) : null}
      </div>
    </div>
  );
}
