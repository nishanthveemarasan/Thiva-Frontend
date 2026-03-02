import { serviceData } from "@/types/store";
import MyCard from "@/components/templates/MyCard";

const Specialisation = ({ list }: { list: serviceData[] }) => {
    const initial = (title: string) => {
        return title.split(" ").slice(0,2).map((n) => n[0]).join("");
    }
    return <section className="py-16">
        <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Specializations</h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {list.map((s) => (
                    <MyCard cardCalss="hover:shadow-lg transition-shadow" key={s.title} contentClass="flex gap-4 pt-6">
                        
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-bold">
                                    <span>{initial(s.title)}</span>
                                </div>
                                <div>
                                    <h3 className="font-display text-lg font-semibold mb-1">{s.title}</h3>
                                    <p className="text-sm text-muted-foreground">{s.special_point}</p>
                                </div>
                             

                     </MyCard>
                ))}
            </div>
        </div>
    </section>
}
export default Specialisation;