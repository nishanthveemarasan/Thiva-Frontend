import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const HomeFooter = () => {
    return <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Let's discuss your engineering needs and bring your vision to life.</p>
            <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/contact">Contact Me <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
    </section>
}
export default HomeFooter;