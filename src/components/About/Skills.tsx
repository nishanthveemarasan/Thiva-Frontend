import { skillData } from "@/types/store";
import { Award } from "lucide-react";
import { Badge } from "../ui/badge";

const Skills = ({ list }: { list: skillData[] }) => {
    return <section className="py-16 bg-muted">
        <div className="container max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
                <Award className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-3">
                {list.map((s) => (
                    <Badge key={s.name} variant="secondary" className="text-sm py-1.5 px-4">{s.name}</Badge>
                ))}
            </div>
        </div>
    </section>
}
export default Skills;