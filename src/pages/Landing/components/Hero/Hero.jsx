import strSvgHeroImage from "./../.././../../assets/images/heroImage.svg";
import { lazy, Suspense } from "react";
import { FadeInAnimationDiv } from "../../../../components/FadeInAnimationDiv";
const HeroForm = lazy(() => import("../HeroForm/HeroForm"));

const Hero = () => {
  return (
    <section className="flex flex-col w-full max-w-6xl sm:flex-row px-4 sm:pt-[47px] pt-[24px]">
      <FadeInAnimationDiv
        className=" sm:w-[55%]"
        strDuration="duration-[5000ms]"
      >
        <Suspense>
          <HeroForm />
        </Suspense>
      </FadeInAnimationDiv>
      <FadeInAnimationDiv className="flex" strDuration="duration-[5000ms]">
        <img
          loading="lazy"
          className="flip-rtl block sm:w-[700px] sm:h-[560px] sm:relative flex-shrink w-[374px] h-[214px] static"
          alt="Welcome to your professional community"
          src={strSvgHeroImage}
        />
      </FadeInAnimationDiv>
    </section>
  );
};

export { Hero };
