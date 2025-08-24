import express from "express";
import Blog from "../models/Blog";
import { requireAuth, AuthRequest } from "../middleware/auth";

const router = express.Router();

// GET /api/blogs - Get all blogs (public endpoint)
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const published = req.query.published as string;
    const featured = req.query.featured as string;
    const search = req.query.search as string;

    const skip = (page - 1) * limit;

    // Build query
    const query: any = {};

    if (published !== undefined) {
      query.published = published === "true";
    }

    if (featured !== undefined) {
      query.featured = featured === "true";
    }

    if (search) {
      query.$text = { $search: search };
    }

    // Get blogs with pagination
    const blogs = await Blog.find(query)
      .sort({ publishedAt: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("-__v");

    const total = await Blog.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    res.json({
      success: true,
      data: blogs,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error("Get blogs error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

// POST /api/blogs - Create new blog (admin only)
router.post("/", requireAuth, async (req: AuthRequest, res) => {
  try {
    const blogData = req.body;

    // Always generate slug from title
    blogData.slug = blogData.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
      .trim() // Remove leading/trailing spaces
      .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens

    // Check if slug already exists
    const existingBlog = await Blog.findOne({ slug: blogData.slug });
    if (existingBlog) {
      return res.status(400).json({
        success: false,
        error: "A blog with this slug already exists",
      });
    }

    const blog = new Blog(blogData);
    await blog.save();

    res.json({
      success: true,
      data: blog,
      message: "Blog created successfully",
    });
  } catch (error) {
    console.error("Create blog error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

// GET /api/blogs/:id - Get single blog
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // Try to find by slug first
    const blog = await Blog.findOne({ slug: id }).select("-__v");

    if (!blog) {
      return res.status(404).json({
        success: false,
        error: "Blog not found",
      });
    }

    res.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("Get blog error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

// PUT /api/blogs/:id - Update blog (admin only)
router.put("/:id", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const blog = await Blog.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).select("-__v");

    if (!blog) {
      return res.status(404).json({
        success: false,
        error: "Blog not found",
      });
    }

    res.json({
      success: true,
      data: blog,
      message: "Blog updated successfully",
    });
  } catch (error) {
    console.error("Update blog error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

// DELETE /api/blogs/:id - Delete blog (admin only)
router.delete("/:id", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        error: "Blog not found",
      });
    }

    res.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Delete blog error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

export default router;
