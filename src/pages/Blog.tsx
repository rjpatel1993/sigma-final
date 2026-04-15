import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
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
      <section className="py-12 bg-secondary">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog" }]} />
          <h1 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">AC Tips & Guides</h1>
          <p className="text-muted-foreground max-w-2xl mb-10">Expert advice on AC maintenance, buying guides, and energy-saving tips for Vadodara residents.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}/`}>
                <Card className="bg-muted hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold text-secondary-foreground mb-2">{post.title}</h2>
                    <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
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
