import { useParams, Navigate, Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getServiceBySlug } from "@/data/services";
import { AREAS } from "@/data/areas";
import { BUSINESS } from "@/data/business";

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const service = getServiceBySlug(serviceSlug || "");
  if (!service) return <Navigate to="/services/" replace />;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${service.name} in Vadodara`,
      provider: { "@type": "LocalBusiness", name: BUSINESS.name },
      areaServed: { "@type": "City", name: BUSINESS.city },
      description: service.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BUSINESS.siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${BUSINESS.siteUrl}/services/` },
        { "@type": "ListItem", position: 3, name: service.name },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
        "@type": "Question", name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  return (
    <Layout>
      <SEOHead
        title={`${service.name} in Vadodara — Sigma Aircons | 24/7 Service`}
        description={`Professional ${service.name.toLowerCase()} service in Vadodara by Sigma Aircons. ${service.shortDescription} Call +91 84016 02049.`}
        canonical={`/service/${service.slug}/`}
        schemas={schemas}
      />

      <section className="section-padding">
        <div className="container-wide text-center">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services/" }, { label: service.name }]} />

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">{service.name} in Vadodara</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl mx-auto">{service.description}</p>

            <Button asChild size="lg" className="mb-14 shadow-lg shadow-primary/25">
              <a href={`tel:${BUSINESS.phoneRaw}`}><Phone className="h-5 w-5 mr-2" /> Call Now for {service.name}</a>
            </Button>

            {/* Benefits */}
            <h2 className="text-2xl font-bold mb-5">Why Choose Us for {service.name}?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-14">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border/60">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>

            {/* Process */}
            <h2 className="text-2xl font-bold mb-5">Our {service.name} Process</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
              {service.process.map((p, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border border-border/60">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-8 w-8 rounded-full gradient-primary text-white flex items-center justify-center text-sm font-bold shadow-md shadow-primary/20">{i + 1}</span>
                    <h3 className="font-semibold">{p.step}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground pl-11">{p.description}</p>
                </div>
              ))}
            </div>

            {/* Areas */}
            <h2 className="text-2xl font-bold mb-5">{service.name} Service Areas in Vadodara</h2>
            <div className="flex flex-wrap gap-2 mb-14">
              {AREAS.map((a) => (
                <Link key={a.slug} to={`/service/${service.slug}/${a.slug}/`} className="px-3 py-1.5 rounded-lg bg-card border border-border/60 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                  {a.name}
                </Link>
              ))}
            </div>

            {/* FAQ */}
            <h2 className="text-2xl font-bold mb-5">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible>
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border/60">
                  <AccordionTrigger className="text-left hover:text-primary">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
