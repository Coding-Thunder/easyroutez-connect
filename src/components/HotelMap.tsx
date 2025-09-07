import { useEffect } from "react";

const MapWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://tpwgt.com/content?currency=usd&trs=452609&shmarker=667755&locale=en&powered_by=true&draggable=true&disable_zoom=false&show_logo=true&scrollwheel=false&color=%2307AF61&contrast_color=%23ffffff&width=1000&height=500&lat=7.893587&lng=98.29682&zoom=14&radius=60&stars=0&rating_from=0&rating_to=10&promo_id=4285&campaign_id=101";
    script.async = true;
    script.charset = "utf-8";

    const container = document.getElementById("map-widget-container");
    container?.appendChild(script);

    return () => {
      // Cleanup when component unmounts
      container?.removeChild(script);
    };
  }, []);

  return (
    <div
      id="map-widget-container"
      className="w-fit h-fit rounded-xl shadow-xl"
    ></div>
  );
};

export default MapWidget;
