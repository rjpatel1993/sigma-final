import { MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/data/business";

const GMBSection = () => {
  return (
    <section className="bg-background border-t border-border">
      <div className="container-wide py-14 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-4">
              <MapPin className="h-3 w-3" /> Manjalpur, Vadodara
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">Visit our service center</h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-5">
              {BUSINESS.address}
            </p>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" /> {BUSINESS.phone}
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-border aspect-[16/10] shadow-ring">
              <iframe
                src={BUSINESS.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${BUSINESS.name} on Google Maps`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GMBSection;
