import Header from "@/components/Header";
import DiscountsSection from "@/components/DiscountsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FlightsHero from "@/components/FlightHero";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <FlightsHero />

        {/* Centered Travelpayouts Tickets Widget */}
        <div className="flex justify-center my-12 px-4">
          <div id="tpwl-tickets" className="w-full max-w-6xl"></div>
        </div>

        <DiscountsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
