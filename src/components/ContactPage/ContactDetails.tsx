import { Phone, Mail, MapPin } from "lucide-react";
import MyCard from "../templates/MyCard";

const ContactDetails = () => {
    return <>
        {[
            { icon: Phone, label: "Phone", value: "07741304657" },
            { icon: Mail, label: "Email", value: "thumbengineeringconstruction@yahoo.com" },
            { icon: MapPin, label: "Office", value: "11 Marshstreet North, Dartford, DA1 5WF " },
        ].map((item) => (
            <MyCard key={item.label} cardCalss="" contentClass="flex items-start gap-4 pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm">{item.label}</p>
                    <p className="text-sm text-muted-foreground break-all md:break-words">
                        {item.value}
                    </p>
                </div>

            </MyCard>
        ))}
    </>
}
export default ContactDetails;