import mongoose, { Document, Schema } from "mongoose";

export interface BlogPost {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: Date;
  tags: string[];
  published: boolean;
  featured: boolean;
  imageUrl?: string;
}

export interface BlogDocument extends BlogPost, Document {}

const BlogSchema = new Schema<BlogDocument>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      maxlength: 300,
      default: function (this: BlogDocument) {
        // Generate excerpt from content if not provided
        if (this.content) {
          return this.content.substring(0, 297) + "...";
        }
        return "";
      },
    },
    author: {
      type: String,
      required: true,
      default: "Roy Mghames",
    },
    publishedAt: {
      type: Date,
      default: Date.now,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    published: {
      type: Boolean,
      default: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    imageUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create index for better search performance
BlogSchema.index({ title: "text", content: "text", tags: "text" });
// Note: slug index is created automatically by unique: true
BlogSchema.index({ published: 1, publishedAt: -1 });

const Blog =
  mongoose.models.Blog || mongoose.model<BlogDocument>("Blog", BlogSchema);

export default Blog;
