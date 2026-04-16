import { useParams, Navigate, Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getServiceBySlug, SERVICES } from "@/data/services";
import { getAreaBySlug } from "@/data/areas";
import { generateAreaFaqs } from "@/data/areaFaqs";
import { BUSINESS } from "@/data/business";

const ServiceArea = () => {
  const { serviceSlug, areaSlug } = useParams();
  const service = getServiceBySlug(serviceSlug || "");
  const area = getAreaBySlug(areaSlug || "");
  if (!service || !area) return <Navigate to="/services/" replace />;

  const areaFaqs = generateAreaFaqs(service.name, area.name);

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${service.name} in ${area.name}, Vadodara`,
      provider: { "@type": "LocalBusiness", name: BUSINESS.name },
      areaServed: { "@type": "Place", name: `${area.name}, ${BUSINESS.city}` },
      description: `Professional ${service.name.toLowerCase()} service in ${area.name}, Vadodara by ${BUSINESS.name}.`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BUSINESS.siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${BUSINESS.siteUrl}/services/` },
        { "@type": "ListItem", position: 3, name: service.name, item: `${BUSINESS.siteUrl}/service/${service.slug}/` },
        { "@type": "ListItem", position: 4, name: area.name },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: areaFaqs.map((f) => ({
        "@type": "Question", name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  return (
    <Layout>
      <SEOHead
        title={`${service.name} in ${area.name}, Vadodara — Sigma Aircons`}
        description={`Best ${service.name.toLowerCase()} service in ${area.name}, Vadodara. Sigma Aircons offers 24/7 doorstep service. Call +91 84016 02049.`}
        canonical={`/service/${service.slug}/${area.slug}/`}
        schemas={schemas}
      />

      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={[
            { label: "Home", to: "/" },
            { label: "Services", to: "/services/" },
            { label: service.name, to: `/service/${service.slug}/` },
            { label: area.name },
          ]} />

          <div className="max-w-4xl">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              {service.name} in {area.name}, Vadodara
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Looking for reliable {service.name.toLowerCase()} service in {area.name}, Vadodara? {BUSINESS.name} provides professional, affordable, and quick AC services at your doorstep in {area.name} and nearby areas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">{area.description}</p>

            <Button asChild size="lg" className="mb-14 shadow-lg shadow-primary/25">
              <a href={`tel:${BUSINESS.phoneRaw}`}><Phone className="h-5 w-5 mr-2" /> Call for {service.name} in {area.name}</a>
            </Button>

            {/* Benefits */}
            <h2 className="text-2xl font-bold mb-5">Why Choose Sigma Aircons in {area.name}?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-14">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border/60">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>

            {/* Other services in this area */}
            <h2 className="text-2xl font-bold mb-5">Other AC Services in {area.name}</h2>
            <div className="flex flex-wrap gap-2 mb-14">
              {SERVICES.filter(s => s.slug !== service.slug).map((s) => (
                <Link key={s.slug} to={`/service/${s.slug}/${area.slug}/`} className="px-3 py-1.5 rounded-lg bg-card border border-border/60 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                  {s.name}
                </Link>
              ))}
            </div>

            {/* FAQ */}
            <h2 className="text-2xl font-bold mb-5">{service.name} in {area.name} — FAQ</h2>
            <Accordion type="single" collapsible>
              {areaFaqs.map((faq, i) => (
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

export default ServiceArea;
