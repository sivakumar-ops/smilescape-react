import { Stethoscope, Shield, Wrench, Smile, Activity, Crosshair } from "lucide-react";

const otherServices = [
  {
    icon: Stethoscope,
    title: "General dentistry",
    description:
      "Regular check-ups, cleanings, and oral hygiene education to keep your teeth and gums healthy.",
  },
  {
    icon: Activity,
    title: "Implants",
    description:
      "Regular check-ups, cleanings, and oral hygiene education to keep your teeth and gums healthy.",
  },
  {
    icon: Wrench,
    title: "Dental surgery",
    description:
      "Regular check-ups, cleanings, and oral hygiene education to keep your teeth and gums healthy.",
  },
  {
    icon: Smile,
    title: "Teeth braces",
    description:
      "Regular check-ups, cleanings, and oral hygiene education to keep your teeth and gums healthy.",
  },
  {
    icon: Shield,
    title: "Teeth protection",
    description:
      "Regular check-ups, cleanings, and oral hygiene education to keep your teeth and gums healthy.",
  },
  {
    icon: Crosshair,
    title: "Alignment",
    description:
      "Regular check-ups, cleanings, and oral hygiene education to keep your teeth and gums healthy.",
  },
];

const OtherServicesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Discover our other services
          </h2>
          <p className="text-dental-text-light text-lg">
            We offer a wide range of dental services to address all of your oral
            health needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={service.title}
                href="#"
                className="group bg-background rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-dental-text-light">{service.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OtherServicesSection;
