import { RoundedTextButton } from "../../../../components/form-controls";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useState } from "react";

/**
 *
 * @param {object} props
 * @param {function():void} props.handleClick
 * @returns
 */
export default function BottomSection({ handleClick }) {
  const [showBg, setShowBg] = useState(false);

  /**
   *
   * @param {boolean} isVisible
   * @returns {void}
   */
  const handleChange = (isVisible) => {
    if (isVisible) {
      console.log("BottomSection is visible!");
      setShowBg(true);
    }
  };

  return (
    //TODO: change and uinstall this library and try with https://www.npmjs.com/package/react-in-viewport
    <ReactVisibilitySensor onChange={handleChange}>
      <section
        className={
          "min-h-[500px] sm:min-h-[840px] bg-white sm:mt-4 bg-no-repeat bg-cover sm:bg-auto  w-full flex justify-center bg-[left_top_0.6rem] sm:bg-center " +
          (showBg ? " bg-lp-bottom-pattern" : "")
        }
      >
        <div className="max-w-6xl w-full px-4 py-[56px] sm:py-[60px] flex flex-col gap-3 sm:gap-7">
          <h2 className=" text-color-text-darker text-[34px] sm:text-[56px] sm:leading-[70px] font-extralight">
            Join your colleagues, classmates, and friends on LinkedIn.
          </h2>
          <div className=" text-xl">
            <RoundedTextButton
              strColor="blue"
              strText="Get started"
              booBorder={true}
              booColoredBackground={true}
              booFullWidth={false}
              handleClick={handleClick}
            />
          </div>
        </div>
      </section>
    </ReactVisibilitySensor>
  );
}
