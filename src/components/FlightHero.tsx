import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero.jpg";

const tabs = [
  { key: "flights", label: "Flights", path: "/" },
  { key: "hotels", label: "Hotels", path: "/hotels" },
  { key: "cars", label: "Cars", path: "/cars" },
];

const FlightsHero = () => {
  const navigate = useNavigate();
  const activeTab = "flights";

  return (
    <section
      className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.key
                  ? "bg-green-400 text-white"
                  : "bg-white text-green-900 hover:bg-green-200"
              }`}
              onClick={() => navigate(tab.path)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Book Cheap <span className="text-green-400">Flights</span>
        </h1>

        {/* Widget */}
        <div className="bg-white rounded-xl p-4 shadow-xl">
          <div id="tpwl-search"></div>
        </div>
      </div>
    </section>
  );
};

export default FlightsHero;
