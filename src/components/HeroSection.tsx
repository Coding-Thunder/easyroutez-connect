import CallButton from "./CallButton";
import heroImage from "@/assets/boeing-777-hero.jpg";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Book Your Flights the{" "}
              <span className="text-primary">Easy Way</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Call us now and let our experts handle your travel needs seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <CallButton variant="primary" size="lg" />
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Call:</span> +1 855-761-6979
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-medium bg-blue-light p-6">
              <img
                src={heroImage}
                alt="Boeing 777 aircraft - Professional travel booking service"
                className="w-full h-auto object-cover rounded-lg"
                loading="eager"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-blue rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-light rounded-full opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;