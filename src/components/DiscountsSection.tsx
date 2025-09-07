import { Percent, Calendar, GraduationCap, Globe } from "lucide-react";

const discounts = [
  {
    icon: Globe,
    title: "Up to 20% off on International Flights",
    description: "Save big on your international travel bookings",
  },
  {
    icon: Calendar,
    title: "Special Weekend Deals",
    description: "Exclusive discounts for weekend getaways",
  },
  {
    icon: GraduationCap,
    title: "Student Travel Discounts",
    description: "Special rates for students and young travelers",
  },
  {
    icon: Percent,
    title: "Group Booking Savings",
    description: "Additional savings for group reservations",
  },
];

const DiscountsSection = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Exclusive Deals & Discounts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take advantage of our special offers and save on your next travel
            booking
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {discounts.map((discount, index) => {
            const IconComponent = discount.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-blue-border hover:border-primary transition-all duration-300 hover:shadow-medium group"
              >
                <div className="bg-green-400 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {discount.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {discount.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DiscountsSection;
