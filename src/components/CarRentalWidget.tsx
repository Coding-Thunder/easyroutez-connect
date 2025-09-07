import { useEffect } from "react";

const CarRentalWidget = () => {
  useEffect(() => {
    // Dynamically load the Car Rental widget script
    const script = document.createElement("script");
    script.src =
      "https://tpwgt.com/content?trs=452609&shmarker=667755&locale=en&width=100&height=100&powered_by=true&campaign_id=10&promo_id=2082";
    script.async = true;
    script.charset = "utf-8";

    const container = document.getElementById("car-widget-2");
    if (container) {
      container.appendChild(script);
    }
  }, []);

  return <div id="car-widget-2" className="mt-8"></div>;
};

export default CarRentalWidget;
