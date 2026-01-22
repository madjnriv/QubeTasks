import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
} from "@/components/ui/item";
import React from "react";

export const ImpactCard = React.memo(() => {
  return (
    <Item className="items-center bg-secondary border-2 border-border mt-5">
      <ItemMedia className="text-5xl">5x</ItemMedia>
      <ItemContent>
        <ItemDescription>
          Boost your team’s productivity with intuitive workflow management.
        </ItemDescription>
      </ItemContent>
    </Item>
  );
});
