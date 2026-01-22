import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, ShieldCheck } from "lucide-react";
import React from "react";

export const HeroDemoBar = React.memo(() => {
  return (
    <div className="mt-7 lg:w-[70%] lg:mx-auto">
      <div className=" grid grid-cols-1 gap-6 lg:grid-cols-7">
        <div className="relative w-fit lg:col-span-1 lg:translate-y-5">
          <Badge variant={"outline"} className="p-2">
            Workflow demo
          </Badge>
          <Send className="size-5 text-primary absolute -top-2 -right-1" />
        </div>
        <div className="flex items-center gap-2 lg:col-span-5">
          <Input placeholder="Enter your work email" />
          <Button>Get demo</Button>
        </div>
        <div className="relative w-fit lg:col-span-1 lg:-translate-y-5">
          <Badge variant={"outline"} className="p-2">
            On-demand
          </Badge>
          <Send className="size-5 text-primary absolute -top-2 -left-1 -rotate-90" />
        </div>
      </div>

      <p className="text-sm mt-5 text-center text-muted-foreground">
        <ShieldCheck className="inline size-5" />{" "}
        <span>Customer privacy is always respected</span>
      </p>
    </div>
  );
});
