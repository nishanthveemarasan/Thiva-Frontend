import { Phone, Mail, MapPin } from "lucide-react";
import MyCard from "../templates/MyCard";
import React from "react";
import { contactDetails } from "@/types/store";
import IconContainer from "@/containers/IconContainer";

const ContactDetails: React.FC<{data:contactDetails}> = ({data}) => {
    return <>
        {[
            { icon: Phone, label: "Phone", value: data.phone },
            { icon: Mail, label: "Email", value: data.email },
            { icon: MapPin, label: "Office", value: data.address },
        ].map((item) => (
            <MyCard key={item.label} cardCalss="" contentClass="flex items-start gap-4 pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <IconContainer as={item.icon} className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm">{item.label}</p>
                    <p className="text-sm text-muted-foreground break-all md:break-words">
                        {
                            item.label === "Email" ? <a href={`mailto:${item.value}`} className="hover:text-primary transition-colors">{item.value}</a> :
                            item.label === "Phone" ? <a href={`tel:${item.value}`} className="hover:text-primary transition-colors">{item.value}</a> : item.value
                        }
                    </p>
                </div>

            </MyCard>
        ))}
    </>
}
export default ContactDetails;