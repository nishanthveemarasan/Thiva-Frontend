import { testimonialData } from "@/types/store";
import MyCard from "../templates/MyCard";
import TestimonialItem from "@/components/TestimonialPage/TestimonialItem";

const TestimonialList = ({ list }: { list: testimonialData[] }) => {
    return <>
        {list.map((t,i) => {
             const remainder = list.length % 3
             const isLastRow = i >= list.length - remainder

             let extraClass = ""

             if (remainder === 1 && isLastRow) {
                 extraClass = "lg:col-start-2"
             }

             if (remainder === 2 && isLastRow && i === list.length - 2) {
                 extraClass = "lg:col-start-1"
             }
            return <MyCard key={t.first_name + t.last_name} cardCalss={`hover:shadow-lg transition-shadow ${extraClass}`} contentClass="pt-6">

                <TestimonialItem t={t} />

            </MyCard>
        })}
    </>
}
export default TestimonialList;