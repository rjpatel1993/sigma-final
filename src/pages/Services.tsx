import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, CheckCircle, Users } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SERVICES } from "@/data/services";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="h-10 w-10" />,
  Settings: <Wrench className="h-10 w-10" />,
  PlusCircle: <CheckCircle className="h-10 w-10" />,
  Thermometer: <Wrench className="h-10 w-10" />,
  Unplug: <Wrench className="h-10 w-10" />,
  Truck: <Wrench className="h-10 w-10" />,
  Wind: <Wrench className="h-10 w-10" />,
  Cpu: <Wrench className="h-10 w-10" />,
  Building2: <Users className="h-10 w-10" />,
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
      <section className="py-12 bg-secondary">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <h1 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">Our AC Services in Vadodara</h1>
          <p className="text-muted-foreground max-w-2xl mb-10">From AC repair and maintenance to installation and commercial solutions — we've got all your air conditioning needs covered.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link key={s.slug} to={`/service/${s.slug}/`}>
                <Card className="bg-muted hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4">{SERVICE_ICONS[s.icon]}</div>
                    <h2 className="text-lg font-semibold text-secondary-foreground mb-2">{s.name}</h2>
                    <p className="text-sm text-muted-foreground">{s.shortDescription}</p>
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
