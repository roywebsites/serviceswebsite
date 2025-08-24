"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./admin.module.css";
import { AUTH_ENDPOINTS } from "@/config/api";

interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  const checkAuth = useCallback(async () => {
    try {
      const response = await fetch(AUTH_ENDPOINTS.ME(), {
        // Add cache control to prevent unnecessary requests
        cache: "no-cache",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        // 401 is expected when not logged in - this is normal behavior
        // Only log non-401 errors as they indicate actual problems
        if (response.status !== 401) {
          console.error(
            "Unexpected auth error:",
            response.status,
            response.statusText
          );
        }
        // Redirect to login (this is the expected flow for unauthenticated users)
        router.replace("/admin/login");
      }
    } catch (error) {
      // Only log actual network or parsing errors
      console.error("Auth check network error:", error);
      router.replace("/admin/login");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    // Don't check auth on login page
    if (!isLoginPage) {
      checkAuth();
    }
  }, [isLoginPage, checkAuth]);

  const handleLogout = async () => {
    try {
      await fetch(AUTH_ENDPOINTS.LOGOUT(), {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      router.push("/admin/login");
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed");
    }
  };

  // Show loading state only if we're not on the login page
  if (loading && !isLoginPage) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading...</p>
      </div>
    );
  }

  // If we're on the login page, just render the login form
  if (isLoginPage) {
    return <>{children}</>;
  }

  // If we're not on the login page and not authenticated, the useEffect will handle redirect
  if (!user) {
    return null;
  }

  // If we're authenticated, render the admin layout
  return (
    <div className={styles.adminLayout}>
      <nav className={styles.sidebar}>
        <div className={styles.logo}>
          <h2>Admin Panel</h2>
        </div>

        <div className={styles.nav}>
          <Link href="/admin" className={styles.navItem}>
            <span>📊</span> Dashboard
          </Link>
          <Link href="/admin/blogs" className={styles.navItem}>
            <span>📝</span> Blogs
          </Link>
          <Link href="/admin/testimonials" className={styles.navItem}>
            <span>💬</span> Testimonials
          </Link>
        </div>

        <div className={styles.userInfo}>
          <div className={styles.userDetails}>
            <p className={styles.userName}>{user.name}</p>
            <p className={styles.userEmail}>{user.email}</p>
          </div>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </nav>

      <main className={styles.content}>{children}</main>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
