import React, { useState } from "react";

const rentalData = {
  name: "Rental Confirmation",
  domain: "EazyRoutez.com",
  supportEmail: "support@EazyRoutez.com",
  terms: `Welcome to EazyRoutez (EazyRoutez.com). By accessing or using
our platform, you agree to comply with and be bound by the following Terms &
Conditions. These terms govern your relationship with EazyRoutez, which
acts solely as an intermediary between travelers and service providers
(including property hosts, car rental agencies, and airlines).

Scope of Services:
- EazyRoutez provides an online platform for listing, searching, and booking
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
- Payments may be processed directly by the provider, or by EazyRoutez on the
  provider’s behalf. If processed by us, secure payment gateways are used.
- A booking is confirmed once you receive a written/email confirmation including
  your booking ID or ticket number.

Refunds:
- Full Refund: Guests/travelers are eligible for a full refund if cancellations are
  made within the timeframes specified by the provider’s refund policy (e.g.,
  24–48 hours before check-in, prior to car pick-up, or before airline cut-off).
- Partial Refund: Guests/travelers may receive a partial refund (e.g., 50%) if
  cancellations occur after the full refund window but still meet the minimum
  notice period as outlined by the provider’s policy.
- All refunds, whether full or partial, are subject to documented verification and
  processed using secure financial channels for credibility and transparency.
- Providers and travelers will be notified via email of the refund amount, status,
  and expected processing time.

Liability:
- EazyRoutez is not liable for provider actions, service condition, delays,
  cancellations, or delivery beyond what is outlined in the provider’s listing
  or policy.
- Any disputes must be raised with the provider first. EazyRoutez will assist
  in mediation where possible but is not the guarantor of refunds or resolutions.

Modifications & Termination:
- Providers may refuse, cancel, or modify bookings in line with their policies.
- EazyRoutez reserves the right to suspend access if misuse or fraudulent
  activity is detected.

Changes to Terms:
- These Terms & Conditions may be updated periodically. Users will be notified via
the website or email when significant changes occur.
`,
  cancellation: `Cancellation Policy — EazyRoutez (EazyRoutez.com)

Overview:
Cancellation policies are set by the provider (hotel, car rental agency, airline)
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
  strikes, etc.), EazyRoutez will work with both parties to find a fair resolution,
  which may include credit vouchers or rescheduling.

Support:
For cancellation or refund queries, please contact our team at
support@EazyRoutez.com and include your booking reference number or ticket ID.
`,
};

function PageShell({ title, children }) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="flex items-start justify-between flex-wrap gap-2">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm text-muted-foreground">{rentalData.domain}</p>
        </div>
        <div className="space-x-2">
          <button
            onClick={() => window.print()}
            className="px-3 py-2 rounded-md border text-sm hover:bg-gray-50"
          >
            Print
          </button>
        </div>
      </div>
      <hr className="my-4" />
      <div className="prose max-w-none whitespace-pre-wrap text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function EazyRoutezTerms() {
  const [activeTab, setActiveTab] = useState("terms");

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
          <h2 className="text-xl font-semibold">EazyRoutez — Policies</h2>
          <div className="text-sm text-gray-600">{rentalData.domain}</div>
        </header>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="md:col-span-1 bg-white p-4 rounded-lg shadow-sm flex flex-col justify-between">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-2">
                View
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab("terms")}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium border ${
                    activeTab === "terms" ? "bg-slate-100" : "bg-white"
                  }`}
                >
                  Terms & Conditions
                </button>
                <button
                  onClick={() => setActiveTab("cancellation")}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium border ${
                    activeTab === "cancellation" ? "bg-slate-100" : "bg-white"
                  }`}
                >
                  Cancellation Policy
                </button>
              </div>
            </div>

            <div className="mt-6 text-xs text-gray-500">
              <div>Support: </div>
              <a
                href={`mailto:${rentalData.supportEmail}`}
                className="text-sm text-blue-600 break-all"
              >
                {rentalData.supportEmail}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            {activeTab === "terms" ? (
              <PageShell title={`${rentalData.name} — Terms & Conditions`}>
                {rentalData.terms}
              </PageShell>
            ) : (
              <PageShell title={`${rentalData.name} — Cancellation Policy`}>
                {rentalData.cancellation}
              </PageShell>
            )}
          </div>
        </div>

        <footer className="text-center text-sm text-gray-500">
          These policy templates are for general informational purposes only and
          do not constitute legal advice. Please consult a qualified legal
          professional to ensure compliance with jurisdiction-specific
          requirements.
        </footer>
      </div>
    </div>
  );
}
