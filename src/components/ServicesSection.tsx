import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Preventive dentistry",
    description:
      "Regular check-ups, cleanings, and oral hygiene education to keep your teeth and gums healthy.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop",
  },
  {
    number: "02",
    title: "Cosmetic dentistry",
    description:
      "Smile makeovers, teeth whitening, porcelain veneers, and more to enhance the appearance of your smile.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
  },
  {
    number: "03",
    title: "Restorative dentistry",
    description:
      "Dental implants, crowns, bridges, and dentures to restore the function and aesthetics of your teeth.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Comprehensive dental services
            </h2>
            <p className="text-dental-text-light text-lg">
              We offer a wide range of dental services to address all of your
              oral health needs.
            </p>
          </div>
          <Button variant="outline" size="lg" className="self-start lg:self-auto">
            View All Services
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-3xl font-display font-bold text-primary-foreground bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-lg">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-dental-text-light mb-4">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
