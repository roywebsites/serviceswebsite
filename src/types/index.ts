// Blog post interface
export interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  published: boolean;
  featured: boolean;
  imageUrl?: string;
}

// Testimonial interface
export interface Testimonial {
  _id?: string;
  name: string;
  company?: string;
  position?: string;
  content: string;
  rating: number;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  featured: boolean;
}

// Admin user interface
export interface AdminUser {
  _id?: string;
  email: string;
  password: string;
  name: string;
  role: "admin" | "super_admin";
  createdAt: Date;
  updatedAt: Date;
}

// API Response interfaces
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
