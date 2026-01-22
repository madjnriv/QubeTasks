import React from "react";
import { TaskSnapshot } from "./task-snapshot";
import { ImpactCard } from "./impact-card";
import { TeamCard } from "./team-card";

export const WorkflowPreview = React.memo(() => {
  return (
    <div className="p-5">
      {/* Left card */}
      <div>
        {/* Top Card */}
        <div>
          <TaskSnapshot />
        </div>

        {/* Bottom card */}
        <div>
          <ImpactCard />
        </div>
      </div>

      {/* Right card */}
      <div>
        <TeamCard />
      </div>
    </div>
  );
});
