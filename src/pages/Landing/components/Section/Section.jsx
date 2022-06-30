/**
 *
 * @param {object} props
 * @param {string} props.strTitle
 * @param {string} props.strSubTitle
 * @param {JSX.Element} props.children
 * @param {("ligth-gray" | "white" | "ligth-orange")} props.strColor
 * @returns
 */
const Section = ({ strTitle, strSubTitle, children, strColor }) => {
  return (
    <section
      className={
        "flex flex-col flex-nowrap items-center justify-center sm:flex-row w-full" +
        " py-14 sm:py-[60px] px-4 sm:px-0 " +
        (strColor === "ligth-gray"
          ? "bg-[#F3F2F0]"
          : strColor === "white"
          ? "bg-white"
          : strColor === "ligth-orange"
          ? "bg-[#F1ECE5]"
          : "")
      }
    >
      <p className=" mb-6 sm:mb-0 text-5xl font-light text-color-text">
        {strTitle}
      </p>
      <div className="flex flex-col gap-1">
        <p className=" uppercase text-color-text font-semibold text-xl">
          {strSubTitle}
        </p>
        <div className="flex flex-wrap gap-x-1 gap-y-2 text-[19px] sm:text-[21px] font-bold">
          {children}
        </div>
      </div>
    </section>
  );
};

export { Section };
