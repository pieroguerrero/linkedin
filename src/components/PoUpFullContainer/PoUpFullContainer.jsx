import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Creates a portal in the indicated 'strPortalDivId'
 * @param {object} props
 * @param {string} props.strPortalDivId
 * @param {("white" | "shade")} props.strBgColor
 * @param {("white" | "shade")} [props.strBgColorMobile="shade"]
 * @param {function():void} props.handleCloseEvent
 * @param {JSX.Element} props.children
 * @returns {JSX.Element}
 */
export default function PoUpFullContainer({
  strBgColor,
  strBgColorMobile = "shade",
  strPortalDivId,
  handleCloseEvent,
  children,
}) {
  const [divPortal] = useState(document.getElementById(strPortalDivId));
  const refBgDiv = useRef(null);

  useLayoutEffect(() => {
    setTimeout(() => {
      // @ts-ignore
      refBgDiv.current.classList.remove("opacity-0");
      // @ts-ignore
      refBgDiv.current.classList.add("opacity-100");
    }, 1);
  }, []);
  return !divPortal ? (
    <></>
  ) : (
    createPortal(
      <div
        ref={refBgDiv}
        onClick={handleCloseEvent}
        className={
          "overflow-hidden absolute top-0 left-0 bottom-0 w-full h-full flex justify-center transition-opacity   duration-700 opacity-0" +
          " " +
          (strBgColor === "shade" ? " sm:bg-color-text" : "sm:bg-white") +
          " " +
          (strBgColorMobile === "shade" ? " bg-color-text" : "bg-white")
        }
      >
        <div>{children}</div>
      </div>,
      divPortal
    )
  );
}
