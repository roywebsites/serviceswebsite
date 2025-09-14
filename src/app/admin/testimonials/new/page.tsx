"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import styles from "../../admin.module.css";

export default function NewTestimonialPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    content: "",
    published: false,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://serviceswebsite-2.onrender.com/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <h1>New Testimonial</h1>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="role">Role/Position</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="content">Testimonial Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            className={styles.textarea}
            rows={5}
          />
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
            {loading ? "Creating..." : "Create Testimonial"}
          </button>
        </div>
      </form>
    </div>
  );
}
