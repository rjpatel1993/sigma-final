import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/data/testimonials";
import { BUSINESS } from "@/data/business";

interface Props {
  heading?: string;
  subheading?: string;
  className?: string;
}

const AVATAR_BG = ["bg-[#1E40AF]", "bg-[#0B1E3F]", "bg-[#2563EB]", "bg-[#0E7490]", "bg-[#7C3AED]", "bg-[#0F766E]"];

const ReviewsSection = ({
  heading = "Real reviews from Vadodara customers",
  subheading = "We earn every star. No paid reviews, no fake ratings.",
  className = "",
}: Props) => {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container-wide">
        <div className="grid md:grid-cols-12 gap-8 mb-10 items-end">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="flex gap-0.5 text-amber-500">
                {Array(5).fill(null).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">5.0 on Google</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-3 text-balance">{heading}</h2>
            <p className="text-muted-foreground text-[15px] max-w-xl">{subheading}</p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <Button asChild variant="outline" className="border-border">
              <a href={BUSINESS.googleReviewLink} target="_blank" rel="noopener noreferrer">
                See all Google reviews <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <article key={i} className="bg-background rounded-2xl border border-border p-6 hover:shadow-ring transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className={`h-10 w-10 rounded-full ${AVATAR_BG[i % AVATAR_BG.length]} text-white grid place-items-center font-semibold text-sm`}>
                  {t.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold truncate">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.timeAgo}</p>
                </div>
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-label="Google">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="flex gap-0.5 text-amber-500 mb-3">
                {Array(t.rating).fill(null).map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <p className="text-[14.5px] text-foreground/80 leading-relaxed">"{t.text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
