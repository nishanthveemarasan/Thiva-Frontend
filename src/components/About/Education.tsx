import { educationData } from "@/types/store";
import { GraduationCap } from "lucide-react";
import MyCard from "@/components/templates/MyCard";
import { Badge } from "@/components/ui/badge";

const Education = ({ list }: { list: educationData[] }) => {
    return <section className="py-16">
        <div className="container max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="border-l-2 border-primary/20 pl-6">
                {list.map((e, i) => (
                    <MyCard contentClass="pt-6" key={e.from + i}>
                        <Badge variant="outline" className="mb-2">{e.from} - {e.to}</Badge>
                        <h3 className="font-display text-xl font-semibold">{e.course}</h3>
                        <p className="text-sm text-primary font-medium mb-2">{e.institution}</p>
                        <p className="text-sm text-muted-foreground">{e.description}</p>

                    </MyCard>
                ))}
            </div>
        </div>
    </section>
}
export default Education;