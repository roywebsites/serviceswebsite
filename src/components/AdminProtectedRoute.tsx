"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";

interface AdminProtectedRouteProps {
  children: React.ReactNode;
}

export default function AdminProtectedRoute({
  children,
}: AdminProtectedRouteProps) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Don't redirect if we're already on the login page or still loading
    if (loading || pathname === "/admin/login") {
      return;
    }

    // Redirect to login if not authenticated
    if (!user) {
      router.replace("/admin/login");
    }
  }, [user, loading, router, pathname]);

  // Show loading state
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "18px",
        }}
      >
        <div>
          <div style={{ marginBottom: "10px" }}>🔄</div>
          Checking authentication...
        </div>
      </div>
    );
  }

  // If on login page, always show children
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  // If not authenticated and not on login page, don't render anything
  // (useEffect will handle redirect)
  if (!user) {
    return null;
  }

  // User is authenticated, show the protected content
  return <>{children}</>;
}

