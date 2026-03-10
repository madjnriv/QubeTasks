import { LogoIcon } from "@/components/logo";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Link, ListChecks, MessageCircle } from "lucide-react";
import { socialProofImages } from "@/assets/assets";
import React from "react";

export const TeamCard = React.memo(() => {
  return (
    <div className="bg-gray-50 border border-border rounded-md mt-10 p-6">
      <div className="bg-card rounded-md">
        <div className="flex items-center gap-3 p-3">
          <span className="size-2 bg-red-600 rounded-full" />
          <span className="size-2 bg-yellow-600 rounded-full" />
          <span className="size-2 bg-emerald-600 rounded-full" />
        </div>

        <div className="p-5">
          <div>
            <p className="text-base font-semibold">Weekly Standup</p>
            <p className="text-sm text-muted-foreground">Tasks pending: 71</p>
          </div>

          <p className="mt-3 text-sm text-muted-foreground flex items-center gap-2 ">
            <ListChecks className="size-5" /> <span>170 tasks total</span>
          </p>
        </div>

        <Separator />
        <div className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-3 pl-0 border-0">
            <div className="flex items-center -space-x-2">
              {socialProofImages.map((proof) => (
                <Avatar key={proof.id} className="size-7">
                  <AvatarImage src={proof.img} className="object-cover" />
                </Avatar>
              ))}
            </div>
            <p>+12</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1 text-muted-foreground">
              <MessageCircle className="size-4" /> <span> 24</span>
            </p>
            <p className="flex items-center gap-1 text-muted-foreground">
              <Link className="size-4" /> <span> 8 </span>
            </p>
          </div>
        </div>

        <div className="bg-secondary-foreground mt-2 rounded-b-md flex items-center gap-1 p-3">
          <p className="text-primary-foreground">Created in ...</p>
          <LogoIcon className="size-5" />
        </div>
      </div>
    </div>
  );
});
