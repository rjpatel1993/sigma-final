import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/data/business";
import { SERVICES } from "@/data/services";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & NAP */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center text-white font-bold shadow-md shadow-primary/20">S</div>
              <span className="text-lg font-bold">{BUSINESS.name}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">Professional AC repair, service, and installation in Vadodara. Available 24/7.</p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-2.5 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 shrink-0 text-primary" /> {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2.5 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate">{BUSINESS.email}</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span className="leading-relaxed">{BUSINESS.address}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-5">Our Services</h3>
            <ul className="space-y-2.5">
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
            <h3 className="font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
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
            <h3 className="font-semibold mb-5">Business Hours</h3>
            <div className="flex items-start gap-2.5 text-sm text-muted-foreground mb-5">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Open 24 Hours</p>
                <p>Monday – Sunday</p>
                <p>Including Holidays</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Emergency AC repair available round the clock across Vadodara.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-wide py-5 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
