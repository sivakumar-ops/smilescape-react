import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import dentist1 from "@/assets/dentist-1.jpg";
import dentist2 from "@/assets/dentist-2.jpg";
import dentist3 from "@/assets/dentist-3.jpg";
import dentist4 from "@/assets/dentist-4.jpg";

const teamMembers = [
  {
    name: "Tom Johnson",
    role: "Senior Dentist",
    image: dentist1,
    description: "Our administrative team is the backbone of our dental clinic.",
  },
  {
    name: "Maria Lubin",
    role: "Founder & CEO",
    image: dentist2,
    description: "Our administrative team is the backbone of our dental clinic.",
  },
  {
    name: "Corey Dokidis",
    role: "Senior Dentist",
    image: dentist3,
    description: "Our administrative team is the backbone of our dental clinic.",
  },
  {
    name: "Aspen Saris",
    role: "Senior Dentist",
    image: dentist4,
    description: "Our administrative team is the backbone of our dental clinic.",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Meet our professional team
          </h2>
          <p className="text-dental-text-light text-lg mb-8">
            Our dedicated team of dental professionals is committed to providing
            exceptional care and creating positive experiences for our patients.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg">
              About Us
            </Button>
            <Button variant="outline" size="lg">
              Open Positions
            </Button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    {member.description}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-primary-foreground" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                    >
                      <Twitter className="w-4 h-4 text-primary-foreground" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg">
                    {member.name}
                  </h3>
                  <p className="text-dental-text-light text-sm">{member.role}</p>
                </div>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4 text-dental-text group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
