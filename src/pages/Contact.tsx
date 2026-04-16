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
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />

          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-10">Have an AC problem? Get in touch with Sigma Aircons for quick, reliable service in Vadodara.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact info */}
            <div>
              <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                {[
                  { href: `tel:${BUSINESS.phoneRaw}`, icon: <Phone className="h-5 w-5" />, title: "Phone", text: BUSINESS.phone, sub: "Available 24/7 — Call anytime" },
                  { href: `mailto:${BUSINESS.email}`, icon: <Mail className="h-5 w-5" />, title: "Email", text: BUSINESS.email },
                  { icon: <MapPin className="h-5 w-5" />, title: "Address", text: BUSINESS.address },
                  { icon: <Clock className="h-5 w-5" />, title: "Business Hours", text: "Open 24 Hours — Monday to Sunday" },
                ].map((item, i) => {
                  const content = (
                    <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-all">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">{item.icon}</div>
                      <div className="min-w-0">
                        <h3 className="font-semibold mb-0.5">{item.title}</h3>
                        <p className="text-muted-foreground text-sm break-all">{item.text}</p>
                        {item.sub && <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>}
                      </div>
                    </div>
                  );
                  return item.href ? <a key={i} href={item.href}>{content}</a> : <div key={i}>{content}</div>;
                })}
              </div>

              <div className="mt-8 flex gap-4">
                <Button asChild size="lg" className="shadow-lg shadow-primary/25">
                  <a href={`tel:${BUSINESS.phoneRaw}`}><Phone className="h-5 w-5 mr-2" /> Call Now</a>
                </Button>
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white border-0">
                  <a href={BUSINESS.whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                </Button>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-xl font-bold mb-6">Our Location</h2>
              <div className="rounded-2xl overflow-hidden border border-border/60 aspect-square">
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
