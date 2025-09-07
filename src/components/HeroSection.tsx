import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import heroBg from "@/assets/hero.jpg";

const scripts: Record<string, string | null> = {
  flights: null, // Flights widget is usually in tpwl-search
  hotels:
    "https://tpwgt.com/content?currency=usd&trs=452609&shmarker=667755&show_hotels=true&powered_by=true&locale=en&searchUrl=search.hotellook.com&primary_override=%23FF8E01&color_button=%23FF8E01&color_icons=%23FF8E01&secondary=%23FFFFFF&dark=%23262626&light=%23FFFFFF&special=%23C4C4C4&color_focused=%23FF8E01&border_radius=5&plain=false&promo_id=7873&campaign_id=101",
  cars: "https://tpwgt.com/content?trs=452609&shmarker=667755&locale=en&powered_by=true&border_radius=5&plain=true&show_logo=true&color_background=%23ffca28&color_button=%2355a539&color_text=%23000000&color_input_text=%23000000&color_button_text=%23ffffff&promo_id=4480&campaign_id=10",
};

const HeroSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // determine active tab based on route
  const activeTab =
    location.pathname === "/hotels"
      ? "hotels"
      : location.pathname === "/cars"
      ? "cars"
      : "flights";

  useEffect(() => {
    let script: HTMLScriptElement | null = null;

    if (activeTab !== "flights" && scripts[activeTab]) {
      script = document.createElement("script");
      script.src = scripts[activeTab]!;
      script.async = true;

      const containerId = `${activeTab}-widget`;
      document.getElementById(containerId)?.appendChild(script);
    }

    return () => {
      if (script) {
        script.remove();
      }
    };
  }, [activeTab]);

  const tabs = [
    { key: "flights", label: "Flights", path: "/" },
    { key: "hotels", label: "Hotels", path: "/hotels" },
    { key: "cars", label: "Cars", path: "/cars" },
  ];

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
          {activeTab === "flights" && (
            <>
              Book Cheap <span className="text-green-400">Flights</span>
            </>
          )}
          {activeTab === "hotels" && (
            <>
              Find the Best <span className="text-green-400">Hotels</span>
            </>
          )}
          {activeTab === "cars" && (
            <>
              Rent Affordable <span className="text-green-400">Cars</span>
            </>
          )}
        </h1>

        {/* Widget */}
        <div className="bg-white rounded-xl p-4 shadow-xl">
          {activeTab === "flights" && <div id="tpwl-search"></div>}
          {activeTab === "hotels" && <div id="hotels-widget"></div>}
          {activeTab === "cars" && <div id="cars-widget"></div>}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
