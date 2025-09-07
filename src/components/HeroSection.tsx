import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero.jpg";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"flights" | "hotels">("flights");
  const navigate = useNavigate();

  const handleHotelsClick = () => {
    navigate("/hotels");
  };

  return (
    <section
      className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs as Chips - Left aligned */}
        <div className="flex gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeTab === "flights"
                ? "bg-green-400 text-white"
                : "bg-white text-green-900 hover:bg-green-200"
            }`}
            onClick={() => setActiveTab("flights")}
          >
            Flights
          </button>

          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeTab === "hotels"
                ? "bg-green-400 text-white"
                : "bg-white text-green-900 hover:bg-green-200"
            }`}
            onClick={handleHotelsClick}
          >
            Hotels
          </button>
        </div>

        {/* Flight Widget */}
        {activeTab === "flights" && (
          <div className="bg-white rounded-xl p-4 shadow-xl">
            <div id="tpwl-search"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
