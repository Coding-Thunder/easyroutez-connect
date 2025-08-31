import CallButton from "./CallButton";
import { Plane, Hotel, Car } from "lucide-react";
import heroBg from "@/assets/hero.jpg"; // 👈 import your PNG

const HeroSection = () => {
  return (
    <section
      className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay (optional, for better text readability) */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Your One-Stop Travel Partner with{" "}
          <span className="text-blue-light">EazyRoutez</span>
        </h1>
        <p className="text-xl text-blue-light mb-12 max-w-3xl mx-auto">
          From <span className="font-semibold">Flights</span> to{" "}
          <span className="font-semibold">Hotels</span> to{" "}
          <span className="font-semibold">Car Rentals</span> — call us now and
          let our experts handle your journey seamlessly.
        </p>

        {/* icons row */}
        <div className="flex justify-center gap-10 text-blue-light mb-10">
          <div className="flex flex-col items-center">
            <Plane className="w-10 h-10 mb-2" />
            <span className="text-sm font-medium">Flights</span>
          </div>
          <div className="flex flex-col items-center">
            <Hotel className="w-10 h-10 mb-2" />
            <span className="text-sm font-medium">Hotels</span>
          </div>
          <div className="flex flex-col items-center">
            <Car className="w-10 h-10 mb-2" />
            <span className="text-sm font-medium">Car Rentals</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <CallButton variant="secondary" size="lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
