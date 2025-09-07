import { useEffect } from "react";
import heroBg from "@/assets/hero.jpg";

const HotelHero = () => {
  useEffect(() => {
    // Dynamically load the Hotels widget script
    const script = document.createElement("script");
    script.src =
      "https://tpwgt.com/content?currency=usd&trs=452609&shmarker=667755&show_hotels=true&powered_by=true&locale=en&searchUrl=search.hotellook.com&primary_override=%23FF8E01&color_button=%23FF8E01&color_icons=%23FF8E01&secondary=%23FFFFFF&dark=%23262626&light=%23FFFFFF&special=%23C4C4C4&color_focused=%23FF8E01&border_radius=5&plain=false&promo_id=7873&campaign_id=101";
    script.async = true;
    document.getElementById("hotel-widget")?.appendChild(script);

    return () => {
      // Cleanup the script on unmount
      document.getElementById("hotel-widget")?.removeChild(script);
    };
  }, []);

  return (
    <section
      className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hotels Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Find the Best Hotels with{" "}
          <span className="text-green-400">RentalConfirmation</span>
        </h1>
        <p className="text-lg text-green-200 mb-10 max-w-3xl">
          Search for hotels worldwide and book instantly at the best rates.
        </p>

        {/* Hotel Widget */}
        <div
          id="hotel-widget"
          className="bg-white rounded-xl p-4 shadow-xl"
        ></div>
      </div>
    </section>
  );
};

export default HotelHero;
