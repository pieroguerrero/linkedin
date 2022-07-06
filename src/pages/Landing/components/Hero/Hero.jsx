import strSvgHeroImage from "./../.././../../assets/images/heroImage.svg";
import { HeroForm } from "../HeroForm/";

const Hero = () => {
  return (
    <section className="flex flex-col w-full max-w-6xl sm:flex-row px-4 sm:pt-[47px] pt-[24px]">
      <div className=" sm:w-[55%]">
        <HeroForm />
      </div>
      <div className="flex">
        <img
          className="flip-rtl block sm:w-[700px] sm:h-[560px] sm:relative flex-shrink w-[374px] h-[214px] static"
          alt="Welcome to your professional community"
          src={strSvgHeroImage}
        />
      </div>
    </section>
  );
};

export { Hero };
