import { useEffect } from "react";

const HotelWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://tpwgt.com/content?currency=usd&trs=452609&shmarker=667755&type=compact&host=&locale=en&limit=10&powered_by=true&nobooking=&primary=%23ff8e00&special=%23e0e0e0&promo_id=4026&campaign_id=101";
    script.async = true;
    script.charset = "utf-8";

    const container = document.getElementById("hotel-widget-container");
    container?.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      container?.removeChild(script);
    };
  }, []);

  return (
    <div
      id="hotel-widget-container"
      className="bg-white rounded-xl p-4 shadow-xl"
    ></div>
  );
};

export default HotelWidget;
