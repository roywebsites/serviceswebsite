"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(
        "https://serviceswebsite-2.onrender.com/api/blogs?published=true"
      );
      const data = await response.json();

      if (data.success) {
        setBlogPosts(data.data);
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate read time based on content length (average reading speed: 200 words per minute)
  const calculateReadTime = (content: string) => {
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  // Get primary tag for category display
  const getPrimaryTag = (tags: string[]) => {
    return tags && tags.length > 0 ? tags[0] : "Legal Insights";
  };

  return (
    <div>
      <Header />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1>Legal Blog</h1>
              <p>Insights, updates, and expert advice on Lebanese law</p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className={styles.blogPosts}>
          <div className="container">
            {loading ? (
              <div className={styles.loading}>Loading blog posts...</div>
            ) : blogPosts.length === 0 ? (
              <div className={styles.noPosts}>
                <p>No blog posts available at the moment.</p>
              </div>
            ) : (
              <div className={styles.postsGrid}>
                {blogPosts.map((post) => (
                  <article key={post._id} className={styles.postCard}>
                    <div className={styles.postImage}>
                      {post.imageUrl ? (
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          width={400}
                          height={250}
                          className={styles.postImageContent}
                          style={{ objectFit: 'cover' }}
                        />
                      ) : (
                        <div className={styles.imagePlaceholder}>
                          <span>Legal Insights</span>
                        </div>
                      )}
                      <div className={styles.postCategory}>
                        {getPrimaryTag(post.tags)}
                      </div>
                    </div>

                    <div className={styles.postContent}>
                      <div className={styles.postMeta}>
                        <span className={styles.postDate}>
                          {new Date(
                            post.publishedAt || post.createdAt
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span className={styles.readTime}>
                          {calculateReadTime(post.content)}
                        </span>
                      </div>

                      <h2 className={styles.postTitle}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className={styles.postExcerpt}>{post.excerpt}</p>

                      <Link
                        href={`/blog/${post.slug}`}
                        className={styles.readMore}
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className={styles.newsletter}>
          <div className="container">
            <div className={styles.newsletterContent}>
              <h2>Stay Updated with Legal Insights</h2>
              <p>
                Subscribe to receive the latest legal updates, insights, and
                expert advice directly in your inbox.
              </p>
              <form className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={styles.emailInput}
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className={styles.disclaimer}>
          <div className="container">
            <div className={styles.disclaimerContent}>
              <h3>Legal Disclaimer</h3>
              <p>
                The information provided in these blog posts is for general
                informational purposes only and does not constitute legal
                advice. Each legal situation is unique, and readers should
                consult with a qualified attorney for specific legal guidance
                related to their circumstances.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
