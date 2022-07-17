import { useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { Constants } from "../../utilities/";

/**
 *
 * @param {object} props
 * @param {JSX.Element} props.children
 * @returns {JSX.Element}
 */
const PopUpPortal = ({ children }) => {
  useLayoutEffect(() => {
    document.querySelector("body")?.classList.add("overflow-hidden");
    return () => {
      document.querySelector("body")?.classList.remove("overflow-hidden");
    };
  }, []);

  const divPopUpPortal = document.getElementById(Constants.PopUpPortalDivId);

  return ReactDOM.createPortal(
    <div className="absolute top-0 left-0 h-screen w-screen z-20">
      {children}
    </div>,
    divPopUpPortal
  );
};

export { PopUpPortal };
