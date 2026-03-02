import { serviceData } from "@/types/store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { initial } from "../helper/functionHelper";
import Link from "next/link";

const Services = ({list}:{list:serviceData[]}) => {

    return <section className="py-20">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Areas of Expertise</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive engineering solutions across multiple disciplines.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {list.map((s) => (
                  <Card key={s.title} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-8 pb-6">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                        {initial(s.title, 2)}
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </section>
}
export default Services;