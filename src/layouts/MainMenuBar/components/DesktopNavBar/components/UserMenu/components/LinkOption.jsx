/**
 *
 * @param {object} props
 * @param {string} props.strText
 * @param {function():void} props.handleClick
 * @returns {JSX.Element}
 */
export function LinkOption({ strText, handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-color-text text-[15px] font-normal cursor-pointer hover:underline text-left w-fit"
    >
      {strText}
    </button>
  );
}
