import { Building2, HardHat, Ruler, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageMetaHeader from "@/components/Header/PageMetaHeader";

const services = [
  {
    icon: Building2,
    title: "General Civil Engineering",
    desc: "Comprehensive civil engineering solutions covering structural analysis, site development, foundation design, and geotechnical assessments.",
    features: ["Structural Design & Analysis", "Site Development Planning", "Foundation Engineering", "Geotechnical Assessments", "Environmental Compliance"],
  },
  {
    icon: HardHat,
    title: "Construction Management",
    desc: "End-to-end project oversight ensuring every phase is delivered on time, within budget, and to the highest quality standards.",
    features: ["Project Planning & Scheduling", "Cost Control & Budgeting", "Quality Assurance", "Risk Management", "Contractor Coordination"],
  },
  {
    icon: Ruler,
    title: "Infrastructure Development",
    desc: "Planning, designing, and executing public and private infrastructure including roads, bridges, water systems, and utilities.",
    features: ["Road & Highway Design", "Bridge Engineering", "Water Supply Systems", "Drainage & Sewerage", "Utility Infrastructure"],
  },
  {
    icon: BarChart3,
    title: "Quantity Surveying",
    desc: "Accurate cost estimation, tendering, procurement management, and financial oversight throughout the project lifecycle.",
    features: ["Cost Estimation & BOQ", "Tender Documentation", "Procurement Management", "Interim Valuations", "Final Account Settlement"],
  },
];

const Services = () => {
  return (
    <Layout>
      <PageMetaHeader title="Our Services - Expert Civil Engineering Solutions" pageUrl="/services" description="Explore our range of civil engineering services including general engineering, construction management, infrastructure development, and quantity surveying. Delivering quality and precision for over 15 years." />
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Delivering professional civil engineering solutions with precision, quality, and over 15 years of industry experience.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <Card key={s.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <s.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{s.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Need Engineering Expertise?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Get in touch to discuss your project requirements and how we can help bring your vision to life.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get a Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
