import { use } from "react";
import Link from "next/link";
import Header from "../../../../../components/Header";
import Footer from "../../../../../components/Footer";
import styles from "../../../admin.module.css";

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
        <h1>Edit Testimonial</h1>
      </div>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={testimonial.name}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="position">Role/Position</label>
          <input
            type="text"
            id="position"
            name="position"
            defaultValue={testimonial.position}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="content">Testimonial Content</label>
          <textarea
            id="content"
            name="content"
            defaultValue={testimonial.content}
            required
            className={styles.textarea}
            rows={5}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="rating">Rating (1-5)</label>
          <select
            id="rating"
            name="rating"
            defaultValue={testimonial.rating}
            required
            className={styles.input}
          >
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
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
            Featured testimonial
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
            Update Testimonial
          </button>
        </div>
      </form>
    </div>
  );
}
