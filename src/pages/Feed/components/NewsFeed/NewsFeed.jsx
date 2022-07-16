export default function NewsFeed() {
  return (
    <div className=" flex flex-col">
      <div className="w-[540px] h-[116px] rounded-lg border shadow-sm bg-white">
        {"Add a post"}
      </div>
      <div className="w-[540px] flex flex-col">
        <div>{"filter"}</div>
        <div className="bg-white">{"result posts"}</div>
      </div>
    </div>
  );
}
