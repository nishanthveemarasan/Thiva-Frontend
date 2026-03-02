import { homeContent } from "@/types/store";
import heroBg from "@/assets/hero-bg.jpg";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
const HomeHeader = ({ data, year }: { data: homeContent, year:number }) => {
    return <>
        <section className="relative min-h-[80vh] flex items-center">
            <div className="absolute inset-0">
                <img src="/images/general/hero-bg.jpg" alt="Construction site" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/80" />
            </div>
            <div className="container relative z-10 py-20 ">
                <div className="text-center">
                    <Badge className="mb-4 bg-secondary text-secondary-foreground">Civil Engineer · {year}+ Years Experience</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: data.title }} >
                        
                    </h1>
                    <div className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                       <div dangerouslySetInnerHTML={{ __html: data.description }} />
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                       
                        <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary hover:bg-primary-foreground/10 hover:text-white">
                            <Link href="/about">Learn More</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    </>

}
export default HomeHeader;