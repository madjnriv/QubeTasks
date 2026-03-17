import { Badge } from "@/components/ui/badge"
import FeatureCard from "./FeatureCard"
import { whyQubeTasks } from "./whyQubeTasks.data"

const WhyQubeTasks = () => {
    const { badge, headline, description, features } = whyQubeTasks;
  return (
    <div className="p-5 mt-10 lg:w-[80%] lg:mx-auto">
        <div className="text-center space-y-2">
            <Badge variant={"outline"} className="py-1 px-3">
                {badge}
            </Badge>
            <p className="text-2xl text-primary font-medium lg:w-[45%] lg:mx-auto">
                {headline}
            </p>
            <p className="text-xs text-muted-foreground lg:w-[50%] lg:mx-auto">
                {description}
            </p>
        </div>
        
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-3">
            {
                features.map((feature) => (
                    <FeatureCard key={feature.title} title={feature.title} description={feature.description} icon={feature.icon}/>
                ))
            }
        </div>
    </div>
  )
}

export default WhyQubeTasks