import { Helmet } from "react-helmet-async";
import { BUSINESS } from "@/data/business";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  schemas?: object[];
}

const SEOHead = ({ title, description, canonical, ogType = "website", schemas = [] }: SEOHeadProps) => {
  const fullCanonical = `${BUSINESS.siteUrl}${canonical}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={BUSINESS.name} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Geo */}
      <meta name="geo.region" content={BUSINESS.geo.region} />
      <meta name="geo.placename" content={BUSINESS.geo.placename} />
      <meta name="geo.position" content={`${BUSINESS.geo.latitude};${BUSINESS.geo.longitude}`} />
      <meta name="ICBM" content={`${BUSINESS.geo.latitude}, ${BUSINESS.geo.longitude}`} />

      {/* Schemas */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
