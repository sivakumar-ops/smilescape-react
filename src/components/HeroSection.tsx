import { Button } from "@/components/ui/button";
import { Award, Star } from "lucide-react";
import smile1 from "@/assets/smile-1.jpg";
import smile2 from "@/assets/smile-2.jpg";
import dentalProcedure from "@/assets/dental-procedure.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-1/4 left-0 w-48 h-48 lg:w-72 lg:h-72 rounded-full bg-shape-gray opacity-50 -translate-x-1/2" />
      <div className="absolute top-1/3 right-0 w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-shape-gray opacity-50 translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Award Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Award className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-medium text-dental-text">
              Award-Winning Dentist
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Experience gentle and comprehensive dentistry
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-dental-text-light max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Our experienced team of dentists and friendly staff work together to
            create a comfortable and welcoming environment for everyone who
            walks through our doors.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="default" size="xl">
              Book Consultation
            </Button>
          </div>
        </div>

        {/* Hero Images Grid */}
        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8">
            {/* Left Image Group */}
            <div className="relative flex flex-col gap-4 animate-fade-in-left" style={{ animationDelay: "0.4s" }}>
              {/* Decorative circle behind */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-shape-gray -z-10" />
              
              <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-xl self-end">
                <img
                  src={smile1}
                  alt="Beautiful smile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-64 h-48 lg:w-72 lg:h-52 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={dentalProcedure}
                  alt="Dental procedure"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in-right" style={{ animationDelay: "0.5s" }}>
              {/* Decorative circle behind */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-shape-gray -z-10" />
              
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-xl">
                <img
                  src={smile2}
                  alt="Perfect smile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="absolute left-0 bottom-0 md:left-4 md:bottom-8 bg-background rounded-2xl shadow-lg p-6 max-w-xs animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-sm font-medium text-dental-text mb-2">Emily S.</p>
            <p className="text-sm text-dental-text-light mb-4 italic">
              "I have been a patient at Dental for several years, and I can confidently say that it is the best dental clinic I have ever visited."
            </p>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-dental-text-light">(5.0)</span>
            </div>
            <p className="text-xs text-dental-text-light mt-1">10k+ ratings on google.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
