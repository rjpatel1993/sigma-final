import { Link } from "react-router-dom";
import { Phone, Shield, Clock, Star, Wrench, Users, CheckCircle, Thermometer, Wind, Cpu, Truck, Settings, PlusCircle, Unplug, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { BUSINESS } from "@/data/business";
import { SERVICES } from "@/data/services";
import { AREAS } from "@/data/areas";
import { TESTIMONIALS } from "@/data/testimonials";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="h-7 w-7" />,
  Settings: <Settings className="h-7 w-7" />,
  PlusCircle: <PlusCircle className="h-7 w-7" />,
  Thermometer: <Thermometer className="h-7 w-7" />,
  Unplug: <Unplug className="h-7 w-7" />,
  Truck: <Truck className="h-7 w-7" />,
  Wind: <Wind className="h-7 w-7" />,
  Cpu: <Cpu className="h-7 w-7" />,
  Building2: <Building2 className="h-7 w-7" />,
};

const homeFaqs = [
  { question: "What AC services does Sigma Aircons provide in Vadodara?", answer: "We provide complete AC solutions including repair, service & maintenance, installation, gas refill, dismantling, shifting, duct repair, compressor repair, and commercial AC services across all areas of Vadodara." },
  { question: "Do you offer 24/7 AC repair service?", answer: "Yes, Sigma Aircons is available 24 hours, 7 days a week for emergency AC repair services in Vadodara." },
  { question: "Which areas in Vadodara do you serve?", answer: "We serve all major areas including Akota, Tarsali, Waghodia Road, Makarpura, Manjalpur, Nizampura, Karelibagh, Sayajiganj, and many more localities across Vadodara." },
  { question: "Do you service all AC brands?", answer: "Yes, we service all major AC brands including Daikin, Voltas, LG, Samsung, Hitachi, Blue Star, Carrier, Lloyd, Godrej, and more." },
  { question: "How can I book an AC service with Sigma Aircons?", answer: `You can call us at ${BUSINESS.phone}, send a WhatsApp message, or visit our contact page to book a service. We offer same-day service in most areas.` },
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
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BUSINESS.name,
  url: BUSINESS.siteUrl,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Sigma Aircons — Best AC Repair & Service in Vadodara | 24/7"
        description="Sigma Aircons provides expert AC repair, service, installation, gas refill, and maintenance in Vadodara. Available 24/7. Call +91 84016 02049 for same-day service."
        canonical="/"
        schemas={[localBusinessSchema, websiteSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0 gradient-primary opacity-[0.07]" />
        <div className="container-wide relative text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6">
            <Clock className="h-3.5 w-3.5" /> Available 24/7 Across Vadodara
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            Best <span className="text-primary">AC Repair & Service</span>
            <br className="hidden sm:block" /> in Vadodara
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Expert AC repair, installation, and maintenance by certified technicians. Fast same-day service across all Vadodara areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/25">
              <a href={`tel:${BUSINESS.phoneRaw}`}>
                <Phone className="h-5 w-5 mr-2" /> Call Now — {BUSINESS.phone}
              </a>
            </Button>
            <Button asChild size="lg" className="text-base px-8 h-12 bg-emerald-600 hover:bg-emerald-700 text-white border-0">
              <a href={BUSINESS.whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Our AC Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive air conditioning solutions for homes and businesses in Vadodara.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <Link key={s.slug} to={`/service/${s.slug}/`} className="group">
                <Card className="bg-background border-border/60 hover:border-primary/40 transition-all duration-300 h-full group-hover:shadow-lg group-hover:shadow-primary/5">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                      {SERVICE_ICONS[s.icon]}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{s.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{s.shortDescription}</p>
                    <span className="text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Why Choose Sigma Aircons?</h2>
            <p className="text-muted-foreground">Trusted by hundreds of families across Vadodara.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="h-7 w-7" />, title: "24/7 Availability", desc: "Round-the-clock service including weekends and holidays." },
              { icon: <Shield className="h-7 w-7" />, title: "Certified Technicians", desc: "Experienced and trained AC professionals." },
              { icon: <Star className="h-7 w-7" />, title: "All Brands Serviced", desc: "We work with every major AC brand." },
              { icon: <Wrench className="h-7 w-7" />, title: "Genuine Parts", desc: "Only authentic spare parts and refrigerants used." },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-card border border-border/60">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Service Areas in Vadodara</h2>
            <p className="text-muted-foreground">We provide doorstep AC services across all these Vadodara localities.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {AREAS.map((a) => (
              <Link
                key={a.slug}
                to={`/service/ac-repair/${a.slug}/`}
                className="px-4 py-2 rounded-lg bg-background border border-border/60 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">What Our Customers Say</h2>
            <p className="text-muted-foreground">Real reviews from real Vadodara residents.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Card key={i} className="bg-card border-border/60">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 text-amber-400 mb-4">
                    {Array(t.rating).fill(null).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">"{t.text}"</p>
                  <div className="border-t border-border/60 pt-4">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}, Vadodara</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible>
            {homeFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/60">
                <AccordionTrigger className="text-left hover:text-primary">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Need AC Service in Vadodara?</h2>
          <p className="text-white/80 mb-8 text-lg">Call us now for fast, reliable AC service at your doorstep.</p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-base px-8 h-12 font-semibold">
            <a href={`tel:${BUSINESS.phoneRaw}`}>
              <Phone className="h-5 w-5 mr-2" /> {BUSINESS.phone}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
