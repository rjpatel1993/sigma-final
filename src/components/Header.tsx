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
      <div className="gradient-primary">
        <div className="container-wide flex items-center justify-between py-2 text-sm text-white">
          <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Phone className="h-3.5 w-3.5" />
            <span className="font-medium">{BUSINESS.phone}</span>
          </a>
          <div className="hidden sm:flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            <span className="truncate max-w-xs">Vadodara, Gujarat</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container-wide flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
            <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-md shadow-primary/20">S</div>
            <span className="text-lg font-bold">Sigma Aircons</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === link.to
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-card"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="hidden sm:inline-flex shadow-md shadow-primary/20">
              <a href={`tel:${BUSINESS.phoneRaw}`}>
                <Phone className="h-4 w-4 mr-1" /> Call Now
              </a>
            </Button>
            <button
              className="lg:hidden text-foreground p-2 rounded-lg hover:bg-card transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="container-wide py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                    location.pathname === link.to
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-card"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="sm" className="mt-3">
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
