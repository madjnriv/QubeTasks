import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  position: "left" | "right";
};

const HeroTag = ({ text, position }: Props) => {
  return (
    <Badge variant={"outline"} className={cn("absolute py-2 px-3 hidden md:block", position === "left" ? "left-0 top-30 rounded-br-none" : "right-0 -top-10 rounded-bl-none")}>
        {text}
    </Badge>
  )
}

export default HeroTag