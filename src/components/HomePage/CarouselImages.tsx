import { imageData } from "@/types/store";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
  } from "@/components/ui/carousel";

const CarouselImages = ({ list }: { list: imageData[] }) => {
    return <section className="py-16 bg-muted">
        <div className="container">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Work in Action</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">A glimpse into our ongoing and completed engineering projects.</p>
            </div>
            <div className="mx-auto max-w-5xl px-12">
                <Carousel opts={{ loop: true }} className="w-full">
                    <CarouselContent>
                        {list.map((img) => (
                            <CarouselItem key={img.title}>
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={img.full_url}
                                        alt={img.title}
                                        className="w-full aspect-[12/5] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <p className="absolute bottom-4 left-6 text-lg font-semibold text-white">
                                        {img.title}
                                    </p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    </section>
}
export default CarouselImages;