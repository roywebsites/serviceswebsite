"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import styles from "../../admin.module.css";

export default function NewBlogPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    published: false,
    tags: [] as string[],
    imageUrl: "",
    featured: false,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://serviceswebsite-2.onrender.com/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Blog created successfully");
        router.push("/admin/blogs");
      } else {
        toast.error(data.message || "Failed to create blog");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      toast.error("Error creating blog");
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
        <h1>New Blog Post</h1>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            className={styles.textarea}
            rows={10}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="imageUrl">Image URL (optional)</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className={styles.input}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="tags">Tags (comma-separated)</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags.join(", ")}
            onChange={(e) => {
              const tagsArray = e.target.value
                .split(",")
                .map((tag) => tag.trim())
                .filter((tag) => tag !== "");
              setFormData((prev) => ({ ...prev, tags: tagsArray }));
            }}
            className={styles.input}
            placeholder="law, business, corporate"
          />
        </div>

        <div className={styles.formGroup}>
          <div className={styles.checkboxGroup}>
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

            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className={styles.checkbox}
              />
              Featured post
            </label>
          </div>
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
            {loading ? "Creating..." : "Create Blog"}
          </button>
        </div>
      </form>
    </div>
  );
}
