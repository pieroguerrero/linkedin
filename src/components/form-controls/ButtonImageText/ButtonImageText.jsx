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
        "flex flex-1 sm:flex-initial items-center flex-col gap-0 h-11 sm:h-[52px] w-fit min-w-[75px] sm:w-[80px] sm:min-w-[80px] justify-center  sm:border-solid sm:border-b-2 " +
        (booSelected
          ? "text-black sm:border-b-black"
          : "text-color-button-gray-ligth sm:text-color-text-low-emphasis hover:text-black sm:border-b-transparent")
      }
      onClick={handleClick}
    >
      <span className="flex justify-center w-8 sm:w-auto h-fit  flex-shrink-0">
        {children}
      </span>
      <span className=" text-[12px] text-color-text sm:text-inherit sm:text-sm font-normal break-all leading-4">
        {strTitle}
      </span>
    </button>
  );
};
export { ButtonImageText };
