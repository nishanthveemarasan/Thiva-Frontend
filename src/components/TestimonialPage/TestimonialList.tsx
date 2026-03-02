import { testimonialData } from "@/types/store";
import MyCard from "../templates/MyCard";
import TestimonialItem from "./TestimonialItem";

const TestimonialList = ({ list }: { list: testimonialData[] }) => {
    return <>
        {list.map((t) => (
            <MyCard key={t.first_name+t.last_name} cardCalss="hover:shadow-lg transition-shadow" contentClass="pt-6">

                <TestimonialItem t={t} />

            </MyCard>
        ))}
    </>
}
export default TestimonialList;