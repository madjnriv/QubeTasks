import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

type Props = {
  buttonText: string;
  subText: string;
  link: string;

};

const HeroCTA = ({ buttonText, subText, link }: Props) => {
  return (
    <Link to={link}  className="flex items-center -space-x-1 mx-auto mt-5">
      <Button className="rounded-full">{buttonText}</Button>
       <Button size={"icon"} className="rounded-full">
            <ArrowUpRight />
        </Button>
    </Link>
  )
}

export default HeroCTA