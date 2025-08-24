"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import styles from "../admin.module.css";

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  content: string;
  published: boolean;
  createdAt: string;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch("https://serviceswebsite-1-xi2g.onrender.com/api/testimonials", {
        credentials: "include",
      });
      const data = await response.json();

      if (data.success) {
        setTestimonials(data.data);
      } else {
        toast.error("Failed to fetch testimonials");
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      toast.error("Error fetching testimonials");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?")) {
      return;
    }

    try {
      const response = await fetch(
        `https://serviceswebsite-1-xi2g.onrender.com/api/testimonials/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (response.ok) {
        toast.success("Testimonial deleted successfully");
        fetchTestimonials();
      } else {
        toast.error("Failed to delete testimonial");
      }
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      toast.error("Error deleting testimonial");
    }
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.tableHeader}>
        <h1 className={styles.tableTitle}>Testimonials</h1>
        <Link href="/admin/testimonials/new" className={styles.addBtn}>
          ➕ New Testimonial
        </Link>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map((testimonial) => (
              <tr key={testimonial._id}>
                <td>{testimonial.name}</td>
                <td>{testimonial.role}</td>
                <td>
                  <span
                    className={`${styles.badge} ${
                      testimonial.published
                        ? styles.badgePublished
                        : styles.badgeDraft
                    }`}
                  >
                    {testimonial.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td>{new Date(testimonial.createdAt).toLocaleDateString()}</td>
                <td>
                  <Link
                    href={`/admin/testimonials/edit/${testimonial._id}`}
                    className={`${styles.actionBtn} ${styles.editBtn}`}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(testimonial._id)}
                    className={`${styles.actionBtn} ${styles.deleteBtn}`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
