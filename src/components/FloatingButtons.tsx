import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/data/business";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={BUSINESS.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="h-13 w-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-all hover:scale-105"
        aria-label="Chat on WhatsApp"
        style={{ width: 52, height: 52 }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        className="h-13 w-13 rounded-full gradient-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 transition-all hover:scale-105"
        aria-label="Call Now"
        style={{ width: 52, height: 52 }}
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
