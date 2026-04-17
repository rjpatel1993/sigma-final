import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { AREAS } from "@/data/areas";
import { SERVICES } from "@/data/services";

const Areas = () => {
  return (
    <Layout>
      <SEOHead
        title="AC Service Areas in Vadodara — Sigma Aircons"
        description="Sigma Aircons serves all major areas in Vadodara including Akota, Tarsali, Manjalpur, Karelibagh, Sayajiganj, and more. 24/7 doorstep AC service."
        canonical="/areas/"
        schemas={[{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://sigmaaircons.in/" },
            { "@type": "ListItem", position: 2, name: "Service Areas" },
          ],
        }]}
      />
      <section className="section-padding">
        <div className="container-wide text-center">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Service Areas" }]} />
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">AC Service Areas in Vadodara</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">We provide doorstep AC services across all these Vadodara localities. Select an area to find services available near you.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {AREAS.map((a) => (
              <Card key={a.slug} className="bg-card border-border/60 hover:border-primary/40 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <h2 className="text-lg font-semibold">{a.name}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{a.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {SERVICES.slice(0, 4).map((s) => (
                      <Link key={s.slug} to={`/service/${s.slug}/${a.slug}/`} className="text-xs px-2.5 py-1 rounded-md bg-background border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Areas;
