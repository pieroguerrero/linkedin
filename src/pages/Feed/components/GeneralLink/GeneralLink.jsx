/**
 *
 * @param {Object} props
 * @param {JSX.Element} props.children
 * @param {function(object):void} props.onClick
 * @returns
 */
export default function GeneralLink({ children, onClick }) {
  return (
    <a
      onClick={onClick}
      className=" text-color-text hover:text-color-blue hover:underline cursor-pointer whitespace-nowrap"
    >
      {children}
    </a>
  );
}
