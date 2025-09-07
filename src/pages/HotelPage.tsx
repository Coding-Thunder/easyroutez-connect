import Header from "@/components/Header";
import DiscountsSection from "@/components/DiscountsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HotelWidget from "@/components/HotelWidget";
import MapWidget from "@/components/HotelMap";
import HotelsHero from "@/HotelHero";

const HotelPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HotelsHero />
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
