import React from "react";
import { Check } from "lucide-react";
import heroBg from "@/assets/hero.jpg"; // Use your hero image here

const aboutText = `Welcome to RentalConfirmation LLC (rentalconfirmation.com)!  

We are a travel consultancy committed to helping travelers book short-term rentals, car rentals, and flights seamlessly. Our platform connects travelers with service providers, including property hosts, car rental agencies, and airlines.  

Our Mission:
- To simplify the travel booking process by providing accurate listings, transparent pricing, and a smooth user experience.
- To act as a trusted intermediary between travelers and providers, ensuring communication, support, and assistance when needed.

Our Vision:
- To be the most reliable and customer-centric travel consultancy globally.
- To leverage technology to enhance booking experiences and build lasting relationships with travelers and providers alike.

Core Values:
- Integrity: We prioritize honest and transparent communication with all our customers.
- Reliability: We assist with bookings, cancellations, and support while never owning or directly operating the services.
- Innovation: Continuously improving our platform to make travel easier and more enjoyable.
- Customer Focus: Ensuring traveler satisfaction is at the heart of everything we do.

Team:
- Our dedicated team of travel experts is here to provide assistance, answer queries, and help you plan your perfect journey.
`;

const rentalData = {
  name: "RentalConfirmation",
  domain: "rentalconfirmation.com",
  supportEmail: "support@rentalconfirmation.com",
};

function formatContent(text: string) {
  return text.split("\n").map((line, i) => {
    if (/^[A-Z][A-Za-z\s&]+:$/.test(line.trim())) {
      return (
        <div className="flex items-center mt-4 mb-1 gap-2" key={i}>
          <div className="bg-blue-600 rounded-full p-1">
            <Check size={12} className="text-white" />
          </div>
          <p className="text-blue-600 font-semibold">{line}</p>
        </div>
      );
    }
    if (line.trim() === "") return <br key={i} />;
    if (line.trim().startsWith("-")) {
      return (
        <div key={i} className="flex items-start mb-1 ml-4">
          <span>• {line.trim().substring(1).trim()}</span>
        </div>
      );
    }
    return (
      <p key={i} className="mb-1">
        {line}
      </p>
    );
  });
}

function PageShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-start justify-between flex-wrap gap-2">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm text-gray-500">{rentalData.domain}</p>
        </div>
        <div>
          <button
            onClick={() => window.print()}
            className="px-3 py-2 rounded-md border text-sm hover:bg-gray-50"
          >
            Print
          </button>
        </div>
      </div>
      <hr className="my-4" />
      <div className="prose max-w-none text-sm leading-relaxed">{children}</div>
    </div>
  );
}

// New simple hero for About page
const AboutHero = () => {
  return (
    <section
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to <span className="text-blue-400">RentalConfirmation</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl">
          Your trusted travel consultancy for short-term rentals, car rentals,
          and flights.
        </p>
      </div>
    </section>
  );
};

export function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 pb-4 sm:pb-6">
      <AboutHero />
      <PageShell title="About Us">{formatContent(aboutText)}</PageShell>
      <footer className="text-center text-sm text-gray-500 mt-6">
        For support, contact{" "}
        <a
          href={`mailto:${rentalData.supportEmail}`}
          className="text-blue-600 hover:underline"
        >
          {rentalData.supportEmail}
        </a>
        .
      </footer>
    </div>
  );
}
