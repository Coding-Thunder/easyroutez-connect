import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DiscountsSection from "@/components/DiscountsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import cars from "@/assets/car.png";
import partners from "@/assets/partners.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <div className=" flex items-center justify-center border-y my-12">
          <div className="flex flex-col items-center object-contain pb-4">
            <img src={cars} alt="Cars" />
            <img src={partners} alt="Partners" />
          </div>
        </div>
        <DiscountsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
