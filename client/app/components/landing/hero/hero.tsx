import React from "react";
import { SocialProof } from "./social-proof";
import HeroTag from "./hero-tag";
import { heroData } from "./hero.data";
import HeroCTA from "./hero-cta";

export const Hero = () => {
  return (
    <div className="p-5 flex flex-col items-center mt-10">
      <SocialProof />
    <section className="relative flex flex-col items-center text-center mt-5">

      <HeroTag text={heroData.badgeLeft} position="left" />
      <HeroTag text={heroData.badgeRight} position="right" />

      <h1 className="text-3xl text-primary font-medium max-w-3xl lg:mx-auto lg:text-4xl">
        {heroData.headline}
      </h1>

      <p className="mt-3 text-xs text-muted-foreground max-w-xl mx-auto lg:text-sm">
        {heroData.description}
      </p>

      <HeroCTA
        buttonText={heroData.primaryCTA}
        subText={heroData.secondaryText}
        link={heroData.primaryCTALink}
      />

    </section>
    </div>
  );
};
