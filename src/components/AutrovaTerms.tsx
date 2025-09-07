import React, { useState } from "react";

const autrovaData = {
  name: "Autrova",
  domain: "autrova.com",
  supportEmail: "support@autrova.com",
  terms: `Welcome to Autrova (autrova.com). By using our platform, you agree to these
Terms & Conditions, which govern your relationship with Autrova. We act solely as
an intermediary between travelers and suppliers (rental car providers, agencies,
or third-party operators).

Scope of Services:
- Autrova provides an online platform for listing, searching, and booking rental cars.
  We do not own, manage, or operate the vehicles listed.
- Suppliers are responsible for accuracy of their listings, vehicle condition,
  compliance with local laws, and delivery of promised services.

User Obligations:
- You must provide complete and accurate information (name, contact, driver’s license,
  payment details).
- You agree not to misuse the platform for unlawful activity (fraudulent bookings,
  false claims, misuse of rented vehicles).
- Compliance with all traffic laws, insurance requirements, and supplier rules is
  your responsibility.

Bookings & Payments:
- All charges (base rate, insurance, taxes, surcharges, or extras) will be displayed
  before checkout.
- Payments may be processed by suppliers directly, or by Autrova on behalf of
  suppliers using secure gateways.
- Confirmation will be issued via email with a booking reference.

Liability:
- Autrova is not liable for supplier actions, vehicle condition, or delivery beyond
what is outlined in the supplier’s listing.
- Disputes should be raised with the supplier first. Autrova may assist in mediation
but does not guarantee refunds.

Modifications & Termination:
- Suppliers may cancel or modify bookings according to their rules.
- Autrova reserves the right to suspend access if fraudulent or harmful activity is
detected.

Changes to Terms:
- These Terms & Conditions may be updated periodically. Users will be informed via
the platform or email if material changes occur.
`,
  cancellation: `Cancellation Policy — Autrova (autrova.com)

Overview:
Cancellation policies are determined by the rental supplier and will be displayed
during the booking process and in the confirmation email.

Types of Policies:
- Flexible: Full refund if canceled 24–48 hours before pick-up time.
- Moderate: Partial refund (e.g., 50%) if canceled 3+ days before pick-up.
- Strict: Little or no refund if canceled within 72 hours of pick-up.

No-Show Policy:
- Failure to appear without canceling is considered a no-show. In such cases, the
full booking amount may be charged as per supplier terms.

Early Returns & Changes:
- Early return of a vehicle or mid-rental changes may not qualify for a refund and
depend entirely on supplier rules.

Refund Processing:
- Approved refunds will be initiated promptly but may take 7–12 business days to
appear depending on your bank/payment method.

Damages, Insurance & Fees:
- Suppliers may deduct for damages, fuel discrepancies, late returns, or other
contracted fees, supported by documented evidence.

Emergency Cancellations:
- In events such as natural disasters, accidents, or government restrictions,
Autrova will work with both parties to arrange fair solutions such as vouchers,
rescheduling, or partial refunds.

Support:
For cancellation or refund inquiries, email
support@autrova.com with your booking reference.
`,
};

function PageShell({ title, children }) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="flex items-start justify-between flex-wrap gap-2">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm text-muted-foreground">{autrovaData.domain}</p>
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

export default function AutrovaTerms() {
  const [activeTab, setActiveTab] = useState("terms");

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
          <h2 className="text-xl font-semibold">Autrova — Policies</h2>
          <div className="text-sm text-gray-600">{autrovaData.domain}</div>
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
                href={`mailto:${autrovaData.supportEmail}`}
                className="text-sm text-blue-600 break-all"
              >
                {autrovaData.supportEmail}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            {activeTab === "terms" ? (
              <PageShell title={`${autrovaData.name} — Terms & Conditions`}>
                {/* <p className="mb-2 text-sm text-gray-700">
                  Last updated: {new Date().toLocaleDateString()}
                </p> */}
                {autrovaData.terms}
              </PageShell>
            ) : (
              <PageShell title={`${autrovaData.name} — Cancellation Policy`}>
                <p className="mb-2 text-sm text-gray-700">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                {autrovaData.cancellation}
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
