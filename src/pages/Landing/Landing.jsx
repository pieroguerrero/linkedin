import React from "react";
import { Hero } from "./components/Hero";
import { LandingHeader } from "./components/LandingHeader";
import { Section } from "./components/Section";
import { RoundedTextButton } from "../../components/form-controls";
import { showNotAvailableToast } from "../../utilities";

const Landing = () => {
  const handleGeneralClick = () => {
    showNotAvailableToast();
  };

  return (
    <div className="flex flex-col min-h-screen  items-center">
      <LandingHeader />
      <main className="flex flex-col max-w-6xl w-full overflow-hidden">
        {/* //TODO:Remove the max-w-6xl from the main component and include it in every subcomponent */}
        <Hero />
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
      </main>
    </div>
  );
};

export { Landing };
