import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router";

type FeatureCardProps = {
    title: string;
    description: string;
    icon: LucideIcon;
}
const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <Card className="shadow-none drop-shadow-none border  border-border/50">
        
        <CardHeader>
            <Badge variant={"outline"} className="p-3">
               <Icon/>
            </Badge>

            <CardTitle>
            {title}
        </CardTitle>
        <CardDescription>
            {description}
        </CardDescription>
        </CardHeader>
        
        <CardFooter>
            <Link to="/sign-up">
               <Button className="rounded-full bg-primary/80 h-8">
                Learn More
               </Button>
            </Link>
        </CardFooter>
        
    </Card>
  )
}

export default FeatureCard