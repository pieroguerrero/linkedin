import { useRef } from "react";

export default function TextConent() {
  const refDivText = useRef(null);
  //const [innerHtml, setInnerHtml] = useState();

  const handleOnChangeText = (e) => {
    console.log(e.nativeEvent.data);
    console.log(e.target.childNodes);
  };

  const handleHashTagClick = () => {
    refDivText.current.textContent = refDivText.current.textContent + " #";
  };

  //TODO: Finalize the Add Post popup window, including buttons
  return (
    <div className="  flex flex-col">
      {/* <textarea
        className="p-0 focus:ring-transparent outline-none border-none bg-transparent resize-none overflow-auto shadow-none leading-[22px] text-[18px] h-24"
        placeholder="What do you want to talk about?"
      ></textarea> */}

      <div
        ref={refDivText}
        onInput={handleOnChangeText}
        contentEditable={true}
        className="h-24 mx-6 my-3 empty:before:content-['What_do_you_want_to_talk_about?'] empty:before:text-color-text cursor-text outline-none border-none overflow-auto text-color-text-darker text-[17px] leading-6"
      ></div>
      <button
        type="button"
        onClick={handleHashTagClick}
        className=" text-[17px] font-semibold text-color-blue pt-3"
      >
        Add Hashtag
      </button>
    </div>
  );
}
