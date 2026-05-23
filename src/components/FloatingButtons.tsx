import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/data/business";

const FloatingButtons = () => {
  return (
    <>
      {/* Desktop: floating bubbles bottom-right */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        <a
          href={BUSINESS.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="h-12 w-12 rounded-full bg-[#25D366] text-white grid place-items-center shadow-lg shadow-emerald-900/20 hover:scale-105 transition-transform"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          aria-label="Call Sigma Aircons"
          className="h-12 w-12 rounded-full bg-accent text-accent-foreground grid place-items-center shadow-lg shadow-accent/30 hover:scale-105 transition-transform"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      {/* Mobile: sticky bottom call/whatsapp bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur-md">
        <div className="grid grid-cols-2 gap-px bg-border">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="flex items-center justify-center gap-2 py-3.5 bg-accent text-accent-foreground font-semibold text-sm"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white font-semibold text-sm"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingButtons;
