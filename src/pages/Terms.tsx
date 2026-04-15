import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESS } from "@/data/business";

const Terms = () => {
  return (
    <Layout>
      <SEOHead title="Terms & Conditions — Sigma Aircons" description="Terms and conditions for Sigma Aircons services in Vadodara. Read our service terms, warranty policy, and cancellation guidelines." canonical="/terms-and-conditions/" />
      <section className="py-12 bg-secondary">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Terms & Conditions" }]} />
          <h1 className="text-3xl font-bold text-secondary-foreground mb-6">Terms & Conditions</h1>
          <div className="space-y-6 text-muted-foreground text-sm">
            <p>Last updated: January 2025</p>
            <p>These terms and conditions govern your use of {BUSINESS.name}'s website and services.</p>
            <h2 className="text-xl font-semibold text-secondary-foreground pt-2">Services</h2>
            <p>{BUSINESS.name} provides AC repair, service, installation, and maintenance services in Vadodara, Gujarat. All services are subject to availability and may vary based on location and requirements.</p>
            <h2 className="text-xl font-semibold text-secondary-foreground pt-2">Service Warranty</h2>
            <p>We provide a warranty on our repair work and parts as communicated at the time of service. Warranty does not cover damage caused by misuse, power surges, or natural disasters.</p>
            <h2 className="text-xl font-semibold text-secondary-foreground pt-2">Pricing</h2>
            <p>Service charges are communicated before work begins. Additional charges may apply for spare parts and materials, which will be discussed and approved by the customer before proceeding.</p>
            <h2 className="text-xl font-semibold text-secondary-foreground pt-2">Cancellation</h2>
            <p>Service appointments can be cancelled or rescheduled by contacting us at least 2 hours before the scheduled time.</p>
            <h2 className="text-xl font-semibold text-secondary-foreground pt-2">Limitation of Liability</h2>
            <p>{BUSINESS.name} shall not be liable for any indirect, incidental, or consequential damages arising from our services beyond the service fee paid.</p>
            <h2 className="text-xl font-semibold text-secondary-foreground pt-2">Contact</h2>
            <p>For questions regarding these terms, contact us at {BUSINESS.email} or {BUSINESS.phone}.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
