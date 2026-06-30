import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Smith Carpentry terms of service.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-charcoal-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h1 className="text-4xl font-display font-bold text-charcoal-950 dark:text-white mb-4">Terms of Service</h1>
        <p className="text-charcoal-400 dark:text-white/40 mb-10 text-sm">Last updated: June 2025</p>
        <div className="space-y-6 text-charcoal-600 dark:text-white/60 leading-relaxed">
          <p>By engaging Smith Carpentry to carry out work, you agree to the following terms and conditions.</p>
          <h2 className="text-xl font-bold text-charcoal-950 dark:text-white mt-8">Quotations</h2>
          <p>All quotations are fixed-price and valid for 30 days from the date of issue. Variations to the agreed scope of work will be quoted separately and agreed in writing before proceeding.</p>
          <h2 className="text-xl font-bold text-charcoal-950 dark:text-white mt-8">Payment</h2>
          <p>A deposit may be required for larger projects. Final payment is due on completion of works, unless otherwise agreed in writing. We accept bank transfer and all major cards.</p>
          <h2 className="text-xl font-bold text-charcoal-950 dark:text-white mt-8">Workmanship Guarantee</h2>
          <p>All works are guaranteed for 12 months from the date of completion against defects in workmanship. This guarantee does not cover damage caused by misuse, modification by third parties, or normal wear and tear.</p>
          <h2 className="text-xl font-bold text-charcoal-950 dark:text-white mt-8">Insurance</h2>
          <p>Smith Carpentry holds full public liability insurance. Copies are available on request.</p>
          <h2 className="text-xl font-bold text-charcoal-950 dark:text-white mt-8">Cancellation</h2>
          <p>Cancellations must be provided in writing with a minimum of 48 hours&apos; notice. Deposits are non-refundable where materials have already been procured.</p>
          <h2 className="text-xl font-bold text-charcoal-950 dark:text-white mt-8">Governing Law</h2>
          <p>These terms are governed by the laws of England and Wales.</p>
        </div>
      </div>
    </div>
  );
}
