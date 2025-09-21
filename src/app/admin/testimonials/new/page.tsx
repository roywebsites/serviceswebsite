"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import styles from "../../admin.module.css";

export default function NewTestimonialPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    content: "",
    rating: 5,
    published: false,
    featured: false,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://serviceswebsite-2.onrender.com/api/testimonials",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Testimonial created successfully");
        router.push("/admin/testimonials");
      } else {
        toast.error(data.message || "Failed to create testimonial");
      }
    } catch (error) {
      console.error("Error creating testimonial:", error);
      toast.error("Error creating testimonial");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : type === "select-one"
          ? parseInt(value)
          : value,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <h1>New Legal Template</h1>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Template Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            value={formData.position}
            onChange={handleChange}
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
            value={formData.content}
            onChange={handleChange}
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
            value={formData.rating}
            onChange={handleChange}
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
              checked={formData.published}
              onChange={handleChange}
              className={styles.checkbox}
            />
            Publish immediately
          </label>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className={styles.checkbox}
            />
            Featured template
          </label>
        </div>

        <div className={styles.formActions}>
          <button
            type="button"
            onClick={() => router.back()}
            className={`${styles.button} ${styles.secondaryButton}`}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`${styles.button} ${styles.primaryButton}`}
          >
            {loading ? "Creating..." : "Create Template"}
          </button>
        </div>
      </form>
    </div>
  );
}
