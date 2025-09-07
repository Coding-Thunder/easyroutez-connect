import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DiscountsSection from "@/components/DiscountsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HotelHero from "@/components/HotelHero";
import HotelWidget from "@/components/HotelWidget";
import MapWidget from "@/components/HotelMap";

const HotelPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HotelHero />
        <HotelWidget />
        <div className="flex items-center justify-center">
          <MapWidget />
        </div>
        <DiscountsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default HotelPage;
