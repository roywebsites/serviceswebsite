import { use } from "react";
import Link from "next/link";
import Header from "../../../../../components/Header";
import Footer from "../../../../../components/Footer";
import styles from "../../../admin.module.css";

export const dynamic = "force-static";

interface Testimonial {
  _id: string;
  name: string;
  position: string;
  content: string;
  rating: number;
  published: boolean;
  featured: boolean;
  createdAt: string;
}

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getTestimonial(id: string) {
  const response = await fetch(
    `https://serviceswebsite-2.onrender.com/api/testimonials/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch testimonial");
  }
  const data = await response.json();
  return data.data;
}

export default async function EditTestimonialPage({ params }: PageProps) {
  const { id } = await params;
  const testimonial = await getTestimonial(id);

  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <h1>Edit Legal Template</h1>
      </div>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Template Name</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={testimonial.name}
            required
            className={styles.input}
            placeholder="e.g., Employment Contract Template"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="position">Category</label>
          <input
            type="text"
            id="position"
            name="position"
            defaultValue={testimonial.position}
            required
            className={styles.input}
            placeholder="e.g., Employment Law, Corporate Law, etc."
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="content">Template Description</label>
          <textarea
            id="content"
            name="content"
            defaultValue={testimonial.content}
            required
            className={styles.textarea}
            rows={5}
            placeholder="Describe what this template includes and its benefits..."
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="rating">Quality Rating (1-5)</label>
          <select
            id="rating"
            name="rating"
            defaultValue={testimonial.rating}
            required
            className={styles.input}
          >
            <option value={1}>1 Star - Basic</option>
            <option value={2}>2 Stars - Good</option>
            <option value={3}>3 Stars - Very Good</option>
            <option value={4}>4 Stars - Excellent</option>
            <option value={5}>5 Stars - Premium</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="published"
              defaultChecked={testimonial.published}
              className={styles.checkbox}
            />
            Published
          </label>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="featured"
              defaultChecked={testimonial.featured}
              className={styles.checkbox}
            />
            Featured template
          </label>
        </div>

        <div className={styles.formActions}>
          <Link
            href="/admin/testimonials"
            className={`${styles.button} ${styles.secondaryButton}`}
          >
            Cancel
          </Link>
          <button
            type="submit"
            className={`${styles.button} ${styles.primaryButton}`}
          >
            Update Template
          </button>
        </div>
      </form>
    </div>
  );
}
