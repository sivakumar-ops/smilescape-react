import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import dentalClinic from "@/assets/dental-clinic.jpg";

const AppointmentSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dentist: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Request Received!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    setFormData({ name: "", email: "", phone: "", dentist: "" });
  };

  return (
    <section id="contact" className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[600px] animate-fade-in-left">
            <img
              src={dentalClinic}
              alt="Modern dental clinic"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>

          {/* Form Side */}
          <div className="animate-fade-in-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Book your appointment
            </h2>
            <p className="text-dental-text-light text-lg mb-10">
              We believe in utilizing the latest advancements in dental
              technology to deliver high-quality care.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 555-5555"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Select your dentist</Label>
                <Select
                  value={formData.dentist}
                  onValueChange={(value) =>
                    setFormData({ ...formData, dentist: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a dentist" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tom">Dr. Tom Johnson</SelectItem>
                    <SelectItem value="maria">Dr. Maria Lubin</SelectItem>
                    <SelectItem value="corey">Dr. Corey Dokidis</SelectItem>
                    <SelectItem value="aspen">Dr. Aspen Saris</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" size="xl" className="w-full">
                Request Appointment
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
