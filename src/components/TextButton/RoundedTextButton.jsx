/**
 *
 * @param {Object} props
 * @param {'gray' | 'blue'} props.strColor
 * @param {function(Object):void} props.handleClick
 * @param {string} props.strText
 * @param {boolean} props.booBorder
 * @returns {JSX.Element}
 */

const RoundedTextButton = ({ strColor, handleClick, strText, booBorder }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        " py-3 px-6 text-base font-extrabold hover:bg-opacity-[0.04] rounded-3xl " +
        (booBorder ? "border border-solid " : "") +
        (strColor === "blue"
          ? "border-color-button-blue hover:bg-color-button-blue text-color-button-blue"
          : "border-color-button-gray hover:bg-black text-color-button-gray")
      }
    >
      {strText}
    </button>
  );
};

export { RoundedTextButton };
