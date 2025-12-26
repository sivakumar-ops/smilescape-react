import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AppointmentSection from "@/components/AppointmentSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import OtherServicesSection from "@/components/OtherServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AppointmentSection />
        <ServicesSection />
        <TeamSection />
        <OtherServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
