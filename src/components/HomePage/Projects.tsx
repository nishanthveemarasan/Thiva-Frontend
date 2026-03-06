import { projectData } from "@/types/store";
import { Card, CardContent } from "../ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const Projects = ({ list }: { list: projectData[] }) => {
    return <section className="py-20 bg-muted">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">A selection of completed projects demonstrating quality and expertise.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((p, i) => {
                    const remainder = list.length % 3
                    const isLastRow = i >= list.length - remainder

                    let extraClass = ""

                    if (remainder === 1 && isLastRow) {
                        extraClass = "lg:col-start-2"
                    }

                    if (remainder === 2 && isLastRow && i === list.length - 2) {
                        extraClass = "lg:col-start-1"
                    }
                    return <Card key={p.name} className={`overflow-hidden group hover:shadow-lg transition-shadow ${extraClass}`}>
                        <div className="aspect-[3/2] overflow-hidden">
                            <img src={p.image.full_url} alt={p.image.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <CardContent className="p-5">
                            <Badge variant="secondary" className="mb-2 text-xs">{p.type}</Badge>
                            <h3 className="font-display text-lg font-semibold mb-1">{p.name}</h3>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                                <MapPin className="h-3 w-3" /> {p.city}
                            </p>
                        </CardContent>
                    </Card>
})}
            </div>
        </div>
    </section>
}
export default Projects;