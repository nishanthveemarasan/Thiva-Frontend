import { serviceData } from "@/types/store";
import { CheckCircle } from "lucide-react";

const ServiceItem = ({ s }: { s: serviceData }) => {
    return <><p className="text-muted-foreground mb-4">{s.description}</p>
        <ul className="space-y-2">
            {s.points && s.points.length >0 && s.points.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>{f}</span>
                </li>
            ))}
        </ul></>

}
export default ServiceItem;