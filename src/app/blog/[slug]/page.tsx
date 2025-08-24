import { use } from "react";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styles from "./page.module.css";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  tags: string[];
  published: boolean;
  featured: boolean;
  imageUrl?: string;
  createdAt: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getBlogPost(slug: string) {
  const response = await fetch(`https://serviceswebsite-1-xi2g.onrender.com/api/blogs/${slug}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch blog post");
  }
  const data = await response.json();
  return data.data;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  // Calculate read time based on content length (average reading speed: 200 words per minute)
  const calculateReadTime = (content: string) => {
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  return (
    <div>
      <Header />

      <main>
        <article className={styles.article}>
          <div className="container">
            {/* Article Header */}
            <header className={styles.articleHeader}>
              <div className={styles.breadcrumb}>
                <Link href="/blog">Blog</Link>
                <span>›</span>
                <span>{post.tags[0] || "Legal Insights"}</span>
              </div>

              <h1 className={styles.title}>{post.title}</h1>

              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <span className={styles.label}>By</span>
                  <span className={styles.value}>{post.author}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.label}>Published</span>
                  <span className={styles.value}>
                    {new Date(
                      post.publishedAt || post.createdAt
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.value}>
                    {calculateReadTime(post.content)}
                  </span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className={styles.content}>
              <div
                className={styles.articleContent}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Author Bio */}
            <aside className={styles.authorBio}>
              <div className={styles.authorInfo}>
                <div className={styles.authorImage}>
                  <div className={styles.imagePlaceholder}>
                    <span>Legal Team</span>
                  </div>
                </div>
                <div className={styles.authorText}>
                  <h3>About the Author</h3>
                  <p>
                    Our legal team consists of practicing lawyers in Lebanon
                    specializing in corporate law, real estate law, family law,
                    and criminal defense. With years of experience in Lebanese
                    legal practice, we provide expert guidance to individuals
                    and businesses navigating complex legal matters.
                  </p>
                  <Link href="/about" className="btn btn-outline">
                    Learn More About Our Team
                  </Link>
                </div>
              </div>
            </aside>

            {/* Social Sharing */}
            <div className={styles.socialSharing}>
              <h4>Share this article</h4>
              <div className={styles.shareButtons}>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    post.title
                  )}&url=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shareButton}
                >
                  Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shareButton}
                >
                  Facebook
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shareButton}
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Legal Disclaimer */}
            <div className={styles.disclaimer}>
              <h4>Legal Disclaimer</h4>
              <p>
                This article is for informational purposes only and does not
                constitute legal advice. Each legal situation is unique, and
                readers should consult with a qualified attorney for specific
                legal guidance related to their circumstances.
              </p>
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2>Need Legal Assistance?</h2>
              <p>
                If you have questions about the topics discussed in this article
                or need legal representation, I&apos;m here to help.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Schedule Consultation
                </Link>
                <Link href="/blog" className="btn btn-outline btn-lg">
                  Read More Articles
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
