import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/data/business";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={BUSINESS.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg transition-colors animate-pulse"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
