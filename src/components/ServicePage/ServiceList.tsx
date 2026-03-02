import { serviceData } from "@/types/store";
import MyCard from "../templates/MyCard";
import { CardTitle } from "../ui/card";
import ServiceItem from "./ServiceItem";

const ServiceList = ({ list }: { list: serviceData[] }) => {
    const initials = (title: string) => {
        return title.split(" ").slice(0,2).map((n) => n[0]).join("");
    }
    return <section className="py-20">
        <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
                {list.map((s) => (
                    <MyCard key={s.title} cardCalss="hover:shadow-lg transition-shadow" contentClass="pt-6" header={<div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <span className="font-bold">{initials(s.title)}</span>
                        </div>
                        <CardTitle className="text-xl">{s.title}</CardTitle>
                    </div>}>

                        <ServiceItem s={s} />
                    </MyCard>
                ))}
            </div>
        </div>
    </section>
}
export default ServiceList;