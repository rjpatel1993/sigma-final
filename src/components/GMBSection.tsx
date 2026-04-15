import { BUSINESS } from "@/data/business";

const GMBSection = () => {
  return (
    <section className="bg-muted py-12">
      <div className="container-wide">
        <h2 className="text-2xl font-bold text-secondary-foreground text-center mb-6">Find Us on Google Maps</h2>
        <div className="rounded-lg overflow-hidden border border-border aspect-video max-h-96">
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
