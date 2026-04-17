import { Shield, Users, Clock, Star, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESS } from "@/data/business";

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About Sigma Aircons — Trusted AC Service in Vadodara"
        description="Learn about Sigma Aircons, Vadodara's trusted AC service provider. Experienced technicians, 24/7 availability, and commitment to quality air conditioning solutions."
        canonical="/about/"
        schemas={[{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${BUSINESS.siteUrl}/` },
            { "@type": "ListItem", position: 2, name: "About Us" },
          ],
        }]}
      />
      <section className="section-padding">
        <div className="container-wide text-center">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About Us" }]} />

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6">About Sigma Aircons</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Sigma Aircons is Vadodara's trusted air conditioning service provider, dedicated to keeping homes and businesses cool and comfortable. With years of experience in the HVAC industry, we have built a reputation for reliability, quality workmanship, and exceptional customer service.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Based in Manjalpur, Vadodara, we serve all major localities across the city with a team of certified and experienced AC technicians. Whether it's a quick repair, a thorough maintenance service, or a brand new installation — we deliver professional results every time.
            </p>

            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              To provide the most reliable, affordable, and professional AC services in Vadodara — ensuring every customer enjoys perfectly cooled spaces without any hassle. We believe in transparent pricing, honest advice, and building long-term relationships with our customers.
            </p>

            <h2 className="text-2xl font-bold mb-6">Why People Trust Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
              {[
                { icon: <Clock className="h-6 w-6" />, title: "24/7 Availability", desc: "We're available round the clock — weekends, holidays, and emergencies included." },
                { icon: <Users className="h-6 w-6" />, title: "Experienced Team", desc: "Our technicians are certified, trained, and experienced with all AC brands." },
                { icon: <Shield className="h-6 w-6" />, title: "Quality Assurance", desc: "We use only genuine parts and follow industry best practices for every job." },
                { icon: <Star className="h-6 w-6" />, title: "Customer First", desc: "Transparent pricing, honest advice, and a satisfaction guarantee on all services." },
                { icon: <CheckCircle className="h-6 w-6" />, title: "All Brands Covered", desc: "Daikin, LG, Samsung, Voltas, Blue Star, Carrier, Hitachi — we service them all." },
                { icon: <Phone className="h-6 w-6" />, title: "Quick Response", desc: "Same-day service in most Vadodara areas. Just call and we're on our way." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/60">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="gradient-primary rounded-2xl p-10 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">Ready to Experience the Best AC Service?</h2>
              <p className="text-white/80 mb-6">Call us now for fast, professional AC service in Vadodara.</p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <a href={`tel:${BUSINESS.phoneRaw}`}><Phone className="h-5 w-5 mr-2" /> {BUSINESS.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
