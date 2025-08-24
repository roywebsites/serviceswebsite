// API Configuration
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// Helper function to build API URLs
export const buildApiUrl = (path: string) =>
  `${API_URL}${path.startsWith("/") ? path : `/${path}`}`;

// Auth endpoints
export const AUTH_ENDPOINTS = {
  LOGIN: () => buildApiUrl("/api/auth/login"),
  LOGOUT: () => buildApiUrl("/api/auth/logout"),
  ME: () => buildApiUrl("/api/auth/me"),
};

// Blog endpoints
export const BLOG_ENDPOINTS = {
  LIST: () => buildApiUrl("/api/blogs"),
  DETAIL: (id: string) => buildApiUrl(`/api/blogs/${id}`),
  CREATE: () => buildApiUrl("/api/blogs"),
  UPDATE: (id: string) => buildApiUrl(`/api/blogs/${id}`),
  DELETE: (id: string) => buildApiUrl(`/api/blogs/${id}`),
};

// Testimonial endpoints
export const TESTIMONIAL_ENDPOINTS = {
  LIST: () => buildApiUrl("/api/testimonials"),
  DETAIL: (id: string) => buildApiUrl(`/api/testimonials/${id}`),
  CREATE: () => buildApiUrl("/api/testimonials"),
  UPDATE: (id: string) => buildApiUrl(`/api/testimonials/${id}`),
  DELETE: (id: string) => buildApiUrl(`/api/testimonials/${id}`),
};
