import React from "react";
import { ButtonNotAvailable } from "../../../../../../../../components/ButtonNotAvailable";

/**
 *
 * @param {object} props
 * @param {JSX.Element} props.children
 * @param {string} props.strTitle
 * @returns
 */
const ButtonImageText = ({ children, strTitle }) => {
  return (
    <ButtonNotAvailable className="button-gray-with-svg flex items-center justify-center">
      <span className="flex w-8 sm:w-auto sm:h-5 flex-shrink-0">
        {children}
      </span>
      <span className="text-sm font-bold sm:font-normal break-all">
        {strTitle}
      </span>
    </ButtonNotAvailable>
  );
};
export { ButtonImageText };
