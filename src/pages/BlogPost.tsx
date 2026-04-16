import { useParams, Navigate } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getBlogBySlug } from "@/data/blogs";
import { BUSINESS } from "@/data/business";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogBySlug(slug || "");
  if (!post) return <Navigate to="/blog/" replace />;

  return (
    <Layout>
      <SEOHead
        title={`${post.title} — Sigma Aircons`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}/`}
        ogType="article"
        schemas={[{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${BUSINESS.siteUrl}/` },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${BUSINESS.siteUrl}/blog/` },
            { "@type": "ListItem", position: 3, name: post.title },
          ],
        }]}
      />
      <article className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog/" }, { label: post.title }]} />
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-6 border-b border-border/60">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-primary" /> {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> {post.readTime}</span>
          </div>
          <div className="prose prose-invert max-w-none text-muted-foreground [&_h2]:text-foreground [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:mb-4 [&_li]:mb-1 [&_strong]:text-foreground">
            {post.content.split('\n').map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith('## ')) return <h2 key={i}>{trimmed.slice(3)}</h2>;
              if (trimmed.startsWith('- **')) {
                const match = trimmed.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
                if (match) return <p key={i}><strong>{match[1]}</strong>: {match[2]}</p>;
              }
              if (trimmed.startsWith('**') && trimmed.endsWith('**')) return <p key={i}><strong>{trimmed.slice(2, -2)}</strong></p>;
              return <p key={i}>{trimmed}</p>;
            })}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
