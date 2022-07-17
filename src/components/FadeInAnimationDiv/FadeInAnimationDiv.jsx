import { useLayoutEffect, useRef } from "react";

/**
 * Animate the renderization of a element. Works good with syncronous renderization
 * @param {object} props
 * @param {string} [props.className]
 * @param {("duration-75" | "duration-100" |"duration-150" |"duration-200" |"duration-300" |"duration-500" |"duration-700" |"duration-1000"|"duration-[2000ms]"|"duration-[2500ms]"|"duration-[3000ms]"|"duration-[3500ms]"|"duration-[4000ms]"|"duration-[4500ms]"|"duration-[5000ms]")} [props.strDuration]
 * @param {Object} [props.style={}]
 * @param {Object} props.children
 * @returns
 */
export function FadeInAnimationDiv({
  className,
  children,
  strDuration,
  style = {},
}) {
  const refDiv = useRef(null);

  useLayoutEffect(() => {
    setTimeout(
      () => {
        //if (refDiv && refDiv.current) {
        // @ts-ignore
        refDiv.current.classList.remove("opacity-0");
        // @ts-ignore
        refDiv.current.classList.add("opacity-100");
      }
      //}
    );
  }, []);
  //console.log("style:", style);
  return (
    <div
      ref={refDiv}
      className={
        (className ? className : "") +
        " transition-opacity opacity-0" +
        (strDuration ? " " + strDuration : "")
      }
      style={style}
    >
      {children}
    </div>
  );
}
