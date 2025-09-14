"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { toast } from "react-toastify";
import styles from "../../../admin.module.css";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
  createdAt: string;
}

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id as string;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    published: false,
  });

  useEffect(() => {
    if (blogId) {
      fetchBlog();
    }
  }, [blogId]);

  const fetchBlog = async () => {
    try {
      const response = await fetch(
        `https://serviceswebsite-2.onrender.com/api/blogs/${blogId}`,
        {
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setBlog(data.data);
          setFormData({
            title: data.data.title,
            content: data.data.content,
            published: data.data.published,
          });
        } else {
          toast.error("Failed to fetch blog");
          router.push("/admin/blogs");
        }
      } else {
        toast.error("Blog not found");
        router.push("/admin/blogs");
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
      toast.error("Error fetching blog");
      router.push("/admin/blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch(
        `https://serviceswebsite-2.onrender.com/api/blogs/${blogId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success("Blog updated successfully!");
        router.push("/admin/blogs");
      } else {
        toast.error(data.error || "Failed to update blog");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Error updating blog");
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className={styles.container}>
        <h1>Blog not found</h1>
        <button onClick={() => router.push("/admin/blogs")}>
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <h1 className={styles.formTitle}>Edit Blog</h1>
        <button
          onClick={() => router.push("/admin/blogs")}
          className={styles.backBtn}
        >
          ← Back to Blogs
        </button>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            disabled={saving}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            required
            disabled={saving}
            rows={15}
            className={styles.textarea}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="published"
              checked={formData.published}
              onChange={handleInputChange}
              disabled={saving}
              className={styles.checkbox}
            />
            <span>Published</span>
          </label>
        </div>

        <div className={styles.formActions}>
          <button
            type="button"
            onClick={() => router.push("/admin/blogs")}
            className={`${styles.btn} ${styles.btnSecondary}`}
            disabled={saving}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`${styles.btn} ${styles.btnPrimary}`}
            disabled={saving}
          >
            {saving ? "Saving..." : "Update Blog"}
          </button>
        </div>
      </form>
    </div>
  );
}
