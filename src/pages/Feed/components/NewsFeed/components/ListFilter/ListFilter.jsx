import { showNotAvailableToast } from "../../../../../../utilities";

export default function ListFilter() {
  //TODO: complete the filter design
  return (
    <div className="flex items-center gap-[5px] mt-2 mb-[6px] ">
      <hr className=" h-[1px] flex-1 border-t-[1px] border-solid border-[#00000026]" />
      <button
        type="button"
        onClick={showNotAvailableToast}
        className="flex gap-1  text-[13px] leading-4"
      >
        <span className="text-color-text">Sort by:</span>
        <span className="flex gap-[2px] items-center text-color-text-darker font-bold">
          Top
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
          </svg>
        </span>
      </button>
    </div>
  );
}
