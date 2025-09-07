import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DiscountsSection from "@/components/DiscountsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import CarHero from "@/components/CarHero";
import CarRentalWidget from "@/components/CarRentalWidget";

const CarsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CarHero />
        <CarRentalWidget />
        <DiscountsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default CarsPage;
