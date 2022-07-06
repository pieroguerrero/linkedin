import { Hero } from "./components/Hero";
import { LandingHeader } from "./components/LandingHeader";

import { RoundedTextButton } from "../../components/form-controls";
import { showNotAvailableToast, showOveralWarning } from "../../utilities";
import { Credits } from "../../layouts/Credits";
import { useEffect, lazy, Suspense } from "react";
const Section = lazy(() => import("./components/Section/Section"));

const Landing = () => {
  useEffect(() => {
    showOveralWarning();
  }, []);

  const handleGeneralClick = () => {
    showNotAvailableToast();
  };

  return (
    <div className="flex flex-col min-h-screen  items-center">
      <LandingHeader />
      <main className="flex flex-col items-center w-full overflow-hidden">
        <Hero />
        <Suspense>
          <Section
            strTitle="Explore topics you are interested in"
            strSubTitle="CONTENT TOPICS"
            strColor="ligth-gray"
          >
            <>
              <RoundedTextButton
                handleClick={handleGeneralClick}
                strColor="blue"
                strText="See All Topics"
                booBorder={true}
                booColoredBackground={false}
                booFullWidth={false}
              ></RoundedTextButton>
              <RoundedTextButton
                handleClick={handleGeneralClick}
                strColor="gray"
                strText="Remote"
                booBorder={true}
                booColoredBackground={false}
                booFullWidth={false}
              ></RoundedTextButton>
              <RoundedTextButton
                handleClick={handleGeneralClick}
                strColor="gray"
                strText="Work from Home"
                booBorder={true}
                booColoredBackground={false}
                booFullWidth={false}
              ></RoundedTextButton>
              <RoundedTextButton
                handleClick={handleGeneralClick}
                strColor="gray"
                strText="Retirement"
                booBorder={true}
                booColoredBackground={false}
                booFullWidth={false}
              ></RoundedTextButton>
              <RoundedTextButton
                handleClick={handleGeneralClick}
                strColor="gray"
                strText="Internships"
                booBorder={true}
                booColoredBackground={false}
                booFullWidth={false}
              ></RoundedTextButton>
              <RoundedTextButton
                handleClick={handleGeneralClick}
                strColor="gray"
                strText="Freelancer"
                booBorder={true}
                booColoredBackground={false}
                booFullWidth={false}
              ></RoundedTextButton>
              <RoundedTextButton
                handleClick={handleGeneralClick}
                strColor="gray"
                strText="Salary and Compensation"
                booBorder={true}
                booColoredBackground={false}
                booFullWidth={false}
              ></RoundedTextButton>
              <RoundedTextButton
                handleClick={handleGeneralClick}
                strColor="gray"
                strText="Starting a job"
                booBorder={true}
                booColoredBackground={false}
                booFullWidth={false}
              ></RoundedTextButton>
            </>
          </Section>
          <Section
            strTitle="Find the right job or internship for you"
            strSubTitle="SUGGESTED SEARCHES"
            strColor="white"
          >
            <div>
              <div className="flex flex-wrap gap-x-[6px] gap-y-3 text-[19px] sm:text-[21px] font-bold">
                <RoundedTextButton
                  handleClick={handleGeneralClick}
                  strColor="gray"
                  strText="Engineering"
                  booBorder={true}
                  booColoredBackground={false}
                  booFullWidth={false}
                ></RoundedTextButton>
                <RoundedTextButton
                  handleClick={handleGeneralClick}
                  strColor="gray"
                  strText="Business Development"
                  booBorder={true}
                  booColoredBackground={false}
                  booFullWidth={false}
                ></RoundedTextButton>
                <RoundedTextButton
                  handleClick={handleGeneralClick}
                  strColor="gray"
                  strText="Finance"
                  booBorder={true}
                  booColoredBackground={false}
                  booFullWidth={false}
                ></RoundedTextButton>
                <RoundedTextButton
                  handleClick={handleGeneralClick}
                  strColor="gray"
                  strText="Administrative Assistant"
                  booBorder={true}
                  booColoredBackground={false}
                  booFullWidth={false}
                ></RoundedTextButton>
                <RoundedTextButton
                  handleClick={handleGeneralClick}
                  strColor="gray"
                  strText="Retail Associate"
                  booBorder={true}
                  booColoredBackground={false}
                  booFullWidth={false}
                ></RoundedTextButton>
                <RoundedTextButton
                  handleClick={handleGeneralClick}
                  strColor="gray"
                  strText="Customer Service"
                  booBorder={true}
                  booColoredBackground={false}
                  booFullWidth={false}
                ></RoundedTextButton>
                <RoundedTextButton
                  handleClick={handleGeneralClick}
                  strColor="gray"
                  strText="Operations"
                  booBorder={true}
                  booColoredBackground={false}
                  booFullWidth={false}
                ></RoundedTextButton>
                <RoundedTextButton
                  handleClick={handleGeneralClick}
                  strColor="gray"
                  strText="Information Technology"
                  booBorder={true}
                  booColoredBackground={false}
                  booFullWidth={false}
                ></RoundedTextButton>
                <RoundedTextButton
                  handleClick={handleGeneralClick}
                  strColor="gray"
                  strText="Marketing"
                  booBorder={true}
                  booColoredBackground={false}
                  booFullWidth={false}
                ></RoundedTextButton>
                <RoundedTextButton
                  handleClick={handleGeneralClick}
                  strColor="gray"
                  strText="Human Resources"
                  booBorder={true}
                  booColoredBackground={false}
                  booFullWidth={false}
                ></RoundedTextButton>
              </div>

              <button
                type="button"
                onClick={handleGeneralClick}
                className="flex items-center text-color-text gap-1 mt-1 text-[17px] h-12 w-fit text-left px-2 py-[2px]"
                aria-expanded={false}
                aria-label="Show more Suggested Searches"
              >
                Show more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  preserveAspectRatio="xMinYMin meet"
                  focusable={false}
                  className={"pt-[2px]"}
                >
                  <path
                    d="M8 9l5.93-4L15 6.54l-6.15 4.2a1.5 1.5 0 01-1.69 0L1 6.54 2.07 5z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </Section>
          <Section
            strTitle="Post your job for millions of people to see"
            strSubTitle=""
            strColor="ligth-orange"
          >
            <RoundedTextButton
              handleClick={handleGeneralClick}
              strColor="blue"
              strText="Post a job"
              booBorder={true}
              booColoredBackground={false}
              booFullWidth={false}
            ></RoundedTextButton>
          </Section>
          <section className=" min-h-[500px] sm:min-h-[840px] bg-white sm:mt-4 bg-lp-bottom-pattern bg-no-repeat bg-cover sm:bg-auto  w-full flex justify-center bg-[left_top_0.6rem] sm:bg-center">
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
                  handleClick={handleGeneralClick}
                />
              </div>
            </div>
          </section>
        </Suspense>
      </main>
      <footer className=" bg-color-blue text-white text-sm  w-full h-12 mt-[-2px] sm:mt-[-8px]">
        <Credits />
      </footer>
    </div>
  );
};
// bg-[right_bottom_-11rem]
export { Landing };
