import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, CheckCircle, Users, Settings, Thermometer, Unplug, Truck, Wind, Cpu, Building2, PlusCircle, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SERVICES } from "@/data/services";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="h-8 w-8" />,
  Settings: <Settings className="h-8 w-8" />,
  PlusCircle: <PlusCircle className="h-8 w-8" />,
  Thermometer: <Thermometer className="h-8 w-8" />,
  Unplug: <Unplug className="h-8 w-8" />,
  Truck: <Truck className="h-8 w-8" />,
  Wind: <Wind className="h-8 w-8" />,
  Cpu: <Cpu className="h-8 w-8" />,
  Building2: <Building2 className="h-8 w-8" />,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sigmaaircons.in/" },
    { "@type": "ListItem", position: 2, name: "Services" },
  ],
};

const Services = () => {
  return (
    <Layout>
      <SEOHead
        title="AC Services in Vadodara — Sigma Aircons"
        description="Explore our complete range of AC services in Vadodara — repair, maintenance, installation, gas refill, shifting, and more. Call Sigma Aircons for 24/7 service."
        canonical="/services/"
        schemas={[breadcrumbSchema]}
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Our AC Services in Vadodara</h1>
          <p className="text-muted-foreground max-w-2xl mb-10">From AC repair and maintenance to installation and commercial solutions — we've got all your air conditioning needs covered.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <Link key={s.slug} to={`/service/${s.slug}/`} className="group">
                <Card className="bg-card border-border/60 hover:border-primary/40 transition-all duration-300 h-full group-hover:shadow-lg group-hover:shadow-primary/5">
                  <CardContent className="p-6">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                      {SERVICE_ICONS[s.icon]}
                    </div>
                    <h2 className="text-lg font-semibold mb-2">{s.name}</h2>
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
    </Layout>
  );
};

export default Services;
