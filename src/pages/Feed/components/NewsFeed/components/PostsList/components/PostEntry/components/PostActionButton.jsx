/**
 *
 * @param {Object} props
 * @param {("Comment"|"Share"|"Send")} props.strType
 * @param {function():void} props.handleClick
 * @returns {JSX.Element}
 */
export default function PostActionButton({ strType, handleClick }) {
  const svgIcon = (() => {
    if (strType == "Comment") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
        </svg>
      );
    }

    if (strType == "Share") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
        </svg>
      );
    }

    if (strType == "Send") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
        </svg>
      );
    }

    return <span></span>;
  })();

  return (
    <button
      onClick={handleClick}
      type="button"
      className=" flex-auto py-[10px] px-2 hover:bg-[#00000014] rounded max-w-[480px]"
    >
      <div className="flex gap-1 items-center justify-center">
        <span className=" text-color-text">{svgIcon}</span>
        <span className="text-color-text text-[15px] font-bold leading-7">
          {strType}
        </span>
      </div>
    </button>
  );
}
