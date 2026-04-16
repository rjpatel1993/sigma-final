import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS } from "@/data/blogs";

const Blog = () => {
  return (
    <Layout>
      <SEOHead
        title="AC Tips & Blog — Sigma Aircons Vadodara"
        description="Read expert tips on AC maintenance, choosing the right AC, and saving electricity. Helpful guides from Sigma Aircons, Vadodara."
        canonical="/blog/"
        schemas={[{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://sigmaaircons.in/" },
            { "@type": "ListItem", position: 2, name: "Blog" },
          ],
        }]}
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog" }]} />
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">AC Tips & Guides</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-10">Expert advice on AC maintenance, buying guides, and energy-saving tips for Vadodara residents.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}/`} className="group">
                <Card className="bg-card border-border/60 hover:border-primary/40 transition-all duration-300 h-full group-hover:shadow-lg group-hover:shadow-primary/5">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
