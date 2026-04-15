import { Link } from "react-router-dom";
import { Phone, Shield, Clock, Star, Wrench, Users, CheckCircle } from "lucide-react";
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
  Wrench: <Wrench className="h-8 w-8" />,
  Settings: <Wrench className="h-8 w-8" />,
  PlusCircle: <CheckCircle className="h-8 w-8" />,
  Thermometer: <Wrench className="h-8 w-8" />,
  Unplug: <Wrench className="h-8 w-8" />,
  Truck: <Wrench className="h-8 w-8" />,
  Wind: <Wrench className="h-8 w-8" />,
  Cpu: <Wrench className="h-8 w-8" />,
  Building2: <Users className="h-8 w-8" />,
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
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container-wide text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            Best <span className="text-primary">AC Repair & Service</span> in Vadodara
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Expert AC repair, installation, and maintenance by certified technicians. Available 24/7 across all Vadodara areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href={`tel:${BUSINESS.phoneRaw}`}>
                <Phone className="h-5 w-5 mr-2" /> Call Now — {BUSINESS.phone}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={BUSINESS.whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted">
        <div className="container-wide">
          <h2 className="text-2xl lg:text-3xl font-bold text-secondary-foreground text-center mb-4">Our AC Services</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">Comprehensive air conditioning solutions for homes and businesses in Vadodara.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link key={s.slug} to={`/service/${s.slug}/`}>
                <Card className="bg-secondary hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-6">
                    <div className="text-primary mb-3">{SERVICE_ICONS[s.icon]}</div>
                    <h3 className="font-semibold text-secondary-foreground mb-2">{s.name}</h3>
                    <p className="text-sm text-muted-foreground">{s.shortDescription}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary">
        <div className="container-wide">
          <h2 className="text-2xl lg:text-3xl font-bold text-secondary-foreground text-center mb-10">Why Choose Sigma Aircons?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="h-8 w-8" />, title: "24/7 Availability", desc: "Round-the-clock service including weekends and holidays." },
              { icon: <Shield className="h-8 w-8" />, title: "Certified Technicians", desc: "Experienced and trained AC professionals." },
              { icon: <Star className="h-8 w-8" />, title: "All Brands Serviced", desc: "We work with every major AC brand." },
              { icon: <Wrench className="h-8 w-8" />, title: "Genuine Parts", desc: "Only authentic spare parts and refrigerants used." },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-primary mx-auto mb-3 w-fit">{item.icon}</div>
                <h3 className="font-semibold text-secondary-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted">
        <div className="container-wide">
          <h2 className="text-2xl lg:text-3xl font-bold text-secondary-foreground text-center mb-4">Service Areas in Vadodara</h2>
          <p className="text-muted-foreground text-center mb-8">We provide doorstep AC services across all these Vadodara localities.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {AREAS.map((a) => (
              <Link key={a.slug} to={`/service/ac-repair/${a.slug}/`} className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary">
        <div className="container-wide">
          <h2 className="text-2xl lg:text-3xl font-bold text-secondary-foreground text-center mb-10">What Our Customers Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Card key={i} className="bg-muted">
                <CardContent className="p-6">
                  <div className="flex gap-1 text-yellow-400 mb-3">
                    {Array(t.rating).fill(null).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">"{t.text}"</p>
                  <p className="text-sm font-medium text-secondary-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}, Vadodara</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-secondary-foreground text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {homeFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-secondary-foreground text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">Need AC Service in Vadodara?</h2>
          <p className="text-primary-foreground/80 mb-6">Call us now for fast, reliable AC service at your doorstep.</p>
          <Button asChild size="lg" variant="secondary">
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
