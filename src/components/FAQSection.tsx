import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does EasyRoutez work?",
    answer: "Simply call us and we'll take care of your bookings. Our travel experts will help you find the best flights, handle all reservations, and ensure you get the best deals available."
  },
  {
    question: "Do you offer international flights?",
    answer: "Yes, we work with major airlines worldwide to offer comprehensive international flight booking services. From domestic to international destinations, we've got you covered."
  },
  {
    question: "Is there a service fee?",
    answer: "We charge a minimal service fee depending on the booking type and complexity. Our transparent pricing ensures you know exactly what you're paying for with no hidden costs."
  },
  {
    question: "How quickly can you process bookings?",
    answer: "Most bookings are processed immediately during your call. For complex itineraries or special requests, we typically complete bookings within 2-4 hours."
  },
  {
    question: "Can you help with last-minute travel?",
    answer: "Absolutely! We specialize in both advance bookings and last-minute travel arrangements. Our team is available to help you secure flights even on short notice."
  },
  {
    question: "What if I need to change my booking?",
    answer: "We handle all booking modifications and cancellations according to airline policies. Simply call us, and we'll assist you with any changes needed to your reservation."
  }
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
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
                className="border-2 border-blue-border rounded-xl overflow-hidden bg-white hover:border-primary transition-colors duration-300"
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