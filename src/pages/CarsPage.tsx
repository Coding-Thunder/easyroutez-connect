import Header from "@/components/Header";
import DiscountsSection from "@/components/DiscountsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
// import CarRentalWidget from "@/components/CarRentalWidget";
import CarsHero from "@/components/CarsHero";
import cars from "@/assets/car.png";
import partners from "@/assets/partners.png";

const CarsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CarsHero />
        {/* <CarRentalWidget /> */}

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

export default CarsPage;
