import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Layout from "@/components/Layout";
import PageMetaHeader from "@/components/Header/PageMetaHeader";


const testimonials = [
  { name: "James Mitchell", role: "Property Developer", initials: "JM", rating: 5, text: "Outstanding work on our commercial complex. The project was delivered ahead of schedule and under budget. Highly recommend for any large-scale construction project." },
  { name: "Sarah Thompson", role: "Municipal Director", initials: "ST", rating: 5, text: "Their expertise in infrastructure planning transformed our city's road network. Professional, thorough, and always communicative throughout the entire process." },
  { name: "Robert Chen", role: "Real Estate CEO", initials: "RC", rating: 5, text: "The quantity surveying work was meticulous and saved us significant costs. Their attention to detail in cost estimation is unmatched in the industry." },
  { name: "Emily Rodriguez", role: "Architect", initials: "ER", rating: 5, text: "A pleasure to collaborate with. Their structural engineering expertise complemented our architectural vision perfectly. The end result exceeded all expectations." },
  { name: "David Okonkwo", role: "Construction Firm Owner", initials: "DO", rating: 5, text: "Reliable, professional, and technically excellent. They managed our residential tower project with exceptional skill and delivered outstanding results." },
  { name: "Lisa Park", role: "Government Official", initials: "LP", rating: 5, text: "The water treatment facility project was handled with utmost professionalism. Their knowledge of environmental regulations and engineering standards is impressive." },
];

const Testimonials = () => (
  <Layout>
    <PageMetaHeader title="Client Testimonials - Trusted Civil Engineering Solutions" pageUrl="/testimonials" description="Discover what our clients have to say about our civil engineering services. Read testimonials from property developers, municipal directors, architects, and more." />
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl">What our clients say about working with us.</p>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{t.text}</p>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <div className="flex items-center gap-3 border-t pt-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm">{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Testimonials;
