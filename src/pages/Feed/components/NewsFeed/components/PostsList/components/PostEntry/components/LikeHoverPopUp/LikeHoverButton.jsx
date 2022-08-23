import { useLayoutEffect } from "react";
import { useState } from "react";

/**
 *
 * @param {Object} props
 * @param {("Like"|"Celebrate"|"Curious"|"Funny"|"Love"|"Support"|"Insightful")} props.strType
 * @param {function():void} props.handleClick
 * @returns {JSX.Element}
 */
export default function LikeHoverButton({ strType, handleClick }) {
  const [svgImage, setSvgImage] = useState("");
  const [strClassHoverContent, setStrClassHoverContent] = useState("");

  useLayoutEffect(() => {
    /**
     *
     * @param {string} strFileName
     */
    const importSvgPath = (strFileName) => {
      import(
        `./../../../../../../../../../../assets/images/comment-reactions/${strFileName}.svg`
      )
        .then((response) => setSvgImage(response.default))
        .catch((error) => console.error(error));
    };

    switch (strType) {
      case "Like":
        importSvgPath("like");
        setStrClassHoverContent("hover:before:content-['Like']");
        break;
      case "Celebrate":
        importSvgPath("celebrate");
        setStrClassHoverContent("hover:before:content-['Celebrate']");
        break;
      case "Curious":
        importSvgPath("curious");
        setStrClassHoverContent("hover:before:content-['Curious']");
        break;
      case "Funny":
        importSvgPath("funny");
        setStrClassHoverContent("hover:before:content-['Funny']");
        break;
      case "Insightful":
        importSvgPath("insightful");
        setStrClassHoverContent("hover:before:content-['Insightful']");
        break;
      case "Love":
        importSvgPath("love");
        setStrClassHoverContent("hover:before:content-['Love']");
        break;
      case "Support":
        importSvgPath("support");
        setStrClassHoverContent("hover:before:content-['Support']");
        break;
      default:
        break;
    }
  }, []);

  //TODO: increase the size of the icons and give the effects
  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        "flex justify-center w-9 h-[42px] my-1 mx-[2px] relative hover:before:absolute hover:before:px-2 hover:before:py-1 hover:before:bg-black hover:before:top-[-46px] whitespace-nowrap hover:before:w-auto hover:before:h-auto hover:before:rounded-[15px] hover:before:border-white hover:before:text-sm hover:before:leading-4 hover:before:font-normal hover:before:text-white" +
        " " +
        strClassHoverContent
      }
    >
      <img
        className="w-9 h-9 hover:transition-transform duration-[400ms] hover:scale-[1.35] hover:translate-y-[-12px] "
        src={svgImage}
        alt={strType}
      />
    </button>
  );
}
