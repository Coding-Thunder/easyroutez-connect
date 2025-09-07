import { useEffect } from "react";
import heroBg from "@/assets/hero.jpg";

const CarHero = () => {
  useEffect(() => {
    // Dynamically load the Car Rental widget script
    const script = document.createElement("script");
    script.src =
      "https://tpwgt.com/content?trs=452609&shmarker=667755&locale=en&powered_by=true&border_radius=5&plain=true&show_logo=true&color_background=%23ffca28&color_button=%2355a539&color_text=%23000000&color_input_text=%23000000&color_button_text=%23ffffff&promo_id=4480&campaign_id=10";
    script.async = true;
    script.charset = "utf-8";
    document.getElementById("car-widget")?.appendChild(script);

    return () => {
      // Cleanup the script on unmount
      document.getElementById("car-widget")?.removeChild(script);
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
        {/* Car Rental Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Find the Best <span className="text-yellow-400">Car Rentals</span>{" "}
          with <span className="text-green-400">RentalConfirmation</span>
        </h1>
        <p className="text-lg text-yellow-200 mb-10 max-w-3xl">
          Compare prices from top providers and book your car rental instantly
          worldwide.
        </p>

        {/* Car Rental Widget */}
        <div
          id="car-widget"
          className="bg-white rounded-xl p-4 shadow-xl"
        ></div>
      </div>
    </section>
  );
};

export default CarHero;
