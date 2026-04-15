import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESS } from "@/data/business";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEOHead title="Privacy Policy — Sigma Aircons" description="Privacy policy for Sigma Aircons website. Learn how we collect, use, and protect your information." canonical="/privacy-policy/" />
      <section className="py-12 bg-secondary">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
          <h1 className="text-3xl font-bold text-secondary-foreground mb-6">Privacy Policy</h1>
          <div className="space-y-6 text-muted-foreground text-sm">
            <p>Last updated: January 2025</p>
            <p>{BUSINESS.name} ("we", "us", or "our") operates the website {BUSINESS.siteUrl}. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
            <h2 className="text-xl font-semibold text-secondary-foreground pt-2">Information We Collect</h2>
            <p>We may collect the following information when you contact us or use our services: your name, phone number, email address, address, and details about your AC service requirements.</p>
            <h2 className="text-xl font-semibold text-secondary-foreground pt-2">How We Use Your Information</h2>
            <p>We use your information to provide AC services, respond to inquiries, schedule appointments, send service updates, and improve our services.</p>
            <h2 className="text-xl font-semibold text-secondary-foreground pt-2">Information Sharing</h2>
            <p>We do not sell, trade, or share your personal information with third parties, except as required by law or to provide our services.</p>
            <h2 className="text-xl font-semibold text-secondary-foreground pt-2">Data Security</h2>
            <p>We take reasonable measures to protect your personal information from unauthorized access, alteration, or destruction.</p>
            <h2 className="text-xl font-semibold text-secondary-foreground pt-2">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at {BUSINESS.email} or call {BUSINESS.phone}.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
