import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
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
      <section className="py-12 bg-secondary">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Service Areas" }]} />
          <h1 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">AC Service Areas in Vadodara</h1>
          <p className="text-muted-foreground max-w-2xl mb-10">We provide doorstep AC services across all these Vadodara localities. Select an area to find services available near you.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map((a) => (
              <Card key={a.slug} className="bg-muted hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-secondary-foreground mb-2">{a.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{a.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {SERVICES.slice(0, 4).map((s) => (
                      <Link key={s.slug} to={`/service/${s.slug}/${a.slug}/`} className="text-xs px-2 py-1 rounded bg-secondary border border-border text-muted-foreground hover:text-primary transition-colors">
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
