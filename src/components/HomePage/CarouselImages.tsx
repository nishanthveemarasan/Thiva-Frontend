import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { imageData } from "@/types/store";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

const CarouselImages = ({ list }: { list: imageData[] }) => {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    );

    return (
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
                            {list.map((img) => (
                                <CarouselItem key={img.title}>
                                    <div className="relative overflow-hidden rounded-xl shadow-md group">
                                        {/* h-[300px] sets a fixed height on mobile
                                            md:h-[450px] increases it for desktop
                                            object-cover ensures the image fills the area without distorting
                                        */}
                                        <img
                                            src={img.full_url}
                                            alt={img.title}
                                            className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                        <p className="absolute bottom-4 left-6 right-6 text-lg font-semibold text-white">
                                            {img.title}
                                        </p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default CarouselImages;