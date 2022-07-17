export default function TextConent() {
  return (
    <div className=" mx-6 my-3 flex flex-col">
      <textarea
        className="p-0 focus:ring-transparent outline-none border-none bg-transparent resize-none overflow-auto shadow-none leading-[22px] text-[18px] h-24"
        placeholder="What do you want to talk about?"
      ></textarea>
      <button type="button">Add Hashtag</button>
    </div>
  );
}
