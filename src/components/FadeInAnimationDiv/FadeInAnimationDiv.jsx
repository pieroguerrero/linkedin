import { useLayoutEffect, useRef } from "react";

/**
 *
 * @param {object} props
 * @param {string} [props.className]
 * @param {("duration-75" | "duration-100" |"duration-150" |"duration-200" |"duration-300" |"duration-500" |"duration-700" |"duration-1000")} [props.strDuration]
 * @param {Object} props.children
 * @returns
 */
export function FadeInAnimationDiv({ className, children, strDuration }) {
  const refDiv = useRef(null);

  useLayoutEffect(() => {
    setTimeout(() => {
      if (refDiv && refDiv.current) {
        // @ts-ignore
        refDiv.current.classList.remove("opacity-0");
        // @ts-ignore
        refDiv.current.classList.add("opacity-100");
      }
    });
  }, []);

  // let strDurationClass = "";
  // switch (strDuration) {
  //   case "":
  //     break;

  //   default:
  //     break;
  // }
  //const strAnimationClasses = "";
  return (
    <div
      ref={refDiv}
      className={
        (className ? className : "") +
        " transition-opacity opacity-0" +
        (strDuration ? " " + strDuration : "")
      }
    >
      {children}
    </div>
  );
}
