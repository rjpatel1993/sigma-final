import { Link } from "react-router-dom";
import {
  Phone, Shield, Clock, Star, Wrench, Settings, PlusCircle, Thermometer,
  Unplug, Truck, Wind, Cpu, Building2, ArrowRight, MessageCircle, CheckCircle2,
  BadgeCheck, IndianRupee, Sparkles, MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { BUSINESS } from "@/data/business";
import { SERVICES } from "@/data/services";
import { AREAS } from "@/data/areas";
import heroTechnician from "@/assets/hero-technician.jpg";
import beforeAfter from "@/assets/before-after.jpg";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="h-5 w-5" />,
  Settings: <Settings className="h-5 w-5" />,
  PlusCircle: <PlusCircle className="h-5 w-5" />,
  Thermometer: <Thermometer className="h-5 w-5" />,
  Unplug: <Unplug className="h-5 w-5" />,
  Truck: <Truck className="h-5 w-5" />,
  Wind: <Wind className="h-5 w-5" />,
  Cpu: <Cpu className="h-5 w-5" />,
  Building2: <Building2 className="h-5 w-5" />,
};

const homeFaqs = [
  { question: "How fast can a technician reach my home in Vadodara?", answer: "In most areas — Akota, Alkapuri, Manjalpur, Karelibagh, Sayajiganj, Waghodia Road and nearby — we reach within 60–90 minutes for same-day bookings. For emergencies, call us and we'll dispatch the nearest technician immediately." },
  { question: "Do you service all AC brands?", answer: "Yes. We service Daikin, Voltas, LG, Samsung, Hitachi, Blue Star, Carrier, Lloyd, Godrej, Whirlpool, Panasonic, Mitsubishi, O General and more — split, window, cassette and ductable units." },
  { question: "Is the visit charge separate from repair?", answer: "We offer a free diagnosis on most repair jobs in Vadodara. You only pay once you approve the quote. No hidden charges — we explain the issue in plain language before any work begins." },
  { question: "Do you give a warranty on repairs?", answer: "Yes. We provide a 90-day workmanship warranty on repairs and use only genuine spare parts and refrigerants (R22, R32, R410A) with manufacturer-backed warranty." },
  { question: "What hours are you available?", answer: `We're open 24 hours, 7 days — including Sundays and public holidays. Call ${BUSINESS.phone} anytime.` },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "GF B-27, Shalin Complex, beside Dtdc Courier, near Bank Of India, Kapdwanj, Manjalpur",
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    postalCode: BUSINESS.postalCode,
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: BUSINESS.geo.latitude, longitude: BUSINESS.geo.longitude },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
  url: BUSINESS.siteUrl,
  priceRange: "₹₹",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "120" },
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: BUSINESS.name, url: BUSINESS.siteUrl };
const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="AC Repair & Service in Vadodara — Same-Day, 24/7 | Sigma Aircons"
        description="Local Vadodara AC repair, service, installation, gas refill & AMC. Same-day visit · all brands · transparent pricing. Call +91 84016 02049."
        canonical="/"
        schemas={[localBusinessSchema, websiteSchema, faqSchema]}
      />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-soft" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container-wide relative py-12 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-3 py-1 text-xs font-medium text-foreground/80 shadow-ring mb-5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Available now in Vadodara
              </div>
              <h1 className="font-display text-[2.25rem] leading-[1.05] sm:text-5xl lg:text-[3.75rem] font-bold text-balance mb-5">
                Your AC fixed today,<br className="hidden sm:block" />
                by people from <span className="text-accent">Vadodara</span>.
              </h1>
              <p className="text-[17px] text-muted-foreground max-w-xl mb-7 text-pretty leading-relaxed">
                Honest, on-time AC repair, service, gas refill and installation — for homes and shops across Vadodara. Same-day visits. All brands. Real people, not a call centre.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button asChild size="lg" className="h-12 px-6 bg-accent hover:bg-accent/90 text-accent-foreground text-base shadow-lg shadow-accent/25">
                  <a href={`tel:${BUSINESS.phoneRaw}`}>
                    <Phone className="h-5 w-5 mr-2" /> Call {BUSINESS.phone}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base border-border">
                  <a href={BUSINESS.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2 text-[#25D366]" /> WhatsApp us
                  </a>
                </Button>
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5 text-amber-500">
                    {Array(5).fill(null).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                  </div>
                  <span className="font-medium text-foreground">5.0 Google</span>
                </div>
                <div className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-accent" /> 90-day warranty</div>
                <div className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-accent" /> 24/7 service</div>
                <div className="flex items-center gap-1.5"><IndianRupee className="h-4 w-4 text-accent" /> No hidden charges</div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-3 bg-accent/10 rounded-[2rem] -rotate-2" aria-hidden />
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-ring bg-background">
                  <img
                    src={heroTechnician}
                    alt="Sigma Aircons certified technician servicing a split AC in Vadodara"
                    width={1024}
                    height={1024}
                    className="w-full h-auto block"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-background border border-border shadow-ring rounded-xl px-4 py-3 flex items-center gap-3 max-w-[230px]">
                  <div className="h-9 w-9 rounded-full bg-emerald-500/15 text-emerald-700 grid place-items-center">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="text-[13px] leading-tight">
                    <div className="font-semibold">Booked in Akota</div>
                    <div className="text-muted-foreground text-xs">2 minutes ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section className="border-y border-border bg-card">
        <div className="container-wide py-5 grid grid-cols-2 md:grid-cols-4 gap-y-4 text-center">
          {[
            { n: "10,000+", l: "AC jobs completed" },
            { n: "19", l: "Vadodara localities" },
            { n: "5.0★", l: "Google rating" },
            { n: "24/7", l: "Same-day service" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-xl md:text-2xl font-bold text-primary">{s.n}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">What we do</div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-balance">Every AC service, under one team.</h2>
            </div>
            <p className="text-muted-foreground max-w-md md:text-right text-[15px]">
              From a noisy outdoor unit to a full commercial install — we handle it. Tap any service to see how it works.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/service/${s.slug}/`}
                className="group rounded-2xl border border-border bg-background p-6 hover:border-accent/40 hover:shadow-ring transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent grid place-items-center">
                    {SERVICE_ICONS[s.icon]}
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="font-display font-semibold text-[17px] mb-1.5">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BEFORE / AFTER ============ */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-border shadow-ring">
                <img
                  src={beforeAfter}
                  alt="Dirty AC indoor unit before and clean unit after deep service by Sigma Aircons"
                  width={1600}
                  height={900}
                  loading="lazy"
                  className="w-full h-auto block"
                />
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Real work, real results</div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-balance">A proper service makes your AC feel new — and cheaper to run.</h2>
              <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">
                Most ACs in Vadodara lose 25–30% efficiency to dust, clogged filters and low gas pressure. Our deep-clean restores cooling and can cut your power bill noticeably from the very next month.
              </p>
              <ul className="space-y-3">
                {[
                  "Indoor + outdoor coil deep clean with foam wash",
                  "Filter sanitisation and drain pipe flushing",
                  "Gas pressure check, top-up if needed",
                  "Electrical connection and capacitor check",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[15px]">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">How a booking works</div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-balance">Three steps. No call-centre runaround.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { n: "01", t: "Call or WhatsApp", d: "Tell us the brand, model and what's going wrong. We confirm a visit slot — usually same day." },
              { n: "02", t: "We diagnose on-site", d: "A real technician inspects, explains the issue and shares a transparent quote. No work without your go-ahead." },
              { n: "03", t: "Fixed & tested", d: "We use genuine parts, test cooling, clean up and back it with a 90-day warranty." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-border p-6 bg-card relative">
                <div className="text-5xl font-display font-bold text-accent/20 absolute top-4 right-5">{s.n}</div>
                <h3 className="font-display font-semibold text-lg mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Why Sigma Aircons</div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-5 text-balance">A neighbourhood AC team — not a faceless aggregator.</h2>
              <p className="text-primary-foreground/70 text-[15px] leading-relaxed mb-6">
                We live and work in Vadodara. The technician who picks up your call is the one who shows up at your door. That's why our work — and our reviews — stay consistent.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={`tel:${BUSINESS.phoneRaw}`}><Phone className="h-4 w-4 mr-2" /> Talk to a technician</a>
              </Button>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { i: <Sparkles className="h-5 w-5" />, t: "Trained Vadodara technicians", d: "Background-verified, in uniform, with ID." },
                { i: <Shield className="h-5 w-5" />, t: "90-day workmanship warranty", d: "If the same issue returns, we fix it free." },
                { i: <IndianRupee className="h-5 w-5" />, t: "Transparent, fair pricing", d: "Quote before work begins. No surprise bills." },
                { i: <Clock className="h-5 w-5" />, t: "24/7 availability", d: "Sundays, holidays, late nights — we answer." },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <div className="h-9 w-9 rounded-lg bg-accent/20 text-accent grid place-items-center mb-3">{x.i}</div>
                  <h3 className="font-display font-semibold mb-1">{x.t}</h3>
                  <p className="text-sm text-primary-foreground/65">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ AREAS ============ */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Service areas
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-balance">We cover every corner of Vadodara.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <Link
                key={a.slug}
                to={`/service/ac-repair/${a.slug}/`}
                className="px-3.5 py-1.5 rounded-full bg-background border border-border text-sm text-foreground/75 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section-padding bg-card">
        <div className="container-wide grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">FAQ</div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-balance">Quick answers before you book.</h2>
            <p className="text-muted-foreground text-[15px]">Don't see your question? Just call or WhatsApp us — we usually reply within a few minutes.</p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-2">
              {homeFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border bg-background rounded-xl px-5 data-[state=open]:shadow-ring">
                  <AccordionTrigger className="text-left hover:no-underline font-semibold text-[15px] py-4">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[14.5px] leading-relaxed pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground p-8 lg:p-14">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <h2 className="font-display text-3xl lg:text-4xl font-bold mb-3 text-balance">AC not cooling? We can be there today.</h2>
                <p className="text-primary-foreground/75 text-[15px] max-w-xl">Pick up the phone or send a WhatsApp message. A real technician — not a bot — will respond.</p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
                <Button asChild size="lg" className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href={`tel:${BUSINESS.phoneRaw}`}><Phone className="h-5 w-5 mr-2" /> {BUSINESS.phone}</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                  <a href={BUSINESS.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" /> WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
