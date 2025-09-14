import express from "express";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin";
import { verifyAuth, requireAuth, AuthRequest } from "../middleware/auth";

const router = express.Router();

// Login endpoint
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: "Email and password are required",
      });
    }

    // Find admin user
    console.log("Login attempt for email:", email);
    const admin = await Admin.findOne({ email: email.toLowerCase() });
    if (!admin) {
      console.log("No admin found with email:", email);
      return res.status(401).json({
        success: false,
        error: "Invalid credentials",
      });
    }
    console.log("Admin found:", { email: admin.email, name: admin.name });

    // Check password
    console.log("Checking password...");
    const isPasswordValid = await admin.comparePassword(password);
    if (!isPasswordValid) {
      console.log("Invalid password");
      return res.status(401).json({
        success: false,
        error: "Invalid credentials",
      });
    }
    console.log("Password valid, generating token...");

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: admin._id,
        email: admin.email,
        role: admin.role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    // Set HTTP-only cookie
    res.cookie("admin-token", token, {
      httpOnly: true,
      secure: false, // Set to false for now to test
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    });

    res.json({
      success: true,
      data: {
        user: {
          id: admin._id,
          email: admin.email,
          name: admin.name,
          role: admin.role,
        },
      },
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

// Get current user endpoint
router.get("/me", (req: AuthRequest, res) => {
  try {
    const user = verifyAuth(req);

    if (!user) {
      return res.status(401).json({
        success: false,
        error: "Unauthorized",
      });
    }

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Auth check error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

// Logout endpoint
router.post("/logout", (req, res) => {
  try {
    // Clear the admin token cookie
    res.cookie("admin-token", "", {
      httpOnly: true,
      secure: false, // Set to false for now to test
      sameSite: "lax",
      maxAge: 0,
    });

    res.json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

export default router;
