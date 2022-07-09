import { RoundedTextButton } from "../../../../components/form-controls";
import { useEffect, useRef, useState } from "react";

/**
 *
 * @param {object} props
 * @param {function():void} props.handleClick
 * @returns
 */
export default function BottomSection({ handleClick }) {
  const refSection = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  /**
   *
   * @param {IntersectionObserverEntry[]} arrEntries
   * @param {IntersectionObserver} objObserver
   * @returns {void}
   */
  const handleIntersection = (arrEntries, objObserver) => {
    arrEntries.forEach((objEntry) => {
      if (objEntry.isIntersecting && window.scrollY > 0) {
        setIsVisible(true);
        objObserver.unobserve(objEntry.target);
      }
    });
  };

  useEffect(() => {
    const objObserver = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    });

    if (refSection.current) {
      objObserver.observe(refSection.current);
    }
  }, []);

  return (
    <section
      ref={refSection}
      className={
        "min-h-[500px] sm:min-h-[840px] bg-white sm:mt-4 bg-no-repeat bg-cover sm:bg-auto  w-full flex justify-center bg-[left_top_0.6rem] sm:bg-center " +
        (isVisible ? " bg-lp-bottom-pattern" : "")
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
  );
}
