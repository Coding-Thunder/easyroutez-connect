import React, { useState } from "react";

const rentalData = {
  name: "Rental Confirmation",
  domain: "rentalconfirmation.com",
  supportEmail: "support@rentalconfirmation.com",
  terms: `Welcome to RentalConfirmation (rentalconfirmation.com). By accessing or using
our platform, you agree to comply with and be bound by the following Terms &
Conditions. These terms govern your relationship with RentalConfirmation, which
acts solely as an intermediary between guests and property hosts/suppliers.

Scope of Services:
- RentalConfirmation provides an online platform for listing, searching, and booking
  short-term rental accommodations. We do not own, manage, or control the rental
  properties listed.
- Hosts are solely responsible for accuracy of their listings, property condition,
  compliance with local laws, and delivery of services promised.

User Obligations:
- You must provide accurate information during booking (name, contact details,
  payment method).
- You agree not to misuse the platform (fraudulent bookings, false reviews, unlawful
  activity).
- You are responsible for complying with all applicable laws and regulations
  (e.g., local tax obligations, guest registration laws).

Bookings & Payments:
- All prices are displayed clearly before checkout. Taxes, fees, or surcharges may
  apply as indicated by the host.
- Payments may be processed directly by the host, or by RentalConfirmation on the
  host’s behalf. If processed by us, secure payment gateways are used.
- A booking is confirmed once you receive a written/email confirmation including
your booking ID.

Liability:
- RentalConfirmation is not liable for host actions, property condition, or service
delivery beyond what is outlined in the host listing.
- Any disputes must be raised with the host first. RentalConfirmation will assist
in mediation where possible but is not the guarantor of refunds or resolutions.

Modifications & Termination:
- Hosts may refuse, cancel, or modify bookings in line with their policies.
- RentalConfirmation reserves the right to suspend access if misuse or fraudulent
activity is detected.

Changes to Terms:
- These Terms & Conditions may be updated periodically. Users will be notified via
the website or email when significant changes occur.
`,
  cancellation: `Cancellation Policy — RentalConfirmation (rentalconfirmation.com)

Overview:
Cancellation policies are set by the host or property supplier and will be clearly
presented during the booking process and in your confirmation email.

Types of Policies:
- Flexible: Full refund if cancellation is made 24–48 hours before check-in.
- Moderate: Partial refund (typically 50%) if canceled 7 or more days before check-in.
- Strict: Little or no refund if canceled within the policy window (e.g., less than
  7 days before arrival).

No-Show Policy:
- Failure to arrive at the property without prior cancellation will be considered a
no-show, and the full booking amount may be charged as per host rules.

Early Check-Out / Changes:
- Leaving early or modifying dates after check-in is subject to host approval and
may result in partial refunds or no refund, depending on host policy.

Refund Processing:
- Refunds approved under host rules will be initiated promptly but may take 7–12
business days to reflect in your account, depending on the payment method and
financial institutions involved.

Damages & Cleaning Fees:
- Hosts reserve the right to withhold part of the booking amount for damages,
missing items, or excessive cleaning, supported by documented evidence.

Emergency Cancellations:
- In cases of force majeure (natural disasters, government restrictions, etc.),
RentalConfirmation will work with both parties to find a fair resolution, which may
include credit vouchers or rescheduling.

Support:
For cancellation or refund queries, please contact our team at
support@rentalconfirmation.com and include your booking reference number.
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

export default function RentalConfirmationTerms() {
  const [activeTab, setActiveTab] = useState("terms");

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
          <h2 className="text-xl font-semibold">
            RentalConfirmation — Policies
          </h2>
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
                <p className="mb-2 text-sm text-gray-700">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                {rentalData.terms}
              </PageShell>
            ) : (
              <PageShell title={`${rentalData.name} — Cancellation Policy`}>
                <p className="mb-2 text-sm text-gray-700">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
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
