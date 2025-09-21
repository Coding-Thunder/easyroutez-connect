import React from "react";
import { Check } from "lucide-react";

// Text content
const termsText = `Welcome to RentalConfirmation LLC (rentalconfirmation.com). By accessing or using
our platform, you agree to comply with and be bound by the following Terms &
Conditions. These terms govern your relationship with RentalConfirmation, which
acts solely as an intermediary between travelers and service providers
(including property hosts, car rental agencies, and airlines).

Scope of Services:
- RentalConfirmation provides an online platform for listing, searching, and booking
  short-term rental accommodations, car rentals, and flights. We do not own,
  manage, or directly operate any of the listed services.
- Providers (hosts, car agencies, airlines, etc.) are solely responsible for
  accuracy of their listings, service condition, compliance with local/international
  laws, and delivery of services promised.

User Obligations:
- You must provide accurate information during booking (name, contact details,
  payment method, traveler IDs).
- You agree not to misuse the platform (fraudulent bookings, false reviews, unlawful
  activity).
- You are responsible for complying with all applicable laws and regulations
  (e.g., local tax obligations, airline identification requirements, driver license
  obligations for rentals).

Bookings & Payments:
- All prices are displayed clearly before checkout. Taxes, fees, or surcharges may
  apply as indicated by the provider.
- Payments may be processed directly by the provider, or by RentalConfirmation on the
  provider’s behalf. If processed by us, secure payment gateways are used.
- A booking is confirmed once you receive a written/email confirmation including
  your booking ID or ticket number.

Liability:
- RentalConfirmation is not liable for provider actions, service condition, delays,
  cancellations, or delivery beyond what is outlined in the provider’s listing
  or policy.
- Any disputes must be raised with the provider first. RentalConfirmation will assist
  in mediation where possible but is not the guarantor of refunds or resolutions.

Modifications & Termination:
- Providers may refuse, cancel, or modify bookings in line with their policies.
- RentalConfirmation reserves the right to suspend access if misuse or fraudulent
  activity is detected.

Changes to Terms:
- These Terms & Conditions may be updated periodically. Users will be notified via
  the website or email when significant changes occur.
`;

const cancellationText = `Cancellation Policy — RentalConfirmation (rentalconfirmation.com)

Overview:
- Cancellation policies are set by the provider (hotel, car rental agency, airline)
  and will be clearly presented during the booking process and in your confirmation
  email or e-ticket.

Types of Policies:
- Flexible: Full refund if cancellation is made within the defined window (e.g.,
  24–48 hours before hotel check-in, before car pick-up time, or before airline
  cut-off).
- Moderate: Partial refund (typically 50%) if canceled 7 or more days before hotel
  check-in, 48+ hours before car rental, or as defined by airline rules.
- Strict: Little or no refund if canceled within the policy window (e.g., less than
  7 days before hotel check-in, within 24 hours of car pick-up, or airline
  non-refundable fares).

Refund Credibility:
- Full refunds are guaranteed under policies where the cancellation falls strictly
  within the eligible timeframe, ensuring trust for both travelers and providers.
- Partial refunds are calculated transparently based on the provider’s set terms,
  and refund details are communicated clearly to maintain credibility and prevent
  disputes.
- All approved refunds, full or partial, are traceable through our secure payment
  gateways, ensuring accountability for providers and reliability for travelers.

No-Show Policy:
- Failure to show up (at hotel check-in, car rental pick-up, or flight departure)
  without prior cancellation will be considered a no-show, and the full booking
  amount may be charged as per provider rules.

Early Check-Out / Changes:
- Leaving early, modifying travel dates, or flight changes after confirmation
  are subject to provider approval and may result in partial refunds or no refund,
  depending on provider policy.

Refund Processing:
- Refunds approved under provider rules will be initiated promptly but may take
  7–12 business days to reflect in your account, depending on the payment method
  and financial institutions involved.

Damages, Penalties & Fees:
- Providers reserve the right to withhold part of the booking amount for damages,
  missing items, penalties, or excessive cleaning, supported by documented evidence.

Emergency Cancellations:
- In cases of force majeure (natural disasters, government restrictions, airline
  strikes, etc.), Rentalconfirmation.com will work with both parties to find a fair resolution,
  which may include credit vouchers or rescheduling.

Support:
- For cancellation or refund queries, please contact our team at
  support@rentalconfirmation.com and include your booking reference number or ticket ID.
`;

const rentalData = {
  name: "RentalConfirmation",
  domain: "rentalconfirmation.com",
  supportEmail: "support@rentalconfirmation.com",
};

function formatContent(text: string) {
  return text.split("\n").map((line, i) => {
    // Headings ending with colon
    if (/^[A-Z][A-Za-z\s&]+:$/.test(line.trim())) {
      return (
        <div className="flex items-center  mt-4 mb-1 gap-2">
          <div className="bg-blue-600 rounded-full p-1">
            <Check size={12} className="text-white" />
          </div>
          <p key={i} className="text-blue-600 font-semibold">
            {line}
          </p>
        </div>
      );
    }

    // Cancellation Policy title
    if (line.includes("Cancellation Policy —")) {
      return (
        <h2 key={i} className="text-xl font-bold mt-8 mb-2">
          {line}
        </h2>
      );
    }

    if (line.trim().startsWith("-")) {
      return (
        <div key={i} className="flex items-start mb-1">
          {/* <Check className="text-blue-600 mt-1 mr-2 flex-shrink-0 w-4 h-4" /> */}
          <span>{line.trim().substring(1).trim()}</span>
        </div>
      );
    }

    // Regular paragraph
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

export function TermsAndServices() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <PageShell title="Terms & Services">{formatContent(termsText)}</PageShell>
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

export function RefundsAndCancellation() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <PageShell title="Refunds & Cancellation">
        {formatContent(cancellationText)}
      </PageShell>
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
