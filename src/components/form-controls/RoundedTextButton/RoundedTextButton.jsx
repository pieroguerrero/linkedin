/**
 *
 * @param {Object} props
 * @param {'gray' | 'blue'} props.strColor
 * @param {function(Object):void} props.handleClick
 * @param {string} props.strText
 * @param {boolean} props.booBorder
 * @param {boolean} [props.booFullWidth=false]
 * @param {boolean} [props.booColoredBackground=false]
 * @returns {JSX.Element}
 */

const RoundedTextButton = ({
  strColor,
  handleClick,
  strText,
  booBorder,
  booFullWidth = false,
  booColoredBackground = false,
}) => {
  const strClassName = (() => {
    if (!booColoredBackground) {
      return (
        " hover:bg-opacity-[0.04]" +
        (strColor === "blue"
          ? " border-color-button-blue hover:bg-color-button-blue text-color-button-blue"
          : " border-color-button-gray hover:bg-black text-color-button-gray")
      );
    }

    return strColor === "blue"
      ? " border-color-button-blue bg-color-button-blue hover:bg-color-button-blue-darker text-white"
      : " border-color-button-gray bg-color-button-gray text-black";
  })();

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        "flex justify-center items-center py-3 px-6 font-bold rounded-[28px] " +
        (booFullWidth ? " w-full" : "") +
        (booBorder ? " border border-solid " : "") +
        strClassName
      }
    >
      {strText}
    </button>
  );
};

export { RoundedTextButton };
