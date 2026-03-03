import { personalInfo } from "@/types/store";

const Background = ({ data }: { data: personalInfo }) => {
    return <section className="py-16">
        <div className="container max-w-4xl">
            <div className="flex justify-center">
                <img
                    src={data.image.full_url}
                    alt={`${data.first_name} Profile Picture`}
                    className="w-56 h-56 rounded-full object-cover shadow-lg"
                />
            </div>
            <div className="mt-3 text-3xl font-bold text-center">
                <div>{`${data.first_name} ${data.last_name}`}</div>
                <div className="text-lg text-muted-foreground">{data.qualification}</div>
            </div>
            
            <div className="prose prose-lg text-muted-foreground space-y-4 text-justify mt-4">
                <div dangerouslySetInnerHTML={{ __html: data.biography }} />
            </div>
        </div>
    </section>
}
export default Background;