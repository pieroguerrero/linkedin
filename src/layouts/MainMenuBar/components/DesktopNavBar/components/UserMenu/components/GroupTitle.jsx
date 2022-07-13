/**
 *
 * @param {object} props
 * @param {string} props.strText
 * @returns {JSX.Element}
 */
export function GroupTitle({ strText }) {
  return (
    <p className="font-bold text-color-text-darker text-[17px] leading-6 pt-3">
      {strText}
    </p>
  );
}
