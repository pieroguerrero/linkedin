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
        break;
      case "Celebrate":
        importSvgPath("celebrate");
        break;
      case "Curious":
        importSvgPath("curious");
        break;
      case "Funny":
        importSvgPath("funny");
        break;
      case "Insightful":
        importSvgPath("insightful");
        break;
      case "Love":
        importSvgPath("love");
        break;
      case "Support":
        importSvgPath("support");
        break;
      default:
        break;
    }
  }, []);

  //TODO: increase the size of the icons and give the effects
  return (
    <button type="button" onClick={handleClick} className=" w-9 auto">
      <img className=" w-9 auto" src={svgImage} alt={strType} />
    </button>
  );
}
