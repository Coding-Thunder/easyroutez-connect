import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DiscountsSection from "@/components/DiscountsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <DiscountsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
