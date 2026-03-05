// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout";
import Autoplay from "embla-carousel-autoplay";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

import { Building2, HardHat, Ruler, BarChart3, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import heroBg from "@/assets/hero-bg.jpg";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";

const services = [
  { icon: Building2, title: "General Civil Engineering", desc: "Comprehensive civil engineering solutions from structural design to site development." },
  { icon: HardHat, title: "Construction Management", desc: "End-to-end project oversight ensuring on-time, on-budget delivery." },
  { icon: Ruler, title: "Infrastructure", desc: "Roads, bridges, water systems, and public infrastructure planning and execution." },
  { icon: BarChart3, title: "Quantity Surveying", desc: "Accurate cost estimation, budgeting, and financial management for projects." },
];

const carouselImages = [
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=500&fit=crop", alt: "Construction site with crane", caption: "Large-Scale Construction" },
  { src: "https://images.unsplash.com/photo-1545296664-39db56ad95bd?w=1200&h=500&fit=crop", alt: "Highway bridge", caption: "Highway Infrastructure" },
  { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=500&fit=crop", alt: "Modern building", caption: "Commercial Development" },
  { src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=500&fit=crop", alt: "Building under construction", caption: "Ongoing Projects" },
  { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=500&fit=crop", alt: "Water treatment facility", caption: "Water Infrastructure" },
];

const projects = [
  { title: "Highway Overpass Bridge", category: "Infrastructure", location: "Metro City", image: "https://images.unsplash.com/photo-1545296664-39db56ad95bd?w=600&h=400&fit=crop" },
  { title: "Commercial Complex", category: "Construction Management", location: "Downtown", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop" },
  { title: "Residential Tower", category: "General Civil", location: "Riverside", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop" },
  { title: "Water Treatment Plant", category: "Infrastructure", location: "Industrial Zone", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop" },
  { title: "Shopping Mall Renovation", category: "Quantity Surveying", location: "City Center", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop" },
  { title: "Municipal Road Network", category: "Infrastructure", location: "Suburbs", image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=600&h=400&fit=crop" },
];

const Home = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
);
  return <Layout>
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img src="/next/images/general/hero-bg.jpg" alt="Construction site" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Civil Engineer · 15+ Years Experience</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Building the Future,<br />One Structure at a Time
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            Professional civil engineering services specializing in construction management, infrastructure development, and quantity surveying. Delivering quality and precision on every project.
          </p>
          <div className="flex flex-wrap gap-4">
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

    {/* Image Carousel */}
    <section className="py-12 bg-muted">
            <div className="container px-4">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">Our Work in Action</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                        A glimpse into our ongoing and completed engineering projects.
                    </p>
                </div>
                
                <div className="mx-auto max-w-5xl">
                    <Carousel 
                        opts={{ loop: true }} 
                        plugins={[plugin.current]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {carouselImages.map((img) => (
                                <CarouselItem key={img.alt}>
                                    <div className="relative overflow-hidden rounded-xl shadow-md group">
                                        {/* h-[300px] sets a fixed height on mobile
                                            md:h-[450px] increases it for desktop
                                            object-cover ensures the image fills the area without distorting
                                        */}
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                        <p className="absolute bottom-4 left-6 right-6 text-lg font-semibold text-white">
                                            {img.caption}
                                        </p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    {/* Services */}
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Areas of Expertise</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive engineering solutions across multiple disciplines.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
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

    {/* Projects */}
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">A selection of completed projects demonstrating quality and expertise.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.title} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-5">
                <Badge variant="secondary" className="mb-2 text-xs">{p.category}</Badge>
                <h3 className="font-display text-lg font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {p.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Let's discuss your engineering needs and bring your vision to life.</p>
        <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
          <Link href="/contact">Contact Me <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>

  </Layout>

}

export default Home;
