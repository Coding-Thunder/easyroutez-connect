import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
const faqs = [
  {
    question: "How does Autrova work?",
    answer:
      "Just call us, and our travel experts will handle everything — from booking flights and reserving hotels to arranging car rentals. We ensure smooth planning and the best deals, all in one place.",
  },
  {
    question: "Do you offer international bookings?",
    answer:
      "Yes! Whether it's international flights, overseas hotels, or rental cars abroad, we partner with trusted providers worldwide to give you full travel coverage.",
  },
  {
    question: "Is there a service fee?",
    answer:
      "We charge a minimal service fee based on the type of booking — flights, hotels, or car rentals. Our pricing is fully transparent, with no hidden costs.",
  },
  {
    question: "How quickly can you process bookings?",
    answer:
      "Most bookings are confirmed instantly during your call. Complex itineraries or special hotel/car rental requests are usually completed within 2–4 hours.",
  },
  {
    question: "Can you help with last-minute travel?",
    answer:
      "Absolutely! Whether you need a last-minute flight, hotel stay, or car rental, we specialize in securing quick bookings to keep your plans stress-free.",
  },
  {
    question: "What if I need to change or cancel my booking?",
    answer:
      "We manage all changes and cancellations for flights, hotels, and car rentals according to provider policies. Just call us, and we'll take care of the rest.",
  },
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our travel booking services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div
                key={index}
                className={cn(
                  "rounded-xl overflow-hidden bg-white transition-all duration-300",
                  isOpen ? "shadow-medium" : "hover:shadow-soft"
                )}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    isOpen ? "max-h-96" : "max-h-0"
                  )}
                >
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
