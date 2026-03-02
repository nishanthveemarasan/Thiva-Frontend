const ServiceHeader = ({year}:{year:number}) => {
    return <section className="bg-primary py-20">
        <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                Delivering professional civil engineering solutions with precision, quality, and over <span className="font-bold">{year}+ years</span> of industry experience.
            </p>
        </div>
    </section>
}
export default ServiceHeader;