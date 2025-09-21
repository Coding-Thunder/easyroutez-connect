import React from "react";
import heroBg from "@/assets/hero.jpg";

const rentalData = {
  name: "RentalConfirmation",
  domain: "rentalconfirmation.com",
  supportEmail: "support@rentalconfirmation.com",
};

const AboutHero = () => {
  return (
    <section
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          About <span className="text-blue-400">RentalConfirmation</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl">
          Trusted travel consultancy for seamless rentals, cars, and flights.
        </p>
      </div>
    </section>
  );
};

export function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero />

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-gray-700 leading-relaxed">
        <p>
          Welcome to <strong>RentalConfirmation LLC</strong> — your dedicated
          partner in navigating the world of short-term rentals, car rentals,
          and flights. We are not the airlines, property owners, or rental
          agencies themselves. Instead, we proudly serve as your{" "}
          <span className="text-blue-600 font-medium">trusted consultant</span>,
          helping you make the right choices with confidence and peace of mind.
        </p>

        <p>
          In today’s travel landscape, the sheer number of options can feel
          overwhelming. Prices vary, listings can be confusing, and travelers
          often struggle to find the right fit for their needs. That’s where we
          step in. Our role is to simplify the process — providing accurate
          listings, transparent information, and clear guidance — so that you
          can focus less on logistics and more on the excitement of your
          journey.
        </p>

        <p>
          While we do not directly own or operate the properties, vehicles, or
          flights you book through our platform, our consultancy model is built
          on <strong>trust and support</strong>. We act as the bridge between
          you and the service providers, ensuring smooth communication, timely
          confirmations, and assistance whenever you need it. Think of us as
          your personal travel ally — always on your side, even when plans
          change.
        </p>

        <p>
          At the heart of RentalConfirmation is a simple belief:{" "}
          <em>travel should feel easy, transparent, and enjoyable</em>. Whether
          you’re booking a weekend getaway, a business trip, or a long-awaited
          vacation, we strive to remove the stress from the process. Our team of
          experienced travel experts is passionate about making every journey
          smoother, from first click to final confirmation.
        </p>

        <p>
          Our values guide everything we do. <strong>Integrity</strong> means we
          always communicate honestly and set clear expectations.{" "}
          <strong>Reliability</strong> means you can count on us when it matters
          most, whether it’s help with a booking or navigating cancellations.{" "}
          <strong>Innovation</strong> drives us to keep improving our tools and
          services. And <strong>customer focus</strong> ensures that your
          satisfaction remains at the center of our mission.
        </p>

        <p>
          With RentalConfirmation, you’re never just a transaction. You’re part
          of a community of travelers who value convenience, clarity, and care.
          We may not own the plane you fly on or the keys to the home you stay
          in, but we promise to stand beside you throughout the journey — as
          your guide, your advocate, and your trusted travel consultant.
        </p>
      </div>

      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {rentalData.name}. For support, email{" "}
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
