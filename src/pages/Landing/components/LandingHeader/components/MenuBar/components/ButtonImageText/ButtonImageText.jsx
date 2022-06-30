/**
 *
 * @param {object} props
 * @param {JSX.Element} props.children
 * @param {string} props.strTitle
 * @param {function(object):void} props.handleClick
 * @returns
 */
const ButtonImageText = ({ children, strTitle, handleClick }) => {
  return (
    <button
      type="button"
      className="flex items-center flex-row sm:flex-col gap-1.5 sm:gap-0 h-[52px] text-color-text-low-emphasis hover:text-black w-fit sm:w-[80px] justify-center"
      onClick={handleClick}
    >
      <span className="flex w-8 sm:w-auto sm:h-5 flex-shrink-0">
        {children}
      </span>
      <span className="text-sm font-bold sm:font-normal break-all">
        {strTitle}
      </span>
    </button>
  );
};
export { ButtonImageText };
