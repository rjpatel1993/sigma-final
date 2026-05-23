import { useParams, Navigate, Link } from "react-router-dom";
import { Phone, CheckCircle2, MessageCircle, MapPin, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getServiceBySlug, SERVICES } from "@/data/services";
import { getAreaBySlug } from "@/data/areas";
import { generateAreaContent } from "@/data/areaFaqs";
import { BUSINESS } from "@/data/business";

const ServiceArea = () => {
  const { serviceSlug, areaSlug } = useParams();
  const service = getServiceBySlug(serviceSlug || "");
  const area = getAreaBySlug(areaSlug || "");
  if (!service || !area) return <Navigate to="/services/" replace />;

  const { intro, localContext, faqs: areaFaqs } = generateAreaContent(service.name, area.name);

  const schemas = [
    {
      "@context": "https://schema.org", "@type": "Service",
      name: `${service.name} in ${area.name}, Vadodara`,
      provider: { "@type": "LocalBusiness", name: BUSINESS.name, telephone: BUSINESS.phone },
      areaServed: { "@type": "Place", name: `${area.name}, ${BUSINESS.city}` },
      description: `Professional ${service.name.toLowerCase()} service in ${area.name}, Vadodara by ${BUSINESS.name}.`,
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BUSINESS.siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${BUSINESS.siteUrl}/services/` },
        { "@type": "ListItem", position: 3, name: service.name, item: `${BUSINESS.siteUrl}/service/${service.slug}/` },
        { "@type": "ListItem", position: 4, name: area.name },
      ],
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: areaFaqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    },
  ];

  return (
    <Layout>
      <SEOHead
        title={`${service.name} in ${area.name}, Vadodara — Sigma Aircons`}
        description={`Same-day ${service.name.toLowerCase()} in ${area.name}, Vadodara. Local technicians, all brands. Call ${BUSINESS.phone}.`}
        canonical={`/service/${service.slug}/${area.slug}/`}
        schemas={schemas}
      />

      {/* HERO */}
      <section className="relative border-b border-border">
        <div className="absolute inset-0 gradient-soft" />
        <div className="container-wide relative py-10 lg:py-14">
          <Breadcrumbs items={[
            { label: "Home", to: "/" },
            { label: "Services", to: "/services/" },
            { label: service.name, to: `/service/${service.slug}/` },
            { label: area.name },
          ]} />
          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-4">
              <MapPin className="h-3 w-3" /> {area.name}, Vadodara
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance leading-tight">
              {service.name} in {area.name}
            </h1>
            <p className="text-[16px] text-muted-foreground leading-relaxed mb-3 text-pretty">{intro}</p>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">{area.description}</p>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">{localContext}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={`tel:${BUSINESS.phoneRaw}`}><Phone className="h-5 w-5 mr-2" /> Call {BUSINESS.phone}</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12">
                <a href={BUSINESS.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2 text-[#25D366]" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS strip */}
      <section className="border-b border-border bg-card">
        <div className="container-wide py-5 grid grid-cols-2 md:grid-cols-4 gap-y-3 text-center">
          {[
            { i: <Clock className="h-4 w-4" />, l: "Response", v: "60–90 min" },
            { i: <Shield className="h-4 w-4" />, l: "Warranty", v: "90 days" },
            { i: <CheckCircle2 className="h-4 w-4" />, l: "Brands", v: "All major" },
            { i: <MapPin className="h-4 w-4" />, l: "Coverage", v: area.name },
          ].map((x) => (
            <div key={x.l} className="flex flex-col items-center gap-1">
              <div className="text-accent">{x.i}</div>
              <div className="text-xs text-muted-foreground">{x.l}</div>
              <div className="font-display font-semibold text-sm">{x.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-padding">
        <div className="container-wide max-w-5xl">
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6 text-balance">
            Why {area.name} chooses Sigma Aircons
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {service.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-[15px] text-foreground/85">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="section-padding bg-card">
        <div className="container-wide max-w-5xl">
          <h2 className="font-display text-2xl font-bold mb-5">Other AC services in {area.name}</h2>
          <div className="flex flex-wrap gap-2">
            {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
              <Link
                key={s.slug}
                to={`/service/${s.slug}/${area.slug}/`}
                className="px-3.5 py-1.5 rounded-full bg-background border border-border text-sm text-foreground/75 hover:text-accent hover:border-accent/40 transition-all"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6 text-balance">
            {service.name} in {area.name} — FAQ
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {areaFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border bg-card rounded-xl px-5">
                <AccordionTrigger className="text-left hover:no-underline font-semibold text-[15px] py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[14.5px] leading-relaxed pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 lg:p-12 text-center">
            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-2 text-balance">
              Need {service.name.toLowerCase()} in {area.name} today?
            </h2>
            <p className="text-primary-foreground/70 mb-6">A local technician can usually reach you within 60–90 minutes.</p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-12">
              <a href={`tel:${BUSINESS.phoneRaw}`}><Phone className="h-5 w-5 mr-2" /> {BUSINESS.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceArea;
