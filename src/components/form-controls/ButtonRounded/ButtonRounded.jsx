/**
 *
 * @param {object} props
 * @param {JSX.Element} props.children
 * @param {function(object):void} props.onClick
 * @param {boolean} [props.booFitToContent=false]
 * @returns
 */
const ButtonRounded = ({ children, onClick, booFitToContent = false }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "flex justify-center items-center font-extrabold rounded-[28px]  border border-solid border-color-button-gray border-opacity-60 hover:border-opacity-90 hover:bg-black hover:bg-opacity-[0.04]" +
        " " +
        (booFitToContent ? " w-fit" : "w-full py-3 px-6")
      }
    >
      {children}
    </button>
  );
};
export { ButtonRounded };
