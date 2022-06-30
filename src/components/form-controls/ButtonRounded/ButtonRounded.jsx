/**
 *
 * @param {object} props
 * @param {JSX.Element} props.children
 * @param {function(object):void} props.onClick
 * @returns
 */
const ButtonRounded = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex justify-center items-center py-3 px-6 font-extrabold rounded-[28px] w-full border border-solid border-color-button-gray border-opacity-60 hover:border-opacity-90 hover:bg-black hover:bg-opacity-[0.04]"
    >
      {children}
    </button>
  );
};
export { ButtonRounded };
