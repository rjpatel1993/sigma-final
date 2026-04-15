import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/data/business";
import { SERVICES } from "@/data/services";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & NAP */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">S</div>
              <span className="text-lg font-bold text-secondary-foreground">{BUSINESS.name}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Professional AC repair, service, and installation in Vadodara. Available 24/7 for all your air conditioning needs.</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-start gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" /> {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" /> {BUSINESS.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" /> {BUSINESS.address}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/service/${s.slug}/`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about/" },
                { label: "Contact", to: "/contact/" },
                { label: "Blog", to: "/blog/" },
                { label: "Service Areas", to: "/areas/" },
                { label: "Privacy Policy", to: "/privacy-policy/" },
                { label: "Terms & Conditions", to: "/terms-and-conditions/" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Business Hours</h3>
            <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
              <Clock className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-secondary-foreground">Open 24 Hours</p>
                <p>Monday – Sunday</p>
                <p>Including Holidays</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Emergency AC repair available round the clock across Vadodara.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-wide py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
