import { useParams, Navigate, Link } from "react-router-dom";
import { Phone, CheckCircle2, MessageCircle, ArrowRight, Shield, Clock, BadgeCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getServiceBySlug, SERVICES } from "@/data/services";
import { AREAS } from "@/data/areas";
import { BUSINESS } from "@/data/business";
import teamImg from "@/assets/team-technicians.jpg";

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const service = getServiceBySlug(serviceSlug || "");
  if (!service) return <Navigate to="/services/" replace />;

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  const schemas = [
    {
      "@context": "https://schema.org", "@type": "Service",
      name: `${service.name} in Vadodara`,
      provider: { "@type": "LocalBusiness", name: BUSINESS.name, telephone: BUSINESS.phone },
      areaServed: { "@type": "City", name: BUSINESS.city },
      description: service.description,
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BUSINESS.siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${BUSINESS.siteUrl}/services/` },
        { "@type": "ListItem", position: 3, name: service.name },
      ],
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    },
  ];

  return (
    <Layout>
      <SEOHead
        title={`${service.name} in Vadodara — Sigma Aircons | Same-Day 24/7`}
        description={`${service.shortDescription} Local Vadodara team, all brands, transparent pricing. Call ${BUSINESS.phone}.`}
        canonical={`/service/${service.slug}/`}
        schemas={schemas}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 gradient-soft" />
        <div className="container-wide relative py-10 lg:py-16">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services/" }, { label: service.name }]} />
          <div className="grid lg:grid-cols-12 gap-10 items-center mt-4">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-4">
                Vadodara · Same-day service
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance leading-tight">
                {service.name} in Vadodara
              </h1>
              <p className="text-[16px] text-muted-foreground leading-relaxed max-w-2xl mb-6 text-pretty">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button asChild size="lg" className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href={`tel:${BUSINESS.phoneRaw}`}><Phone className="h-5 w-5 mr-2" /> Call {BUSINESS.phone}</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12">
                  <a href={BUSINESS.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2 text-[#25D366]" /> WhatsApp us
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-amber-500 text-amber-500" /> 5.0 Google</span>
                <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-accent" /> 90-day warranty</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-accent" /> 24/7</span>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-border shadow-ring">
                <img src={teamImg} alt={`Sigma Aircons technicians providing ${service.name.toLowerCase()} in Vadodara`} loading="lazy" className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">What's included</div>
            <h2 className="font-display text-3xl font-bold text-balance">Why customers pick us for {service.name.toLowerCase()}.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-[15px] text-foreground/85 leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">How it works</div>
            <h2 className="font-display text-3xl font-bold text-balance">Our {service.name.toLowerCase()} process.</h2>
          </div>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.process.map((p, i) => (
              <li key={i} className="relative rounded-2xl bg-background border border-border p-6">
                <div className="font-display text-3xl font-bold text-accent/30 mb-2">0{i + 1}</div>
                <h3 className="font-display font-semibold text-[16px] mb-1.5">{p.step}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* AREAS */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Coverage</div>
            <h2 className="font-display text-3xl font-bold text-balance">{service.name} across Vadodara.</h2>
            <p className="text-muted-foreground mt-2 text-[15px]">Pick your area to see local details, response times and FAQs.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <Link
                key={a.slug}
                to={`/service/${service.slug}/${a.slug}/`}
                className="px-3.5 py-1.5 rounded-full bg-background border border-border text-sm text-foreground/75 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-bold mb-6">Other services we provide</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s) => (
              <Link key={s.slug} to={`/service/${s.slug}/`} className="group rounded-xl border border-border bg-background p-5 hover:border-accent/40 hover:shadow-ring transition-all">
                <h3 className="font-display font-semibold mb-1.5">{s.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{s.shortDescription}</p>
                <span className="text-sm text-accent font-medium inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  View <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-wide grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">FAQ</div>
            <h2 className="font-display text-3xl font-bold text-balance">About {service.name.toLowerCase()}</h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-2">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border bg-card rounded-xl px-5">
                  <AccordionTrigger className="text-left hover:no-underline font-semibold text-[15px] py-4">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[14.5px] leading-relaxed pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 lg:p-12 text-center">
            <BadgeCheck className="h-10 w-10 mx-auto mb-4 text-accent" />
            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-2 text-balance">Need {service.name.toLowerCase()} in Vadodara?</h2>
            <p className="text-primary-foreground/70 mb-6">Talk to a real technician — we'll give you an honest answer and a fair quote.</p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-12">
              <a href={`tel:${BUSINESS.phoneRaw}`}><Phone className="h-5 w-5 mr-2" /> {BUSINESS.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
