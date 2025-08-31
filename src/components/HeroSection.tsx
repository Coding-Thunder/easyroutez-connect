import CallButton from "./CallButton";

const HeroSection = () => {
  return (
    <section className="bg-primary py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Book Your Flights the{" "}
          <span className="text-blue-light">Easy Way</span>
        </h1>
        <p className="text-xl text-blue-light mb-12 max-w-2xl mx-auto">
          Call us now and let our experts handle your travel needs seamlessly.
        </p>
        <div className="flex flex-col items-center gap-6">
          <CallButton variant="secondary" size="lg" />
          <div className="text-blue-light">
            <span className="font-medium">Call:</span> +1 855-761-6979
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;