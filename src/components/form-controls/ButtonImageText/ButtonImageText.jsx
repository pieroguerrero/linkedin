/**
 *
 * @param {object} props
 * @param {JSX.Element} props.children
 * @param {string} props.strTitle
 * @param {function(object):void} props.handleClick
 * @param {boolean} [props.booSelected]
 * @returns
 */
const ButtonImageText = ({
  children,
  strTitle,
  handleClick,
  booSelected = false,
}) => {
  return (
    <button
      type="button"
      className={
        "flex items-center flex-row sm:flex-col gap-1.5 sm:gap-0 h-[52px] w-fit sm:w-[80px] sm:min-w-[80px] justify-center  sm:border-solid sm:border-b-2 " +
        (booSelected
          ? "text-black sm:border-b-black"
          : "text-color-text-low-emphasis hover:text-black sm:border-b-transparent")
      }
      onClick={handleClick}
    >
      <span className="flex w-8 sm:w-auto h-fit  flex-shrink-0">
        {children}
      </span>
      <span className="text-sm font-bold sm:font-normal break-all leading-4">
        {strTitle}
      </span>
    </button>
  );
};
export { ButtonImageText };
