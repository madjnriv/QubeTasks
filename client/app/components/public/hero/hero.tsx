import React from "react";
import { SocialProof } from "./social-proof";
import { HeroDemoBar } from "./hero-demo-bar";

export const Hero = React.memo(() => {
  return (
    <div className="p-5 flex flex-col items-center mt-10">
      <SocialProof />
      <div className="text-center mt-7 lg:mt-10">
        <p className="text-xl font-semibold text-primary lg:w-[70%] lg:mx-auto lg:text-4xl">
          Manage Tasks, Projects, and Teams in One Workspace
        </p>
        <p className="mt-2 text-sm text-muted-foreground lg:w-[70%] lg:mx-auto lg:text-base lg:mt-3">
          Organize tasks, projects, and workspaces in a single, reliable
          platform designed for teams and professionals.
        </p>
      </div>
      <HeroDemoBar />
    </div>
  );
});
