import React, { useState } from "react";

const eazyRoutezData = {
  name: "EazyRoutez",
  domain: "eazyroutez.com",
  supportEmail: "support@eazyroutez.com",
  terms: `Welcome to EazyRoutez (eazyroutez.com). By using our platform, you agree to
these Terms & Conditions which govern your relationship with us. EazyRoutez acts
as an online marketplace connecting travelers with rental providers and
transportation services.

Scope of Services:
- EazyRoutez provides search, listing, and booking functionalities for rental cars
  and travel services. We do not own or operate vehicles or properties.
- Providers are solely responsible for ensuring listings are accurate, lawful, and
  services are delivered as promised.

User Responsibilities:
- Provide true and accurate booking information (identity, payment details).
- Do not misuse the platform (fraud, spam, unauthorized access).
- Ensure compliance with local driving, rental, and travel regulations.

Payments & Bookings:
- Prices, taxes, and fees are displayed prior to checkout.
- Bookings are confirmed only after payment and a confirmation email/ID is issued.
- Payments processed through EazyRoutez use secure gateways; in some cases,
  payment may be collected directly by the provider.

Liability:
- EazyRoutez is not liable for vehicle conditions, service quality, or provider
actions beyond what is displayed in the listing.
- Disputes must first be raised with the provider. We assist with mediation when
possible but are not a guarantor of refunds.

Modifications & Termination:
- Providers may modify or cancel reservations under their own policies.
- EazyRoutez may suspend accounts if fraudulent or abusive activity is detected.

Updates:
- These Terms & Conditions may change from time to time. Users will be notified
via the website or email.`,
  cancellation: `Cancellation Policy — EazyRoutez (eazyroutez.com)

Overview:
Cancellation terms are determined by the rental provider or travel service and
are displayed clearly at the time of booking.

Policy Types:
- Flexible: Full refund if canceled 24–48 hours before pickup/travel.
- Moderate: Partial refund (usually 50%) if canceled 7 or more days in advance.
- Strict: Little or no refund if canceled within 7 days of travel.

No-Show Policy:
- Failure to collect the rental or begin travel without prior notice is considered
a no-show. Providers may charge the full amount.

Changes & Early Returns:
- Alterations (pickup time, vehicle type, return location) depend on provider
policies and may result in extra charges or partial refunds.
- Early return of vehicles does not guarantee a refund unless covered by the
provider’s policy.

Refunds:
- Approved refunds are processed within 7–12 business days, depending on payment
method and banks involved.

Damages:
- Providers may deduct charges for damages, missing fuel, or excessive cleaning.
Evidence will be documented.

Force Majeure:
- In case of unforeseen events (e.g., natural disasters, strikes, government
restrictions), EazyRoutez will assist both parties in finding solutions such as
credits or rescheduling.

Support:
For any cancellation or refund assistance, please contact us at
support@eazyroutez.com with your booking reference number.`,
};

function PageShell({ title, children }) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="flex items-start justify-between flex-wrap gap-2">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm text-muted-foreground">{eazyRoutezData.domain}</p>
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
          <div className="text-sm text-gray-600">{eazyRoutezData.domain}</div>
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
                href={`mailto:${eazyRoutezData.supportEmail}`}
                className="text-sm text-blue-600 break-all"
              >
                {eazyRoutezData.supportEmail}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            {activeTab === "terms" ? (
              <PageShell title={`${eazyRoutezData.name} — Terms & Conditions`}>
                <p className="mb-2 text-sm text-gray-700">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                {eazyRoutezData.terms}
              </PageShell>
            ) : (
              <PageShell title={`${eazyRoutezData.name} — Cancellation Policy`}>
                <p className="mb-2 text-sm text-gray-700">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                {eazyRoutezData.cancellation}
              </PageShell>
            )}
          </div>
        </div>

        <footer className="text-center text-sm text-gray-500">
          These policies are templates for informational purposes only. Please
          consult a qualified legal advisor to ensure compliance with applicable
          laws in your jurisdiction.
        </footer>
      </div>
    </div>
  );
}
