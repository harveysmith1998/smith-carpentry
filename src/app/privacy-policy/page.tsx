import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Smith Carpentry privacy policy.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-charcoal-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h1 className="text-4xl font-display font-bold text-charcoal-950 dark:text-white mb-4">Privacy Policy</h1>
        <p className="text-charcoal-400 dark:text-white/40 mb-10 text-sm">Last updated: June 2025</p>
        <div className="prose prose-charcoal dark:prose-invert max-w-none space-y-6 text-charcoal-600 dark:text-white/60 leading-relaxed">
          <p>Smith Carpentry (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal data. This policy explains how we collect, use and protect information you provide when using our website or contacting us.</p>
          <h2 className="text-xl font-bold text-charcoal-950 dark:text-white mt-8">Information We Collect</h2>
          <p>We collect information you provide directly to us, including your name, email address, phone number, and details about your project when you submit an enquiry form or contact us directly.</p>
          <h2 className="text-xl font-bold text-charcoal-950 dark:text-white mt-8">How We Use Your Information</h2>
          <p>We use your information solely to respond to your enquiry, provide a quote, and fulfil any services you engage us for. We do not sell or share your data with third parties for marketing purposes.</p>
          <h2 className="text-xl font-bold text-charcoal-950 dark:text-white mt-8">Data Retention</h2>
          <p>We retain your data for as long as necessary to fulfil the purposes outlined above, and in accordance with UK GDPR requirements.</p>
          <h2 className="text-xl font-bold text-charcoal-950 dark:text-white mt-8">Your Rights</h2>
          <p>You have the right to access, correct, or request deletion of your personal data at any time. Contact us at {" "}<a href="mailto:info@smithcarpentry.co.uk" className="text-brand hover:underline">info@smithcarpentry.co.uk</a>.</p>
          <h2 className="text-xl font-bold text-charcoal-950 dark:text-white mt-8">Cookies</h2>
          <p>Our website uses only essential cookies required for basic functionality. No tracking or advertising cookies are used.</p>
          <h2 className="text-xl font-bold text-charcoal-950 dark:text-white mt-8">Contact</h2>
          <p>For any privacy-related queries, please email <a href="mailto:info@smithcarpentry.co.uk" className="text-brand hover:underline">info@smithcarpentry.co.uk</a>.</p>
        </div>
      </div>
    </div>
  );
}
