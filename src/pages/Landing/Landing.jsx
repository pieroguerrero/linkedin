import React from "react";
import { Hero } from "./components/Hero";
import { LandingHeader } from "./components/LandingHeader";
import { Section } from "./components/Section";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen  items-center">
      <LandingHeader />
      <main className="flex flex-col items-center max-w-6xl">
        <Hero />
        <Section />
      </main>
    </div>
  );
};

export { Landing };
