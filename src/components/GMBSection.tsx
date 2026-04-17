import { BUSINESS } from "@/data/business";

const GMBSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-wide">
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Find Us on Google Maps</h2>
          <p className="text-muted-foreground">Visit our office in Manjalpur, Vadodara</p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border aspect-video max-h-[400px] max-w-4xl mx-auto">
          <iframe
            src={BUSINESS.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${BUSINESS.name} Location on Google Maps`}
          />
        </div>
      </div>
    </section>
  );
};

export default GMBSection;
