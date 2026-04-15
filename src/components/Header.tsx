import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/data/business";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services/" },
  { label: "Areas", to: "/areas/" },
  { label: "Blog", to: "/blog/" },
  { label: "About", to: "/about/" },
  { label: "Contact", to: "/contact/" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-wide flex items-center justify-between py-2 text-sm">
          <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Phone className="h-3.5 w-3.5" />
            <span>{BUSINESS.phone}</span>
          </a>
          <div className="hidden sm:flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            <span className="truncate max-w-xs">Vadodara, Gujarat</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-secondary/95 backdrop-blur-md border-b border-border">
        <div className="container-wide flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">S</div>
            <span className="text-lg font-bold text-secondary-foreground">Sigma Aircons</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href={`tel:${BUSINESS.phoneRaw}`}>
                <Phone className="h-4 w-4 mr-1" /> Call Now
              </a>
            </Button>
            <button
              className="lg:hidden text-secondary-foreground p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-secondary">
            <div className="container-wide py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors hover:text-primary ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="sm" className="mt-2">
                <a href={`tel:${BUSINESS.phoneRaw}`}>
                  <Phone className="h-4 w-4 mr-1" /> Call Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
