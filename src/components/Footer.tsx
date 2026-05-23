import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/data/business";
import { SERVICES } from "@/data/services";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-lg bg-white/10 grid place-items-center font-bold">S</div>
            <span className="font-display text-lg font-bold">{BUSINESS.name}</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed mb-5 max-w-sm">
            A local Vadodara AC service team — repair, installation, gas refill & maintenance. Same-day visits, fair pricing, no jargon.
          </p>
          <div className="space-y-2.5 text-sm">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-2.5 hover:text-white">
              <Phone className="h-4 w-4 text-accent" /> {BUSINESS.phone}
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2.5 hover:text-white">
              <Mail className="h-4 w-4 text-accent" /> <span className="truncate">{BUSINESS.email}</span>
            </a>
            <div className="flex items-start gap-2.5 text-primary-foreground/70">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span className="leading-relaxed">{BUSINESS.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-primary-foreground/70">
              <Clock className="h-4 w-4 text-accent" /> Open 24 hours · 7 days
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/60">Services</h3>
          <ul className="space-y-2">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to={`/service/${s.slug}/`} className="text-sm text-primary-foreground/75 hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/60">Company</h3>
          <ul className="space-y-2">
            {[
              { label: "About", to: "/about/" },
              { label: "Areas", to: "/areas/" },
              { label: "Blog", to: "/blog/" },
              { label: "Contact", to: "/contact/" },
              { label: "Privacy", to: "/privacy-policy/" },
              { label: "Terms", to: "/terms-and-conditions/" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-primary-foreground/75 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/60">Book a visit</h3>
          <p className="text-sm text-primary-foreground/70 mb-4">Same-day service across Vadodara. Talk to a real technician.</p>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-accent text-accent-foreground font-semibold text-sm"
          >
            <Phone className="h-4 w-4" /> {BUSINESS.phone}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-5 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} {BUSINESS.name} · Vadodara, Gujarat
        </div>
      </div>
    </footer>
  );
};

export default Footer;
