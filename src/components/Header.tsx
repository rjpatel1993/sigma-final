import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/data/business";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services/" },
  { label: "Areas", to: "/areas/" },
  { label: "About", to: "/about/" },
  { label: "Blog", to: "/blog/" },
  { label: "Contact", to: "/contact/" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
      {/* Slim trust strip */}
      <div className="hidden md:block bg-primary text-primary-foreground/90 text-[12px]">
        <div className="container-wide flex items-center justify-between py-1.5">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3" />
            <span>Serving all of Vadodara · Open 24/7</span>
          </div>
          <a href={`tel:${BUSINESS.phoneRaw}`} className="font-medium hover:underline underline-offset-4">
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      <nav className="container-wide flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="h-9 w-9 rounded-lg bg-primary text-primary-foreground grid place-items-center font-bold">S</div>
          <div className="leading-tight">
            <div className="font-display font-bold text-[15px]">Sigma Aircons</div>
            <div className="text-[11px] text-muted-foreground -mt-0.5">Vadodara · 24/7</div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                pathname === l.to ? "text-accent" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href={`tel:${BUSINESS.phoneRaw}`}>
              <Phone className="h-4 w-4 mr-1.5" /> Call Now
            </a>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-2 rounded-md hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-wide py-3 flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2.5 px-2 rounded-md ${
                  pathname === l.to ? "text-accent bg-secondary" : "text-foreground/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
