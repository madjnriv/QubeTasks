import React from "react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Calendar, CheckSquare } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const partialCalendar = {
  weekdays: ["S", "M", "T", "W", "T"],
  days: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12],
};

export const TaskSnapshot = React.memo(() => {
  return (
    <div className="mt-5">
      <div className="w-full bg-gray-50 rounded-lg border border-border pt-10 pl-20">
        <div className="bg-card rounded-tl-lg border-l border-l-border border-t border-t-border">
          <div className="flex items-center gap-3 p-3">
            <span className="size-2 bg-red-600 rounded-full" />
            <span className="size-2 bg-yellow-600 rounded-full" />
            <span className="size-2 bg-emerald-600 rounded-full" />
          </div>
          <Separator />
          <div className="p-3">
            <div className="flex items-center justify-between">
              <p className="text-primary font-semibold">Calendar</p>
              <p className="text-muted-foreground flex items-center gap-1">
                <Calendar className="size-4" /> <span>Jan</span>
              </p>
            </div>
            <div className="mt-5 px-3 space-y-2">
              <p className="flex items-center justify-center text-sm gap-10 font-medium">
                {partialCalendar.weekdays.map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </p>
              <div className="text-muted-foreground">
                <p className="flex items-center justify-center text-sm gap-10">
                  {partialCalendar.days.slice(0, 5).map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </p>
                <p className="flex items-center justify-center text-sm gap-10 mt-1">
                  {partialCalendar.days.slice(5, 10).map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* image section */}
      <div
        // style={{ backgroundImage: `url(${task_snapshot_img})` }}
        className="w-full relative mt-5 bg-top bg-no-repeat bg-size-[90%]"
      >
        <div className="p-5">
          <Item className="bg-card border border-border p-2 ">
            <ItemMedia>
              <CheckSquare />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Track tasks at a glance</ItemTitle>
              <ItemDescription>
                See what’s planned, completed, and in progress, all in one view.
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </div>
    </div>
  );
});
