import { useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { Constants } from "../../utilities/";

/**
 *
 * @param {object} props
 * @param {JSX.Element} props.children
 * @param {'shade' | 'white'} props.strBackground
 * @returns {JSX.Element}
 */
const PopUpPortal = ({ children, strBackground }) => {
  useLayoutEffect(() => {
    console.log("assigning overflow");
    document.querySelector("body")?.classList.add("overflow-hidden");
    return () => {
      document.querySelector("body")?.classList.remove("overflow-hidden");
    };
  }, []);

  const divPopUpPortal = document.getElementById(Constants.PopUpPortalDivId);

  const classBackground = (() => {
    if (strBackground === "shade") {
      return " bg-gray-600 bg-opacity-50";
    }

    return " bg-white";
  })();

  return ReactDOM.createPortal(
    <div
      className={
        "absolute top-0 left-0 h-screen w-screen z-20" + classBackground
      }
    >
      {children}
    </div>,
    divPopUpPortal
  );
};

export { PopUpPortal };
