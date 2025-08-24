import mongoose, { Document, Schema } from "mongoose";

export interface Testimonial {
  name: string;
  company?: string;
  position?: string;
  content: string;
  rating: number;
  imageUrl?: string;
  published: boolean;
  featured: boolean;
}

export interface TestimonialDocument extends Testimonial, Document {}

const TestimonialSchema = new Schema<TestimonialDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    position: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      maxlength: 500,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      default: 5,
    },
    imageUrl: {
      type: String,
      trim: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes
TestimonialSchema.index({ published: 1, createdAt: -1 });
TestimonialSchema.index({ featured: 1 });

const Testimonial =
  mongoose.models.Testimonial ||
  mongoose.model<TestimonialDocument>("Testimonial", TestimonialSchema);

export default Testimonial;
