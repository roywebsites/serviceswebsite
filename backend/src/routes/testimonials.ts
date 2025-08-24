import express from "express";
import Testimonial from "../models/Testimonial";
import { requireAuth, AuthRequest } from "../middleware/auth";

const router = express.Router();

// GET /api/testimonials - Get all testimonials (public endpoint)
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const published = req.query.published as string;
    const featured = req.query.featured as string;

    const skip = (page - 1) * limit;

    // Build query
    const query: any = {};

    if (published !== undefined) {
      query.published = published === "true";
    }

    if (featured !== undefined) {
      query.featured = featured === "true";
    }

    // Get testimonials with pagination
    const testimonials = await Testimonial.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("-__v");

    const total = await Testimonial.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    res.json({
      success: true,
      data: testimonials,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error("Get testimonials error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

// POST /api/testimonials - Create new testimonial (admin only)
router.post("/", requireAuth, async (req: AuthRequest, res) => {
  try {
    const testimonialData = req.body;

    const testimonial = new Testimonial(testimonialData);
    await testimonial.save();

    res.json({
      success: true,
      data: testimonial,
      message: "Testimonial created successfully",
    });
  } catch (error) {
    console.error("Create testimonial error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

// GET /api/testimonials/:id - Get single testimonial
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const testimonial = await Testimonial.findById(id).select("-__v");

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        error: "Testimonial not found",
      });
    }

    res.json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    console.error("Get testimonial error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

// PUT /api/testimonials/:id - Update testimonial (admin only)
router.put("/:id", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const testimonial = await Testimonial.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).select("-__v");

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        error: "Testimonial not found",
      });
    }

    res.json({
      success: true,
      data: testimonial,
      message: "Testimonial updated successfully",
    });
  } catch (error) {
    console.error("Update testimonial error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

// DELETE /api/testimonials/:id - Delete testimonial (admin only)
router.delete("/:id", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;

    const testimonial = await Testimonial.findByIdAndDelete(id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        error: "Testimonial not found",
      });
    }

    res.json({
      success: true,
      message: "Testimonial deleted successfully",
    });
  } catch (error) {
    console.error("Delete testimonial error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

export default router;




