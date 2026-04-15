import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESS } from "@/data/business";

const Contact = () => {
  return (
    <Layout>
      <SEOHead
        title="Contact Sigma Aircons — AC Service in Vadodara"
        description="Contact Sigma Aircons for AC repair, service, and installation in Vadodara. Call +91 84016 02049 or visit us at Manjalpur, Vadodara."
        canonical="/contact/"
        schemas={[{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${BUSINESS.siteUrl}/` },
            { "@type": "ListItem", position: 2, name: "Contact" },
          ],
        }]}
      />
      <section className="py-12 bg-secondary">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />

          <h1 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mb-10">Have an AC problem? Get in touch with Sigma Aircons for quick, reliable service in Vadodara.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact info */}
            <div>
              <h2 className="text-xl font-bold text-secondary-foreground mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-start gap-4 p-4 rounded-lg bg-muted border border-border hover:border-primary/50 transition-colors">
                  <Phone className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-secondary-foreground">Phone</h3>
                    <p className="text-muted-foreground">{BUSINESS.phone}</p>
                    <p className="text-sm text-muted-foreground">Available 24/7 — Call anytime</p>
                  </div>
                </a>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-4 p-4 rounded-lg bg-muted border border-border hover:border-primary/50 transition-colors">
                  <Mail className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-secondary-foreground">Email</h3>
                    <p className="text-muted-foreground">{BUSINESS.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted border border-border">
                  <MapPin className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-secondary-foreground">Address</h3>
                    <p className="text-muted-foreground">{BUSINESS.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted border border-border">
                  <Clock className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-secondary-foreground">Business Hours</h3>
                    <p className="text-muted-foreground">Open 24 Hours — Monday to Sunday</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Button asChild size="lg">
                  <a href={`tel:${BUSINESS.phoneRaw}`}><Phone className="h-5 w-5 mr-2" /> Call Now</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={BUSINESS.whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                </Button>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-xl font-bold text-secondary-foreground mb-6">Our Location</h2>
              <div className="rounded-lg overflow-hidden border border-border aspect-square">
                <iframe
                  src={BUSINESS.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sigma Aircons Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
