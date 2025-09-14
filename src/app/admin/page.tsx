"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./admin.module.css";

interface Stats {
  totalBlogs: number;
  publishedBlogs: number;
  draftBlogs: number;
  totalTestimonials: number;
  publishedTestimonials: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
    totalTestimonials: 0,
    publishedTestimonials: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [blogsResponse, testimonialsResponse] = await Promise.all([
        fetch("https://serviceswebsite-2.onrender.com/api/blogs"),
        fetch("https://serviceswebsite-2.onrender.com/api/testimonials"),
      ]);

      const blogsData = await blogsResponse.json();
      const testimonialsData = await testimonialsResponse.json();

      if (blogsData.success && testimonialsData.success) {
        const publishedBlogs = blogsData.data.filter(
          (blog: any) => blog.published
        ).length;
        const publishedTestimonials = testimonialsData.data.filter(
          (testimonial: any) => testimonial.published
        ).length;

        setStats({
          totalBlogs: blogsData.data.length,
          publishedBlogs,
          draftBlogs: blogsData.data.length - publishedBlogs,
          totalTestimonials: testimonialsData.data.length,
          publishedTestimonials,
        });
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.dashboardTitle}>Dashboard</h1>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statTitle}>Total Blogs</div>
          <div className={styles.statValue}>{stats.totalBlogs}</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statTitle}>Published Blogs</div>
          <div className={styles.statValue}>{stats.publishedBlogs}</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statTitle}>Draft Blogs</div>
          <div className={styles.statValue}>{stats.draftBlogs}</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statTitle}>Total Testimonials</div>
          <div className={styles.statValue}>{stats.totalTestimonials}</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statTitle}>Published Testimonials</div>
          <div className={styles.statValue}>{stats.publishedTestimonials}</div>
        </div>
      </div>

      <div className={styles.quickActions}>
        <h2>Quick Actions</h2>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <Link href="/admin/blogs/new" className={styles.addBtn}>
            ➕ New Blog Post
          </Link>
          <Link href="/admin/testimonials/new" className={styles.addBtn}>
            ➕ New Testimonial
          </Link>
        </div>
      </div>
    </div>
  );
}
