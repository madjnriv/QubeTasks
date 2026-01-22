import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { socialProofImages } from "public/assets/assets";
import React from "react";

export const SocialProof = React.memo(() => {
  return (
    <Badge
      variant={"secondary"}
      className="flex items-center gap-3 pl-0 border-0"
    >
      <div className="flex items-center -space-x-2">
        {socialProofImages.map((proof) => (
          <Avatar key={proof.id} className="size-8">
            <AvatarImage src={proof.img} className="object-cover" />
          </Avatar>
        ))}
      </div>
      <p>10k+ teams worldwide</p>
    </Badge>
  );
});
