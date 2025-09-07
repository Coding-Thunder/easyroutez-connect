import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero.jpg";

const tabs = [
  { key: "flights", label: "Flights", path: "/" },
  { key: "hotels", label: "Hotels", path: "/hotels" },
  { key: "cars", label: "Cars", path: "/cars" },
];

const HOTELS_SCRIPT =
  "https://tpwgt.com/content?currency=usd&trs=452609&shmarker=667755&show_hotels=true&powered_by=true&locale=en&searchUrl=search.hotellook.com&primary_override=%23FF8E01&color_button=%23FF8E01&color_icons=%23FF8E01&secondary=%23FFFFFF&dark=%23262626&light=%23FFFFFF&special=%23C4C4C4&color_focused=%23FF8E01&border_radius=5&plain=false&promo_id=7873&campaign_id=101";

const HotelsHero = () => {
  const navigate = useNavigate();
  const activeTab = "hotels";

  useEffect(() => {
    const container = document.getElementById("hotels-widget");
    if (container && !container.querySelector("script")) {
      container.innerHTML = "";
      const script = document.createElement("script");
      script.src = HOTELS_SCRIPT;
      script.async = true;
      container.appendChild(script);
    }
  }, []);

  return (
    <section
      className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
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
          Find the Best <span className="text-green-400">Hotels</span>
        </h1>

        {/* Widget */}
        <div className="bg-white rounded-xl p-4 shadow-xl">
          <div id="hotels-widget"></div>
        </div>
      </div>
    </section>
  );
};

export default HotelsHero;
