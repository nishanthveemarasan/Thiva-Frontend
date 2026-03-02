import { experienceData } from "@/types/store";
import {  Briefcase } from "lucide-react";
import MyCard from "../templates/MyCard";
import { Badge } from "@/components/ui/badge";

const Experiences = ({list}:{list:experienceData[]}) => {
    return <section className="py-16 bg-muted">
          <div className="container max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <div className="space-y-6 border-l-2 border-primary/20 pl-6">
              {list.map((e, i) => (
                <MyCard contentClass="pt-6" key={e.from+i}>
                   <Badge variant="outline" className="mb-2">{e.from} - {e.to}</Badge>
                    <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{e.company}</p>
                    <p className="text-sm text-muted-foreground">{e.description}</p>
                </MyCard>
              ))}
            </div>
          </div>
        </section>
}
export default Experiences;