import { testimonialData } from "@/types/store";
import { Star, Quote } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TestimonialItem = ({ t }: { t: testimonialData }) => {
    const fullName = `${t.first_name} ${t.last_name}`;
    const initials = fullName.split(" ").map((n) => n[0]).join("");
    return <>
        <Quote className="h-8 w-8 text-primary/20 mb-4" />
        <div className="text-sm text-muted-foreground mb-6 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: t.content }} />
        </div>
        <div className="flex gap-1 mb-4">
            {Array.from({ length: t.star }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
            ))}
        </div>
        <div className="flex items-center gap-3 border-t pt-4">
            <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">{initials }</AvatarFallback>
            </Avatar>
            <div>
                <p className="font-semibold text-sm">{fullName}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
            </div>
        </div>
    </>
}
export default TestimonialItem;