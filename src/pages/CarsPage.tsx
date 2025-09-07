import Header from "@/components/Header";
import DiscountsSection from "@/components/DiscountsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import CarRentalWidget from "@/components/CarRentalWidget";
import CarsHero from "@/components/CarsHero";

const CarsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CarsHero />
        <CarRentalWidget />
        <DiscountsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default CarsPage;
