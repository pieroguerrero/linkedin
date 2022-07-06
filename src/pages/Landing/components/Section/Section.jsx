/**
 *
 * @param {object} props
 * @param {string} props.strTitle
 * @param {string} props.strSubTitle
 * @param {JSX.Element} props.children
 * @param {("ligth-gray" | "white" | "ligth-orange")} props.strColor
 * @returns
 */
export default function Section({ strTitle, strSubTitle, children, strColor }) {
  return (
    <section
      className={
        "w-full flex justify-center " +
        (strColor === "ligth-gray"
          ? "bg-[#F3F2F0]"
          : strColor === "white"
          ? "bg-white"
          : strColor === "ligth-orange"
          ? "bg-[#F1ECE5]"
          : "")
      }
    >
      <div className="flex flex-col gap-8 sm:gap-[72px] max-w-6xl flex-nowrap  sm:flex-row w-full py-14 sm:py-[60px] px-4">
        <p
          className={
            " mb-0 text-[34px] leading-10 sm:w-[408px] sm:leading-[60px] sm:text-[50px] font-normal sm:font-light " +
            (strColor === "ligth-orange"
              ? "text-[#b24020]"
              : "text-color-text-darker")
          }
        >
          {strTitle}
        </p>
        <div className="flex flex-col gap-4 max-w-[343px] sm:max-w-[640px]">
          <p className=" uppercase text-color-text font-bold text-[17px]">
            {strSubTitle}
          </p>
          <div className="flex flex-wrap gap-x-[6px] gap-y-3 text-[19px] sm:text-[21px] font-bold">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
